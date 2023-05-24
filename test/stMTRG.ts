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
      deployer.address,
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
  });
  // initialize
  it("initialize", async function() {
    const depositAmount = parseUnits("100");
    await mtrg.connect(deployer).approve(stMTRG.address, depositAmount);
    receipt = await stMTRG.connect(deployer).adminInit();
    expect(await stMTRG.balanceOf(deployer.address)).equal(depositAmount);
    expect(await mtrg.balanceOf(deployer.address)).equal(parseUnits("994900"));
  });

  it("value2share", async function() {
    const depositAmount = parseUnits("100");
    let share = await stMTRG.valueToShare(depositAmount)
    console.log("valueToShare:",share.toString());
    let value = await stMTRG.shareToValue(share)
    console.log("shareToValue:",value.toString());
  });
  // deposit
  it("user1 deposit", async function() {
    const depositAmount = parseUnits("100");
    let share1 = await stMTRG._shares(user1.address);
    console.log("share1:",share1.toString());
    let balance1 = await stMTRG.balanceOf(user1.address);
    console.log("balance1:",balance1.toString());
    
    await mtrg.connect(user1).approve(stMTRG.address, depositAmount);
    receipt = await stMTRG.connect(user1).deposit(depositAmount);

    share1 = await stMTRG._shares(user1.address);
    console.log("share1:",share1.toString());
    balance1 = await stMTRG.balanceOf(user1.address);
    console.log("balance1:",balance1.toString());
    expect(await stMTRG.balanceOf(user1.address)).equal(depositAmount);
    expect(await mtrg.balanceOf(user1.address)).equal(parseUnits("900"));
  });

  it("user2 deposit", async function() {
    let depositAmount = parseUnits("200");
    await mtrg.connect(user2).approve(stMTRG.address, depositAmount);
    receipt = await stMTRG.connect(user2).deposit(depositAmount);
    expect(await stMTRG.balanceOf(user2.address)).equal(depositAmount);
    expect(await mtrg.balanceOf(user2.address)).equal(parseUnits("800"));
  });

  it("user3 deposit", async function() {
    let depositAmount = parseUnits("300");
    await mtrg.connect(user3).approve(stMTRG.address, depositAmount);
    receipt = await stMTRG.connect(user3).deposit(depositAmount);
    expect(await stMTRG.balanceOf(user3.address)).equal(depositAmount);
    expect(await mtrg.balanceOf(user3.address)).equal(parseUnits("700"));
  });

  it("user4 deposit", async function() {
    let depositAmount = parseUnits("400");
    await mtrg.connect(user4).approve(stMTRG.address, depositAmount);
    receipt = await stMTRG.connect(user4).deposit(depositAmount);
    expect(await stMTRG.balanceOf(user4.address)).equal(depositAmount);
    expect(await mtrg.balanceOf(user4.address)).equal(parseUnits("600"));
  });

  it("user5 deposit", async function() {
    let depositAmount = parseUnits("500");
    await mtrg.connect(user5).approve(stMTRG.address, depositAmount);
    receipt = await stMTRG.connect(user5).deposit(depositAmount);
    expect(await stMTRG.balanceOf(user5.address)).equal(depositAmount);
    expect(await mtrg.balanceOf(user5.address)).equal(parseUnits("500"));
  });

  it("balance totalSupply", async function() {
    const depositAmount = parseUnits("1600");
    expect(await stMTRG.totalSupply()).equal(depositAmount);
    expect(await mtrg.balanceOf(scriptEngine.address)).equal(depositAmount);
  });

  it("reward", async function() {
    await scriptEngine.reward();
    expect(await mtrg.balanceOf(stMTRG.address)).equal(parseUnits("160"));
  });

  it("rebase", async function() {
    await stMTRG.rebase();
    expect(await mtrg.balanceOf(stMTRG.address)).equal(0);
    let depositAmount = parseUnits("1760");
    expect(await stMTRG.totalSupply()).equal(depositAmount);
    expect(await mtrg.balanceOf(scriptEngine.address)).equal(depositAmount);
  });

  it("user1 balance", async function() {
    const currentAmount = parseUnits("100")
      .mul(parseUnits("1650"))
      .div(parseUnits("1500"));

      const share1 = await stMTRG._shares(user1.address);
      console.log("share1:",share1.toString());
      const balance1 = await stMTRG.balanceOf(user1.address);
      console.log("balance1:",balance1.toString());
      const _totalShares = await stMTRG._totalShares();
      console.log("_totalShares:",_totalShares.toString());
      const totalSupply = await stMTRG.totalSupply();
      console.log("totalSupply:",totalSupply.toString());
    expect(await stMTRG.balanceOf(user1.address)).equal(currentAmount);
    expect(await mtrg.balanceOf(user1.address)).equal(parseUnits("900"));
  });

  it("user1 deposit 2", async function() {
    const depositAmount = parseUnits("100");
    await mtrg.connect(user1).approve(stMTRG.address, depositAmount);
    const balanceBefore = await stMTRG.balanceOf(user1.address);
    console.log("balanceBefore:",balanceBefore.toString())
    receipt = await stMTRG.connect(user1).deposit(depositAmount);
    
    const userBalance = await stMTRG.balanceOf(user1.address);
    console.log("userBalance:", userBalance);

    const share1 = await stMTRG._shares(user1.address);
    console.log("share1:",share1.toString());
    const balance1 = await stMTRG.balanceOf(user1.address);
    console.log("balance1:",balance1.toString());
    const _totalShares = await stMTRG._totalShares();
    console.log("_totalShares:",_totalShares.toString());
    const totalSupply = await stMTRG.totalSupply();
    console.log("totalSupply:",totalSupply.toString());
    expect(userBalance).equal(parseUnits("210"));
    expect(await mtrg.balanceOf(user1.address)).equal(parseUnits("800"));
  });

  it("user1 transfer", async function() {
    const balance1 = await stMTRG.balanceOf(user1.address);
    const balance2 = await stMTRG.balanceOf(user2.address);
    const share1 = await stMTRG._shares(user1.address);
    const share2 = await stMTRG._shares(user2.address);
    console.log("balance1:",balance1.toString());
    console.log("balance2:",balance2.toString());
    console.log("share1:",share1.toString());
    console.log("share2:",share2.toString());
    const value2share = await stMTRG.valueToShare(balance1);
    console.log("value2share:",value2share.toString());
    const shareToValue = await stMTRG.shareToValue(share1);
    console.log("shareToValue:",shareToValue.toString());


    const value2share2 = await stMTRG.valueToShare2(balance1);
    console.log("value2share2:",value2share2.toString());
    const _totalShares = await stMTRG._totalShares();
    console.log("_totalShares:",_totalShares.toString());
    const totalSupply = await stMTRG.totalSupply();
    console.log("totalSupply:",totalSupply.toString());

    await stMTRG.connect(user1).transfer(user2.address, balance1);
    expect(await stMTRG.balanceOf(user2.address)).equal(balance1.add(balance2));
  });

  it("user2 withdraw", async function() {
    const mtrgBalanceBefore = await mtrg.balanceOf(user2.address);
    const stMTRGbalance = await stMTRG.balanceOf(user2.address);
    console.log(mtrgBalanceBefore);
    await stMTRG.connect(user2).withdraw(stMTRGbalance, user2.address);
    expect(await mtrg.balanceOf(user2.address)).equal(
      mtrgBalanceBefore.add(parseUnits("430"))
    );
  });
});
