import { Deploy } from "./Deploy";
import { ethers } from "hardhat";
import { Verify } from "./Verify";
import { Misc } from "./Misc";
import { WstMTRG } from "../typechain";
const candidatesIndex = "01";
async function main() {
  const signer = (await ethers.getSigners())[0];
  const chainId = await signer.getChainId();

  const stMTRG = Misc.getContract(chainId, "StMTRG_Proxy_" + candidatesIndex+"");
  let proxyAdmin = Misc.getContract(chainId, "ProxyAdmin");

  const wstMTRGimpl = (await Deploy.deployContract(
    signer,
    "WstMTRG"
  )) as WstMTRG;

  const data = wstMTRGimpl.interface.encodeFunctionData("initialize", [
    stMTRG.address,
  ]);

  const proxy = await Deploy.deployContract(
    signer,
    "StakingProxy",
    wstMTRGimpl.address,
    proxyAdmin.address,
    data
  );

  console.log("" + "WstMTRG impl: " + wstMTRGimpl.address + "\n");
  console.log("" + "WstMTRG: " + proxy.address + "\n");
  Misc.saveFile(
    await signer.getChainId(),
    "WstMTRG_Impl_" + candidatesIndex,
    wstMTRGimpl.address
  );
  Misc.saveFile(
    await signer.getChainId(),
    "WstMTRG_Proxy_" + candidatesIndex,
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
