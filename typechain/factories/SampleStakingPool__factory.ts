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
  "0x6080604052600080546001600160a01b03199081167363726970742d656e67696e652d61646472657373179091556001805490911673228ebbee999c6a7ad74a6130e81b12f9fe237ba317905534801561005857600080fd5b506106ab806100686000396000f3fe608060405234801561001057600080fd5b50600436106100715760003560e01c806383197ef01161005057806383197ef0146100b7578063992d847e146100c1578063b6b55f25146100d457600080fd5b8062f714ce14610076578063278343001461009b578063399ae724146100a4575b600080fd5b6100896100843660046105b0565b6100e7565b60405190815260200160405180910390f35b61008960025481565b6100896100b23660046105dc565b6101c7565b6100bf610319565b005b6100bf6100cf366004610606565b6103d1565b6100bf6100e2366004610621565b61048e565b60025460009061013e5760405162461bcd60e51b815260206004820152601760248201527f706f6f6c206973206e6f7420696e697469616c697a656400000000000000000060448201526064015b60405180910390fd5b600054600254604051632b0fcbdf60e11b81526004810191909152602481018590526001600160a01b0384811660448301529091169063561f97be906064016020604051808303816000875af115801561019c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101c0919061063a565b9392505050565b6002546000901561021a5760405162461bcd60e51b815260206004820152601860248201527f706f6f6c20616c726561647920696e697469616c697a656400000000000000006044820152606401610135565b6001546040516323b872dd60e01b8152336004820152306024820152604481018490526001600160a01b03909116906323b872dd906064016020604051808303816000875af1158015610271573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102959190610653565b5060005460405163183077b960e11b81526001600160a01b0385811660048301526024820185905290911690633060ef72906044016020604051808303816000875af11580156102e9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061030d919061063a565b60028190559392505050565b6002546103685760405162461bcd60e51b815260206004820152601760248201527f706f6f6c206973206e6f7420696e697469616c697a65640000000000000000006044820152606401610135565b6000546002546040516377d7f91360e01b81526001600160a01b03909216916377d7f9139161039d9160040190815260200190565b600060405180830381600087803b1580156103b757600080fd5b505af11580156103cb573d6000803e3d6000fd5b50505050565b6002546104205760405162461bcd60e51b815260206004820152601760248201527f706f6f6c206973206e6f7420696e697469616c697a65640000000000000000006044820152606401610135565b6000546002546040516304a8292160e41b815260048101919091526001600160a01b03838116602483015290911690634a829210906044015b600060405180830381600087803b15801561047357600080fd5b505af1158015610487573d6000803e3d6000fd5b5050505050565b6002546104dd5760405162461bcd60e51b815260206004820152601760248201527f706f6f6c206973206e6f7420696e697469616c697a65640000000000000000006044820152606401610135565b6001546040516323b872dd60e01b8152336004820152306024820152604481018390526001600160a01b03909116906323b872dd906064016020604051808303816000875af1158015610534573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105589190610653565b50600054600254604051626de11b60e61b81526001600160a01b0390921691631b7846c091610459918590600401918252602082015260400190565b80356001600160a01b03811681146105ab57600080fd5b919050565b600080604083850312156105c357600080fd5b823591506105d360208401610594565b90509250929050565b600080604083850312156105ef57600080fd5b6105f883610594565b946020939093013593505050565b60006020828403121561061857600080fd5b6101c082610594565b60006020828403121561063357600080fd5b5035919050565b60006020828403121561064c57600080fd5b5051919050565b60006020828403121561066557600080fd5b815180151581146101c057600080fdfea264697066735822122066a00c89657ff8353de4ff9a537c42cc3b00cf42e1cffb2a9d1aeb89fb4448f564736f6c634300080b0033";
