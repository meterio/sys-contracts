// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts v4.4.1 (port from token/ERC20/extensions/draft-ERC20Permit.sol)

pragma solidity ^0.8.0;

import "./MockMTRG.sol";
import "@openzeppelin/contracts/utils/structs/EnumerableSet.sol";

contract MockScriptEngine {
    using EnumerableSet for EnumerableSet.Bytes32Set;
    MockMTRG public MTRG;
    mapping(bytes32 => address) public bucketUser;
    mapping(address => mapping(bytes32 => uint256)) public bucket;
    mapping(address => uint256) balance;
    EnumerableSet.Bytes32Set buckets;
    mapping(bytes32 => bool) public bucketRevert;

    constructor(MockMTRG _MTRG) {
        MTRG = _MTRG;
    }

    /**
     * this func create a bucket from msg.sender, voted to candidate
     * will revert if any error happens
     */
    function bucketOpen(
        address candidate,
        uint256 amount
    ) public returns (bytes32 bucketID, bool success) {
        bucketID = keccak256(abi.encode(msg.sender, candidate));
        require(
            bucket[msg.sender][bucketID] == 0 &&
                bucketUser[bucketID] == address(0),
            "bucket exist!"
        );
        MTRG.move(msg.sender, address(this), amount);
        bucketUser[bucketID] = msg.sender;
        bucket[msg.sender][bucketID] += amount;
        balance[msg.sender] += amount;
        buckets.add(bucketID);
        return (bucketID, true);
    }

    /**
     * this func adds more value to the designated bucket owned by msg.sender
     * will revert if any error happens
     */
    function bucketDeposit(
        bytes32 bucketID,
        uint256 amount
    ) public returns (bool) {
        require(!bucketRevert[bucketID], "bucket revert");
        require(bucket[msg.sender][bucketID] > 0, "bucket not exist!");
        MTRG.move(msg.sender, address(this), amount);
        bucket[msg.sender][bucketID] += amount;
        balance[msg.sender] += amount;
        return true;
    }

    /**
     * this func withdraw value from the designated bucket owned by msg.sender, createsa sub bucket to `recipient`
     * `recipient` will receive funds after bucket mature time
     * will revert if any error happens
     */
    function bucketWithdraw(
        bytes32 bucketID,
        uint256 amount,
        address recipient
    ) public returns (bytes32 newBktID) {
        address bucketAccount = bucketUser[bucketID];
        require(
            bucket[bucketAccount][bucketID] >= amount,
            "bucket not enough!"
        );
        MTRG.move(address(this), recipient, amount);
        bucket[bucketAccount][bucketID] -= amount;
        balance[bucketAccount] -= amount;
    }

    /**
     * this func withdraw all value from the designated bucket owned by msg.sender, and completely close this bucket
     * `owner` will receive funds after bucket mature time
     * will revert if any error happens
     */
    function bucketClose(bytes32 bucketID) public {
        address bucketAccount = bucketUser[bucketID];
        uint256 bucketBalance = bucket[bucketAccount][bucketID];
        require(bucketBalance > 0, "bucket not exist!");
        require(msg.sender == bucketAccount, "bucket not your!");
        MTRG.move(address(this), bucketAccount, bucketBalance);
        balance[bucketAccount] -= bucket[bucketAccount][bucketID];
        bucket[bucketAccount][bucketID] = 0;
        buckets.remove(bucketID);
    }

    function boundedMTRG() public view returns (uint256) {
        return balance[msg.sender];
    }

    function reward() public {
        uint256 length = buckets.length();
        for (uint256 i = 0; i < length; ++i) {
            bytes32 bucketID = buckets.at(i);
            address bucketAccount = bucketUser[bucketID];
            uint256 amount = bucket[bucketAccount][bucketID] / 10;
            MTRG.mint(bucketAccount, amount);
        }
    }

    /**
     * this func transfer fund from the designated `fromBucket` to `toBucket` owned by msg.sender
     * will revert if any error happens
     */
    function bucketTransferFund(
        bytes32 fromBucketID,
        bytes32 toBucketID,
        uint256 amount
    ) public returns (bool) {
        require(!bucketRevert[toBucketID], "bucket revert");
        require(bucket[msg.sender][fromBucketID] > 100 ether, "100 ether");
        bucket[msg.sender][fromBucketID] -= amount;
        bucket[msg.sender][toBucketID] += amount;
        return true;
    }

    /**
     * this func transfer all funds from the designated `fromBucket` to `toBucket` owned by msg.sender, and immediately
     * remove `fromBucket` from listing
     * will revert if any error happens
     */
    function bucketMerge(
        bytes32 fromBucketID,
        bytes32 toBucketID
    ) public returns (bool) {
        require(!bucketRevert[toBucketID], "bucket revert");
        address bucketAccount = bucketUser[fromBucketID];
        uint256 amount = bucket[bucketAccount][fromBucketID];
        bucket[bucketAccount][fromBucketID] = 0;
        bucket[bucketAccount][toBucketID] += amount;
        return true;
    }

    /**
     * this func returns the value of the designated bucket
     */
    function bucketValue(bytes32 bucketID) public view returns (uint256) {
        return bucket[msg.sender][bucketID];
    }

    function setBucketRevert(bytes32 bucketID) public {
        bucketRevert[bucketID] = !bucketRevert[bucketID];
    }
}
