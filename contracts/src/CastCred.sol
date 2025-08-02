// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract CastCred {
    struct Endorsement {
        address endorser;
        address endorsed;
        string[] tags;
        string message;
        uint256 timestamp;
    }

    mapping(address => Endorsement[]) public endorsements;

    event Endorsed(address indexed from, address indexed to, string[] tags, string message, uint256 time);

    function endorse(address _to, string[] memory _tags, string memory _message) external {
        require(_to != msg.sender, "Can't endorse yourself");
        require(_to != address(0), "Invalid address");

        Endorsement memory newEndorsement = Endorsement({
            endorser: msg.sender,
            endorsed: _to,
            tags: _tags,
            message: _message,
            timestamp: block.timestamp
        });

        endorsements[_to].push(newEndorsement);

        emit Endorsed(msg.sender, _to, _tags, _message, block.timestamp);
    }

    function getEndorsements(address _user) external view returns (Endorsement[] memory) {
        return endorsements[_user];
    }
}
