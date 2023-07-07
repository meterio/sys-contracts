/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { MeterNativeV4 } from "../MeterNativeV4";

export class MeterNativeV4__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<MeterNativeV4> {
    return super.deploy(overrides || {}) as Promise<MeterNativeV4>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MeterNativeV4 {
    return super.attach(address) as MeterNativeV4;
  }
  connect(signer: Signer): MeterNativeV4__factory {
    return super.connect(signer) as MeterNativeV4__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MeterNativeV4 {
    return new Contract(address, _abi, signerOrProvider) as MeterNativeV4;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "token",
        type: "uint256",
      },
    ],
    name: "Bound",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_address",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "_method",
        type: "string",
      },
    ],
    name: "MeterTrackerEvent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "receivedMTR",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "releasedMTRG",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "actualPrice",
        type: "uint256",
      },
    ],
    name: "NativeAuctionEnd",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "startHeight",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "endHeight",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "mtrgOnAuction",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "reservedPrice",
        type: "uint256",
      },
    ],
    name: "NativeAuctionStart",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "bucketID",
        type: "bytes32",
      },
    ],
    name: "NativeBucketClose",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "bucketID",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "token",
        type: "uint256",
      },
    ],
    name: "NativeBucketDeposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "fromBktID",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "toBktID",
        type: "bytes32",
      },
    ],
    name: "NativeBucketMerge",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "bucketID",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "token",
        type: "uint256",
      },
    ],
    name: "NativeBucketOpen",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "fromBktID",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "token",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "toBktID",
        type: "bytes32",
      },
    ],
    name: "NativeBucketTransferFund",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "bucketID",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "fromCandidate",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "toCandidate",
        type: "address",
      },
    ],
    name: "NativeBucketUpdateCandidate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "fromBktID",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "token",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "toBktID",
        type: "bytes32",
      },
    ],
    name: "NativeBucketWithdraw",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "token",
        type: "uint256",
      },
    ],
    name: "Unbound",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "bucketID",
        type: "bytes32",
      },
    ],
    name: "native_bucket_close",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "bucketID",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "native_bucket_deposit",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "fromBucketID",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "toBucketID",
        type: "bytes32",
      },
    ],
    name: "native_bucket_merge",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "candidateAddr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "native_bucket_open",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "fromBucketID",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "toBucketID",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "native_bucket_transfer_fund",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "bucketID",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "newCandidateAddr",
        type: "address",
      },
    ],
    name: "native_bucket_update_candidate",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "bucketID",
        type: "bytes32",
      },
    ],
    name: "native_bucket_value",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "bucketID",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "native_bucket_withdraw",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "native_master",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "native_mtr_add",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "native_mtr_get",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "native_mtr_locked_add",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "native_mtr_locked_get",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "native_mtr_locked_sub",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "native_mtr_sub",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "native_mtr_totalBurned",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "native_mtr_totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "native_mtrg_add",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "native_mtrg_get",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "native_mtrg_locked_add",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "native_mtrg_locked_get",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "native_mtrg_locked_sub",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "native_mtrg_sub",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "native_mtrg_totalBurned",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "native_mtrg_totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506109a2806100206000396000f3fe608060405234801561001057600080fd5b50600436106101a35760003560e01c806398c6fb8d116100ee578063cc23064111610097578063e986c74411610071578063e986c74414610320578063ea4f867014610336578063eaa93f6b146101f5578063f14645f51461034457600080fd5b8063cc230641146102fa578063ccc7df9d146101f5578063df77a6d41461030d57600080fd5b8063adbd8645116100c8578063adbd8645146102c6578063b547784b146102d4578063baa28902146102e757600080fd5b806398c6fb8d146101a8578063a236e000146101f5578063a30af270146101a857600080fd5b806330daa28211610150578063740b155f1161012a578063740b155f146102985780638d65cf0e14610259578063981efa46146102ab57600080fd5b806330daa282146101a85780634c586ff81461025957806358aeee2a1461027057600080fd5b80631d377a79116101815780631d377a79146101fc57806320ae6501146102215780632bbe467e1461023657600080fd5b80630511d903146101a8578063059950e9146101cf578063076e361d146101f5575b600080fd5b6101bc6101b636600461075c565b50600090565b6040519081526020015b60405180910390f35b6101dd6101b636600461075c565b6040516001600160a01b0390911681526020016101c6565b60006101bc565b61021461020a36600461077e565b6060949350505050565b6040516101c69190610804565b61023461022f366004610817565b610357565b005b610249610244366004610817565b6103d7565b60405190151581526020016101c6565b610214610267366004610841565b60609392505050565b61028a61027e366004610874565b60006060935093915050565b6040516101c69291906108b0565b6102346102a6366004610817565b610464565b61028a6102b93660046108d1565b6000606094509492505050565b6101bc6101b6366004610917565b6102346102e2366004610817565b6104dc565b6102496102f5366004610817565b610554565b610249610308366004610817565b6105d0565b61023461031b366004610817565b61064c565b61021461032e366004610817565b606092915050565b610214610267366004610930565b610249610352366004610817565b6106c4565b604080516001600160a01b03841681526020810183905260609181018290526015918101919091527f6e61746976655f6d74725f6c6f636b65645f616464000000000000000000000060808201527fe733fdb97bd02ae887462b30f938653e7a701cf0ec92fc28d4e57d462961f2149060a0015b60405180910390a15050565b60007fe733fdb97bd02ae887462b30f938653e7a701cf0ec92fc28d4e57d462961f21483836040516104539291906001600160a01b039290921682526020820152606060408201819052600f908201527f6e61746976655f6d7472675f7375620000000000000000000000000000000000608082015260a00190565b60405180910390a150600192915050565b604080516001600160a01b0384168152602081018390526060918101829052600e918101919091527f6e61746976655f6d74725f61646400000000000000000000000000000000000060808201527fe733fdb97bd02ae887462b30f938653e7a701cf0ec92fc28d4e57d462961f2149060a0016103cb565b604080516001600160a01b03841681526020810183905260609181018290526016918101919091527f6e61746976655f6d7472675f6c6f636b65645f6164640000000000000000000060808201527fe733fdb97bd02ae887462b30f938653e7a701cf0ec92fc28d4e57d462961f2149060a0016103cb565b60007fe733fdb97bd02ae887462b30f938653e7a701cf0ec92fc28d4e57d462961f21483836040516104539291906001600160a01b0392909216825260208201526060604082018190526015908201527f6e61746976655f6d74725f6c6f636b65645f7375620000000000000000000000608082015260a00190565b60007fe733fdb97bd02ae887462b30f938653e7a701cf0ec92fc28d4e57d462961f21483836040516104539291906001600160a01b0392909216825260208201526060604082018190526016908201527f6e61746976655f6d7472675f6c6f636b65645f73756200000000000000000000608082015260a00190565b604080516001600160a01b0384168152602081018390526060918101829052600f918101919091527f6e61746976655f6d7472675f616464000000000000000000000000000000000060808201527fe733fdb97bd02ae887462b30f938653e7a701cf0ec92fc28d4e57d462961f2149060a0016103cb565b60007fe733fdb97bd02ae887462b30f938653e7a701cf0ec92fc28d4e57d462961f21483836040516104539291906001600160a01b039290921682526020820152606060408201819052600e908201527f6e61746976655f6d74725f737562000000000000000000000000000000000000608082015260a00190565b80356001600160a01b038116811461075757600080fd5b919050565b60006020828403121561076e57600080fd5b61077782610740565b9392505050565b6000806000806080858703121561079457600080fd5b61079d85610740565b966020860135965060408601359560600135945092505050565b6000815180845260005b818110156107dd576020818501810151868301820152016107c1565b818111156107ef576000602083870101525b50601f01601f19169290920160200192915050565b60208152600061077760208301846107b7565b6000806040838503121561082a57600080fd5b61083383610740565b946020939093013593505050565b60008060006060848603121561085657600080fd5b61085f84610740565b95602085013595506040909401359392505050565b60008060006060848603121561088957600080fd5b61089284610740565b92506108a060208501610740565b9150604084013590509250925092565b8281526040602082015260006108c960408301846107b7565b949350505050565b600080600080608085870312156108e757600080fd5b6108f085610740565b9350602085013592506040850135915061090c60608601610740565b905092959194509250565b60006020828403121561092957600080fd5b5035919050565b60008060006060848603121561094557600080fd5b61094e84610740565b92506020840135915061096360408501610740565b9050925092509256fea2646970667358221220dba632899a6551ceea1f5268f336e6288b8bd9d0faa53ba84062e7abd84ae96964736f6c634300080b0033";
