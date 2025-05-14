import initWasm, { InitInput, InitOutput } from "./web/sdk-multicore";

export const init: (wasm: InitInput) => Promise<InitOutput> = async (wasm) => {
  return await initWasm(wasm);
};
