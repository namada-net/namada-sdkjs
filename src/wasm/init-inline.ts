// TODO: How to handle these imports?
import initWasm, { InitOutput } from "./web/sdk-multicore";
// @ts-ignore
import wasm from "./web/sdk-multicore/sdk_bg.wasm?url";

export const init: () => Promise<InitOutput> = async () => await initWasm(wasm);
