// We have to use relative improts here othewise ts-patch is getting confused and produces wrong paths after compialtion
import { init as initSDK } from "wasm/init";
import { initThreadPool } from "wasm/init-thread-pool";

/**
 * Initialize the SDK memory
 * @async
 * @returns
 
 - The SDK crypto memory
 */
export default async function init(): Promise<{
  cryptoMemory: WebAssembly.Memory;
}> {
  // Load and initialize shared wasm
  const sharedWasm = await fetch("sdk.namada.wasm").then((wasm) =>
    wasm.arrayBuffer(),
  );
  const { memory: cryptoMemory } = await initSDK(sharedWasm);

  return { cryptoMemory };
}

/**
 * Initialize the SDK memory, with multicore support.
 * If you built wasm without multicore support, this will work as regular init.
 * @async
 * @returns - The SDK crypto memory
 */
export async function initMulticore(): Promise<{
  cryptoMemory: WebAssembly.Memory;
}> {
  const res = await init();
  await initThreadPool(navigator.hardwareConcurrency);
  return res;
}
