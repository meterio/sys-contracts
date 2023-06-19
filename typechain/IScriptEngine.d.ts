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

interface IScriptEngineInterface extends ethers.utils.Interface {
  functions: {
    "boundedMTRG()": FunctionFragment;
    "bucketClose(bytes32)": FunctionFragment;
    "bucketDeposit(bytes32,uint256)": FunctionFragment;
    "bucketMerge(bytes32,bytes32)": FunctionFragment;
    "bucketOpen(address,uint256)": FunctionFragment;
    "bucketTransferFund(bytes32,bytes32,uint256)": FunctionFragment;
    "bucketUpdateCandidate(bytes32,address)": FunctionFragment;
    "bucketValue(bytes32)": FunctionFragment;
    "bucketWithdraw(bytes32,uint256,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "boundedMTRG",
    values?: undefined
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
    functionFragment: "bucketUpdateCandidate",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "bucketValue",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "bucketWithdraw",
    values: [BytesLike, BigNumberish, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "boundedMTRG",
    data: BytesLike
  ): Result;
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
  decodeFunctionResult(
    functionFragment: "bucketUpdateCandidate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "bucketValue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "bucketWithdraw",
    data: BytesLike
  ): Result;

  events: {};
}

export class IScriptEngine extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IScriptEngineInterface;

  functions: {
    boundedMTRG(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "boundedMTRG()"(overrides?: CallOverrides): Promise<{
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

    bucketUpdateCandidate(
      bucketID: BytesLike,
      newCandidateAddr: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "bucketUpdateCandidate(bytes32,address)"(
      bucketID: BytesLike,
      newCandidateAddr: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

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
  };

  boundedMTRG(overrides?: CallOverrides): Promise<BigNumber>;

  "boundedMTRG()"(overrides?: CallOverrides): Promise<BigNumber>;

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

  bucketUpdateCandidate(
    bucketID: BytesLike,
    newCandidateAddr: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "bucketUpdateCandidate(bytes32,address)"(
    bucketID: BytesLike,
    newCandidateAddr: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

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

  callStatic: {
    boundedMTRG(overrides?: CallOverrides): Promise<BigNumber>;

    "boundedMTRG()"(overrides?: CallOverrides): Promise<BigNumber>;

    bucketClose(bucketID: BytesLike, overrides?: CallOverrides): Promise<void>;

    "bucketClose(bytes32)"(
      bucketID: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    bucketDeposit(
      bucketID: BytesLike,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "bucketDeposit(bytes32,uint256)"(
      bucketID: BytesLike,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    bucketMerge(
      fromBucketID: BytesLike,
      toBucketID: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "bucketMerge(bytes32,bytes32)"(
      fromBucketID: BytesLike,
      toBucketID: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

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
    ): Promise<boolean>;

    "bucketTransferFund(bytes32,bytes32,uint256)"(
      fromBucketID: BytesLike,
      toBucketID: BytesLike,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    bucketUpdateCandidate(
      bucketID: BytesLike,
      newCandidateAddr: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "bucketUpdateCandidate(bytes32,address)"(
      bucketID: BytesLike,
      newCandidateAddr: string,
      overrides?: CallOverrides
    ): Promise<void>;

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
  };

  filters: {};

  estimateGas: {
    boundedMTRG(overrides?: CallOverrides): Promise<BigNumber>;

    "boundedMTRG()"(overrides?: CallOverrides): Promise<BigNumber>;

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

    bucketUpdateCandidate(
      bucketID: BytesLike,
      newCandidateAddr: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "bucketUpdateCandidate(bytes32,address)"(
      bucketID: BytesLike,
      newCandidateAddr: string,
      overrides?: Overrides
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
  };

  populateTransaction: {
    boundedMTRG(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "boundedMTRG()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

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

    bucketUpdateCandidate(
      bucketID: BytesLike,
      newCandidateAddr: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "bucketUpdateCandidate(bytes32,address)"(
      bucketID: BytesLike,
      newCandidateAddr: string,
      overrides?: Overrides
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
  };
}
