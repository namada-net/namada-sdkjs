import { field } from "@dao-xyz/borsh";
import { FrontendSusFeeProps } from "../types";

export class FrontendSusFeeMsgValue {
  @field({ type: "string" })
  address!: string;

  @field({ type: "string" })
  amount!: string;

  constructor(props: FrontendSusFeeProps) {
    Object.assign(this, props);
  }
}
