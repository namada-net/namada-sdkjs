# @namada/vite-esbuild-plugin

This plugin provides support for [@namada/sdk-multicore](../sdk-multicore) features in Vite development mode. The multicore
SDK utilizes WebWorkers to provide "threaded" features, and needs to be able to find and
dynamically load `workerHelpers.js` scripts as provided by [wasm-bindgen-rayon](https://github.com/RReverser/wasm-bindgen-rayon).

## Installation

To use this plugin, install `@namada/vite-esbuild-plugin` as a dev-dependency:

```bash
# NPM
npm install --save-dev @namada/vite-esbuild-plugin

# Yarn
yarn add -D @namada/vite-esbuild-plugin
```

## Usage

In `vite.config.ts`, invoke as follows:

```typescript
import { sdkMulticoreWorkerHelpers } from "@namada/vite-esbuild-plugin";

export default defineConfig({
  optimizeDeps: {
    esbuildOptions: {
      // Use this plugin to handle the SDK multicore worker helpers
      plugins: [sdkMulticoreWorkerHelpers()],
    },
  },
});
```
