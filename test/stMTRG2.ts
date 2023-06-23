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
  let candidates: string[];

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
    candidates = [
      "0x34bd9720f4d83db2c8d7de87ec38b7832301ca67",
      "0x658b6da6723979ec56fef1296f115477460a8797",
      "0xe6c7317a261e0453a6793f0ce2466c508d3f2c04",
      "0x0e85065711132bb2631ef540ee52bc5640731760",
      "0x82061b13d75f6928ce35d118b4853290347f1112",
    ];
  });
  // newCandidate x4
  it("newCandidate x4", async function() {
    await mtrg.connect(deployer).approve(stMTRG.address, constants.MaxUint256);
    receipt = await stMTRG.connect(deployer).newCandidate(candidates[0]);
    receipt = await stMTRG.connect(deployer).newCandidate(candidates[1]);
    receipt = await stMTRG.connect(deployer).newCandidate(candidates[2]);
    receipt = await stMTRG.connect(deployer).newCandidate(candidates[3]);
  });

  // setBucketRevert 2
  it("setBucketRevert 2", async function() {
    let bucket = await stMTRG.candidateToBucket(candidates[1]);
    await scriptEngine.setBucketRevert(bucket.bucketID);
  });

  // deposit
  it("deployer deposit", async function() {
    receipt = await stMTRG.connect(deployer).deposit(depositAmount);
  });
  // 0xbf85ef4216340eb5cd3c57b550aae7a2712d48d2 user1
  it("user1 deposit", async function() {
    await mtrg.connect(user1).approve(stMTRG.address, constants.MaxUint256);
    receipt = await stMTRG.connect(user1).deposit(depositAmount);
    receipt = await stMTRG.connect(user1).deposit(depositAmount);
    receipt = await stMTRG.connect(user1).deposit(parseUnits("55"));
  });

  // 0x1479f0954df7c667b1817e4eb3c0f4723eb054f5 deployer
  it("deployer deposit", async function() {
    receipt = await stMTRG.connect(deployer).deposit(depositAmount);
    receipt = await stMTRG.connect(deployer).deposit(depositAmount);
  });

  // 0xbf85ef4216340eb5cd3c57b550aae7a2712d48d2 user1
  it("user1 withdraw", async function() {
    await stMTRG.connect(user1).withdraw(parseUnits("255"), user1.address);
  });

  // 0xbf85ef4216340eb5cd3c57b550aae7a2712d48d2 user1
  it("user1 deposit", async function() {
    receipt = await stMTRG.connect(user1).deposit(depositAmount);
  });

  // 0x3dfd98c0176f2b686e3a62957da038aca24911da user2
  it("user2 deposit", async function() {
    await mtrg.connect(user2).approve(stMTRG.address, constants.MaxUint256);
    receipt = await stMTRG.connect(user2).deposit(depositAmount);
  });

  // 0x57e7e16a2326dc41d02402103a73b4464a8b3eeb user3
  it("user3 deposit", async function() {
    await mtrg.connect(user3).approve(stMTRG.address, constants.MaxUint256);
    receipt = await stMTRG.connect(user3).deposit(depositAmount);
  });

  // 0x57e7e16a2326dc41d02402103a73b4464a8b3eeb user3
  it("user3 withdrawAll", async function() {
    receipt = await stMTRG.connect(user3).withdrawAll(user3.address);
  });

  // newCandidate 5
  it("newCandidate 5", async function() {
    receipt = await stMTRG.connect(deployer).newCandidate(candidates[4]);
  });

  // 0x3dfd98c0176f2b686e3a62957da038aca24911da user2
  it("user2 withdrawAll", async function() {
    receipt = await stMTRG.connect(user2).withdrawAll(user2.address);
  });
  
  // 0x3dfd98c0176f2b686e3a62957da038aca24911da user2
  it("user2 deposit", async function() {
    receipt = await stMTRG.connect(user2).deposit(parseUnits("1"));
  });
  
  // 0x3dfd98c0176f2b686e3a62957da038aca24911da user2
  it("user2 withdrawAll", async function() {
    receipt = await stMTRG.connect(user2).withdrawAll(user2.address);
    let allBuckets = await stMTRG.allBuckets();
    console.log(allBuckets)
  });

  it("transferFund", async function() {
    await stMTRG.transferFund(candidates[3]);
  });

  it("all buckets", async function() {
    let allBuckets = await stMTRG.allBuckets();
    console.log(allBuckets)
  });
});