import { Deploy } from "./Deploy";
import { ethers } from "hardhat";
import { Verify } from "./Verify";
import { Misc } from "./Misc";
const candidatesIndex = 1;
async function main() {
  const signer = (await ethers.getSigners())[0];
  const chainId = await signer.getChainId();
  const MTRG = Misc.getContract(chainId, "MTRG");
  const ScriptEngine = Misc.getContract(chainId, "ScriptEngine");
  const Candidates = Misc.getContract(chainId, "Candidates");

  const stMTRG = await Deploy.deployContract(
    signer,
    "StMTRG",
    MTRG.address,
    ScriptEngine.address,
    Candidates[candidatesIndex].address
  );

  let data = "" + "StMTRG: " + stMTRG.address + "\n";

  console.log(data);
  Misc.saveFile(
    await signer.getChainId(),
    "StMTRG_" + candidatesIndex,
    stMTRG.address
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
