/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { MeterNativeV3 } from "../MeterNativeV3";

export class MeterNativeV3__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<MeterNativeV3> {
    return super.deploy(overrides || {}) as Promise<MeterNativeV3>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MeterNativeV3 {
    return super.attach(address) as MeterNativeV3;
  }
  connect(signer: Signer): MeterNativeV3__factory {
    return super.connect(signer) as MeterNativeV3__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MeterNativeV3 {
    return new Contract(address, _abi, signerOrProvider) as MeterNativeV3;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
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
  "0x608060405234801561001057600080fd5b50610909806100206000396000f3fe608060405234801561001057600080fd5b50600436106101825760003560e01c8063a236e000116100d8578063ccc7df9d1161008c578063ea4f867011610066578063ea4f8670146102ef578063eaa93f6b146101d4578063f14645f5146102fd57600080fd5b8063ccc7df9d146101d4578063df77a6d4146102c6578063e986c744146102d957600080fd5b8063b547784b116100bd578063b547784b1461028d578063baa28902146102a0578063cc230641146102b357600080fd5b8063a236e000146101d4578063a30af2701461018757600080fd5b806330daa2821161013a578063740b155f11610114578063740b155f1461025f578063981efa461461027257806398c6fb8d1461018757600080fd5b806330daa282146101875780634c586ff81461021357806358aeee2a1461023757600080fd5b8063076e361d1161016b578063076e361d146101d457806320ae6501146101db5780632bbe467e146101f057600080fd5b80630511d90314610187578063059950e9146101ae575b600080fd5b61019b610195366004610715565b50600090565b6040519081526020015b60405180910390f35b6101bc610195366004610715565b6040516001600160a01b0390911681526020016101a5565b600061019b565b6101ee6101e9366004610737565b610310565b005b6102036101fe366004610737565b610390565b60405190151581526020016101a5565b61022a610221366004610761565b60609392505050565b6040516101a591906107e1565b6102516102453660046107f4565b60006060935093915050565b6040516101a5929190610830565b6101ee61026d366004610737565b61041d565b610251610280366004610851565b6000606094509492505050565b6101ee61029b366004610737565b610495565b6102036102ae366004610737565b61050d565b6102036102c1366004610737565b610589565b6101ee6102d4366004610737565b610605565b61022a6102e7366004610737565b606092915050565b61022a610221366004610897565b61020361030b366004610737565b61067d565b604080516001600160a01b03841681526020810183905260609181018290526015918101919091527f6e61746976655f6d74725f6c6f636b65645f616464000000000000000000000060808201527fe733fdb97bd02ae887462b30f938653e7a701cf0ec92fc28d4e57d462961f2149060a0015b60405180910390a15050565b60007fe733fdb97bd02ae887462b30f938653e7a701cf0ec92fc28d4e57d462961f214838360405161040c9291906001600160a01b039290921682526020820152606060408201819052600f908201527f6e61746976655f6d7472675f7375620000000000000000000000000000000000608082015260a00190565b60405180910390a150600192915050565b604080516001600160a01b0384168152602081018390526060918101829052600e918101919091527f6e61746976655f6d74725f61646400000000000000000000000000000000000060808201527fe733fdb97bd02ae887462b30f938653e7a701cf0ec92fc28d4e57d462961f2149060a001610384565b604080516001600160a01b03841681526020810183905260609181018290526016918101919091527f6e61746976655f6d7472675f6c6f636b65645f6164640000000000000000000060808201527fe733fdb97bd02ae887462b30f938653e7a701cf0ec92fc28d4e57d462961f2149060a001610384565b60007fe733fdb97bd02ae887462b30f938653e7a701cf0ec92fc28d4e57d462961f214838360405161040c9291906001600160a01b0392909216825260208201526060604082018190526015908201527f6e61746976655f6d74725f6c6f636b65645f7375620000000000000000000000608082015260a00190565b60007fe733fdb97bd02ae887462b30f938653e7a701cf0ec92fc28d4e57d462961f214838360405161040c9291906001600160a01b0392909216825260208201526060604082018190526016908201527f6e61746976655f6d7472675f6c6f636b65645f73756200000000000000000000608082015260a00190565b604080516001600160a01b0384168152602081018390526060918101829052600f918101919091527f6e61746976655f6d7472675f616464000000000000000000000000000000000060808201527fe733fdb97bd02ae887462b30f938653e7a701cf0ec92fc28d4e57d462961f2149060a001610384565b60007fe733fdb97bd02ae887462b30f938653e7a701cf0ec92fc28d4e57d462961f214838360405161040c9291906001600160a01b039290921682526020820152606060408201819052600e908201527f6e61746976655f6d74725f737562000000000000000000000000000000000000608082015260a00190565b80356001600160a01b038116811461071057600080fd5b919050565b60006020828403121561072757600080fd5b610730826106f9565b9392505050565b6000806040838503121561074a57600080fd5b610753836106f9565b946020939093013593505050565b60008060006060848603121561077657600080fd5b61077f846106f9565b95602085013595506040909401359392505050565b6000815180845260005b818110156107ba5760208185018101518683018201520161079e565b818111156107cc576000602083870101525b50601f01601f19169290920160200192915050565b6020815260006107306020830184610794565b60008060006060848603121561080957600080fd5b610812846106f9565b9250610820602085016106f9565b9150604084013590509250925092565b8281526040602082015260006108496040830184610794565b949350505050565b6000806000806080858703121561086757600080fd5b610870856106f9565b9350602085013592506040850135915061088c606086016106f9565b905092959194509250565b6000806000606084860312156108ac57600080fd5b6108b5846106f9565b9250602084013591506108ca604085016106f9565b9050925092509256fea2646970667358221220ba8750d46cce4fa985110511b611d033056ae4e74ab11ab89e65536949966a0664736f6c634300080b0033";
