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

interface SampleStakingPoolInterface extends ethers.utils.Interface {
  functions: {
    "deposit(uint256)": FunctionFragment;
    "destroy()": FunctionFragment;
    "init(address,uint256)": FunctionFragment;
    "poolBucketID()": FunctionFragment;
    "updateCandidate(address)": FunctionFragment;
    "withdraw(uint256,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "deposit",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "destroy", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "init",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "poolBucketID",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "updateCandidate",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish, string]
  ): string;

  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "destroy", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "init", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "poolBucketID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateCandidate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {};
}

export class SampleStakingPool extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: SampleStakingPoolInterface;

  functions: {
    deposit(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "deposit(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    destroy(overrides?: Overrides): Promise<ContractTransaction>;

    "destroy()"(overrides?: Overrides): Promise<ContractTransaction>;

    init(
      candidate: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "init(address,uint256)"(
      candidate: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    poolBucketID(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "poolBucketID()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    updateCandidate(
      newCandidateAddr: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "updateCandidate(address)"(
      newCandidateAddr: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    withdraw(
      amount: BigNumberish,
      recipient: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "withdraw(uint256,address)"(
      amount: BigNumberish,
      recipient: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  deposit(
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "deposit(uint256)"(
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  destroy(overrides?: Overrides): Promise<ContractTransaction>;

  "destroy()"(overrides?: Overrides): Promise<ContractTransaction>;

  init(
    candidate: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "init(address,uint256)"(
    candidate: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  poolBucketID(overrides?: CallOverrides): Promise<string>;

  "poolBucketID()"(overrides?: CallOverrides): Promise<string>;

  updateCandidate(
    newCandidateAddr: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "updateCandidate(address)"(
    newCandidateAddr: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  withdraw(
    amount: BigNumberish,
    recipient: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "withdraw(uint256,address)"(
    amount: BigNumberish,
    recipient: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    deposit(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "deposit(uint256)"(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    destroy(overrides?: CallOverrides): Promise<void>;

    "destroy()"(overrides?: CallOverrides): Promise<void>;

    init(
      candidate: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "init(address,uint256)"(
      candidate: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    poolBucketID(overrides?: CallOverrides): Promise<string>;

    "poolBucketID()"(overrides?: CallOverrides): Promise<string>;

    updateCandidate(
      newCandidateAddr: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "updateCandidate(address)"(
      newCandidateAddr: string,
      overrides?: CallOverrides
    ): Promise<void>;

    withdraw(
      amount: BigNumberish,
      recipient: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "withdraw(uint256,address)"(
      amount: BigNumberish,
      recipient: string,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    deposit(amount: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "deposit(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    destroy(overrides?: Overrides): Promise<BigNumber>;

    "destroy()"(overrides?: Overrides): Promise<BigNumber>;

    init(
      candidate: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "init(address,uint256)"(
      candidate: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    poolBucketID(overrides?: CallOverrides): Promise<BigNumber>;

    "poolBucketID()"(overrides?: CallOverrides): Promise<BigNumber>;

    updateCandidate(
      newCandidateAddr: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "updateCandidate(address)"(
      newCandidateAddr: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    withdraw(
      amount: BigNumberish,
      recipient: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "withdraw(uint256,address)"(
      amount: BigNumberish,
      recipient: string,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    deposit(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "deposit(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    destroy(overrides?: Overrides): Promise<PopulatedTransaction>;

    "destroy()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    init(
      candidate: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "init(address,uint256)"(
      candidate: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    poolBucketID(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "poolBucketID()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    updateCandidate(
      newCandidateAddr: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "updateCandidate(address)"(
      newCandidateAddr: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    withdraw(
      amount: BigNumberish,
      recipient: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "withdraw(uint256,address)"(
      amount: BigNumberish,
      recipient: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}