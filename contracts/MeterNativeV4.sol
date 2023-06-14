pragma solidity ^0.8.0;

import "./MeterNativeV3.sol";

contract MeterNativeV4 is MeterNativeV3 {
     /**
     * this func transfers `amount` from `fromBucket` to `toBucket`
     * notice that `fromBucket` still needs to meet staking requirement after transfer
     * returns error string (default "")
     */
    function native_bucket_transfer_fund(address owner, bytes32 fromBucketID, bytes32 toBucketID, uint256 amount) public pure returns (string memory) {}

     /**
     * this func merges `fromBucket` to `toBucket`
     * notice that `fromBucket` will be removed immediately after calling this func
     * returns error string (default "")
     */
    function native_bucket_merge(address owner, bytes32 fromBucketID, bytes32 toBucketID) public pure returns (string memory) {}

    /**
     * this func returns the value of designated bucket
     */
    function native_bucket_value(bytes32 bucketID) public pure returns (uint256){}
}

