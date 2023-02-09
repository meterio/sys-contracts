pragma solidity ^0.8.0;

import "./NewMeterNative.sol";
import "./MeterNativeV3.sol";

contract MeterNativeV3 is NewMeterNative {

    constructor () public payable {
        
    }
    
    function native_bucket_open(address owner, address candidateAddr, uint256 amount) public returns (bytes32, string memory){
        return (bytes32(0x0000000000000000000000000000000000000000000000000000000000000000), "");
    }

    function native_bucket_deposit(address owner, bytes32 bucketID, uint256 amount) public returns (string memory){
        return "";
    }

    function native_bucket_withdraw(address owner, bytes32 bucketID, uint256 amount, address recipient) public returns (bytes32, string memory){
        return (bytes32(0x0000000000000000000000000000000000000000000000000000000000000000), "");
    }

    function native_bucket_close(address owner, bytes32 bucketID) public returns (string memory){
        return "";
    }
    
}

