/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface MockScriptEngineInterface extends ethers.utils.Interface {
  functions: {
    "MTRG()": FunctionFragment;
    "boundedMTRG()": FunctionFragment;
    "bucket(address,bytes32)": FunctionFragment;
    "bucketClose(bytes32)": FunctionFragment;
    "bucketDeposit(bytes32,uint256)": FunctionFragment;
    "bucketMerge(bytes32,bytes32)": FunctionFragment;
    "bucketOpen(address,uint256)": FunctionFragment;
    "bucketTransferFund(bytes32,bytes32,uint256)": FunctionFragment;
    "bucketUser(bytes32)": FunctionFragment;
    "bucketValue(bytes32)": FunctionFragment;
    "bucketWithdraw(bytes32,uint256,address)": FunctionFragment;
    "reward()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "MTRG", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "boundedMTRG",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "bucket",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "bucketClose",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "bucketDeposit",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "bucketMerge",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "bucketOpen",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "bucketTransferFund",
    values: [BytesLike, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "bucketUser",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "bucketValue",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "bucketWithdraw",
    values: [BytesLike, BigNumberish, string]
  ): string;
  encodeFunctionData(functionFragment: "reward", values?: undefined): string;

  decodeFunctionResult(functionFragment: "MTRG", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "boundedMTRG",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "bucket", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "bucketClose",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "bucketDeposit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "bucketMerge",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "bucketOpen", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "bucketTransferFund",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "bucketUser", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "bucketValue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "bucketWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "reward", data: BytesLike): Result;

  events: {};
}

export class MockScriptEngine extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: MockScriptEngineInterface;

  functions: {
    MTRG(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "MTRG()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    boundedMTRG(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "boundedMTRG()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    bucket(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "bucket(address,bytes32)"(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    bucketClose(
      bucketID: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "bucketClose(bytes32)"(
      bucketID: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    bucketDeposit(
      bucketID: BytesLike,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "bucketDeposit(bytes32,uint256)"(
      bucketID: BytesLike,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    bucketMerge(
      fromBucketID: BytesLike,
      toBucketID: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "bucketMerge(bytes32,bytes32)"(
      fromBucketID: BytesLike,
      toBucketID: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    bucketOpen(
      candidate: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "bucketOpen(address,uint256)"(
      candidate: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    bucketTransferFund(
      fromBucketID: BytesLike,
      toBucketID: BytesLike,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "bucketTransferFund(bytes32,bytes32,uint256)"(
      fromBucketID: BytesLike,
      toBucketID: BytesLike,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    bucketUser(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "bucketUser(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    bucketValue(
      bucketID: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "bucketValue(bytes32)"(
      bucketID: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    bucketWithdraw(
      bucketID: BytesLike,
      amount: BigNumberish,
      recipient: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "bucketWithdraw(bytes32,uint256,address)"(
      bucketID: BytesLike,
      amount: BigNumberish,
      recipient: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    reward(overrides?: Overrides): Promise<ContractTransaction>;

    "reward()"(overrides?: Overrides): Promise<ContractTransaction>;
  };

  MTRG(overrides?: CallOverrides): Promise<string>;

  "MTRG()"(overrides?: CallOverrides): Promise<string>;

  boundedMTRG(overrides?: CallOverrides): Promise<BigNumber>;

  "boundedMTRG()"(overrides?: CallOverrides): Promise<BigNumber>;

  bucket(
    arg0: string,
    arg1: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "bucket(address,bytes32)"(
    arg0: string,
    arg1: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  bucketClose(
    bucketID: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "bucketClose(bytes32)"(
    bucketID: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  bucketDeposit(
    bucketID: BytesLike,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "bucketDeposit(bytes32,uint256)"(
    bucketID: BytesLike,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  bucketMerge(
    fromBucketID: BytesLike,
    toBucketID: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "bucketMerge(bytes32,bytes32)"(
    fromBucketID: BytesLike,
    toBucketID: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  bucketOpen(
    candidate: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "bucketOpen(address,uint256)"(
    candidate: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  bucketTransferFund(
    fromBucketID: BytesLike,
    toBucketID: BytesLike,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "bucketTransferFund(bytes32,bytes32,uint256)"(
    fromBucketID: BytesLike,
    toBucketID: BytesLike,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  bucketUser(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;

  "bucketUser(bytes32)"(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  bucketValue(
    bucketID: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "bucketValue(bytes32)"(
    bucketID: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  bucketWithdraw(
    bucketID: BytesLike,
    amount: BigNumberish,
    recipient: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "bucketWithdraw(bytes32,uint256,address)"(
    bucketID: BytesLike,
    amount: BigNumberish,
    recipient: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  reward(overrides?: Overrides): Promise<ContractTransaction>;

  "reward()"(overrides?: Overrides): Promise<ContractTransaction>;

  callStatic: {
    MTRG(overrides?: CallOverrides): Promise<string>;

    "MTRG()"(overrides?: CallOverrides): Promise<string>;

    boundedMTRG(overrides?: CallOverrides): Promise<BigNumber>;

    "boundedMTRG()"(overrides?: CallOverrides): Promise<BigNumber>;

    bucket(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "bucket(address,bytes32)"(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    bucketClose(bucketID: BytesLike, overrides?: CallOverrides): Promise<void>;

    "bucketClose(bytes32)"(
      bucketID: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    bucketDeposit(
      bucketID: BytesLike,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "bucketDeposit(bytes32,uint256)"(
      bucketID: BytesLike,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    bucketMerge(
      fromBucketID: BytesLike,
      toBucketID: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "bucketMerge(bytes32,bytes32)"(
      fromBucketID: BytesLike,
      toBucketID: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    bucketOpen(
      candidate: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "bucketOpen(address,uint256)"(
      candidate: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    bucketTransferFund(
      fromBucketID: BytesLike,
      toBucketID: BytesLike,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "bucketTransferFund(bytes32,bytes32,uint256)"(
      fromBucketID: BytesLike,
      toBucketID: BytesLike,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    bucketUser(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;

    "bucketUser(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    bucketValue(
      bucketID: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "bucketValue(bytes32)"(
      bucketID: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    bucketWithdraw(
      bucketID: BytesLike,
      amount: BigNumberish,
      recipient: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "bucketWithdraw(bytes32,uint256,address)"(
      bucketID: BytesLike,
      amount: BigNumberish,
      recipient: string,
      overrides?: CallOverrides
    ): Promise<string>;

    reward(overrides?: CallOverrides): Promise<void>;

    "reward()"(overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    MTRG(overrides?: CallOverrides): Promise<BigNumber>;

    "MTRG()"(overrides?: CallOverrides): Promise<BigNumber>;

    boundedMTRG(overrides?: CallOverrides): Promise<BigNumber>;

    "boundedMTRG()"(overrides?: CallOverrides): Promise<BigNumber>;

    bucket(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "bucket(address,bytes32)"(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    bucketClose(bucketID: BytesLike, overrides?: Overrides): Promise<BigNumber>;

    "bucketClose(bytes32)"(
      bucketID: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    bucketDeposit(
      bucketID: BytesLike,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "bucketDeposit(bytes32,uint256)"(
      bucketID: BytesLike,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    bucketMerge(
      fromBucketID: BytesLike,
      toBucketID: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "bucketMerge(bytes32,bytes32)"(
      fromBucketID: BytesLike,
      toBucketID: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    bucketOpen(
      candidate: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "bucketOpen(address,uint256)"(
      candidate: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    bucketTransferFund(
      fromBucketID: BytesLike,
      toBucketID: BytesLike,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "bucketTransferFund(bytes32,bytes32,uint256)"(
      fromBucketID: BytesLike,
      toBucketID: BytesLike,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    bucketUser(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    "bucketUser(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    bucketValue(
      bucketID: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "bucketValue(bytes32)"(
      bucketID: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    bucketWithdraw(
      bucketID: BytesLike,
      amount: BigNumberish,
      recipient: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "bucketWithdraw(bytes32,uint256,address)"(
      bucketID: BytesLike,
      amount: BigNumberish,
      recipient: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    reward(overrides?: Overrides): Promise<BigNumber>;

    "reward()"(overrides?: Overrides): Promise<BigNumber>;
  };

  populateTransaction: {
    MTRG(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "MTRG()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    boundedMTRG(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "boundedMTRG()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    bucket(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "bucket(address,bytes32)"(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    bucketClose(
      bucketID: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "bucketClose(bytes32)"(
      bucketID: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    bucketDeposit(
      bucketID: BytesLike,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "bucketDeposit(bytes32,uint256)"(
      bucketID: BytesLike,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    bucketMerge(
      fromBucketID: BytesLike,
      toBucketID: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "bucketMerge(bytes32,bytes32)"(
      fromBucketID: BytesLike,
      toBucketID: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    bucketOpen(
      candidate: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "bucketOpen(address,uint256)"(
      candidate: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    bucketTransferFund(
      fromBucketID: BytesLike,
      toBucketID: BytesLike,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "bucketTransferFund(bytes32,bytes32,uint256)"(
      fromBucketID: BytesLike,
      toBucketID: BytesLike,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    bucketUser(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "bucketUser(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    bucketValue(
      bucketID: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "bucketValue(bytes32)"(
      bucketID: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    bucketWithdraw(
      bucketID: BytesLike,
      amount: BigNumberish,
      recipient: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "bucketWithdraw(bytes32,uint256,address)"(
      bucketID: BytesLike,
      amount: BigNumberish,
      recipient: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    reward(overrides?: Overrides): Promise<PopulatedTransaction>;

    "reward()"(overrides?: Overrides): Promise<PopulatedTransaction>;
  };
}
