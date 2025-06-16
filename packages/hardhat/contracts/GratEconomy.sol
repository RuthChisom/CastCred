// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

// Import OpenZeppelin contracts
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

/**
 * @title Daily Gratitude Economy
 * @dev A decentralized platform for sharing daily financial gratitude with community tipping
 * @notice Users can post gratitude messages, tip others' posts, and earn rewards for trending content
 */
contract GratitudeEconomy is ReentrancyGuard, Ownable {
    using Counters for Counters.Counter;

    // State variables
    Counters.Counter private _postIds; // Counter for post IDs
    IERC20 public cUSD; // Celo USD stablecoin interface

    // Platform settings (constants)
    uint256 public constant DAILY_REWARD_POOL = 10 * 10**18; // 10 cUSD daily reward pool
    uint256 public constant MIN_TIP_AMOUNT = 0.1 * 10**18; // 0.1 cUSD minimum tip amount
    uint256 public constant TRENDING_THRESHOLD = 5; // Minimum tips needed to become trending
    uint256 public constant PLATFORM_FEE_PERCENT = 5; // 5% platform fee on tips

    // Struct definitions
    struct GratitudePost {
        uint256 id; // Unique post ID
        address author; // Author's wallet address
        string content; // Gratitude message content
        string farcasterHash; // Farcaster cast hash for verification
        uint256 timestamp; // When post was created
        uint256 totalTips; // Total tips received (in cUSD)
        uint256 tipCount; // Number of unique tips received
        bool isActive; // Whether post is active
        bool hasClaimedDailyReward; // Whether daily reward was claimed
    }
    
    struct UserProfile {
        address wallet; // User's wallet address
        string farcasterUsername; // Farcaster username
        uint256 totalEarned; // Total earned from tips and rewards
        uint256 totalTipped; // Total tipped to others
        uint256 postsCount; // Number of posts created
        uint256 lastPostDate; // Last date user posted (in days since epoch)
        bool isVerified; // Whether user is verified
    }
    
    struct DailyStats {
        uint256 date; // Date in days since epoch
        uint256 totalPosts; // Posts created that day
        uint256 totalTips; // Total tips given that day
        uint256 rewardPoolDistributed; // Rewards claimed that day
        uint256[] trendingPosts; // Array of trending post IDs
    }
    
    // Mappings for data storage
    mapping(uint256 => GratitudePost) public posts; // postId => Post
    mapping(address => UserProfile) public users; // userAddress => Profile
    mapping(uint256 => DailyStats) public dailyStats; // date => DailyStats
    mapping(address => mapping(uint256 => bool)) public userDailyPost; // user => date => hasPosted
    mapping(uint256 => mapping(address => uint256)) public postTips; // postId => tipper => amount
    mapping(string => bool) public usedFarcasterHashes; // farcasterHash => isUsed

    // Arrays for tracking all posts and users
    uint256[] public allPostIds;
    address[] public allUsers;
    
    // Events
    event PostCreated(
        uint256 indexed postId,
        address indexed author,
        string content,
        string farcasterHash,
        uint256 timestamp
    );
    
    event TipSent(
        uint256 indexed postId,
        address indexed tipper,
        address indexed recipient,
        uint256 amount,
        uint256 platformFee
    );
    
    event DailyRewardClaimed(
        uint256 indexed postId,
        address indexed author,
        uint256 reward
    );
    
    event UserVerified(address indexed user, string farcasterUsername);
    event PostDeactivated(uint256 indexed postId, address indexed deactivatedBy);
    
    /**
     * @dev Contract constructor
     * @param _cUSDAddress Address of the cUSD token contract
     */
    constructor(address _cUSDAddress) {
        require(_cUSDAddress != address(0), "Invalid cUSD address");
        cUSD = IERC20(_cUSDAddress);
    }
    
    /**
     * @dev Create a new gratitude post
     * @param _content The gratitude message content
     * @param _farcasterHash The Farcaster cast hash for verification
     * @param _farcasterUsername User's Farcaster username
     * @notice Users can only post once per day and must provide unique Farcaster hash
     */
    function createPost(
        string memory _content,
        string memory _farcasterHash,
        string memory _farcasterUsername
    ) external {
        // Input validation
        require(bytes(_content).length > 0, "Content cannot be empty");
        require(bytes(_farcasterHash).length > 0, "Farcaster hash required");
        require(!usedFarcasterHashes[_farcasterHash], "Post already exists");
        require(bytes(_farcasterUsername).length > 0, "Farcaster username required");
        
        uint256 today = getToday();
        require(!userDailyPost[msg.sender][today], "Already posted today");
        
        // Increment and get new post ID
        _postIds.increment();
        uint256 newPostId = _postIds.current();
        
        // Initialize daily stats if not exists
        if (dailyStats[today].date == 0) {
            dailyStats[today] = DailyStats({
                date: today,
                totalPosts: 0,
                totalTips: 0,
                rewardPoolDistributed: 0,
                trendingPosts: new uint256[](0)
            });
        }
        
        // Create new post
        posts[newPostId] = GratitudePost({
            id: newPostId,
            author: msg.sender,
            content: _content,
            farcasterHash: _farcasterHash,
            timestamp: block.timestamp,
            totalTips: 0,
            tipCount: 0,
            isActive: true,
            hasClaimedDailyReward: false
        });
        
        // Create or update user profile
        if (users[msg.sender].wallet == address(0)) {
            users[msg.sender] = UserProfile({
                wallet: msg.sender,
                farcasterUsername: _farcasterUsername,
                totalEarned: 0,
                totalTipped: 0,
                postsCount: 1,
                lastPostDate: today,
                isVerified: true
            });
            allUsers.push(msg.sender);
        } else {
            users[msg.sender].postsCount++;
            users[msg.sender].lastPostDate = today;
            users[msg.sender].farcasterUsername = _farcasterUsername;
        }
        
        // Update daily stats and tracking
        dailyStats[today].totalPosts++;
        usedFarcasterHashes[_farcasterHash] = true;
        userDailyPost[msg.sender][today] = true;
        allPostIds.push(newPostId);
        
        emit PostCreated(newPostId, msg.sender, _content, _farcasterHash, block.timestamp);
    }
    
    /**
     * @dev Tip a gratitude post
     * @param _postId The ID of the post to tip
     * @param _amount The amount to tip (in cUSD)
     * @notice Minimum tip amount is 0.1 cUSD, with 5% platform fee
     */
    function tipPost(uint256 _postId, uint256 _amount) external nonReentrant {
        // Input validation
        require(posts[_postId].isActive, "Post not found or inactive");
        require(_amount >= MIN_TIP_AMOUNT, "Tip amount too low");
        require(posts[_postId].author != msg.sender, "Cannot tip own post");
        
        // Calculate platform fee and net tip amount
        uint256 platformFee = (_amount * PLATFORM_FEE_PERCENT) / 100;
        uint256 tipAmount = _amount - platformFee;
        
        // Transfer tokens (tip to author, fee to owner)
        require(cUSD.transferFrom(msg.sender, posts[_postId].author, tipAmount), "Tip transfer failed");
        require(cUSD.transferFrom(msg.sender, owner(), platformFee), "Fee transfer failed");
        
        // Update post statistics
        posts[_postId].totalTips += tipAmount;
        posts[_postId].tipCount++;
        postTips[_postId][msg.sender] += tipAmount;
        
        // Update user statistics
        users[posts[_postId].author].totalEarned += tipAmount;
        users[msg.sender].totalTipped += _amount;
        
        // Update daily statistics
        uint256 today = getToday();
        dailyStats[today].totalTips += tipAmount;
        
        // Check if post becomes trending
        if (posts[_postId].tipCount >= TRENDING_THRESHOLD) {
            _addToTrending(_postId, today);
        }
        
        emit TipSent(_postId, msg.sender, posts[_postId].author, tipAmount, platformFee);
    }
    
    /**
     * @dev Claim daily reward for trending posts
     * @param _postId The ID of the trending post
     * @notice Can only be claimed after 24 hours and only once per post
     */
    function claimDailyReward(uint256 _postId) external nonReentrant {
        // Input validation
        require(posts[_postId].author == msg.sender, "Not post author");
        require(posts[_postId].isActive, "Post inactive");
        require(!posts[_postId].hasClaimedDailyReward, "Already claimed");
        require(posts[_postId].tipCount >= TRENDING_THRESHOLD, "Not trending");
        
        uint256 postDate = getDateFromTimestamp(posts[_postId].timestamp);
        require(block.timestamp >= postDate + 1 days, "Cannot claim same day");
        
        // Calculate and validate reward
        uint256 reward = calculateDailyReward(_postId, postDate);
        require(reward > 0, "No reward available");
        require(cUSD.balanceOf(address(this)) >= reward, "Insufficient contract balance");
        
        // Update state
        posts[_postId].hasClaimedDailyReward = true;
        users[msg.sender].totalEarned += reward;
        dailyStats[postDate].rewardPoolDistributed += reward;
        
        // Transfer reward
        require(cUSD.transfer(msg.sender, reward), "Reward transfer failed");
        
        emit DailyRewardClaimed(_postId, msg.sender, reward);
    }
    
    /**
     * @dev Calculate daily reward for a trending post
     * @param _postId The post ID to calculate reward for
     * @param _date The date the post was created
     * @return The calculated reward amount
     */
    function calculateDailyReward(uint256 _postId, uint256 _date) public view returns (uint256) {
        // Check if there are trending posts for the date
        if (dailyStats[_date].trendingPosts.length == 0) return 0;
        
        uint256 contractBalance = cUSD.balanceOf(address(this));
        if (contractBalance == 0) return 0;
        
        uint256 postTips = posts[_postId].totalTips;
        uint256 totalTrendingTips = 0;
        
        // Calculate total tips for all trending posts that day
        for (uint256 i = 0; i < dailyStats[_date].trendingPosts.length; i++) {
            uint256 trendingPostId = dailyStats[_date].trendingPosts[i];
            totalTrendingTips += posts[trendingPostId].totalTips;
        }
        
        if (totalTrendingTips == 0) return 0;
        
        // Calculate proportional reward (capped at contract balance)
        uint256 calculatedReward = (DAILY_REWARD_POOL * postTips) / totalTrendingTips;
        return calculatedReward > contractBalance ? contractBalance : calculatedReward;
    }
    
    /**
     * @dev Deactivate a post (owner only)
     * @param _postId The post ID to deactivate
     */
    function deactivatePost(uint256 _postId) external onlyOwner {
        require(posts[_postId].isActive, "Post already inactive");
        posts[_postId].isActive = false;
        emit PostDeactivated(_postId, msg.sender);
    }
    
    /**
     * @dev Fund the contract with cUSD for daily rewards
     * @param _amount The amount of cUSD to fund
     */
    function fundContract(uint256 _amount) external {
        require(_amount > 0, "Amount must be positive");
        require(cUSD.transferFrom(msg.sender, address(this), _amount), "Funding failed");
    }
    
    /**
     * @dev Emergency withdraw (owner only)
     * @param _amount The amount of cUSD to withdraw
     */
    function emergencyWithdraw(uint256 _amount) external onlyOwner {
        require(_amount > 0, "Amount must be positive");
        require(cUSD.transfer(owner(), _amount), "Withdrawal failed");
    }
    
    // ============ Internal Functions ============
    
    /**
     * @dev Add post to trending list for the day
     * @param _postId The post ID to add
     * @param _date The date to add it to
     */
    function _addToTrending(uint256 _postId, uint256 _date) internal {
        // Check if already trending
        for (uint256 i = 0; i < dailyStats[_date].trendingPosts.length; i++) {
            if (dailyStats[_date].trendingPosts[i] == _postId) {
                return; // Already trending
            }
        }
        dailyStats[_date].trendingPosts.push(_postId);
    }
    
    /**
     * @dev Get today's date in days since epoch
     * @return Today's date as uint256
     */
    function getToday() internal view returns (uint256) {
        return block.timestamp / 1 days;
    }
    
    /**
     * @dev Convert timestamp to date (days since epoch)
     * @param _timestamp The timestamp to convert
     * @return The date as uint256
     */
    function getDateFromTimestamp(uint256 _timestamp) internal pure returns (uint256) {
        return _timestamp / 1 days;
    }
    
    // ============ View Functions ============
    
    /**
     * @dev Get trending posts for a specific date
     * @param _date The date to check
     * @return Array of trending post IDs
     */
    function getTrendingPosts(uint256 _date) external view returns (uint256[] memory) {
        return dailyStats[_date].trendingPosts;
    }
    
    /**
     * @dev Get all posts by a user
     * @param _user The user's address
     * @return Array of post IDs
     */
    function getUserPosts(address _user) external view returns (uint256[] memory) {
        uint256[] memory userPosts = new uint256[](users[_user].postsCount);
        uint256 index = 0;
        
        for (uint256 i = 0; i < allPostIds.length; i++) {
            if (posts[allPostIds[i]].author == _user) {
                userPosts[index] = allPostIds[i];
                index++;
            }
        }
        
        return userPosts;
    }
    
    /**
     * @dev Get most recent posts (max 50)
     * @return Array of recent post IDs
     */
    function getRecentPosts() external view returns (uint256[] memory) {
        uint256 totalPosts = allPostIds.length;
        uint256 returnCount = totalPosts > 50 ? 50 : totalPosts;
        uint256[] memory recentPosts = new uint256[](returnCount);
        
        for (uint256 i = 0; i < returnCount; i++) {
            recentPosts[i] = allPostIds[totalPosts - 1 - i];
        }
        
        return recentPosts;
    }
    
    /**
     * @dev Get total number of posts
     * @return The total post count
     */
    function getTotalPosts() external view returns (uint256) {
        return _postIds.current();
    }
    
    /**
     * @dev Get total number of users
     * @return The total user count
     */
    function getTotalUsers() external view returns (uint256) {
        return allUsers.length;
    }
    
    /**
     * @dev Get contract's cUSD balance
     * @return The balance amount
     */
    function getContractBalance() external view returns (uint256) {
        return cUSD.balanceOf(address(this));
    }
    
    /**
     * @dev Check if user can post today
     * @param _user The user's address
     * @return True if user hasn't posted today
     */
    function canPostToday(address _user) external view returns (bool) {
        return !userDailyPost[_user][getToday()];
    }
}