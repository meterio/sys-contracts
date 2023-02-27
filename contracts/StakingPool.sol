// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts v4.4.1 (port from token/ERC20/extensions/draft-ERC20Permit.sol)

pragma solidity ^0.8.0;

import "./IERC20.sol";
import "@openzeppelin/contracts/access/AccessControlEnumerable.sol";
/**
 * Sample code for Staking Pool on Meter depends on ScriptEngine
 */
import "./IScriptEngine.sol";

contract StakingPool is IERC20, AccessControlEnumerable {
    string public constant symbol = "stMTRG";
    string public constant name = "Staked MTRG";
    uint8 public constant decimals = 18;
    uint256 public _totalShares = 0;
    uint256 public epoch;

    mapping(address => uint256) public _shares;
    mapping(address => mapping(address => uint256)) public allowance;

    IScriptEngine scriptEngine;
    bytes32 public bucketID;
    address public candidate;
    IERC20 public MTRG;
    event LogRebase(uint256 indexed epoch, uint256 totalSupply);

    constructor(
        IERC20 _MTRG,
        address scriptEngineAddr,
        address _candidate
    ) {
        _setupRole(DEFAULT_ADMIN_ROLE, _msgSender());
        scriptEngine = IScriptEngine(scriptEngineAddr);
        candidate = _candidate;
        MTRG = _MTRG;
    }

    function deposit(uint256 amount) public {
        address account = msg.sender;
        uint256 shares;
        MTRG.transferFrom(account, address(this), amount);
        if (_totalShares == 0) {
            shares = amount;
            bucketID = scriptEngine.bucketOpen(candidate, amount);
        } else {
            require(bucketID != bytes32(0), "bucketID!");
            shares = _valueToShare(amount);
            scriptEngine.bucketDeposit(bucketID, amount);
        }

        _shares[account] += shares;
        _totalShares += shares;
        emit Transfer(address(0x0), account, amount);
    }

    function rebase() public onlyRole(DEFAULT_ADMIN_ROLE) {
        uint256 mtrgBalance = MTRG.balanceOf(address(this));
        if (mtrgBalance > 0) {
            scriptEngine.bucketDeposit(bucketID, mtrgBalance);
        }
        epoch++;
        emit LogRebase(epoch, totalSupply());
    }

    function withdraw(uint256 amount, address recipient) public {
        address account = msg.sender;
        uint256 burnShares = _valueToShare(amount);
        uint256 accountShares = _shares[account];
        require(
            accountShares >= burnShares,
            "ERC20: burn amount exceeds balance"
        );
        unchecked {
            _shares[account] = accountShares - burnShares;
            _totalShares -= burnShares;
        }

        emit Transfer(account, address(0), amount);
        scriptEngine.bucketWithdraw(bucketID, amount, recipient);
    }

    /**
     * @dev See {IERC20-balanceOf}.
     */
    function balanceOf(address account) public view override returns (uint256) {
        return (_shares[account] * totalSupply()) / _totalShares;
    }

    /**
     * @dev See {IERC20-totalSupply}.
     */

    function totalSupply() public view override returns (uint256) {
        return scriptEngine.boundedMTRG();
    }

    function approve(address _spender, uint256 _value) external returns (bool) {
        allowance[msg.sender][_spender] = _value;
        emit Approval(msg.sender, _spender, _value);
        return true;
    }

    function _valueToShare(uint256 _value) private view returns (uint256) {
        return (_value * _totalShares) / totalSupply();
    }

    function _transfer(
        address _from,
        address _to,
        uint256 _value
    ) internal returns (bool) {
        uint256 shares = _valueToShare(_value);
        _shares[_from] -= shares;
        _shares[_to] += shares;
        emit Transfer(_from, _to, _value);
        return true;
    }

    function transfer(address _to, uint256 _value) external returns (bool) {
        return _transfer(msg.sender, _to, _value);
    }

    function transferFrom(
        address _from,
        address _to,
        uint256 _value
    ) external returns (bool) {
        uint256 allowed_from = allowance[_from][msg.sender];
        if (allowed_from != type(uint256).max) {
            allowance[_from][msg.sender] -= _value;
        }
        return _transfer(_from, _to, _value);
    }
}
