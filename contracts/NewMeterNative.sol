pragma solidity ^0.8.0;

import "./IMeterNative.sol";

contract NewMeterNative is IMeterNative {
    event MeterTrackerEvent(address _address, uint256 _amount, string _method);

    constructor () payable {
        
    }
    
    
    function native_mtr_totalSupply() public view returns(uint256) { return uint256(0); }

    function native_mtr_totalBurned() public view returns(uint256) { return uint256(0); }

    function native_mtr_get(address addr) public view returns(uint256) { return uint256(0);    }

    function native_mtr_add(address addr, uint256 amount) public {
        emit MeterTrackerEvent(addr, amount, "native_mtr_add");
        return;
    }

    function native_mtr_sub(address addr, uint256 amount) public returns(bool) {
        emit MeterTrackerEvent(addr, amount, "native_mtr_sub");
        return true;    
    }

   function native_mtr_locked_get(address addr) public view returns(uint256) { return uint256(0);    }

    function native_mtr_locked_add(address addr, uint256 amount) public {
        emit MeterTrackerEvent(addr, amount, "native_mtr_locked_add");
        return;
    }

    function native_mtr_locked_sub(address addr, uint256 amount) public returns(bool) {
        emit MeterTrackerEvent(addr, amount, "native_mtr_locked_sub");
        return true;    
    }

    //@@@@@
    function native_mtrg_totalSupply() public view returns(uint256) { return uint256(0x0); }

    function native_mtrg_totalBurned() public view returns(uint256) { return uint256(0); }

    function native_mtrg_get(address addr) public view returns(uint256) { return uint256(0); }

    function native_mtrg_add(address addr, uint256 amount) public {
        emit MeterTrackerEvent(addr, amount, "native_mtrg_add");
        return;
    }

    function native_mtrg_sub(address addr, uint256 amount) public returns(bool) {
        emit MeterTrackerEvent(addr, amount, "native_mtrg_sub");
        return true;    
    }

    function native_mtrg_locked_get(address addr) public view returns(uint256) { return uint256(0); }

    function native_mtrg_locked_add(address addr, uint256 amount) public {
        emit MeterTrackerEvent(addr, amount, "native_mtrg_locked_add");
        return;
    }

    function native_mtrg_locked_sub(address addr, uint256 amount) public returns(bool) {
        emit MeterTrackerEvent(addr, amount, "native_mtrg_locked_sub");
        return true;    
    }

    //@@@
    function native_master(address addr) public view returns(address) { return address(0x0);  }


}

