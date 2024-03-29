/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IScriptEngine } from "../IScriptEngine";

export class IScriptEngine__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IScriptEngine {
    return new Contract(address, _abi, signerOrProvider) as IScriptEngine;
  }
}

const _abi = [
  {
    inputs: [],
    name: "boundedMTRG",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
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
    name: "bucketClose",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
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
    name: "bucketDeposit",
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
        internalType: "bytes32",
        name: "bucketID",
        type: "bytes32",
      },
    ],
    name: "bucketExists",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
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
    name: "bucketMerge",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "candidate",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "bucketOpen",
    outputs: [
      {
        internalType: "bytes32",
        name: "bktID",
        type: "bytes32",
      },
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
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
    name: "bucketTransferFund",
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
    name: "bucketUpdateCandidate",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
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
    name: "bucketValue",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
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
    name: "bucketWithdraw",
    outputs: [
      {
        internalType: "bytes32",
        name: "newBktID",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];
