import { ethers } from "hardhat";
import { Logger } from "tslog";
import logSettings from "./log_settings";
import { BigNumber, ContractTransaction } from "ethers";
import {
  writeFileSync,
  mkdirSync,
  existsSync,
  readFileSync,
  unlinkSync,
} from "fs";

// tslint:disable-next-line:no-var-requires
const hre = require("hardhat");
const log: Logger = new Logger(logSettings);

export class Misc {
  public static readonly MAX_UINT = BigNumber.from(
    "115792089237316195423570985008687907853269984665640564039457584007913129639935"
  );
  public static readonly SECONDS_OF_DAY = 60 * 60 * 24;
  public static readonly SECONDS_OF_YEAR = Misc.SECONDS_OF_DAY * 365;
  public static readonly ZERO_ADDRESS =
    "0x0000000000000000000000000000000000000000";

  public static printDuration(text: string, start: number) {
    log.info(">>>" + text, ((Date.now() - start) / 1000).toFixed(1), "sec");
  }

  public static async getNetworkScanUrl(): Promise<string> {
    const net = hre.network.config.chainId;
    if (net === 4) {
      return "https://api-rinkeby.etherscan.io/api";
    } else if (net === 1) {
      return "https://api.etherscan.io/api";
    } else if (net === 137) {
      return "https://api.polygonscan.com/api";
    } else if (net === 250) {
      return "https://api.ftmscan.com//api";
    } else {
      throw Error("network not found " + net);
    }
  }

  public static async runAndWait(
    callback: () => Promise<ContractTransaction>,
    stopOnError = true,
    wait = true
  ) {
    const start = Date.now();
    const tr = await callback();
    if (!wait) {
      Misc.printDuration("runAndWait completed", start);
      return;
    }
    await Misc.wait(1);

    log.info("tx sent", tr.hash);

    let receipt;
    while (true) {
      receipt = await ethers.provider.getTransactionReceipt(tr.hash);
      if (!!receipt) {
        break;
      }
      log.info("not yet complete", tr.hash);
      await Misc.delay(10000);
    }
    log.info("transaction result", tr.hash, receipt?.status);
    log.info("gas used", receipt.gasUsed.toString());
    if (receipt?.status !== 1 && stopOnError) {
      throw Error("Wrong status!");
    }
    Misc.printDuration("runAndWait completed", start);
  }

  public static async impersonate(address: string) {
    await hre.network.provider.request({
      method: "hardhat_impersonateAccount",
      params: [address],
    });

    await hre.network.provider.request({
      method: "hardhat_setBalance",
      params: [address, "0x1431E0FAE6D7217CAA0000000"],
    });
    console.log("address impersonated", address);
    return ethers.getSigner(address);
  }

  public static clear() {
    if (existsSync("./deployments/metermain/StakingProxy.json"))
      unlinkSync("./deployments/metermain/StakingProxy.json");
    if (existsSync("./deployments/metermain/StMTRG.json"))
      unlinkSync("./deployments/metermain/StMTRG.json");
    if (existsSync("./deployments/metermain/WstMTRG.json"))
      unlinkSync("./deployments/metermain/WstMTRG.json");

    if (existsSync("./deployments/metertest/StakingProxy.json"))
      unlinkSync("./deployments/metertest/StakingProxy.json");
    if (existsSync("./deployments/metertest/StMTRG.json"))
      unlinkSync("./deployments/metertest/StMTRG.json");
    if (existsSync("./deployments/metertest/WstMTRG.json"))
      unlinkSync("./deployments/metertest/WstMTRG.json");
  }

  public static saveFile(chainId: number, name: string, address: string) {
    const nameArr = name.split(":");
    const contractName = nameArr.length > 1 ? nameArr[1] : nameArr[0];
    const path = `./deployments/${chainId}/`;
    const file = `${contractName}.json`;

    mkdirSync(path, { recursive: true });

    writeFileSync(
      path + file,
      JSON.stringify({
        address: address,
        contract: name,
      })
    );
  }

  public static getContract(chainId: number, name: string) {
    const nameArr = name.split(":");
    const contractName = nameArr.length > 1 ? nameArr[1] : nameArr[0];
    const path = `./deployments/${chainId}/`;
    const latest = `${contractName}.json`;

    if (existsSync(path + latest)) {
      return JSON.parse(readFileSync(path + latest).toString());
    } else {
      return { address: ethers.constants.AddressZero };
    }
  }

  // ****************** WAIT ******************

  public static async delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  public static async wait(blocks: number) {
    if (hre.network.name === "hardhat" || blocks === 0) {
      return;
    }
    const start = ethers.provider.blockNumber;
    while (true) {
      log.info("wait 10sec");
      await Misc.delay(10000);
      if (ethers.provider.blockNumber >= start + blocks) {
        break;
      }
    }
  }
}

export type Attributes = [
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber
] & {
  strength: BigNumber;
  dexterity: BigNumber;
  vitality: BigNumber;
  energy: BigNumber;
  damageMin: BigNumber;
  damageMax: BigNumber;
  attackRating: BigNumber;
  defense: BigNumber;
  blockRating: BigNumber;
  life: BigNumber;
  mana: BigNumber;
  fireResistance: BigNumber;
  coldResistance: BigNumber;
  lightningResistance: BigNumber;
};

export type Stats = [BigNumber, BigNumber, BigNumber, BigNumber] & {
  level: BigNumber;
  experience: BigNumber;
  life: BigNumber;
  mana: BigNumber;
};
