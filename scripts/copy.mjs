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

const cmds = [
  // TODO: Why isn't `sdk_bg.wasm` included automatically?
  `cp ./packages/wasm/src/sdk/sdk_bg.wasm ./packages/${pkg}/dist/wasm/src/sdk/`,
  // Only needed for dynamic loading
  `cp  ./packages/wasm/src/sdk/sdk_bg.wasm ./packages/${pkg}/dist/sdk.namada.wasm`,
  // As `sdk/package.json` is removed during `npm pack`, inject an index to turn
  // it into a module:
  `echo 'export * from "./sdk";' > ./packages/${pkg}/dist/wasm/src/sdk/index.js`,
];

for (const cmd of cmds) {
  execSync(cmd);
}
