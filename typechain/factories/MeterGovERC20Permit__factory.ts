/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { MeterGovERC20Permit } from "../MeterGovERC20Permit";

export class MeterGovERC20Permit__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<MeterGovERC20Permit> {
    return super.deploy(overrides || {}) as Promise<MeterGovERC20Permit>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MeterGovERC20Permit {
    return super.attach(address) as MeterGovERC20Permit;
  }
  connect(signer: Signer): MeterGovERC20Permit__factory {
    return super.connect(signer) as MeterGovERC20Permit__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MeterGovERC20Permit {
    return new Contract(address, _abi, signerOrProvider) as MeterGovERC20Permit;
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
    name: "balanceOfBoundMtrg",
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
  "0x60a0604052600180546001600160a01b0319166a4d657465724e61746976651790557f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c960805234801561005157600080fd5b5060805161124461006a600039600050506112446000f3fe608060405234801561001057600080fd5b50600436106101425760003560e01c8063712ac56d116100b8578063a9e91e541161007c578063a9e91e54146102de578063bb35783b14610305578063caac6c8214610318578063d89135cd1461033f578063da28b52714610347578063dd62ed3e1461037a57600080fd5b8063712ac56d1461025c5780637ecebe001461028357806395d89b41146102965780639fd5a6cf146102b6578063a9059cbb146102cb57600080fd5b8063313ce5671161010a578063313ce567146101d157806334f9d406146101e05780633644e515146102075780635d2dab0b1461020f5780635d5aaa821461023657806370a082311461024957600080fd5b806306fdde0314610147578063095ea7b31461017d57806318160ddd146101a057806323b872dd146101b65780632b437d48146101c9575b600080fd5b60408051808201909152600881526726b2ba32b923b7bb60c11b60208201525b6040516101749190610f2e565b60405180910390f35b61019061018b366004610f98565b6103b1565b6040519015158152602001610174565b6101a86103c5565b604051908152602001610174565b6101906101c4366004610fc4565b610437565b6101a8605281565b60405160128152602001610174565b6101a87f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981565b6101a86104f9565b6101a87f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f81565b6101a8610244366004611005565b610503565b6101a8610257366004611005565b610579565b6101a87fe8245ed8f93ccf147bc8972ab6d5f8278ed994d647700daaa5b7ebde9370aa6f81565b6101a8610291366004611005565b6105ac565b6040805180820190915260048152634d54524760e01b6020820152610167565b6102c96102c4366004611038565b6105ca565b005b6101906102d9366004610f98565b610749565b6101a87f5d0a451daeda5bd9f4095b6c09da34bdf3b91f4b8b8f60e3dd42d9d0d1ed158481565b610190610313366004610fc4565b61075f565b6101a87f5e422fe6c718eb4b17d6b107d0b546cf8641493faaaddb68e483cd686c1d756c81565b6101a8610843565b61036273228ebbee999c6a7ad74a6130e81b12f9fe237ba381565b6040516001600160a01b039091168152602001610174565b6101a8610388366004611122565b6001600160a01b0391821660009081526020818152604080832093909416825291909152205490565b60006103be33848461088d565b9392505050565b60015460408051620511b760ed1b815290516000926001600160a01b03169163a236e0009160048083019260209291908290030181865afa15801561040e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610432919061115b565b905090565b6001600160a01b0383166000908152602081815260408083203384529091528120548211156104ad5760405162461bcd60e51b815260206004820152601f60248201527f6275696c74696e3a20696e73756666696369656e7420616c6c6f77616e63650060448201526064015b60405180910390fd5b6001600160a01b038416600090815260208181526040808320338452909152812080548492906104de90849061118a565b909155506104ef90508484846108f3565b5060019392505050565b6000610432610a75565b6001546040516398c6fb8d60e01b81526001600160a01b03838116600483015260009216906398c6fb8d906024015b602060405180830381865afa15801561054f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610573919061115b565b92915050565b600154604051630a30af2760e41b81526001600160a01b038381166004830152600092169063a30af27090602401610532565b6001600160a01b038116600090815260026020526040812054610573565b8142111561061a5760405162461bcd60e51b815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e6500000060448201526064016104a4565b60007f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9868686610667836001600160a01b0316600090815260026020526040902080546001810190915590565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810184905260e00160405160208183030381529060405280519060200120905060006106c282610b68565b905060006106d08285610bb6565b9050876001600160a01b0316816001600160a01b0316146107335760405162461bcd60e51b815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e6174757265000060448201526064016104a4565b61073e88888861088d565b505050505050505050565b60006107563384846108f3565b50600192915050565b60006001600160a01b0384163314806107ec575060015460405163059950e960e01b81526001600160a01b0386811660048301523392169063059950e990602401602060405180830381865afa1580156107bd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107e191906111a1565b6001600160a01b0316145b6108385760405162461bcd60e51b815260206004820181905260248201527f6275696c74696e3a2073656c66206f72206d617374657220726571756972656460448201526064016104a4565b6104ef8484846108f3565b6001546040805163eaa93f6b60e01b815290516000926001600160a01b03169163eaa93f6b9160048083019260209291908290030181865afa15801561040e573d6000803e3d6000fd5b6001600160a01b0383811660008181526020818152604080832094871680845294825280832086905551858152919392917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a35060019392505050565b8015610a23576001546040516315df233f60e11b81526001600160a01b0385811660048301526024820184905290911690632bbe467e906044016020604051808303816000875af115801561094c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061097091906111be565b6109bc5760405162461bcd60e51b815260206004820152601d60248201527f6275696c74696e3a20696e73756666696369656e742062616c616e636500000060448201526064016104a4565b6001546040516337dde9b560e21b81526001600160a01b038481166004830152602482018490529091169063df77a6d490604401600060405180830381600087803b158015610a0a57600080fd5b505af1158015610a1e573d6000803e3d6000fd5b505050505b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610a6891815260200190565b60405180910390a3505050565b60003073228ebbee999c6a7ad74a6130e81b12f9fe237ba3148015610a9a5750605246145b15610ac457507f5d0a451daeda5bd9f4095b6c09da34bdf3b91f4b8b8f60e3dd42d9d0d1ed158490565b50604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6020808301919091527f5e422fe6c718eb4b17d6b107d0b546cf8641493faaaddb68e483cd686c1d756c828401527fe8245ed8f93ccf147bc8972ab6d5f8278ed994d647700daaa5b7ebde9370aa6f60608301524660808301523060a0808401919091528351808403909101815260c0909201909252805191012090565b6000610573610b75610a75565b8360405161190160f01b6020820152602281018390526042810182905260009060620160405160208183030381529060405280519060200120905092915050565b6000806000610bc58585610bda565b91509150610bd281610c4a565b509392505050565b600080825160411415610c115760208301516040840151606085015160001a610c0587828585610e08565b94509450505050610c43565b825160401415610c3b5760208301516040840151610c30868383610ef5565b935093505050610c43565b506000905060025b9250929050565b6000816004811115610c5e57610c5e6111e0565b1415610c675750565b6001816004811115610c7b57610c7b6111e0565b1415610cc95760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e6174757265000000000000000060448201526064016104a4565b6002816004811115610cdd57610cdd6111e0565b1415610d2b5760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e6774680060448201526064016104a4565b6003816004811115610d3f57610d3f6111e0565b1415610d985760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b60648201526084016104a4565b6004816004811115610dac57610dac6111e0565b1415610e055760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b60648201526084016104a4565b50565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115610e3f5750600090506003610eec565b8460ff16601b14158015610e5757508460ff16601c14155b15610e685750600090506004610eec565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015610ebc573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116610ee557600060019250925050610eec565b9150600090505b94509492505050565b6000806001600160ff1b03831681610f1260ff86901c601b6111f6565b9050610f2087828885610e08565b935093505050935093915050565b600060208083528351808285015260005b81811015610f5b57858101830151858201604001528201610f3f565b81811115610f6d576000604083870101525b50601f01601f1916929092016040019392505050565b6001600160a01b0381168114610e0557600080fd5b60008060408385031215610fab57600080fd5b8235610fb681610f83565b946020939093013593505050565b600080600060608486031215610fd957600080fd5b8335610fe481610f83565b92506020840135610ff481610f83565b929592945050506040919091013590565b60006020828403121561101757600080fd5b81356103be81610f83565b634e487b7160e01b600052604160045260246000fd5b600080600080600060a0868803121561105057600080fd5b853561105b81610f83565b9450602086013561106b81610f83565b93506040860135925060608601359150608086013567ffffffffffffffff8082111561109657600080fd5b818801915088601f8301126110aa57600080fd5b8135818111156110bc576110bc611022565b604051601f8201601f19908116603f011681019083821181831017156110e4576110e4611022565b816040528281528b60208487010111156110fd57600080fd5b8260208601602083013760006020848301015280955050505050509295509295909350565b6000806040838503121561113557600080fd5b823561114081610f83565b9150602083013561115081610f83565b809150509250929050565b60006020828403121561116d57600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b60008282101561119c5761119c611174565b500390565b6000602082840312156111b357600080fd5b81516103be81610f83565b6000602082840312156111d057600080fd5b815180151581146103be57600080fd5b634e487b7160e01b600052602160045260246000fd5b6000821982111561120957611209611174565b50019056fea2646970667358221220afa30d122e8609a4372d5b7c6671e0a23cebfb18f1290e503c264bbe09dd8b0864736f6c634300080b0033";
