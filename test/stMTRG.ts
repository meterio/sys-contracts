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
  let snapshotBefore: string;
  let snapshot: string;

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
    const candidates = await stMTRG.candidates();
    const candidate = candidates[2];
    await stMTRG.requestClose(candidate);
    const bucket = await stMTRG.candidateToBucket(candidate);
    expect(bucket.status).equal(2);
  });

  it("user3 deposit to candidate 4", async function() {
    let bucket = await stMTRG.candidateToBucket(user4.address);
    let totalDeposit = bucket.totalDeposit;

    await mtrg.connect(user3).approve(stMTRG.address, depositAmount);
    receipt = await stMTRG.connect(user3).deposit(depositAmount);

    const balance1 = await stMTRG.balanceOf(user3.address);
    expect(balance1).equal(depositAmount);
    bucket = await stMTRG.candidateToBucket(user4.address);
    expect(bucket.totalDeposit).equal(totalDeposit.add(depositAmount));
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

      const share1 = await stMTRG.shares(user1.address);
      console.log("share1:",share1.toString());
      const balance1 = await stMTRG.balanceOf(user1.address);
      console.log("balance1:",balance1.toString());
      const totalShares = await stMTRG.totalShares();
      console.log("totalShares:",totalShares.toString());
      const totalSupply = await stMTRG.totalSupply();
      console.log("totalSupply:",totalSupply.toString());
    expect(await stMTRG.balanceOf(user1.address)).equal(currentAmount);
  });

  it("user1 deposit 2", async function() {
    const depositAmount = parseUnits("100");
    await mtrg.connect(user1).approve(stMTRG.address, depositAmount);
    const balanceBefore = await stMTRG.balanceOf(user1.address);
    console.log("balanceBefore:",balanceBefore.toString())
    receipt = await stMTRG.connect(user1).deposit(depositAmount);

    const userBalance = await stMTRG.balanceOf(user1.address);
    console.log("userBalance:", userBalance);
    expect(userBalance).equal(parseUnits("210"));

    const share1 = await stMTRG.shares(user1.address);
    console.log("share1:",share1.toString());
    const balance1 = await stMTRG.balanceOf(user1.address);
    console.log("balance1:",balance1.toString());
    const totalShares = await stMTRG.totalShares();
    console.log("totalShares:",totalShares.toString());
    const totalSupply = await stMTRG.totalSupply();
    console.log("totalSupply:",totalSupply.toString());
  });

  it("user1 transfer", async function() {
    const balance1 = await stMTRG.balanceOf(user1.address);
    const balance2 = await stMTRG.balanceOf(user2.address);
    const share1 = await stMTRG.shares(user1.address);
    const share2 = await stMTRG.shares(user2.address);
    console.log("balance1:",balance1.toString());
    console.log("balance2:",balance2.toString());
    console.log("share1:",share1.toString());
    console.log("share2:",share2.toString());
    const value2share = await stMTRG.valueToShare(balance1);
    console.log("value2share:",value2share.toString());
    const shareToValue = await stMTRG.shareToValue(share1);
    console.log("shareToValue:",shareToValue.toString());

    const totalShares = await stMTRG.totalShares();
    console.log("totalShares:",totalShares.toString());
    const totalSupply = await stMTRG.totalSupply();
    console.log("totalSupply:",totalSupply.toString());

    await stMTRG.connect(user1).transfer(user2.address, balance1);
    expect(await stMTRG.balanceOf(user2.address)).equal(balance1.add(balance2));
  });

  // it("user2 withdraw", async function() {
  //   const mtrgBalanceBefore = await mtrg.balanceOf(user2.address);
  //   const stMTRGbalance = await stMTRG.balanceOf(user2.address);
  //   console.log(mtrgBalanceBefore);
  //   await stMTRG.connect(user2).withdraw(stMTRGbalance, user2.address);
  //   expect(await mtrg.balanceOf(user2.address)).equal(
  //     mtrgBalanceBefore.add(parseUnits("430"))
  //   );
  // });
});
