# @namada/sdk-node

This package is the build target for `@namada/sdk-node` and provides SDK initialization
specific to NodeJS projects.

## Usage

```bash
# npm
npm install @namada/sdk-node

# yarn
yarn add @namada/sdk-node
```

```typescript
// index.mjs
import { initSdk } from "@namada/sdk-node";
// index.cjs
// const { initSdk } = require("@namada/sdk-node");

const app = async () => {
  // Initialize the SDK with basic options
  const rpcUrl = "https://rpc.campfire.tududes.com";
  const token = "tnam1qy440ynh9fwrx8aewjvvmu38zxqgukgc259fzp6h";
  const sdk = await initSdk({ token, rpcUrl });
  const { tx, rpc, signing } = sdk;
  // ...
};

app();
```
