// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

interface IStMTRG is IERC20 {
    function shareToValue(uint256 _share) external view returns (uint256);

    function valueToShare(uint256 _value) external view returns (uint256);
}
