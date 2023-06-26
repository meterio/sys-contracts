import { Deploy } from "./Deploy";
import { ethers } from "hardhat";
import { Verify } from "./Verify";
import { Misc } from "./Misc";
import { ProxyAdmin, StMTRG } from "../typechain";
const candidatesIndex = "01";
async function main() {
  const signer = (await ethers.getSigners())[0];
  const chainId = await signer.getChainId();
  const proxyAdminAddress = Misc.getContract(chainId, "ProxyAdmin");
  const proxyAddress = Misc.getContract(
    chainId,
    "StMTRG_Proxy_" + candidatesIndex
  );

  if (proxyAdminAddress.address != ethers.constants.AddressZero) {
    const stMTRGimpl = (await Deploy.deployContract(
      signer,
      "StMTRG"
    )) as StMTRG;

    const proxyAdmin = (await ethers.getContractAt(
      "ProxyAdmin",
      proxyAdminAddress.address,
      signer
    )) as ProxyAdmin;
    const receipt = await proxyAdmin.upgrade(
      proxyAddress.address,
      stMTRGimpl.address
    );

    console.log("" + "StMTRG impl: " + stMTRGimpl.address + "\n");
    console.log("" + "StMTRG proxy: " + proxyAddress.address + "\n");
    console.log("" + "update tx: " + receipt.hash + "\n");
    Misc.saveFile(
      await signer.getChainId(),
      "StMTRG_Impl_" + candidatesIndex,
      stMTRGimpl.address
    );

    await Misc.wait(5);
    await Verify.sourcify();
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
