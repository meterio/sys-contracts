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

    struct Bucket {
        bytes32 bucketID;
        uint256 totalDeposit;
        uint256 locked;
    }

    mapping(address => uint256) private _shares;
    mapping(address => bool) private _blackList;
    mapping(address => Bucket) public candidateToBucket;
    mapping(bytes32 => address) public bucketIDToCandidate;
    address[] private _candidates;
    mapping(address => uint256) public candidateIndex;
    uint256 public currentIndex;
    bool public isClose;
    bool public inTerminal;

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
    event TransferFund(
        bytes32 indexed oldBucketID,
        bytes32 indexed newBucketID,
        uint256 amount
    );
    event Merge(
        bytes32 indexed oldBucketID,
        bytes32 indexed newBucketID,
        uint256 totalDeposit,
        uint256 locked
    );
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
    event TerminalClost(uint256 timestamp);

    modifier notClose() {
        require(!isClose, "is close!");
        _;
    }

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
    ) external onlyRole(DEFAULT_ADMIN_ROLE) notClose {
        require(candidate != address(0), "address error!");
        Bucket storage bucket = candidateToBucket[candidate];
        require(bucket.bucketID == bytes32(0), "candidate exsited!");
        address account = msg.sender;
        uint256 amount = 100 ether;
        if (_totalShares == 0) {
            _shares[account] += amount.wadToRay();
            _totalShares += amount.wadToRay();
        } else {
            uint256 shares_ = _valueToShare(amount);
            _shares[account] += shares_;
            _totalShares += shares_;
        }
        MTRG.transferFrom(account, address(this), amount);
        (bytes32 bucketID, ) = scriptEngine.bucketOpen(candidate, amount);
        bucket.locked += amount;
        bucket.bucketID = bucketID;

        _candidates.push(candidate);
        candidateIndex[candidate] = _candidates.length;
        bucketIDToCandidate[bucketID] = candidate;
        emit NewCandidate(candidate, bucketID);
        emit Transfer(address(0x0), account, amount);
        emit Deposit(account, bucketID, amount);
    }

    function rebase() public onlyRole(DEFAULT_ADMIN_ROLE) notClose {
        uint256 mtrgBalance = MTRG.balanceOf(address(this));
        if (mtrgBalance > 0) {
            bytes32 bucketID = _deposit(address(0), mtrgBalance);
            epoch++;
            emit LogRebase(
                bucketID,
                bucketIDToCandidate[bucketID],
                epoch,
                totalSupply()
            );
        }
    }

    function transferFund(
        address candidate
    ) public onlyRole(DEFAULT_ADMIN_ROLE) notClose {
        require(_candidates.length > 1, "only 1 candidate");
        uint256 _candidateIndex = candidateIndex[candidate];
        Bucket storage bucket = candidateToBucket[
            _candidates[_candidateIndex - 1]
        ];
        uint256 amount = bucket.totalDeposit;
        if (amount == 0) return;
        bucket.totalDeposit = 0;
        bool success;
        bytes memory data;

        for (uint256 i = 0; i < _candidates.length; ++i) {
            _candidateIndex = _candidateIndex >= _candidates.length
                ? 0
                : _candidateIndex;
            Bucket storage nextBucket = candidateToBucket[
                _candidates[_candidateIndex]
            ];

            (success, data) = address(scriptEngine).call(
                abi.encodeWithSelector(
                    IScriptEngine.bucketTransferFund.selector,
                    bucket.bucketID,
                    nextBucket.bucketID,
                    amount
                )
            );
            _candidateIndex++;
            if (success && abi.decode(data, (bool))) {
                nextBucket.totalDeposit += amount;
                emit TransferFund(bucket.bucketID, nextBucket.bucketID, amount);
                break;
            }
        }
        require(success && abi.decode(data, (bool)), "no dst candidate!");
    }

    function deleteBucket(
        address candidate
    ) public onlyRole(DEFAULT_ADMIN_ROLE) notClose {
        require(_candidates.length > 1, "only 1 candidate");
        uint256 _candidateIndex = candidateIndex[candidate];
        Bucket storage bucket = candidateToBucket[
            _candidates[_candidateIndex - 1]
        ];
        uint256 totalDeposit = bucket.totalDeposit;
        uint256 locked = bucket.locked;
        bytes32 bucketID = bucket.bucketID;
        if (totalDeposit + locked > 0) {
            bool success;
            bytes memory data;

            delete bucketIDToCandidate[bucket.bucketID];
            delete candidateToBucket[candidate];
            if (candidateIndex[candidate] < _candidates.length) {
                candidateIndex[
                    _candidates[_candidates.length - 1]
                ] = candidateIndex[candidate];
                _candidates[candidateIndex[candidate] - 1] = _candidates[
                    _candidates.length - 1
                ];
            }
            _candidates.pop();
            delete candidateIndex[candidate];

            for (uint256 i = 0; i < _candidates.length; ++i) {
                _candidateIndex = _candidateIndex >= _candidates.length
                    ? 0
                    : _candidateIndex;
                Bucket storage nextBucket = candidateToBucket[
                    _candidates[_candidateIndex]
                ];
                (success, data) = address(scriptEngine).call(
                    abi.encodeWithSelector(
                        IScriptEngine.bucketMerge.selector,
                        bucketID,
                        nextBucket.bucketID
                    )
                );
                _candidateIndex++;
                if (success && abi.decode(data, (bool))) {
                    nextBucket.totalDeposit += totalDeposit;
                    nextBucket.locked += locked;
                    emit Merge(
                        bucketID,
                        nextBucket.bucketID,
                        totalDeposit,
                        locked
                    );
                    break;
                }
            }
            require(success && abi.decode(data, (bool)), "no dst candidate!");
        }
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

    function requestClose() public onlyRole(DEFAULT_ADMIN_ROLE) notClose {
        require(_candidates.length == 1, "candidates is more than 1");
        Bucket memory bucket = candidateToBucket[_candidates[0]];
        closeTimestamp = block.timestamp;
        isClose = true;
        emit RequestClost(_candidates[0], bucket.bucketID, closeTimestamp);
    }

    function executeClose() public onlyRole(DEFAULT_ADMIN_ROLE) {
        require(isClose, "is close!");
        require(!inTerminal, "in terminal!");
        Bucket memory bucket = candidateToBucket[_candidates[0]];
        require(
            block.timestamp >= closeTimestamp + CLOSE_DURATION,
            "CLOSE_DURATION!"
        );
        inTerminal = true;
        scriptEngine.bucketClose(bucket.bucketID);
        emit ExecuteClost(_candidates[0], bucket.bucketID, closeTimestamp);
    }

    function closeTerminal() public onlyRole(DEFAULT_ADMIN_ROLE) {
        require(inTerminal, "not in terminal!");
        Bucket memory bucket = candidateToBucket[_candidates[currentIndex]];

        delete candidateToBucket[_candidates[0]];
        delete bucketIDToCandidate[bucket.bucketID];
        delete candidateIndex[_candidates[0]];
        delete _candidates;
        inTerminal = false;
        emit TerminalClost(block.timestamp);
    }

    function deposit(uint256 amount) public whenNotPaused notClose {
        require(_totalShares > 0, "totalShares = 0");
        address account = msg.sender;
        uint256 shares_ = _valueToShare(amount);

        _shares[account] += shares_;
        _totalShares += shares_;
        MTRG.transferFrom(account, address(this), amount);
        emit Transfer(address(0x0), account, amount);

        _deposit(account, amount);
    }

    function _deposit(
        address account,
        uint256 amount
    ) private returns (bytes32 bucketID) {
        bool success;
        bytes memory data;
        for (uint256 i = 0; i < _candidates.length; ++i) {
            currentIndex = currentIndex >= _candidates.length
                ? 0
                : currentIndex;
            Bucket storage bucket = candidateToBucket[
                _candidates[currentIndex]
            ];
            (success, data) = address(scriptEngine).call(
                abi.encodeWithSelector(
                    IScriptEngine.bucketDeposit.selector,
                    bucket.bucketID,
                    amount
                )
            );
            currentIndex += 1;
            if (success && abi.decode(data, (bool))) {
                bucket.totalDeposit += amount;
                emit Deposit(account, bucket.bucketID, amount);
                bucketID = bucket.bucketID;
                break;
            }
        }
        require(success && abi.decode(data, (bool)), "no dst candidate!");
    }

    function _withdraw(
        address account,
        uint256 amount,
        address recipient
    ) private {
        uint256 burnShares = _valueToShare(amount);
        uint256 accountShares = _shares[account];
        require(
            accountShares >= burnShares || burnShares - accountShares < 1e10,
            "ERC20: burn amount exceeds balance"
        );
        require(!_blackList[account], "account is in black list");
        _shares[account] = accountShares.raySub(burnShares);
        _totalShares = _totalShares.raySub(burnShares);
        emit Transfer(account, address(0), amount);
        for (uint256 i; i < _candidates.length; ++i) {
            currentIndex = currentIndex >= _candidates.length
                ? 0
                : currentIndex;
            Bucket storage bucket = candidateToBucket[
                _candidates[currentIndex]
            ];
            uint256 sendAmount;
            if (amount >= bucket.totalDeposit) {
                sendAmount = bucket.totalDeposit;
                amount -= bucket.totalDeposit;
                bucket.totalDeposit = 0;
            } else {
                sendAmount = amount;
                bucket.totalDeposit -= amount;
                amount = 0;
            }
            scriptEngine.bucketWithdraw(bucket.bucketID, sendAmount, recipient);
            emit Withdraw(account, bucket.bucketID, sendAmount);
            if (amount == 0) break;
            currentIndex += 1;
        }
        if (amount > 0) {
            uint256 balance = MTRG.balanceOf(address(this));
            require(balance >= amount, "Insufficient balance");
            MTRG.transfer(recipient, amount);
            emit Withdraw(account, bytes32(0), amount);
        }
    }

    function withdraw(uint256 amount, address recipient) public whenNotPaused {
        require(!inTerminal, "in terminal!");
        _withdraw(msg.sender, amount, recipient);
    }

    function withdrawAll(address recipient) public whenNotPaused {
        require(!inTerminal, "in terminal!");
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
        return _totalShares;
    }

    function shares(address account) public view returns (uint256) {
        return _shares[account];
    }

    function candidates() public view returns (address[] memory) {
        return _candidates;
    }

    function bucketValue(bytes32 bucketID) public view returns (uint256) {
        return scriptEngine.bucketValue(bucketID);
    }

    function allBuckets() public view returns (Bucket[] memory) {
        uint256 length = _candidates.length;
        Bucket[] memory buckets = new Bucket[](length);
        for (uint256 i = 0; i < _candidates.length; ++i) {
            buckets[i] = candidateToBucket[_candidates[i]];
        }
        return buckets;
    }

    function shareToValue(uint256 _share) public view returns (uint256) {
        uint256 _totalSupply = MTRG.balanceOf(address(this));
        for (uint256 i = 0; i < _candidates.length; ++i) {
            Bucket memory bucket = candidateToBucket[_candidates[i]];
            _totalSupply += bucket.totalDeposit;
            _totalSupply += bucket.locked;
        }
        return (_share.rayMul(_totalSupply)).rayDiv(_totalShares);
    }

    function valueToShare(uint256 _value) public view returns (uint256) {
        return _valueToShare(_value);
    }

    function _valueToShare(uint256 _value) private view returns (uint256) {
        uint256 _totalSupply = MTRG.balanceOf(address(this));
        for (uint256 i = 0; i < _candidates.length; ++i) {
            Bucket memory bucket = candidateToBucket[_candidates[i]];
            _totalSupply += bucket.totalDeposit;
            _totalSupply += bucket.locked;
        }
        return _value.rayMul(_totalShares).rayDiv(_totalSupply);
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

        uint256 shares_ = _valueToShare(_value);
        uint256 fromShares = _shares[_from];
        require(
            fromShares >= shares_ || shares_ - fromShares < 1e10,
            "ERC20: transfer amount exceeds balance"
        );
        unchecked {
            _shares[_from] = fromShares.raySub(shares_);
            _shares[_to] += shares_;
        }

        emit Transfer(_from, _to, _value);

        _afterTokenTransfer(_from, _to, _value);
    }
}
