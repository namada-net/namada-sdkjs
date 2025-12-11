import { field } from "@dao-xyz/borsh";
import { FrontendSusFeeProps } from "../types";
import { BigNumberSerializer } from "./utils";

export class FrontendSusFeeMsgValue {
  @field({ type: "string" })
  target!: string;

  @field(BigNumberSerializer)
  percentage!: BigNumber;

  constructor(props: FrontendSusFeeProps) {
    Object.assign(this, props);
  }
}
