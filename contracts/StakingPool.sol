// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts v4.4.1 (port from token/ERC20/extensions/draft-ERC20Permit.sol)

pragma solidity ^0.8.0;

/**
 * Sample code for Staking Pool on Meter depends on ScriptEngine
 */
import "./ScriptEngine.sol";

contract Ownable {
    address public owner;

    modifier onlyOwner {
        require(msg.sender == owner);
        _;
    }

    function transferOwnership(address newOwner) onlyOwner public {
        owner = newOwner;
    }
}

contract StakingPool is Ownable{
    ScriptEngine scriptEngine;

    constructor(address scriptEngineAddr){
        owner = msg.sender;
        scriptEngine = ScriptEngine(scriptEngineAddr);
    }

    function bucketOpen(address candidate, uint256 amount) public returns (bytes32){
        return scriptEngine.bucketOpen(candidate, amount);
    }

    function bucketDeposit(bytes32 bucketID, uint256 amount) public {
        return scriptEngine.bucketDeposit(bucketID, amount);
    }

    function bucketWithdraw(bytes32 bucketID, uint256 amount, address recipient) public returns (bytes32 ){
        return scriptEngine.bucketWithdraw(bucketID, amount, recipient);
    }

    function bucketClose(bytes32 bucketID) public {
        return scriptEngine.bucketClose(bucketID);
    }
    
}
