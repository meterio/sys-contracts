// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/extensions/draft-ERC20Permit.sol";
import "./IStMTRG.sol";

contract WstMTRG is ERC20Permit {
    IStMTRG public stMTRG;

    /**
     * @param _stMTRG address of the StMTRG token to wrap
     */
    constructor(
        IStMTRG _stMTRG
    )
        ERC20Permit("Wrapped liquid staked MTRG")
        ERC20("Wrapped liquid staked MTRG", "wstMTRG")
    {
        stMTRG = _stMTRG;
    }

    /**
     * @notice Exchanges stMTRG to wstMTRG
     * @param _stMTRGAmount amount of stMTRG to wrap in exchange for wstMTRG
     * @dev Requirements:
     *  - `_stMTRGAmount` must be non-zero
     *  - msg.sender must approve at least `_stMTRGAmount` stMTRG to this
     *    contract.
     *  - msg.sender must have at least `_stMTRGAmount` of stMTRG.
     * User should first approve _stMTRGAmount to the WstMTRG contract
     * @return Amount of wstMTRG user receives after wrap
     */
    function wrap(uint256 _stMTRGAmount) external returns (uint256) {
        require(_stMTRGAmount > 0, "wstMTRG: can't wrap zero stMTRG");
        uint256 wstMTRGAmount = stMTRG.valueToShare(_stMTRGAmount);
        _mint(msg.sender, wstMTRGAmount);
        stMTRG.transferFrom(msg.sender, address(this), _stMTRGAmount);
        return wstMTRGAmount;
    }

    /**
     * @notice Exchanges wstMTRG to stMTRG
     * @param _wstMTRGAmount amount of wstMTRG to uwrap in exchange for stMTRG
     * @dev Requirements:
     *  - `_wstMTRGAmount` must be non-zero
     *  - msg.sender must have at least `_wstMTRGAmount` wstMTRG.
     * @return Amount of stMTRG user receives after unwrap
     */
    function unwrap(uint256 _wstMTRGAmount) external returns (uint256) {
        require(_wstMTRGAmount > 0, "wstMTRG: zero amount unwrap not allowed");
        uint256 stMTRGAmount = stMTRG.shareToValue(_wstMTRGAmount);
        _burn(msg.sender, _wstMTRGAmount);
        stMTRG.transfer(msg.sender, stMTRGAmount);
        return stMTRGAmount;
    }

    /**
     * @notice Get amount of wstMTRG for a given amount of stMTRG
     * @param _stMTRGAmount amount of stMTRG
     * @return Amount of wstMTRG for a given stMTRG amount
     */
    function getWstMTRGByStMTRG(
        uint256 _stMTRGAmount
    ) external view returns (uint256) {
        return stMTRG.valueToShare(_stMTRGAmount);
    }

    /**
     * @notice Get amount of stMTRG for a given amount of wstMTRG
     * @param _wstMTRGAmount amount of wstMTRG
     * @return Amount of stMTRG for a given wstMTRG amount
     */
    function getStMTRGByWstMTRG(
        uint256 _wstMTRGAmount
    ) external view returns (uint256) {
        return stMTRG.shareToValue(_wstMTRGAmount);
    }

    /**
     * @notice Get amount of stMTRG for a one wstMTRG
     * @return Amount of stMTRG for 1 wstMTRG
     */
    function stMTRGPerToken() external view returns (uint256) {
        return stMTRG.shareToValue(1 ether);
    }

    /**
     * @notice Get amount of wstMTRG for a one stMTRG
     * @return Amount of wstMTRG for a 1 stMTRG
     */
    function tokensPerStMTRG() external view returns (uint256) {
        return stMTRG.valueToShare(1 ether);
    }
}
