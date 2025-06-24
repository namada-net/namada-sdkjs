import { parseArgs } from "node:util";
import { execSync } from "child_process";

const argsOptions = {
  target: {
    type: "string",
    short: "t",
  },
};
// target = "multicore" | "node" | undefined
const { target } = parseArgs({
  args: process.argv.slice(2),
  options: argsOptions,
}).values;

const pkg = `sdk${target ? "-" + target : ""}`;

execSync(
  `cp ./packages/wasm/src/sdk/sdk_bg.wasm ./packages/${pkg}/dist/wasm/src/sdk/`,
);

execSync(
  `cp  ./packages/wasm/src/sdk/sdk_bg.wasm ./packages/${pkg}/dist/sdk.namada.wasm`,
);

if (target === "multicore") {
  execSync(
    `echo 'export * from "./sdk";' > ./packages/${pkg}/dist/wasm/src/sdk/index.js`,
  );
}
