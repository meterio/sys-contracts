pragma solidity ^0.8.0;

import "./MeterNativeV3.sol";

contract MeterNativeV4 is MeterNativeV3 {
    event NativeBucketDeposit(
        address indexed owner,
        bytes32 bucketID,
        uint256 amount,
        uint256 token
    );
    event NativeBucketWithdraw(
        address indexed owner,
        bytes32 fromBktID,
        uint256 amount,
        uint256 token,
        address recipient,
        bytes32 toBktID
    );
    event NativeBucketOpen(
        address indexed owner,
        bytes32 bucketID,
        uint256 amount,
        uint256 token
    );
    event NativeBucketClose(address indexed owner, bytes32 bucketID);
    event NativeBucketMerge(
        address indexed owner,
        bytes32 fromBktID,
        bytes32 toBktID
    );
    event NativeBucketTransferFund(
        address indexed owner,
        bytes32 fromBktID,
        uint256 amount,
        uint256 token,
        bytes32 toBktID
    );
    event NativeBucketUpdateCandidate(
        address indexed owner,
        bytes32 bucketID,
        address fromCandidate,
        address toCandidate
    );
    event NativeAuctionStart(
        bytes32 indexed id,
        uint256 startHeight,
        uint256 endHeight,
        uint256 mtrgOnAuction,
        uint256 reservedPrice
    );
    event NativeAuctionEnd(
        bytes32 indexed id,
        uint256 receivedMTR,
        uint256 releasedMTRG,
        uint256 actualPrice
    );

    /**
     * this func transfers `amount` from `fromBucket` to `toBucket`
     * notice that `fromBucket` still needs to meet staking requirement after transfer
     * returns error string (default "")
     */
    function native_bucket_transfer_fund(
        address owner,
        bytes32 fromBucketID,
        bytes32 toBucketID,
        uint256 amount
    ) public pure returns (string memory) {}

    /**
     * this func merges `fromBucket` to `toBucket`
     * notice that `fromBucket` will be removed immediately after calling this func
     * returns error string (default "")
     */
    function native_bucket_merge(
        address owner,
        bytes32 fromBucketID,
        bytes32 toBucketID
    ) public pure returns (string memory) {}

    /**
     * this func returns the value of designated bucket
     */
    function native_bucket_value(
        bytes32 bucketID
    ) public pure returns (uint256) {}

    function native_bucket_exists(
        bytes32 bucketID
    ) public pure returns (bool) {}
}
