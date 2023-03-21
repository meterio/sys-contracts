import { Deploy } from "./Deploy";
import { ethers } from "hardhat";
import { Verify } from "./Verify";
import { Misc } from "./Misc";
const candidatesIndex = 1;
async function main() {
  const signer = (await ethers.getSigners())[0];
  const chainId = await signer.getChainId();

  const stMTRG = Misc.getContract(chainId, "StMTRG_" + candidatesIndex);

  const wstMTRG = await Deploy.deployContract(
    signer,
    "WstMTRG",
    stMTRG.address
  );

  let data = "" + "WstMTRG: " + wstMTRG.address + "\n";

  console.log(data);
  Misc.saveFile(
    await signer.getChainId(),
    "WstMTRG_" + candidatesIndex,
    wstMTRG.address
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
