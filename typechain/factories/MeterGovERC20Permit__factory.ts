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
  "0x610160604052600180546001600160a01b0319166a4d657465724e61746976651790557f5d0a451daeda5bd9f4095b6c09da34bdf3b91f4b8b8f60e3dd42d9d0d1ed1584608052605260a05273228ebbee999c6a7ad74a6130e81b12f9fe237ba360c0527f5e422fe6c718eb4b17d6b107d0b546cf8641493faaaddb68e483cd686c1d756c60e0527fe8245ed8f93ccf147bc8972ab6d5f8278ed994d647700daaa5b7ebde9370aa6f610100527f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f610120527f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c96101405234801561010257600080fd5b5060805160a05160c05160e05161010051610120516101405161115f61015a6000396000505060006109e601526000610a3501526000610a100152600061096901526000610993015260006109bd015261115f6000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c806370a0823111610097578063a9059cbb11610066578063a9059cbb14610233578063bb35783b14610246578063d89135cd14610259578063dd62ed3e1461026157600080fd5b806370a08231146101d85780637ecebe00146101eb57806395d89b41146101fe5780639fd5a6cf1461021e57600080fd5b8063313ce567116100d3578063313ce5671461018757806334f9d406146101965780633644e515146101bd5780635d5aaa82146101c557600080fd5b806306fdde0314610105578063095ea7b31461013b57806318160ddd1461015e57806323b872dd14610174575b600080fd5b60408051808201909152600881526726b2ba32b923b7bb60c11b60208201525b6040516101329190610e49565b60405180910390f35b61014e610149366004610eb3565b610298565b6040519015158152602001610132565b6101666102ac565b604051908152602001610132565b61014e610182366004610edf565b61031e565b60405160128152602001610132565b6101667f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981565b6101666103e0565b6101666101d3366004610f20565b6103ea565b6101666101e6366004610f20565b610460565b6101666101f9366004610f20565b610493565b6040805180820190915260048152634d54524760e01b6020820152610125565b61023161022c366004610f53565b6104b1565b005b61014e610241366004610eb3565b610630565b61014e610254366004610edf565b610646565b61016661072a565b61016661026f36600461103d565b6001600160a01b0391821660009081526020818152604080832093909416825291909152205490565b60006102a5338484610774565b9392505050565b60015460408051620511b760ed1b815290516000926001600160a01b03169163a236e0009160048083019260209291908290030181865afa1580156102f5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103199190611076565b905090565b6001600160a01b0383166000908152602081815260408083203384529091528120548211156103945760405162461bcd60e51b815260206004820152601f60248201527f6275696c74696e3a20696e73756666696369656e7420616c6c6f77616e63650060448201526064015b60405180910390fd5b6001600160a01b038416600090815260208181526040808320338452909152812080548492906103c59084906110a5565b909155506103d690508484846107da565b5060019392505050565b600061031961095c565b6001546040516398c6fb8d60e01b81526001600160a01b03838116600483015260009216906398c6fb8d906024015b602060405180830381865afa158015610436573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061045a9190611076565b92915050565b600154604051630a30af2760e41b81526001600160a01b038381166004830152600092169063a30af27090602401610419565b6001600160a01b03811660009081526002602052604081205461045a565b814211156105015760405162461bcd60e51b815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e65000000604482015260640161038b565b60007f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c986868661054e836001600160a01b0316600090815260026020526040902080546001810190915590565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810184905260e00160405160208183030381529060405280519060200120905060006105a982610a83565b905060006105b78285610ad1565b9050876001600160a01b0316816001600160a01b03161461061a5760405162461bcd60e51b815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e61747572650000604482015260640161038b565b610625888888610774565b505050505050505050565b600061063d3384846107da565b50600192915050565b60006001600160a01b0384163314806106d3575060015460405163059950e960e01b81526001600160a01b0386811660048301523392169063059950e990602401602060405180830381865afa1580156106a4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106c891906110bc565b6001600160a01b0316145b61071f5760405162461bcd60e51b815260206004820181905260248201527f6275696c74696e3a2073656c66206f72206d6173746572207265717569726564604482015260640161038b565b6103d68484846107da565b6001546040805163eaa93f6b60e01b815290516000926001600160a01b03169163eaa93f6b9160048083019260209291908290030181865afa1580156102f5573d6000803e3d6000fd5b6001600160a01b0383811660008181526020818152604080832094871680845294825280832086905551858152919392917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a35060019392505050565b801561090a576001546040516315df233f60e11b81526001600160a01b0385811660048301526024820184905290911690632bbe467e906044016020604051808303816000875af1158015610833573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061085791906110d9565b6108a35760405162461bcd60e51b815260206004820152601d60248201527f6275696c74696e3a20696e73756666696369656e742062616c616e6365000000604482015260640161038b565b6001546040516337dde9b560e21b81526001600160a01b038481166004830152602482018490529091169063df77a6d490604401600060405180830381600087803b1580156108f157600080fd5b505af1158015610905573d6000803e3d6000fd5b505050505b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161094f91815260200190565b60405180910390a3505050565b6000306001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161480156109b557507f000000000000000000000000000000000000000000000000000000000000000046145b156109df57507f000000000000000000000000000000000000000000000000000000000000000090565b50604080517f00000000000000000000000000000000000000000000000000000000000000006020808301919091527f0000000000000000000000000000000000000000000000000000000000000000828401527f000000000000000000000000000000000000000000000000000000000000000060608301524660808301523060a0808401919091528351808403909101815260c0909201909252805191012090565b600061045a610a9061095c565b8360405161190160f01b6020820152602281018390526042810182905260009060620160405160208183030381529060405280519060200120905092915050565b6000806000610ae08585610af5565b91509150610aed81610b65565b509392505050565b600080825160411415610b2c5760208301516040840151606085015160001a610b2087828585610d23565b94509450505050610b5e565b825160401415610b565760208301516040840151610b4b868383610e10565b935093505050610b5e565b506000905060025b9250929050565b6000816004811115610b7957610b796110fb565b1415610b825750565b6001816004811115610b9657610b966110fb565b1415610be45760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604482015260640161038b565b6002816004811115610bf857610bf86110fb565b1415610c465760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e67746800604482015260640161038b565b6003816004811115610c5a57610c5a6110fb565b1415610cb35760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b606482015260840161038b565b6004816004811115610cc757610cc76110fb565b1415610d205760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b606482015260840161038b565b50565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115610d5a5750600090506003610e07565b8460ff16601b14158015610d7257508460ff16601c14155b15610d835750600090506004610e07565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015610dd7573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116610e0057600060019250925050610e07565b9150600090505b94509492505050565b6000806001600160ff1b03831681610e2d60ff86901c601b611111565b9050610e3b87828885610d23565b935093505050935093915050565b600060208083528351808285015260005b81811015610e7657858101830151858201604001528201610e5a565b81811115610e88576000604083870101525b50601f01601f1916929092016040019392505050565b6001600160a01b0381168114610d2057600080fd5b60008060408385031215610ec657600080fd5b8235610ed181610e9e565b946020939093013593505050565b600080600060608486031215610ef457600080fd5b8335610eff81610e9e565b92506020840135610f0f81610e9e565b929592945050506040919091013590565b600060208284031215610f3257600080fd5b81356102a581610e9e565b634e487b7160e01b600052604160045260246000fd5b600080600080600060a08688031215610f6b57600080fd5b8535610f7681610e9e565b94506020860135610f8681610e9e565b93506040860135925060608601359150608086013567ffffffffffffffff80821115610fb157600080fd5b818801915088601f830112610fc557600080fd5b813581811115610fd757610fd7610f3d565b604051601f8201601f19908116603f01168101908382118183101715610fff57610fff610f3d565b816040528281528b602084870101111561101857600080fd5b8260208601602083013760006020848301015280955050505050509295509295909350565b6000806040838503121561105057600080fd5b823561105b81610e9e565b9150602083013561106b81610e9e565b809150509250929050565b60006020828403121561108857600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b6000828210156110b7576110b761108f565b500390565b6000602082840312156110ce57600080fd5b81516102a581610e9e565b6000602082840312156110eb57600080fd5b815180151581146102a557600080fd5b634e487b7160e01b600052602160045260246000fd5b600082198211156111245761112461108f565b50019056fea2646970667358221220d17f8dee637f54e19ad329def8ca717393cd904f24c9228e505a585204ebcd9464736f6c634300080b0033";
