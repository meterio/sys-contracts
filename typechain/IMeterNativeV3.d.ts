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

interface IMeterNativeV3Interface extends ethers.utils.Interface {
  functions: {
    "native_bucket_close(address,bytes32)": FunctionFragment;
    "native_bucket_deposit(address,bytes32,uint256)": FunctionFragment;
    "native_bucket_open(address,address,uint256)": FunctionFragment;
    "native_bucket_update_candidate(address,bytes32,address)": FunctionFragment;
    "native_bucket_withdraw(address,bytes32,uint256,address)": FunctionFragment;
    "native_master(address)": FunctionFragment;
    "native_mtr_add(address,uint256)": FunctionFragment;
    "native_mtr_get(address)": FunctionFragment;
    "native_mtr_locked_add(address,uint256)": FunctionFragment;
    "native_mtr_locked_get(address)": FunctionFragment;
    "native_mtr_locked_sub(address,uint256)": FunctionFragment;
    "native_mtr_sub(address,uint256)": FunctionFragment;
    "native_mtr_totalBurned()": FunctionFragment;
    "native_mtr_totalSupply()": FunctionFragment;
    "native_mtrg_add(address,uint256)": FunctionFragment;
    "native_mtrg_get(address)": FunctionFragment;
    "native_mtrg_locked_add(address,uint256)": FunctionFragment;
    "native_mtrg_locked_get(address)": FunctionFragment;
    "native_mtrg_locked_sub(address,uint256)": FunctionFragment;
    "native_mtrg_sub(address,uint256)": FunctionFragment;
    "native_mtrg_totalBurned()": FunctionFragment;
    "native_mtrg_totalSupply()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "native_bucket_close",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "native_bucket_deposit",
    values: [string, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "native_bucket_open",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "native_bucket_update_candidate",
    values: [string, BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "native_bucket_withdraw",
    values: [string, BytesLike, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "native_master",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "native_mtr_add",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "native_mtr_get",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "native_mtr_locked_add",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "native_mtr_locked_get",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "native_mtr_locked_sub",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "native_mtr_sub",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "native_mtr_totalBurned",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "native_mtr_totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "native_mtrg_add",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "native_mtrg_get",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "native_mtrg_locked_add",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "native_mtrg_locked_get",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "native_mtrg_locked_sub",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "native_mtrg_sub",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "native_mtrg_totalBurned",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "native_mtrg_totalSupply",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "native_bucket_close",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "native_bucket_deposit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "native_bucket_open",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "native_bucket_update_candidate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "native_bucket_withdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "native_master",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "native_mtr_add",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "native_mtr_get",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "native_mtr_locked_add",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "native_mtr_locked_get",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "native_mtr_locked_sub",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "native_mtr_sub",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "native_mtr_totalBurned",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "native_mtr_totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "native_mtrg_add",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "native_mtrg_get",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "native_mtrg_locked_add",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "native_mtrg_locked_get",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "native_mtrg_locked_sub",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "native_mtrg_sub",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "native_mtrg_totalBurned",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "native_mtrg_totalSupply",
    data: BytesLike
  ): Result;

  events: {
    "Bound(address,uint256,uint256)": EventFragment;
    "MeterTrackerEvent(address,uint256,string)": EventFragment;
    "NativeBucketWithdraw(address,uint256,uint256,address)": EventFragment;
    "Unbound(address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Bound"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MeterTrackerEvent"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NativeBucketWithdraw"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unbound"): EventFragment;
}

export class IMeterNativeV3 extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IMeterNativeV3Interface;

  functions: {
    native_bucket_close(
      owner: string,
      bucketID: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "native_bucket_close(address,bytes32)"(
      owner: string,
      bucketID: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    native_bucket_deposit(
      owner: string,
      bucketID: BytesLike,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "native_bucket_deposit(address,bytes32,uint256)"(
      owner: string,
      bucketID: BytesLike,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    native_bucket_open(
      owner: string,
      candidateAddr: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "native_bucket_open(address,address,uint256)"(
      owner: string,
      candidateAddr: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    native_bucket_update_candidate(
      owner: string,
      bucketID: BytesLike,
      newCandidateAddr: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "native_bucket_update_candidate(address,bytes32,address)"(
      owner: string,
      bucketID: BytesLike,
      newCandidateAddr: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    native_bucket_withdraw(
      owner: string,
      bucketID: BytesLike,
      amount: BigNumberish,
      recipient: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "native_bucket_withdraw(address,bytes32,uint256,address)"(
      owner: string,
      bucketID: BytesLike,
      amount: BigNumberish,
      recipient: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    native_master(
      addr: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "native_master(address)"(
      addr: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    native_mtr_add(
      addr: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "native_mtr_add(address,uint256)"(
      addr: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    native_mtr_get(
      addr: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "native_mtr_get(address)"(
      addr: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    native_mtr_locked_add(
      addr: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "native_mtr_locked_add(address,uint256)"(
      addr: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    native_mtr_locked_get(
      addr: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "native_mtr_locked_get(address)"(
      addr: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    native_mtr_locked_sub(
      addr: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "native_mtr_locked_sub(address,uint256)"(
      addr: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    native_mtr_sub(
      addr: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "native_mtr_sub(address,uint256)"(
      addr: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    native_mtr_totalBurned(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "native_mtr_totalBurned()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    native_mtr_totalSupply(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "native_mtr_totalSupply()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    native_mtrg_add(
      addr: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "native_mtrg_add(address,uint256)"(
      addr: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    native_mtrg_get(
      addr: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "native_mtrg_get(address)"(
      addr: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    native_mtrg_locked_add(
      addr: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "native_mtrg_locked_add(address,uint256)"(
      addr: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    native_mtrg_locked_get(
      addr: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "native_mtrg_locked_get(address)"(
      addr: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    native_mtrg_locked_sub(
      addr: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "native_mtrg_locked_sub(address,uint256)"(
      addr: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    native_mtrg_sub(
      addr: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "native_mtrg_sub(address,uint256)"(
      addr: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    native_mtrg_totalBurned(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "native_mtrg_totalBurned()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    native_mtrg_totalSupply(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "native_mtrg_totalSupply()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;
  };

  native_bucket_close(
    owner: string,
    bucketID: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "native_bucket_close(address,bytes32)"(
    owner: string,
    bucketID: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  native_bucket_deposit(
    owner: string,
    bucketID: BytesLike,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "native_bucket_deposit(address,bytes32,uint256)"(
    owner: string,
    bucketID: BytesLike,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  native_bucket_open(
    owner: string,
    candidateAddr: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "native_bucket_open(address,address,uint256)"(
    owner: string,
    candidateAddr: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  native_bucket_update_candidate(
    owner: string,
    bucketID: BytesLike,
    newCandidateAddr: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "native_bucket_update_candidate(address,bytes32,address)"(
    owner: string,
    bucketID: BytesLike,
    newCandidateAddr: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  native_bucket_withdraw(
    owner: string,
    bucketID: BytesLike,
    amount: BigNumberish,
    recipient: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "native_bucket_withdraw(address,bytes32,uint256,address)"(
    owner: string,
    bucketID: BytesLike,
    amount: BigNumberish,
    recipient: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  native_master(addr: string, overrides?: CallOverrides): Promise<string>;

  "native_master(address)"(
    addr: string,
    overrides?: CallOverrides
  ): Promise<string>;

  native_mtr_add(
    addr: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "native_mtr_add(address,uint256)"(
    addr: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  native_mtr_get(addr: string, overrides?: CallOverrides): Promise<BigNumber>;

  "native_mtr_get(address)"(
    addr: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  native_mtr_locked_add(
    addr: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "native_mtr_locked_add(address,uint256)"(
    addr: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  native_mtr_locked_get(
    addr: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "native_mtr_locked_get(address)"(
    addr: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  native_mtr_locked_sub(
    addr: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "native_mtr_locked_sub(address,uint256)"(
    addr: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  native_mtr_sub(
    addr: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "native_mtr_sub(address,uint256)"(
    addr: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  native_mtr_totalBurned(overrides?: CallOverrides): Promise<BigNumber>;

  "native_mtr_totalBurned()"(overrides?: CallOverrides): Promise<BigNumber>;

  native_mtr_totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  "native_mtr_totalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

  native_mtrg_add(
    addr: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "native_mtrg_add(address,uint256)"(
    addr: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  native_mtrg_get(addr: string, overrides?: CallOverrides): Promise<BigNumber>;

  "native_mtrg_get(address)"(
    addr: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  native_mtrg_locked_add(
    addr: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "native_mtrg_locked_add(address,uint256)"(
    addr: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  native_mtrg_locked_get(
    addr: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "native_mtrg_locked_get(address)"(
    addr: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  native_mtrg_locked_sub(
    addr: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "native_mtrg_locked_sub(address,uint256)"(
    addr: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  native_mtrg_sub(
    addr: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "native_mtrg_sub(address,uint256)"(
    addr: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  native_mtrg_totalBurned(overrides?: CallOverrides): Promise<BigNumber>;

  "native_mtrg_totalBurned()"(overrides?: CallOverrides): Promise<BigNumber>;

  native_mtrg_totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  "native_mtrg_totalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    native_bucket_close(
      owner: string,
      bucketID: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "native_bucket_close(address,bytes32)"(
      owner: string,
      bucketID: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    native_bucket_deposit(
      owner: string,
      bucketID: BytesLike,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "native_bucket_deposit(address,bytes32,uint256)"(
      owner: string,
      bucketID: BytesLike,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    native_bucket_open(
      owner: string,
      candidateAddr: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
      1: string;
    }>;

    "native_bucket_open(address,address,uint256)"(
      owner: string,
      candidateAddr: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
      1: string;
    }>;

    native_bucket_update_candidate(
      owner: string,
      bucketID: BytesLike,
      newCandidateAddr: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "native_bucket_update_candidate(address,bytes32,address)"(
      owner: string,
      bucketID: BytesLike,
      newCandidateAddr: string,
      overrides?: CallOverrides
    ): Promise<string>;

    native_bucket_withdraw(
      owner: string,
      bucketID: BytesLike,
      amount: BigNumberish,
      recipient: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
      1: string;
    }>;

    "native_bucket_withdraw(address,bytes32,uint256,address)"(
      owner: string,
      bucketID: BytesLike,
      amount: BigNumberish,
      recipient: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
      1: string;
    }>;

    native_master(addr: string, overrides?: CallOverrides): Promise<string>;

    "native_master(address)"(
      addr: string,
      overrides?: CallOverrides
    ): Promise<string>;

    native_mtr_add(
      addr: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "native_mtr_add(address,uint256)"(
      addr: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    native_mtr_get(addr: string, overrides?: CallOverrides): Promise<BigNumber>;

    "native_mtr_get(address)"(
      addr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    native_mtr_locked_add(
      addr: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "native_mtr_locked_add(address,uint256)"(
      addr: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    native_mtr_locked_get(
      addr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "native_mtr_locked_get(address)"(
      addr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    native_mtr_locked_sub(
      addr: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "native_mtr_locked_sub(address,uint256)"(
      addr: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    native_mtr_sub(
      addr: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "native_mtr_sub(address,uint256)"(
      addr: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    native_mtr_totalBurned(overrides?: CallOverrides): Promise<BigNumber>;

    "native_mtr_totalBurned()"(overrides?: CallOverrides): Promise<BigNumber>;

    native_mtr_totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    "native_mtr_totalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

    native_mtrg_add(
      addr: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "native_mtrg_add(address,uint256)"(
      addr: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    native_mtrg_get(
      addr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "native_mtrg_get(address)"(
      addr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    native_mtrg_locked_add(
      addr: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "native_mtrg_locked_add(address,uint256)"(
      addr: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    native_mtrg_locked_get(
      addr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "native_mtrg_locked_get(address)"(
      addr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    native_mtrg_locked_sub(
      addr: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "native_mtrg_locked_sub(address,uint256)"(
      addr: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    native_mtrg_sub(
      addr: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "native_mtrg_sub(address,uint256)"(
      addr: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    native_mtrg_totalBurned(overrides?: CallOverrides): Promise<BigNumber>;

    "native_mtrg_totalBurned()"(overrides?: CallOverrides): Promise<BigNumber>;

    native_mtrg_totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    "native_mtrg_totalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    Bound(owner: string | null, amount: null, token: null): EventFilter;

    MeterTrackerEvent(
      _address: null,
      _amount: null,
      _method: null
    ): EventFilter;

    NativeBucketWithdraw(
      owner: string | null,
      amount: null,
      token: null,
      recipient: null
    ): EventFilter;

    Unbound(owner: string | null, amount: null, token: null): EventFilter;
  };

  estimateGas: {
    native_bucket_close(
      owner: string,
      bucketID: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "native_bucket_close(address,bytes32)"(
      owner: string,
      bucketID: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    native_bucket_deposit(
      owner: string,
      bucketID: BytesLike,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "native_bucket_deposit(address,bytes32,uint256)"(
      owner: string,
      bucketID: BytesLike,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    native_bucket_open(
      owner: string,
      candidateAddr: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "native_bucket_open(address,address,uint256)"(
      owner: string,
      candidateAddr: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    native_bucket_update_candidate(
      owner: string,
      bucketID: BytesLike,
      newCandidateAddr: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "native_bucket_update_candidate(address,bytes32,address)"(
      owner: string,
      bucketID: BytesLike,
      newCandidateAddr: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    native_bucket_withdraw(
      owner: string,
      bucketID: BytesLike,
      amount: BigNumberish,
      recipient: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "native_bucket_withdraw(address,bytes32,uint256,address)"(
      owner: string,
      bucketID: BytesLike,
      amount: BigNumberish,
      recipient: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    native_master(addr: string, overrides?: CallOverrides): Promise<BigNumber>;

    "native_master(address)"(
      addr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    native_mtr_add(
      addr: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "native_mtr_add(address,uint256)"(
      addr: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    native_mtr_get(addr: string, overrides?: CallOverrides): Promise<BigNumber>;

    "native_mtr_get(address)"(
      addr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    native_mtr_locked_add(
      addr: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "native_mtr_locked_add(address,uint256)"(
      addr: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    native_mtr_locked_get(
      addr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "native_mtr_locked_get(address)"(
      addr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    native_mtr_locked_sub(
      addr: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "native_mtr_locked_sub(address,uint256)"(
      addr: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    native_mtr_sub(
      addr: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "native_mtr_sub(address,uint256)"(
      addr: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    native_mtr_totalBurned(overrides?: CallOverrides): Promise<BigNumber>;

    "native_mtr_totalBurned()"(overrides?: CallOverrides): Promise<BigNumber>;

    native_mtr_totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    "native_mtr_totalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

    native_mtrg_add(
      addr: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "native_mtrg_add(address,uint256)"(
      addr: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    native_mtrg_get(
      addr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "native_mtrg_get(address)"(
      addr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    native_mtrg_locked_add(
      addr: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "native_mtrg_locked_add(address,uint256)"(
      addr: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    native_mtrg_locked_get(
      addr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "native_mtrg_locked_get(address)"(
      addr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    native_mtrg_locked_sub(
      addr: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "native_mtrg_locked_sub(address,uint256)"(
      addr: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    native_mtrg_sub(
      addr: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "native_mtrg_sub(address,uint256)"(
      addr: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    native_mtrg_totalBurned(overrides?: CallOverrides): Promise<BigNumber>;

    "native_mtrg_totalBurned()"(overrides?: CallOverrides): Promise<BigNumber>;

    native_mtrg_totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    "native_mtrg_totalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    native_bucket_close(
      owner: string,
      bucketID: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "native_bucket_close(address,bytes32)"(
      owner: string,
      bucketID: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    native_bucket_deposit(
      owner: string,
      bucketID: BytesLike,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "native_bucket_deposit(address,bytes32,uint256)"(
      owner: string,
      bucketID: BytesLike,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    native_bucket_open(
      owner: string,
      candidateAddr: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "native_bucket_open(address,address,uint256)"(
      owner: string,
      candidateAddr: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    native_bucket_update_candidate(
      owner: string,
      bucketID: BytesLike,
      newCandidateAddr: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "native_bucket_update_candidate(address,bytes32,address)"(
      owner: string,
      bucketID: BytesLike,
      newCandidateAddr: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    native_bucket_withdraw(
      owner: string,
      bucketID: BytesLike,
      amount: BigNumberish,
      recipient: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "native_bucket_withdraw(address,bytes32,uint256,address)"(
      owner: string,
      bucketID: BytesLike,
      amount: BigNumberish,
      recipient: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    native_master(
      addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "native_master(address)"(
      addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    native_mtr_add(
      addr: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "native_mtr_add(address,uint256)"(
      addr: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    native_mtr_get(
      addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "native_mtr_get(address)"(
      addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    native_mtr_locked_add(
      addr: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "native_mtr_locked_add(address,uint256)"(
      addr: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    native_mtr_locked_get(
      addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "native_mtr_locked_get(address)"(
      addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    native_mtr_locked_sub(
      addr: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "native_mtr_locked_sub(address,uint256)"(
      addr: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    native_mtr_sub(
      addr: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "native_mtr_sub(address,uint256)"(
      addr: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    native_mtr_totalBurned(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "native_mtr_totalBurned()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    native_mtr_totalSupply(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "native_mtr_totalSupply()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    native_mtrg_add(
      addr: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "native_mtrg_add(address,uint256)"(
      addr: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    native_mtrg_get(
      addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "native_mtrg_get(address)"(
      addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    native_mtrg_locked_add(
      addr: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "native_mtrg_locked_add(address,uint256)"(
      addr: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    native_mtrg_locked_get(
      addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "native_mtrg_locked_get(address)"(
      addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    native_mtrg_locked_sub(
      addr: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "native_mtrg_locked_sub(address,uint256)"(
      addr: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    native_mtrg_sub(
      addr: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "native_mtrg_sub(address,uint256)"(
      addr: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    native_mtrg_totalBurned(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "native_mtrg_totalBurned()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    native_mtrg_totalSupply(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "native_mtrg_totalSupply()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}