// SPDX-License-Identifier: MIT
// Copyright (c) 2018 The Meter.io developers

pragma solidity ^0.8.0;

import './IMeterNative.sol';

interface IMeterNativeV3 is IMeterNative {
    // added functions for V3
    function native_bucket_open(address owner, address candidateAddr, uint256 amount) external returns (bytes32, string memory);
    function native_bucket_deposit(address owner, bytes32 bucketID, uint256 amount) external returns (string memory);
    function native_bucket_withdraw(address owner, bytes32 bucketID, uint256 amount, address recipient) external returns (bytes32, string memory);
    function native_bucket_close(address owner, bytes32 bucketID) external returns (string memory);
}
