/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { MeterERC20Permit } from "../MeterERC20Permit";

export class MeterERC20Permit__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<MeterERC20Permit> {
    return super.deploy(overrides || {}) as Promise<MeterERC20Permit>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MeterERC20Permit {
    return super.attach(address) as MeterERC20Permit;
  }
  connect(signer: Signer): MeterERC20Permit__factory {
    return super.connect(signer) as MeterERC20Permit__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MeterERC20Permit {
    return new Contract(address, _abi, signerOrProvider) as MeterERC20Permit;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
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
    inputs: [],
    name: "_CACHED_CHAIN_ID",
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
    inputs: [],
    name: "_CACHED_DOMAIN_SEPARATOR",
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
    inputs: [],
    name: "_CACHED_THIS",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "_CONST_PERMIT_TYPEHASH",
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
    inputs: [],
    name: "_HASHED_NAME",
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
    inputs: [],
    name: "_HASHED_VERSION",
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
    inputs: [],
    name: "_TYPE_HASH",
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
        name: "_owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "remaining",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "approve",
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
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "balanceOfBoundMtr",
    outputs: [
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "move",
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
    inputs: [],
    name: "name",
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
    ],
    name: "nonces",
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
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
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
    inputs: [],
    name: "totalBurned",
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
    inputs: [],
    name: "totalSupply",
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
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "transfer",
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
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
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
];

const _bytecode =
  "0x60a0604052600180546001600160a01b0319166a4d657465724e61746976651790557f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c960805234801561005157600080fd5b5060805161124161006a600039600050506112416000f3fe608060405234801561001057600080fd5b50600436106101425760003560e01c80637ecebe00116100b8578063a9e91e541161007c578063a9e91e54146102da578063bb35783b14610301578063caac6c8214610314578063d89135cd1461033b578063da28b52714610343578063dd62ed3e1461037657600080fd5b80637ecebe001461026d578063883cb39d1461028057806395d89b41146102935780639fd5a6cf146102b2578063a9059cbb146102c757600080fd5b8063313ce5671161010a578063313ce567146101ce57806334f9d406146101dd5780633644e515146102045780635d2dab0b1461020c57806370a0823114610233578063712ac56d1461024657600080fd5b806306fdde0314610147578063095ea7b31461017a57806318160ddd1461019d57806323b872dd146101b35780632b437d48146101c6575b600080fd5b60408051808201909152600581526426b2ba32b960d91b60208201525b6040516101719190610f2b565b60405180910390f35b61018d610188366004610f95565b6103ad565b6040519015158152602001610171565b6101a56103c1565b604051908152602001610171565b61018d6101c1366004610fc1565b610434565b6101a5605281565b60405160128152602001610171565b6101a57f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981565b6101a56104f6565b6101a57f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f81565b6101a5610241366004611002565b610500565b6101a57fe8245ed8f93ccf147bc8972ab6d5f8278ed994d647700daaa5b7ebde9370aa6f81565b6101a561027b366004611002565b610576565b6101a561028e366004611002565b610594565b60408051808201909152600381526226aa2960e91b6020820152610164565b6102c56102c0366004611035565b6105c7565b005b61018d6102d5366004610f95565b610746565b6101a57f5d0a451daeda5bd9f4095b6c09da34bdf3b91f4b8b8f60e3dd42d9d0d1ed158481565b61018d61030f366004610fc1565b61075c565b6101a57f5e422fe6c718eb4b17d6b107d0b546cf8641493faaaddb68e483cd686c1d756c81565b6101a5610840565b61035e73228ebbee999c6a7ad74a6130e81b12f9fe237ba381565b6040516001600160a01b039091168152602001610171565b6101a561038436600461111f565b6001600160a01b0391821660009081526020818152604080832093909416825291909152205490565b60006103ba33848461088a565b9392505050565b6001546040805163076e361d60e01b815290516000926001600160a01b03169163076e361d9160048083019260209291908290030181865afa15801561040b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061042f9190611158565b905090565b6001600160a01b0383166000908152602081815260408083203384529091528120548211156104aa5760405162461bcd60e51b815260206004820152601f60248201527f6275696c74696e3a20696e73756666696369656e7420616c6c6f77616e63650060448201526064015b60405180910390fd5b6001600160a01b038416600090815260208181526040808320338452909152812080548492906104db908490611187565b909155506104ec90508484846108f0565b5060019392505050565b600061042f610a72565b600154604051630511d90360e01b81526001600160a01b0383811660048301526000921690630511d903906024015b602060405180830381865afa15801561054c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105709190611158565b92915050565b6001600160a01b038116600090815260026020526040812054610570565b60015460405163186d514160e11b81526001600160a01b03838116600483015260009216906330daa2829060240161052f565b814211156106175760405162461bcd60e51b815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e6500000060448201526064016104a1565b60007f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9868686610664836001600160a01b0316600090815260026020526040902080546001810190915590565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810184905260e00160405160208183030381529060405280519060200120905060006106bf82610b65565b905060006106cd8285610bb3565b9050876001600160a01b0316816001600160a01b0316146107305760405162461bcd60e51b815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e6174757265000060448201526064016104a1565b61073b88888861088a565b505050505050505050565b60006107533384846108f0565b50600192915050565b60006001600160a01b0384163314806107e9575060015460405163059950e960e01b81526001600160a01b0386811660048301523392169063059950e990602401602060405180830381865afa1580156107ba573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107de919061119e565b6001600160a01b0316145b6108355760405162461bcd60e51b815260206004820181905260248201527f6275696c74696e3a2073656c66206f72206d617374657220726571756972656460448201526064016104a1565b6104ec8484846108f0565b6001546040805163ccc7df9d60e01b815290516000926001600160a01b03169163ccc7df9d9160048083019260209291908290030181865afa15801561040b573d6000803e3d6000fd5b6001600160a01b0383811660008181526020818152604080832094871680845294825280832086905551858152919392917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a35060019392505050565b8015610a205760015460405163f14645f560e01b81526001600160a01b038581166004830152602482018490529091169063f14645f5906044016020604051808303816000875af1158015610949573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061096d91906111bb565b6109b95760405162461bcd60e51b815260206004820152601d60248201527f6275696c74696e3a20696e73756666696369656e742062616c616e636500000060448201526064016104a1565b60015460405163740b155f60e01b81526001600160a01b038481166004830152602482018490529091169063740b155f90604401600060405180830381600087803b158015610a0757600080fd5b505af1158015610a1b573d6000803e3d6000fd5b505050505b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610a6591815260200190565b60405180910390a3505050565b60003073228ebbee999c6a7ad74a6130e81b12f9fe237ba3148015610a975750605246145b15610ac157507f5d0a451daeda5bd9f4095b6c09da34bdf3b91f4b8b8f60e3dd42d9d0d1ed158490565b50604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6020808301919091527f5e422fe6c718eb4b17d6b107d0b546cf8641493faaaddb68e483cd686c1d756c828401527fe8245ed8f93ccf147bc8972ab6d5f8278ed994d647700daaa5b7ebde9370aa6f60608301524660808301523060a0808401919091528351808403909101815260c0909201909252805191012090565b6000610570610b72610a72565b8360405161190160f01b6020820152602281018390526042810182905260009060620160405160208183030381529060405280519060200120905092915050565b6000806000610bc28585610bd7565b91509150610bcf81610c47565b509392505050565b600080825160411415610c0e5760208301516040840151606085015160001a610c0287828585610e05565b94509450505050610c40565b825160401415610c385760208301516040840151610c2d868383610ef2565b935093505050610c40565b506000905060025b9250929050565b6000816004811115610c5b57610c5b6111dd565b1415610c645750565b6001816004811115610c7857610c786111dd565b1415610cc65760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e6174757265000000000000000060448201526064016104a1565b6002816004811115610cda57610cda6111dd565b1415610d285760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e6774680060448201526064016104a1565b6003816004811115610d3c57610d3c6111dd565b1415610d955760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b60648201526084016104a1565b6004816004811115610da957610da96111dd565b1415610e025760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b60648201526084016104a1565b50565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115610e3c5750600090506003610ee9565b8460ff16601b14158015610e5457508460ff16601c14155b15610e655750600090506004610ee9565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015610eb9573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116610ee257600060019250925050610ee9565b9150600090505b94509492505050565b6000806001600160ff1b03831681610f0f60ff86901c601b6111f3565b9050610f1d87828885610e05565b935093505050935093915050565b600060208083528351808285015260005b81811015610f5857858101830151858201604001528201610f3c565b81811115610f6a576000604083870101525b50601f01601f1916929092016040019392505050565b6001600160a01b0381168114610e0257600080fd5b60008060408385031215610fa857600080fd5b8235610fb381610f80565b946020939093013593505050565b600080600060608486031215610fd657600080fd5b8335610fe181610f80565b92506020840135610ff181610f80565b929592945050506040919091013590565b60006020828403121561101457600080fd5b81356103ba81610f80565b634e487b7160e01b600052604160045260246000fd5b600080600080600060a0868803121561104d57600080fd5b853561105881610f80565b9450602086013561106881610f80565b93506040860135925060608601359150608086013567ffffffffffffffff8082111561109357600080fd5b818801915088601f8301126110a757600080fd5b8135818111156110b9576110b961101f565b604051601f8201601f19908116603f011681019083821181831017156110e1576110e161101f565b816040528281528b60208487010111156110fa57600080fd5b8260208601602083013760006020848301015280955050505050509295509295909350565b6000806040838503121561113257600080fd5b823561113d81610f80565b9150602083013561114d81610f80565b809150509250929050565b60006020828403121561116a57600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b60008282101561119957611199611171565b500390565b6000602082840312156111b057600080fd5b81516103ba81610f80565b6000602082840312156111cd57600080fd5b815180151581146103ba57600080fd5b634e487b7160e01b600052602160045260246000fd5b6000821982111561120657611206611171565b50019056fea2646970667358221220be6cf9bb8d3c8108adacc27d6c2df194805bd99ca1580336f43e11b4016b5b9c64736f6c634300080b0033";
