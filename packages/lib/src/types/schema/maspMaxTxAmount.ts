import { field } from "@dao-xyz/borsh";
import { MaxMaspTxAmountProps } from "../types";

export class MaxMaspTxAmountMsgValue {
  @field({ type: "u8" })
  maxNotes!: number;

  @field({ type: "string" })
  source!: string;

  @field({ type: "string" })
  target!: string;

  @field({ type: "string" })
  token!: string;

  @field({ type: "string" })
  feeToken!: string;

  @field({ type: "string" })
  amount!: string;

  @field({ type: "string" })
  feeAmount!: string;

  constructor(data: MaxMaspTxAmountProps) {
    Object.assign(this, data);
  }
}
