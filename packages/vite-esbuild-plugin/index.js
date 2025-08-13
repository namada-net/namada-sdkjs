import * as path from "path";

export const sdkMulticoreWorkerHelpers = () => {
  return {
    name: "@namada/sdk-multicore-worker-helpers",
    setup(build) {
      build.onResolve({ filter: /.*/ }, (args) => {
        if (args.importer.includes("@namada/sdk-multicore/wasm/src/sdk")) {
          const importerDir = path.dirname(args.importer);
          const absolutePath = path.resolve(importerDir, args.path);

          if (args.path === "../../..") {
            // Special case for the root path
            return { path: `${absolutePath}/index.js`, external: true };
          }

          return { path: absolutePath, external: true };
        }
      });
    },
  };
};
