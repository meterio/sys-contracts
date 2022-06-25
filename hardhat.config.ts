import "hardhat-typechain";
import "@nomiclabs/hardhat-ethers";
import { task } from "hardhat/config";
import { deployContract, compileSetting, getContract } from "./scripts/helper";
import {MeterGovERC20Permit} from './typechain'

const dotenv = require("dotenv");
dotenv.config();

export default {
  networks: {
    metertest: {
      url: `https://rpctest.meter.io`,
      chainId: 83,
      gasPrice: 500000000000,
      accounts: [
        process.env.TESTNET_CONTRACT_ADMIN_PRIVKEY
      ],
    },
    metermain: {
      url: `https://rpc.meter.io`,
      chainId: 82,
      gasPrice: 500000000000,
      accounts: [process.env.MAINNET_CONTRACT_ADMIN_PRIVKEY],
    },
    meterstage: {
      url: `http://127.0.0.1:8545`,
      chainId: 82,
      gasPrice: 500000000000,
      accounts: [process.env.MAINNET_CONTRACT_ADMIN_PRIVKEY],
    },

  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_APIKEY,
  },
  solidity: {
    compilers: [compileSetting("0.8.11", 200)],
  },
  mocha: {
    timeout: 200000,
  },
};
