// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import "forge-std/Script.sol";
import "../src/CastCred.sol"; // adjust path as needed

contract Deploy is Script {
    function run() external {
        vm.startBroadcast();
        new CastCred(); // deploy your contract
        vm.stopBroadcast();
    }
}
