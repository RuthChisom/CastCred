// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// Importing standard OpenZeppelin contracts for access control, reentrancy protection, and token interface
import "@openzeppelin/contracts/access/Ownable.sol"; // Adds onlyOwner modifier and ownership management
import "@openzeppelin/contracts/security/ReentrancyGuard.sol"; // Prevents reentrant calls to functions
import "@openzeppelin/contracts/token/ERC20/IERC20.sol"; // Interface for interacting with cUSD ERC20 token

contract GratitudeEconomy is Ownable, ReentrancyGuard {
    IERC20 public cUSD; // ERC20 interface for cUSD token
    uint256 public constant TIP_MIN = 0.1e18; // Minimum tip amount (0.1 cUSD in wei)
    uint256 public constant PLATFORM_FEE_PERCENT = 5; // Platform fee is 5% of each tip
    uint256 public constant DAILY_REWARD_POOL = 10e18; // Daily reward pool of 10 cUSD (in wei)

    address public platformFeeCollector; // Address that receives the platform fee

    // Struct for storing data about a single post
    struct Post {
        address poster; // Address that created the post
        string farcasterHash; // Off-chain Farcaster post identifier
        uint256 timestamp; // When the post was created
        uint256 totalTips; // Total cUSD tips received (after fee)
        uint256 uniqueTippers; // Number of unique users who tipped
        bool rewarded; // Whether the post has already received a daily reward
        mapping(address => bool) tippers; // Tracks if a user has already tipped this post
    }

    mapping(bytes32 => Post) private posts; // Mapping from postHash => Post struct
    bytes32[] public postHashes; // Array of all post hashes (for external access or iteration)

    mapping(address => uint256) public totalEarned; // Tracks how much each user has earned in tips + rewards
    mapping(address => uint256) public totalTipped; // Tracks how much each user has tipped others

    bytes32[] public trendingPosts; // Array of posts that hit 5 unique tippers
    uint256 public lastRewardDay; // The last day (in days since epoch) that rewards were distributed

    // Events for frontend or off-chain tracking
    event GratitudePosted(address indexed user, string farcasterHash, bytes32 postHash);
    event Tipped(address indexed tipper, bytes32 postHash, uint256 amount);
    event RewardDistributed(bytes32 postHash, address to, uint256 amount);

    // Constructor sets cUSD token address and fee collector, and passes msg.sender to Ownable
    constructor(address _cUSD, address _feeCollector) Ownable(msg.sender) {
        cUSD = IERC20(_cUSD); // Set cUSD contract address
        platformFeeCollector = _feeCollector; // Set fee collector
    }

    // Function to post a gratitude message, returns unique postHash
    function postGratitude(string memory _farcasterHash) external returns (bytes32) {
        uint256 timestamp = block.timestamp; // Record current block timestamp
        bytes32 postHash = keccak256(abi.encodePacked(_farcasterHash, msg.sender, timestamp)); // Unique ID

        Post storage p = posts[postHash]; // Create reference to new post slot
        require(p.poster == address(0), "Post already exists"); // Prevent duplicates

        p.poster = msg.sender; // Save poster address
        p.farcasterHash = _farcasterHash; // Save Farcaster hash
        p.timestamp = timestamp; // Save timestamp

        postHashes.push(postHash); // Store post hash for external lookup

        emit GratitudePosted(msg.sender, _farcasterHash, postHash); // Emit event for off-chain tracking
        return postHash; // Return hash so frontend can link it
    }

    // Function to tip a specific post
    function tip(bytes32 postHash, uint256 amount) external nonReentrant {
        require(amount >= TIP_MIN, "Tip must be at least 0.1 cUSD"); // Enforce min tip
        Post storage p = posts[postHash]; // Load post
        require(p.poster != address(0), "Post not found"); // Validate post exists

        uint256 fee = (amount * PLATFORM_FEE_PERCENT) / 100; // Calculate 5% fee
        uint256 tipAmount = amount - fee; // Amount sent to poster

        cUSD.transferFrom(msg.sender, address(this), amount); // Pull full tip from sender
        cUSD.transfer(p.poster, tipAmount); // Send tipAmount to post creator
        cUSD.transfer(platformFeeCollector, fee); // Send platform fee

        if (!p.tippers[msg.sender]) { // If this is a new unique tipper
            p.tippers[msg.sender] = true; // Mark as tipped
            p.uniqueTippers += 1; // Increment unique tip count

            if (p.uniqueTippers == 5) { // If 5 unique tippers hit
                trendingPosts.push(postHash); // Mark post as trending
            }
        }

        p.totalTips += tipAmount; // Track total tipped amount
        totalTipped[msg.sender] += amount; // Track total sent by tipper
        totalEarned[p.poster] += tipAmount; // Track total earned by poster

        emit Tipped(msg.sender, postHash, tipAmount); // Emit tip event
    }

    // Function to distribute daily rewards across trending posts
    function distributeDailyRewards() external onlyOwner nonReentrant {
        uint256 today = block.timestamp / 1 days; // Calculate current day
        require(today > lastRewardDay, "Already rewarded today"); // Only run once per day
        require(trendingPosts.length > 0, "No trending posts"); // Only run if there are trending posts

        uint256 totalTipsAll = 0; // Accumulate total tips

        // Loop over trending posts and sum tips
        for (uint i = 0; i < trendingPosts.length; i++) {
            Post storage p = posts[trendingPosts[i]];
            if (!p.rewarded) {
                totalTipsAll += p.totalTips; // Add only unrewarded posts
            }
        }

        require(totalTipsAll > 0, "No tips to distribute"); // Make sure there's something to divide

        // Loop again to distribute rewards proportionally
        for (uint i = 0; i < trendingPosts.length; i++) {
            Post storage p = posts[trendingPosts[i]];
            if (!p.rewarded) {
                uint256 reward = (p.totalTips * DAILY_REWARD_POOL) / totalTipsAll; // Proportional share
                cUSD.transfer(p.poster, reward); // Transfer reward
                totalEarned[p.poster] += reward; // Track earnings
                p.rewarded = true; // Mark as rewarded

                emit RewardDistributed(trendingPosts[i], p.poster, reward); // Emit event
            }
        }

        delete trendingPosts; // Reset trending list for next day
        lastRewardDay = today; // Update last reward date
    }

    // Admin function to change the fee collector address
    function updateFeeCollector(address _newCollector) external onlyOwner {
        require(_newCollector != address(0), "Invalid address"); // Prevent 0x0 address
        platformFeeCollector = _newCollector; // Update fee recipient
    }

    // Helper function to read post details externally
    function getPost(bytes32 postHash) external view returns (
        address poster,
        string memory farcasterHash,
        uint256 timestamp,
        uint256 totalTips,
        uint256 uniqueTippers,
        bool rewarded
    ) {
        Post storage p = posts[postHash]; // Load post
        return (p.poster, p.farcasterHash, p.timestamp, p.totalTips, p.uniqueTippers, p.rewarded); // Return data
    }
}
