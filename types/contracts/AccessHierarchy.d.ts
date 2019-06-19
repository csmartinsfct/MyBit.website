/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter } from "ethers";
import { Provider } from "ethers/providers";
import { BigNumber } from "ethers/utils";
import { TransactionOverrides } from ".";

export class AccessHierarchy extends Contract {
  functions: {
    approveUser(
      _newUser: string,
      _accessLevel: number | string | BigNumber,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    removeUser(
      _user: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    setUpperAccessLevel(
      _newUpperLimit: number | string | BigNumber,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    destroy(overrides?: TransactionOverrides): Promise<ContractTransaction>;

    database(): Promise<string>;
    events(): Promise<string>;
    upperAccessLevel(): Promise<number>;
  };
  filters: {
    LogUserApproved(_user: null, _approvalLevel: null): EventFilter;

    LogUserRemoved(
      _user: string | null,
      _accessLevel: number | string | BigNumber | null
    ): EventFilter;
  };
}
