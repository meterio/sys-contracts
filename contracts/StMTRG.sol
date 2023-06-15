// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/token/ERC20/extensions/draft-ERC20PermitUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/AccessControlEnumerableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol";
import "./IStMTRG.sol";
import "./IScriptEngine.sol";
import "./WadRayMath.sol";

contract StMTRG is
    IStMTRG,
    ERC20PermitUpgradeable,
    AccessControlEnumerableUpgradeable,
    PausableUpgradeable
{
    using WadRayMath for uint256;
    uint256 private _totalShares = 0;
    uint256 public epoch;
    uint256 public constant CLOSE_DURATION = 30 days;
    uint256 public closeTimestamp;

    enum BucketStatus {
        invalid,
        normal, // bucket open
        closed, // request close
        inTerminal, // execute close
        finish // after 7 days
    }
    struct Bucket {
        bytes32 bucketID;
        uint256 totalDeposit;
        uint256 closeTimestamp;
        BucketStatus status;
    }

    mapping(address => uint256) private _shares;
    mapping(address => bool) private _blackList;
    mapping(address => Bucket) public candidateToBucket;
    mapping(bytes32 => address) public bucketIDToCandidate;
    address[] private _candidates;
    mapping(address => uint256) public candidateIndex;

    IScriptEngine scriptEngine;
    IERC20Upgradeable public MTRG;

    event Deposit(
        address indexed account,
        bytes32 indexed bucketID,
        uint256 amount
    );
    event Withdraw(
        address indexed account,
        bytes32 indexed bucketID,
        uint256 amount
    );
    event LogRebase(
        bytes32 indexed bucketID,
        address indexed candidate,
        uint256 indexed epoch,
        uint256 totalSupply
    );
    event NewCandidate(address indexed candidate, bytes32 bucketID);
    event UpdateCandidate(address indexed oldCandidate, address newCandidate);
    event RequestClost(
        address indexed candidate,
        bytes32 bucketID,
        uint256 timestamp
    );
    event ExecuteClost(
        address indexed candidate,
        bytes32 bucketID,
        uint256 timestamp
    );
    event TerminalClost(
        address indexed candidate,
        bytes32 bucketID,
        uint256 timestamp
    );

    function initialize(
        address admin,
        IERC20Upgradeable _MTRG,
        address scriptEngineAddr
    ) public initializer {
        require(admin != address(0), "admin address error!");
        require(address(_MTRG) != address(0), "MTRG address error!");
        require(
            scriptEngineAddr != address(0),
            "scriptEngineAddr address error!"
        );
        __ERC20Permit_init("stMTRG 1.0");
        __ERC20_init("Staked MTRG", "stMTRG");
        __Pausable_init();
        _setupRole(DEFAULT_ADMIN_ROLE, admin);
        scriptEngine = IScriptEngine(scriptEngineAddr);
        MTRG = _MTRG;
    }

    function newCandidate(
        address candidate
    ) external onlyRole(DEFAULT_ADMIN_ROLE) {
        require(candidate != address(0), "address error!");
        Bucket storage bucket = candidateToBucket[candidate];
        require(bucket.bucketID == bytes32(0), "candidate exsited!");
        address account = msg.sender;
        uint256 amount = 100 ether;
        MTRG.transferFrom(account, address(this), amount);
        bytes32 bucketID = scriptEngine.bucketOpen(candidate, amount);

        bucket.totalDeposit += amount;
        bucket.bucketID = bucketID;
        bucket.status = BucketStatus.normal;

        _candidates.push(candidate);
        candidateIndex[candidate] = _candidates.length;
        bucketIDToCandidate[bucketID] = candidate;
        emit NewCandidate(candidate, bucketID);

        if (_totalShares == 0) {
            _shares[account] += amount;
            _totalShares += amount.wadToRay();
        } else {
            uint256 shares = _valueToShare(amount);
            _shares[account] += shares;
            _totalShares += shares.wadToRay();
        }
        emit Transfer(address(0x0), account, amount);
    }

    function _findMinDeposit() private view returns (address) {
        Bucket memory bucket = candidateToBucket[_candidates[0]];
        for (uint256 i = 0; i < _candidates.length - 1; ++i) {
            Bucket memory nextBucket = candidateToBucket[_candidates[i + 1]];
            if (
                bucket.totalDeposit > nextBucket.totalDeposit &&
                nextBucket.status == BucketStatus.normal
            ) {
                bucket = nextBucket;
            }
        }
        if (bucket.status != BucketStatus.normal) revert("closed!");
        return bucketIDToCandidate[bucket.bucketID];
    }

    // move
    function rebase() public onlyRole(DEFAULT_ADMIN_ROLE) {
        Bucket storage bucket = candidateToBucket[_findMinDeposit()];
        bytes32 bucketID = bucket.bucketID;
        if (bucketID == bytes32(0)) return;
        uint256 mtrgBalance = MTRG.balanceOf(address(this));
        if (mtrgBalance > 0) {
            scriptEngine.bucketDeposit(bucketID, mtrgBalance);
        }
        bucket.totalDeposit += mtrgBalance;
        epoch++;
        emit LogRebase(
            bucketID,
            bucketIDToCandidate[bucketID],
            epoch,
            totalSupply()
        );
    }

    function updateCandidate(
        address oldCandidateAddr,
        address newCandidateAddr
    ) public onlyRole(DEFAULT_ADMIN_ROLE) {
        require(newCandidateAddr != address(0), "address error!");
        Bucket memory bucket = candidateToBucket[oldCandidateAddr];
        require(bucket.status == BucketStatus.normal, "closed!");
        scriptEngine.bucketUpdateCandidate(bucket.bucketID, newCandidateAddr);

        candidateToBucket[newCandidateAddr] = bucket;
        bucketIDToCandidate[bucket.bucketID] = newCandidateAddr;
        uint256 index = candidateIndex[oldCandidateAddr];
        _candidates[index] = newCandidateAddr;
        candidateIndex[newCandidateAddr] = index;
        delete candidateIndex[oldCandidateAddr];
        delete candidateToBucket[oldCandidateAddr];

        emit UpdateCandidate(oldCandidateAddr, newCandidateAddr);
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

    function requestClose(
        address candidate
    ) public onlyRole(DEFAULT_ADMIN_ROLE) {
        Bucket storage bucket = _getBucket(candidate);
        require(bucket.status == BucketStatus.normal, "is closed!");
        bucket.status = BucketStatus.closed;
        bucket.closeTimestamp = block.timestamp;
        emit RequestClost(candidate, bucket.bucketID, closeTimestamp);
    }

    function executeClose(
        address candidate
    ) public onlyRole(DEFAULT_ADMIN_ROLE) {
        Bucket storage bucket = _getBucket(candidate);
        require(bucket.status == BucketStatus.closed, "not close!");
        require(
            block.timestamp >= closeTimestamp + CLOSE_DURATION,
            "CLOSE_DURATION!"
        );
        bucket.status = BucketStatus.inTerminal;
        scriptEngine.bucketClose(bucket.bucketID);
        emit ExecuteClost(candidate, bucket.bucketID, closeTimestamp);
    }

    function closeTerminal(
        address candidate
    ) public onlyRole(DEFAULT_ADMIN_ROLE) {
        Bucket storage bucket = _getBucket(candidate);
        require(bucket.status == BucketStatus.inTerminal, "not in terminal!");
        bucket.status = BucketStatus.finish;
        bucket.totalDeposit = 0;
        emit TerminalClost(candidate, bucket.bucketID, closeTimestamp);
    }

    function deposit(uint256 amount) public whenNotPaused {
        Bucket storage bucket = candidateToBucket[_findMinDeposit()];
        require(bucket.status == BucketStatus.normal, "closed!");
        require(_totalShares > 0, "totalShares = 0");
        address account = msg.sender;
        MTRG.transferFrom(account, address(this), amount);
        scriptEngine.bucketDeposit(bucket.bucketID, amount);

        uint256 shares = _valueToShare(amount);
        _shares[account] += shares;
        _totalShares += shares.wadToRay();
        bucket.totalDeposit += amount;
        emit Transfer(address(0x0), account, amount);
        emit Deposit(account, bucket.bucketID, amount);
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
        require(!_blackList[account], "account is in black list");
        unchecked {
            _shares[account] = accountShares - burnShares;
            _totalShares -= burnShares.wadToRay();
        }
        emit Transfer(account, address(0), amount);

        for (uint256 i = 0; i < _candidates.length - 1; ++i) {
            Bucket memory bucket = candidateToBucket[_candidates[i]];
            if (bucket.status != BucketStatus.inTerminal) {
                if (amount >= bucket.totalDeposit) {
                    amount -= bucket.totalDeposit;
                    bucket.totalDeposit = 0;
                    scriptEngine.bucketWithdraw(
                        bucket.bucketID,
                        bucket.totalDeposit,
                        recipient
                    );
                    emit Withdraw(
                        account,
                        bucket.bucketID,
                        bucket.totalDeposit
                    );
                } else {
                    bucket.totalDeposit -= amount;
                    amount = 0;
                    scriptEngine.bucketWithdraw(
                        bucket.bucketID,
                        amount,
                        recipient
                    );
                    emit Withdraw(account, bucket.bucketID, amount);
                }
            }
        }
        if (amount > 0) {
            uint256 balance = MTRG.balanceOf(address(this));
            MTRG.transfer(recipient, balance < amount ? balance : amount);
            emit Withdraw(account, bytes32(0), amount);
        }
    }

    function withdraw(uint256 amount, address recipient) public whenNotPaused {
        _withdraw(msg.sender, amount, recipient);
    }

    function exit(address recipient) public whenNotPaused {
        address account = msg.sender;
        uint256 amount = balanceOf(account);
        _withdraw(account, amount, recipient);
    }

    /**
     * @dev See {IERC20-balanceOf}.
     */
    function balanceOf(address account) public view override returns (uint256) {
        return shareToValue(_shares[account]);
    }

    /**
     * @dev See {IERC20-totalSupply}.
     */
    function totalSupply() public view override returns (uint256) {
        return scriptEngine.boundedMTRG();
    }

    function totalShares() public view returns (uint256) {
        return _totalShares.rayToWad();
    }

    function shares(address account) public view returns (uint256) {
        return _shares[account];
    }

    function candidates() public view returns (address[] memory) {
        return _candidates;
    }

    function shareToValue(uint256 _share) public view returns (uint256) {
        uint256 _totalSupply = MTRG.balanceOf(address(this));
        for (uint256 i = 0; i < _candidates.length; ++i) {
            Bucket memory bucket = candidateToBucket[_candidates[i]];
            _totalSupply += bucket.totalDeposit;
        }
        return _share.wadToRay().rayMul(_totalSupply).rayDiv(_totalShares);
    }

    function valueToShare(uint256 _value) public view returns (uint256) {
        return _valueToShare(_value);
    }

    function _valueToShare(uint256 _value) private view returns (uint256) {
        uint256 _totalSupply = MTRG.balanceOf(address(this));
        for (uint256 i = 0; i < _candidates.length; ++i) {
            Bucket memory bucket = candidateToBucket[_candidates[i]];
            _totalSupply += bucket.totalDeposit;
        }
        return _value.rayMul(_totalShares).rayDiv(_totalSupply).rayToWad();
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
            "ERC20: account is in black list"
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

    function _getBucket(
        address candidate
    ) private view returns (Bucket storage bucket) {
        require(candidate != address(0), "address error!");
        bucket = candidateToBucket[candidate];
        require(bucket.bucketID != bytes32(0), "Bucket not existed");
        return bucket;
    }
}
