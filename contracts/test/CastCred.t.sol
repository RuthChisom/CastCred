// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import "forge-std/Test.sol";
import "../src/CastCred.sol";

contract CastCredTest is Test {
    CastCred public castCred;
    address public user1 = address(0x1);
    address public user2 = address(0x2);
    string[] public skills;

    function setUp() public {
        castCred = new CastCred();
    }

    function testEndorseAddsToMapping() public {
        // skills = [] ; // ✅ Proper declaration
        skills.push("Solidity");
        skills.push("Leadership");
        // skills[1] = "Leadership";

        vm.prank(user1);
        castCred.endorse(user2, skills, "Great developer!");

        CastCred.Endorsement[] memory received = castCred.getEndorsements(user2);
        assertEq(received.length, 1);
        assertEq(received[0].endorser, user1);
        assertEq(received[0].endorsed, user2);
        assertEq(received[0].tags.length, 2);
        assertEq(received[0].tags[0], "Solidity");
        assertEq(received[0].message, "Great developer!");
    }

    function testCannotEndorseSelf() public {
        // skills ; // ✅ Proper declaration
        skills.push("Testing");
        // skills[0] = "";

        vm.expectRevert("Can't endorse yourself");
        vm.prank(user1);
        castCred.endorse(user1, skills, "Trying to endorse self");
    }
}
