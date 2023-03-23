// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/extensions/draft-ERC20Permit.sol";
import "@openzeppelin/contracts/access/AccessControlEnumerable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "./IStMTRG.sol";
import "./IScriptEngine.sol";

contract StMTRG is IStMTRG, ERC20Permit, AccessControlEnumerable, Pausable {
    uint256 public _totalShares = 0;
    uint256 public epoch;
    string private _name = "Staked MTRG";
    string private _symbol = "stMTRG";
    uint256 public constant CLOSE_DURATION = 30 days;
    uint256 public closeTimestamp;
    bool public isClosed = false;

    mapping(address => uint256) public _shares;
    mapping(address => bool) private _blackList;

    IScriptEngine scriptEngine;
    bytes32 public bucketID;
    address public candidate;
    IERC20 public MTRG;
    event LogRebase(uint256 indexed epoch, uint256 totalSupply);
    event NewCandidate(address oldCandidate, address newCandidate);
    event RequestClost(uint256 timestamp);
    event ExecuteClost(uint256 timestamp);

    constructor(
        IERC20 _MTRG,
        address scriptEngineAddr,
        address _candidate
    ) ERC20Permit(_name) ERC20(_name, _symbol) {
        _setupRole(DEFAULT_ADMIN_ROLE, _msgSender());
        scriptEngine = IScriptEngine(scriptEngineAddr);
        candidate = _candidate;
        MTRG = _MTRG;
    }

    function initialize() external onlyRole(DEFAULT_ADMIN_ROLE) {
        require(!isClosed, "closed!");
        require(_totalShares == 0, "totalShares != 0");
        address account = msg.sender;
        uint256 amount = 100 ether;
        MTRG.transferFrom(account, address(this), amount);
        bucketID = scriptEngine.bucketOpen(candidate, amount);
        _shares[account] += amount;
        _totalShares += amount;
        emit Transfer(address(0x0), account, amount);
    }

    function rebase() public onlyRole(DEFAULT_ADMIN_ROLE) {
        require(!isClosed, "closed!");
        uint256 mtrgBalance = MTRG.balanceOf(address(this));
        if (mtrgBalance > 0) {
            scriptEngine.bucketDeposit(bucketID, mtrgBalance);
        }
        epoch++;
        emit LogRebase(epoch, totalSupply());
    }

    function updateCandidate(
        address newCandidateAddr
    ) public onlyRole(DEFAULT_ADMIN_ROLE) {
        require(!isClosed, "closed!");
        scriptEngine.bucketUpdateCandidate(bucketID, newCandidateAddr);
        address oldCandidate = candidate;
        candidate = newCandidateAddr;
        emit NewCandidate(oldCandidate, newCandidateAddr);
    }

    function setBlackList(address account) public onlyRole(DEFAULT_ADMIN_ROLE) {
        _blackList[account] = !_blackList[account];
    }

    function pause() public onlyRole(DEFAULT_ADMIN_ROLE) {
        _pause();
    }

    function unpause() public onlyRole(DEFAULT_ADMIN_ROLE) {
        _unpause();
    }

    function requestClose() public onlyRole(DEFAULT_ADMIN_ROLE) {
        isClosed = true;
        closeTimestamp = block.timestamp;
        emit RequestClost(closeTimestamp);
    }

    function executeClose() public onlyRole(DEFAULT_ADMIN_ROLE) {
        require(isClosed, "closed!");
        require(
            block.timestamp >= closeTimestamp + CLOSE_DURATION,
            "CLOSE_DURATION!"
        );
        scriptEngine.bucketClose(bucketID);
        emit ExecuteClost(block.timestamp);
    }

    function adminWithdrawAll(address to) public onlyRole(DEFAULT_ADMIN_ROLE) {
        require(isClosed, "closed!");
        require(
            block.timestamp >= closeTimestamp + CLOSE_DURATION,
            "CLOSE_DURATION!"
        );
        uint256 amount = MTRG.balanceOf(address(this));
        MTRG.transfer(to, amount);
    }

    function adminWithdraw(
        address account,
        uint256 amount,
        address recipient
    ) public onlyRole(DEFAULT_ADMIN_ROLE) whenPaused {
        _withdraw(account, amount, recipient);
    }

    function deposit(uint256 amount) public whenNotPaused {
        require(!isClosed, "closed!");
        address account = msg.sender;
        uint256 shares;
        MTRG.transferFrom(account, address(this), amount);
        require(_totalShares > 0, "totalShares = 0");
        require(bucketID != bytes32(0), "bucketID!");
        shares = _valueToShare(amount);
        scriptEngine.bucketDeposit(bucketID, amount);
        _shares[account] += shares;
        _totalShares += shares;
        emit Transfer(address(0x0), account, amount);
    }

    function _withdraw(
        address account,
        uint256 amount,
        address recipient
    ) private {
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

    function withdraw(uint256 amount, address recipient) public whenNotPaused {
        _withdraw(msg.sender, amount, recipient);
    }

    function exit(address recipient) public whenNotPaused {
        address account = msg.sender;
        uint256 accountShares = _shares[account];
        uint256 amount = balanceOf(account);

        unchecked {
            _shares[account] = 0;
            _totalShares -= accountShares;
        }

        emit Transfer(account, address(0), amount);
        scriptEngine.bucketWithdraw(bucketID, amount, recipient);
    }

    /**
     * @dev See {IERC20-balanceOf}.
     */
    function balanceOf(
        address account
    ) public view override(ERC20, IERC20) returns (uint256) {
        return (_shares[account] * totalSupply()) / _totalShares;
    }

    /**
     * @dev See {IERC20-totalSupply}.
     */

    function totalSupply()
        public
        view
        override(ERC20, IERC20)
        returns (uint256)
    {
        return scriptEngine.boundedMTRG();
    }

    function shareToValue(uint256 _share) public view returns (uint256) {
        return (_share * totalSupply()) / _totalShares;
    }

    function valueToShare(uint256 _value) public view returns (uint256) {
        return _valueToShare(_value);
    }

    function _valueToShare(uint256 _value) private view returns (uint256) {
        return (_value * _totalShares) / totalSupply();
    }

    function _transfer(
        address _from,
        address _to,
        uint256 _value
    ) internal override {
        require(_from != address(0), "ERC20: transfer from the zero address");
        require(_to != address(0), "ERC20: transfer to the zero address");

        _beforeTokenTransfer(_from, _to, _value);
        require(
            !_blackList[_from] && !_blackList[_to],
            "ERC20Pausable: account is in black list"
        );

        uint256 shares = _valueToShare(_value);
        uint256 fromShares = _shares[_from];
        require(fromShares >= shares, "ERC20: transfer amount exceeds balance");
        unchecked {
            _shares[_from] = fromShares - shares;
            _shares[_to] += shares;
        }

        emit Transfer(_from, _to, _value);

        _afterTokenTransfer(_from, _to, _value);
    }
}
