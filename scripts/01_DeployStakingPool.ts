import { Deploy } from "./Deploy";
import { ethers } from "hardhat";
import { Verify } from "./Verify";
import { Misc } from "./Misc";

async function main() {
  const signer = (await ethers.getSigners())[0];
  const chainId = await signer.getChainId();
  const MTRG = Misc.getContract(chainId, "MTRG");
  const ScriptEngine = Misc.getContract(chainId, "ScriptEngine");
  const Candidates = Misc.getContract(chainId, "Candidates");

  const stakingPool = await Deploy.deployContract(
    signer,
    "StakingPool",
    MTRG.address,
    ScriptEngine.address,
    Candidates[1].address
  );

  let data = "" + "StakingPool: " + stakingPool.address + "\n";

  console.log(data);
  Misc.saveFile(
    await signer.getChainId(),
    "StakingPool_1",
    stakingPool.address
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
