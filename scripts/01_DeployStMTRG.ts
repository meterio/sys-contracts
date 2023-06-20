import { Deploy } from "./Deploy";
import { ethers } from "hardhat";
import { Verify } from "./Verify";
import { Misc } from "./Misc";
import { StMTRG } from "../typechain";
const candidatesIndex = "01";
async function main() {
  const signer = (await ethers.getSigners())[0];
  const chainId = await signer.getChainId();
  const MTRG = Misc.getContract(chainId, "MTRG");
  const ScriptEngine = Misc.getContract(chainId, "ScriptEngine");
  let proxyAdmin = Misc.getContract(chainId, "ProxyAdmin");

  if (proxyAdmin.address == ethers.constants.AddressZero) {
    proxyAdmin = await Deploy.deployContract(signer, "ProxyAdmin");
    console.log("" + "proxy admin: " + proxyAdmin.address + "\n");
    Misc.saveFile(await signer.getChainId(), "ProxyAdmin", proxyAdmin.address);
  }

  const stMTRGimpl = (await Deploy.deployContract(signer, "StMTRG")) as StMTRG;

  const data = stMTRGimpl.interface.encodeFunctionData("initialize", [
    signer.address,
    MTRG.address,
    ScriptEngine.address,
  ]);
  const proxy = await Deploy.deployContract(
    signer,
    "StakingProxy",
    stMTRGimpl.address,
    proxyAdmin.address,
    data
  );

  console.log("" + "StMTRG impl: " + stMTRGimpl.address + "\n");
  console.log("" + "StMTRG: " + proxy.address + "\n");
  Misc.saveFile(
    await signer.getChainId(),
    "StMTRG_Impl_" + candidatesIndex,
    stMTRGimpl.address
  );
  Misc.saveFile(
    await signer.getChainId(),
    "StMTRG_Proxy_" + candidatesIndex,
    proxy.address
  );
  await Misc.wait(5);
  await Verify.sourcify();
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
