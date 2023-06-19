import {
  StMTRG,
  MockScriptEngine,
  MockMTRG,
  ProxyAdmin,
  StakingProxy,
} from "../typechain";
import { ethers, waffle } from "hardhat";
import chai from "chai";
import { formatUnits, parseEther, parseUnits } from "ethers/lib/utils";
import { BigNumber, constants, ContractTransaction, Wallet } from "ethers";

const { expect } = chai;

describe("treasury tests", function() {
  let deployer: Wallet;
  let user1: Wallet;
  let user2: Wallet;
  let user3: Wallet;
  let user4: Wallet;
  let user5: Wallet;
  let stMTRGImpl: StMTRG;
  let stMTRG: StMTRG;
  let mtrg: MockMTRG;
  let scriptEngine: MockScriptEngine;
  let receipt: ContractTransaction;
  let raward: BigNumber;
  let proxyAdmin: ProxyAdmin;
  let proxy: StakingProxy;
  let depositAmount: BigNumber;

  before(async function() {
    [
      deployer,
      user1,
      user2,
      user3,
      user4,
      user5,
    ] = waffle.provider.getWallets();

    mtrg = (await (
      await ethers.getContractFactory("MockMTRG", deployer)
    ).deploy(parseUnits("1000000"))) as MockMTRG;

    scriptEngine = (await (
      await ethers.getContractFactory("MockScriptEngine", deployer)
    ).deploy(mtrg.address)) as MockScriptEngine;
    await mtrg.setMinter(scriptEngine.address, true);

    proxyAdmin = (await (
      await ethers.getContractFactory("ProxyAdmin", deployer)
    ).deploy()) as ProxyAdmin;

    stMTRGImpl = (await (
      await ethers.getContractFactory("StMTRG", deployer)
    ).deploy()) as StMTRG;
    let data = stMTRGImpl.interface.encodeFunctionData("initialize", [
      deployer.address,
      mtrg.address,
      scriptEngine.address,
    ]);

    proxy = (await (
      await ethers.getContractFactory("StakingProxy", deployer)
    ).deploy(stMTRGImpl.address, proxyAdmin.address, data)) as StakingProxy;

    stMTRG = (await ethers.getContractAt(
      "StMTRG",
      proxy.address,
      deployer
    )) as StMTRG;

    //
    const amount = parseUnits("1000");
    await mtrg.transfer(deployer.address, amount);
    await mtrg.transfer(user1.address, amount);
    await mtrg.transfer(user2.address, amount);
    await mtrg.transfer(user3.address, amount);
    await mtrg.transfer(user4.address, amount);
    await mtrg.transfer(user5.address, amount);

    depositAmount = parseUnits("100");
  });
  // newCandidate 1
  it("newCandidate 1", async function() {
    await mtrg.connect(deployer).approve(stMTRG.address, depositAmount);
    receipt = await stMTRG.connect(deployer).newCandidate(user1.address);
    expect(await stMTRG.balanceOf(deployer.address)).equal(depositAmount);
  });
  // newCandidate 2
  it("newCandidate 2", async function() {
    await mtrg.connect(deployer).approve(stMTRG.address, depositAmount);
    receipt = await stMTRG.connect(deployer).newCandidate(user2.address);
    expect(await stMTRG.balanceOf(deployer.address)).equal(
      depositAmount.mul(2)
    );
  });
  // newCandidate 3
  it("newCandidate 3", async function() {
    await mtrg.connect(deployer).approve(stMTRG.address, depositAmount);
    receipt = await stMTRG.connect(deployer).newCandidate(user3.address);
    expect(await stMTRG.balanceOf(deployer.address)).equal(
      depositAmount.mul(3)
    );
  });
  // newCandidate 4
  it("newCandidate 4", async function() {
    await mtrg.connect(deployer).approve(stMTRG.address, depositAmount);
    receipt = await stMTRG.connect(deployer).newCandidate(user4.address);
    expect(await stMTRG.balanceOf(deployer.address)).equal(
      depositAmount.mul(4)
    );
  });
  // newCandidate 5
  it("newCandidate 5", async function() {
    await mtrg.connect(deployer).approve(stMTRG.address, depositAmount);
    receipt = await stMTRG.connect(deployer).newCandidate(user5.address);
    expect(await stMTRG.balanceOf(deployer.address)).equal(
      depositAmount.mul(5)
    );
  });

  it("value2share", async function() {
    let share = await stMTRG.valueToShare(depositAmount);
    // console.log("share:", share.toString());
    let value = await stMTRG.shareToValue(share);
    expect(value).equal(depositAmount);
  });

  // deposit
  it("user1 deposit", async function() {
    let bucket = await stMTRG.candidateToBucket(user1.address);
    let totalDeposit = bucket.totalDeposit;
    await mtrg.connect(user1).approve(stMTRG.address, depositAmount);
    receipt = await stMTRG.connect(user1).deposit(depositAmount);
    const balance1 = await stMTRG.balanceOf(user1.address);
    expect(balance1).equal(depositAmount);
    bucket = await stMTRG.candidateToBucket(user1.address);
    expect(bucket.totalDeposit).equal(totalDeposit.add(depositAmount));
  });

  it("user2 deposit", async function() {
    let bucket = await stMTRG.candidateToBucket(user2.address);
    let totalDeposit = bucket.totalDeposit;
    await mtrg.connect(user2).approve(stMTRG.address, depositAmount);
    receipt = await stMTRG.connect(user2).deposit(depositAmount);
    const balance1 = await stMTRG.balanceOf(user2.address);
    expect(balance1).equal(depositAmount);
    bucket = await stMTRG.candidateToBucket(user2.address);
    expect(bucket.totalDeposit).equal(totalDeposit.add(depositAmount));
  });

  it("requestClose", async function() {
    await expect(stMTRG.requestClose()).to.be.revertedWith(
      "candidates is more than 1"
    );
  });

  it("user3 deposit", async function() {
    let bucket = await stMTRG.candidateToBucket(user3.address);
    let totalDeposit = bucket.totalDeposit;
    await mtrg.connect(user3).approve(stMTRG.address, depositAmount);
    receipt = await stMTRG.connect(user3).deposit(depositAmount);
    const balance1 = await stMTRG.balanceOf(user3.address);
    expect(balance1).equal(depositAmount);
    bucket = await stMTRG.candidateToBucket(user3.address);
    expect(bucket.totalDeposit).equal(totalDeposit.add(depositAmount));
  });

  it("user4 deposit", async function() {
    let bucket = await stMTRG.candidateToBucket(user4.address);
    await scriptEngine.setBucketRevert(bucket.bucketID);
    await mtrg.connect(user4).approve(stMTRG.address, depositAmount);
    receipt = await stMTRG.connect(user4).deposit(depositAmount);
    let bucket4 = await stMTRG.candidateToBucket(user4.address);
    expect(bucket4.totalDeposit).equal(0);
    let bucket5 = await stMTRG.candidateToBucket(user5.address);
    expect(bucket5.totalDeposit).equal(depositAmount);
    receipt = await stMTRG
      .connect(user4)
      .withdraw(depositAmount, user4.address);
    await scriptEngine.setBucketRevert(bucket.bucketID);
  });

  it("balance totalSupply", async function() {
    expect(await stMTRG.totalSupply()).equal(parseUnits("800"));
    expect(await mtrg.balanceOf(scriptEngine.address)).equal(parseUnits("800"));
  });

  it("reward", async function() {
    await scriptEngine.reward();
    expect(await mtrg.balanceOf(stMTRG.address)).equal(parseUnits("80"));
  });

  it("rebase", async function() {
    await stMTRG.rebase();
    expect(await mtrg.balanceOf(stMTRG.address)).equal(0);
    expect(await stMTRG.totalSupply()).equal(parseUnits("880"));
    expect(await mtrg.balanceOf(scriptEngine.address)).equal(parseUnits("880"));
  });

  it("user1 balance", async function() {
    const currentAmount = parseUnits("100")
      .mul(parseUnits("880"))
      .div(parseUnits("800"));
    expect(await stMTRG.balanceOf(user1.address)).equal(currentAmount);
  });

  it("user1 deposit 2", async function() {
    await mtrg.connect(user1).approve(stMTRG.address, depositAmount);
    receipt = await stMTRG.connect(user1).deposit(depositAmount);
    const userBalance = await stMTRG.balanceOf(user1.address);
    expect(userBalance).equal(parseUnits("210"));
  });

  it("user1 transfer", async function() {
    const balance1 = await stMTRG.balanceOf(user1.address);
    const balance2 = await stMTRG.balanceOf(user2.address);
    await stMTRG.connect(user1).transfer(user2.address, balance1);
    expect(await stMTRG.balanceOf(user2.address)).equal(balance1.add(balance2));
  });

  it("user2 withdraw", async function() {
    const mtrgBalanceBefore = await mtrg.balanceOf(user2.address);
    let stMTRGbalance = await stMTRG.balanceOf(user2.address);
    await stMTRG.connect(user2).withdraw(stMTRGbalance, user2.address);
    expect(await mtrg.balanceOf(user2.address)).equal(
      mtrgBalanceBefore.add(stMTRGbalance)
    );
  });

  it("transferFund", async function() {
    await stMTRG.transferFund(user2.address);
    let allBuckets = await stMTRG.allBuckets();
    expect(allBuckets[1].totalDeposit).equal(0);
    expect(allBuckets[2].totalDeposit).equal(parseUnits("160"));
    await stMTRG.transferFund(user3.address);
    allBuckets = await stMTRG.allBuckets();
    expect(allBuckets[2].totalDeposit).equal(0);
    expect(allBuckets[3].totalDeposit).equal(parseUnits("160"));

    await scriptEngine.setBucketRevert(allBuckets[4].bucketID);
    await stMTRG.transferFund(user4.address);
    allBuckets = await stMTRG.allBuckets();
    expect(allBuckets[3].totalDeposit).equal(0);
    expect(allBuckets[0].totalDeposit).equal(parseUnits("160"));
  });

  // async function getBucket() {
  //   const allBuckets = await stMTRG.allBuckets();
  //   for (let i = 0; i < allBuckets.length; i++) {
  //     console.log(
  //       "bucketAmount"+(i+1),
  //       await scriptEngine.bucket(
  //         await scriptEngine.bucketUser(allBuckets[i].bucketID),
  //         allBuckets[i].bucketID
  //       )
  //     );
  //   }
  //   console.log("")
  // }
  it("deleteBucket", async function() {
    const candidates = await stMTRG.candidates();

    let bucket1 = await stMTRG.candidateToBucket(user1.address);
    let bucket1totalDeposit = bucket1.totalDeposit;
    let bucket1locked = bucket1.locked;

    let bucket2 = await stMTRG.candidateToBucket(user2.address);
    let bucket2totalDeposit = bucket2.totalDeposit;
    let bucket2locked = bucket2.locked;

    let bucket3 = await stMTRG.candidateToBucket(user3.address);
    let bucket3totalDeposit = bucket3.totalDeposit;
    let bucket3locked = bucket3.locked;

    let bucket4 = await stMTRG.candidateToBucket(user4.address);
    let bucket4totalDeposit = bucket4.totalDeposit;

    let bucket5 = await stMTRG.candidateToBucket(user5.address);
    let bucket5totalDeposit = bucket5.totalDeposit;
    let bucket5locked = bucket5.locked;

    await stMTRG.deleteBucket(user1.address);
    bucket2 = await stMTRG.candidateToBucket(user2.address);
    bucket2totalDeposit = bucket2totalDeposit
      .add(bucket1totalDeposit)
      .add(bucket1locked);
    expect(bucket2.totalDeposit).equal(bucket2totalDeposit);

    await stMTRG.deleteBucket(user2.address);
    bucket3 = await stMTRG.candidateToBucket(user3.address);
    bucket3totalDeposit = bucket3totalDeposit
      .add(bucket2totalDeposit)
      .add(bucket2locked);
    expect(bucket3.totalDeposit).equal(bucket3totalDeposit);

    await stMTRG.deleteBucket(user3.address);
    bucket4 = await stMTRG.candidateToBucket(user4.address);
    bucket4totalDeposit = bucket4totalDeposit
      .add(bucket3totalDeposit)
      .add(bucket3locked);
    expect(bucket4.totalDeposit).equal(bucket4totalDeposit);

    await expect(stMTRG.deleteBucket(user4.address)).to.be.revertedWith(
      "no dst candidate!"
    );
    await stMTRG.deleteBucket(user5.address);
    bucket4 = await stMTRG.candidateToBucket(user4.address);
    bucket4totalDeposit = bucket4totalDeposit
      .add(bucket5totalDeposit)
      .add(bucket5locked);
    expect(bucket4.totalDeposit).equal(bucket4totalDeposit);
  });

  it("deleteBucket", async function() {
    await expect(stMTRG.deleteBucket(user5.address)).to.be.revertedWith(
      "only 1 candidate"
    );
  });

  it("requestClose", async function() {
    await stMTRG.requestClose();
    expect(await stMTRG.isClose()).equal(true);
  });

  it("is close!", async function() {
    await mtrg.connect(user2).approve(stMTRG.address, depositAmount);
    await expect(
      stMTRG.connect(user2).deposit(depositAmount)
    ).to.be.revertedWith("is close!");
    await expect(stMTRG.rebase()).to.be.revertedWith("is close!");
  });

  it("user3 withdraw", async function() {
    const mtrgBalanceBefore = await mtrg.balanceOf(user3.address);
    let stMTRGbalance = await stMTRG.balanceOf(user3.address);
    await stMTRG.connect(user3).withdraw(stMTRGbalance, user3.address);
    expect(await mtrg.balanceOf(user3.address)).equal(
      mtrgBalanceBefore.add(stMTRGbalance)
    );
  });
  
  it("executeClose", async function() {
    await expect(stMTRG.executeClose()).to.be.revertedWith("CLOSE_DURATION!");
  });
  it("CLOSE_DURATION", async function() {
    const CLOSE_DURATION = await stMTRG.CLOSE_DURATION();
    await ethers.provider.send("evm_increaseTime", [CLOSE_DURATION.toNumber()]);
  });
  it("executeClose", async function() {
    await stMTRG.executeClose();
    expect(await stMTRG.inTerminal()).equal(true);
  });
  it("closeTerminal", async function() {
    await stMTRG.closeTerminal();
    expect(await stMTRG.inTerminal()).equal(false);
  });
  it("withdraw", async function() {
    const mtrgBalanceBefore = await mtrg.balanceOf(deployer.address);
    let stMTRGbalance = await stMTRG.balanceOf(deployer.address);
    await stMTRG.withdrawAll(deployer.address);
    expect(await mtrg.balanceOf(deployer.address)).equal(
      mtrgBalanceBefore.add(stMTRGbalance)
    );
  });
});
