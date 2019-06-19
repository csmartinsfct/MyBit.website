/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter } from "ethers";
import { Provider } from "ethers/providers";
import { BigNumber } from "ethers/utils";
import { TransactionOverrides } from ".";

export class Database extends Contract {
  functions: {
    bytes32Storage(arg0: string): Promise<string>;

    addressStorage(arg0: string): Promise<string>;

    stringStorage(arg0: string): Promise<string>;

    boolStorage(arg0: string): Promise<boolean>;

    bytesStorage(arg0: string): Promise<(string)[]>;

    intStorage(arg0: string): Promise<BigNumber>;

    uintStorage(arg0: string): Promise<BigNumber>;

    enableContractManagement(
      _contractManager: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    setAddress(
      _key: string,
      _value: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    setUint(
      _key: string,
      _value: number | string | BigNumber,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    setString(
      _key: string,
      _value: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    setBytes(
      _key: string,
      _value: (string)[],
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    setBytes32(
      _key: string,
      _value: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    setBool(
      _key: string,
      _value: boolean,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    setInt(
      _key: string,
      _value: number | string | BigNumber,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    deleteAddress(
      _key: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    deleteUint(
      _key: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    deleteString(
      _key: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    deleteBytes(
      _key: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    deleteBytes32(
      _key: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    deleteBool(
      _key: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    deleteInt(
      _key: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;
  };
  filters: {
    LogInitialized(_owner: null, _upgradeable: null): EventFilter;
  };
}
