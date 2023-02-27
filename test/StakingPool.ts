import { StakingPool, MockScriptEngine, MockMTRG } from "../typechain";
import { ethers, waffle } from "hardhat";
import chai from "chai";
import { formatUnits, parseEther, parseUnits } from "ethers/lib/utils";
import { BigNumber, constants, ContractTransaction, Wallet } from "ethers";

const { expect } = chai;

describe("treasury tests", function () {
  let snapshotBefore: string;
  let snapshot: string;

  let deployer: Wallet;
  let user1: Wallet;
  let user2: Wallet;
  let user3: Wallet;
  let user4: Wallet;
  let user5: Wallet;
  let stakingPool: StakingPool;
  let mtrg: MockMTRG;
  let scriptEngine: MockScriptEngine;
  let receipt: ContractTransaction;
  let raward: BigNumber;

  before(async function () {
    [deployer, user1, user2, user3, user4, user5] =
      waffle.provider.getWallets();

    mtrg = (await (
      await ethers.getContractFactory("MockMTRG", deployer)
    ).deploy(parseUnits("1000000"))) as MockMTRG;

    scriptEngine = (await (
      await ethers.getContractFactory("MockScriptEngine", deployer)
    ).deploy(mtrg.address)) as MockScriptEngine;
    await mtrg.setMinter(scriptEngine.address, true);

    stakingPool = (await (
      await ethers.getContractFactory("StakingPool", deployer)
    ).deploy(
      mtrg.address,
      scriptEngine.address,
      deployer.address
    )) as StakingPool;
    const amount = parseUnits("1000");
    await mtrg.transfer(user1.address, amount);
    await mtrg.transfer(user2.address, amount);
    await mtrg.transfer(user3.address, amount);
    await mtrg.transfer(user4.address, amount);
    await mtrg.transfer(user5.address, amount);
  });
  // deposit
  it("user1 deposit", async function () {
    const depositAmount = parseUnits("100");
    await mtrg.connect(user1).approve(stakingPool.address, depositAmount);
    receipt = await stakingPool.connect(user1).deposit(depositAmount);
    expect(await stakingPool.balanceOf(user1.address)).equal(depositAmount);
    expect(await mtrg.balanceOf(user1.address)).equal(parseUnits("900"));
  });

  it("user2 deposit", async function () {
    let depositAmount = parseUnits("200");
    await mtrg.connect(user2).approve(stakingPool.address, depositAmount);
    receipt = await stakingPool.connect(user2).deposit(depositAmount);
    expect(await stakingPool.balanceOf(user2.address)).equal(depositAmount);
    expect(await mtrg.balanceOf(user2.address)).equal(parseUnits("800"));
  });

  it("user3 deposit", async function () {
    let depositAmount = parseUnits("300");
    await mtrg.connect(user3).approve(stakingPool.address, depositAmount);
    receipt = await stakingPool.connect(user3).deposit(depositAmount);
    expect(await stakingPool.balanceOf(user3.address)).equal(depositAmount);
    expect(await mtrg.balanceOf(user3.address)).equal(parseUnits("700"));
  });

  it("user4 deposit", async function () {
    let depositAmount = parseUnits("400");
    await mtrg.connect(user4).approve(stakingPool.address, depositAmount);
    receipt = await stakingPool.connect(user4).deposit(depositAmount);
    expect(await stakingPool.balanceOf(user4.address)).equal(depositAmount);
    expect(await mtrg.balanceOf(user4.address)).equal(parseUnits("600"));
  });

  it("user5 deposit", async function () {
    let depositAmount = parseUnits("500");
    await mtrg.connect(user5).approve(stakingPool.address, depositAmount);
    receipt = await stakingPool.connect(user5).deposit(depositAmount);
    expect(await stakingPool.balanceOf(user5.address)).equal(depositAmount);
    expect(await mtrg.balanceOf(user5.address)).equal(parseUnits("500"));
  });

  it("balance totalSupply", async function () {
    const depositAmount = parseUnits("1500");
    expect(await stakingPool.totalSupply()).equal(depositAmount);
    expect(await mtrg.balanceOf(scriptEngine.address)).equal(depositAmount);
  });

  it("reward", async function () {
    await scriptEngine.reward();
    expect(await mtrg.balanceOf(stakingPool.address)).equal(parseUnits("150"));
  });

  it("rebase", async function () {
    await stakingPool.rebase();
    expect(await mtrg.balanceOf(stakingPool.address)).equal(0);
    let depositAmount = parseUnits("1650");
    expect(await stakingPool.totalSupply()).equal(depositAmount);
    expect(await mtrg.balanceOf(scriptEngine.address)).equal(depositAmount);
  });

  it("user1 balance", async function () {
    const currentAmount = parseUnits("100")
      .mul(parseUnits("1650"))
      .div(parseUnits("1500"));

    expect(await stakingPool.balanceOf(user1.address)).equal(currentAmount);
    expect(await mtrg.balanceOf(user1.address)).equal(parseUnits("900"));
  });

  it("user1 deposit 2", async function () {
    const depositAmount = parseUnits("100");
    await mtrg.connect(user1).approve(stakingPool.address, depositAmount);
    receipt = await stakingPool.connect(user1).deposit(depositAmount);
    const shares = await stakingPool._shares(user1.address);
    const totalSupply = await stakingPool.totalSupply();
    const totalShares = await stakingPool._totalShares();
    const userBalance = await stakingPool.balanceOf(user1.address);

    expect(userBalance).equal(shares.mul(totalSupply).div(totalShares));
    expect(await mtrg.balanceOf(user1.address)).equal(parseUnits("800"));
  });

  it("user1 transfer", async function () {
    const balance1 = await stakingPool.balanceOf(user1.address);
    const balance2 = await stakingPool.balanceOf(user2.address);
    await stakingPool.connect(user1).transfer(user2.address, parseUnits("210"));
    expect(await stakingPool.balanceOf(user2.address)).equal(
      balance1.add(balance2)
    );
  });

  it("user2 withdraw", async function () {
    const mtrgBalanceBefore = await mtrg.balanceOf(user2.address);
    const stMTRGbalance = await stakingPool.balanceOf(user2.address);
    console.log(mtrgBalanceBefore);
    await stakingPool.connect(user2).withdraw(stMTRGbalance, user2.address);
    expect(await mtrg.balanceOf(user2.address)).equal(
      mtrgBalanceBefore.add(parseUnits("430"))
    );
  });
});
