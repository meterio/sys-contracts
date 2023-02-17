// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts v4.4.1 (port from token/ERC20/extensions/draft-ERC20Permit.sol)

pragma solidity ^0.8.0;

/**
 * Sample code for Staking Pool on Meter depends on ScriptEngine
 */
import "./ScriptEngine.sol";

contract SampleStakingPool{
    ScriptEngine scriptEngine = ScriptEngine(0x63726970742d656E67696E652D61646472657373);

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