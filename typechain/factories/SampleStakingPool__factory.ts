/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { SampleStakingPool } from "../SampleStakingPool";

export class SampleStakingPool__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<SampleStakingPool> {
    return super.deploy(overrides || {}) as Promise<SampleStakingPool>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SampleStakingPool {
    return super.attach(address) as SampleStakingPool;
  }
  connect(signer: Signer): SampleStakingPool__factory {
    return super.connect(signer) as SampleStakingPool__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SampleStakingPool {
    return new Contract(address, _abi, signerOrProvider) as SampleStakingPool;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "destroy",
    outputs: [],
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
    name: "init",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "poolBucketID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newCandidateAddr",
        type: "address",
      },
    ],
    name: "updateCandidate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
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
    name: "withdraw",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052600080546001600160a01b03199081167363726970742d656e67696e652d61646472657373179091556001805490911673228ebbee999c6a7ad74a6130e81b12f9fe237ba317905534801561005857600080fd5b50610616806100686000396000f3fe608060405234801561001057600080fd5b50600436106100615760003560e01c8062f714ce14610066578063278343001461008b578063399ae7241461009457806383197ef0146100a7578063992d847e146100b1578063b6b55f25146100c4575b600080fd5b6100796100743660046104e4565b6100d7565b60405190815260200160405180910390f35b61007960025481565b6100796100a2366004610510565b61018b565b6100af6102dd565b005b6100af6100bf36600461053a565b610365565b6100af6100d2366004610555565b6103f2565b6002546000906101025760405162461bcd60e51b81526004016100f99061056e565b60405180910390fd5b600054600254604051632b0fcbdf60e11b81526004810191909152602481018590526001600160a01b0384811660448301529091169063561f97be906064016020604051808303816000875af1158015610160573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061018491906105a5565b9392505050565b600254600090156101de5760405162461bcd60e51b815260206004820152601860248201527f706f6f6c20616c726561647920696e697469616c697a6564000000000000000060448201526064016100f9565b6001546040516323b872dd60e01b8152336004820152306024820152604481018490526001600160a01b03909116906323b872dd906064016020604051808303816000875af1158015610235573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061025991906105be565b5060005460405163183077b960e11b81526001600160a01b0385811660048301526024820185905290911690633060ef72906044016020604051808303816000875af11580156102ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102d191906105a5565b60028190559392505050565b6002546102fc5760405162461bcd60e51b81526004016100f99061056e565b6000546002546040516377d7f91360e01b81526001600160a01b03909216916377d7f913916103319160040190815260200190565b600060405180830381600087803b15801561034b57600080fd5b505af115801561035f573d6000803e3d6000fd5b50505050565b6002546103845760405162461bcd60e51b81526004016100f99061056e565b6000546002546040516304a8292160e41b815260048101919091526001600160a01b03838116602483015290911690634a829210906044015b600060405180830381600087803b1580156103d757600080fd5b505af11580156103eb573d6000803e3d6000fd5b5050505050565b6002546104115760405162461bcd60e51b81526004016100f99061056e565b6001546040516323b872dd60e01b8152336004820152306024820152604481018390526001600160a01b03909116906323b872dd906064016020604051808303816000875af1158015610468573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061048c91906105be565b50600054600254604051626de11b60e61b81526001600160a01b0390921691631b7846c0916103bd918590600401918252602082015260400190565b80356001600160a01b03811681146104df57600080fd5b919050565b600080604083850312156104f757600080fd5b82359150610507602084016104c8565b90509250929050565b6000806040838503121561052357600080fd5b61052c836104c8565b946020939093013593505050565b60006020828403121561054c57600080fd5b610184826104c8565b60006020828403121561056757600080fd5b5035919050565b60208082526017908201527f706f6f6c206973206e6f7420696e697469616c697a6564000000000000000000604082015260600190565b6000602082840312156105b757600080fd5b5051919050565b6000602082840312156105d057600080fd5b8151801515811461018457600080fdfea2646970667358221220785ad45711c555bdba430d02e7b78b2c184de424d378fd69ae0f1260a83fdf8a64736f6c634300080b0033";
