# namada-sdkjs

The Namada JS SDK package repo. This supports the following packages:

- [@namada/sdk](./packages/sdk/README.md)
- [@namada/sdk-multicore](./packages/sdk-multicore/README.md)
- [@namada/sdk-node](./packages/sdk-node/README.md)

## Building

If this is your first time building the SDK, see the following sections:

- [Setting up your Node environment](#setting-up-your-node-environment)
- [Setting up your Rust environment](#setting-up-your-rust-environment)

There are three build targets for the JS SDK. At the root of this repo, issue one of the following commands:

```bash
# Build web SDK - target build directory in packages/sdk/dist
yarn build:sdk

# Build web multicore SDK - target build directory in packages/sdk-multicore/dist
yarn build:sdk:multicore

# Build NodeJS SDK - target build directory in packages/sdk-node/dist
yarn build:node
```

## Types

Explore the generated type docs of the SDK library here: [modules.md](./docs/modules.md)

## Development

The development build of the SDK is recommended for local development, as it allows the Rust wasm
to provide more useful errors. In order to compile development builds of the SDK ([crate](./crate)), issue one
of the following commands, depending on the environment you are targeting:

```bash
# Build web SDK in development mode
yarn build:sdk:dev

# Build web multicore SDK in development mode
yarn build:sdk:multicore:dev

# Build NodeJS SDK in development mode
yarn build:node:dev
```

To regenerate the type docs for `@namada/lib`, enter the following:

```bash
yarn build:docs
```

## Setting up your Node environment

The following are additional Node requirements of this repo:

```bash
# Install yarn and JS dependencies
npm install -g yarn

# within namada-interface/ base folder:
yarn

# Initialize Husky - recommended if you are contributing to this codebase:
yarn prepare
```

## Setting up your Rust environment

Rust is required to build the WebAssembly dependency of the SDK. To achieve this, issue the following commands depending on your environment:

### Ubuntu

_NOTE_ These instructions may work with other Ubuntu-based systems, but are only confirmed to work in Ubuntu.

```bash
# Install rustup
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

# Add WASM target
rustup target add wasm32-unknown-unknown

# Install clang
sudo apt-get install -y clang

# Install pkg-config
sudo apt-get install -y pkg-config

# Install openssl development packages
sudo apt-get install -y libssl-dev

# Install protoc
sudo apt-get install -y protobuf-compiler

# Install curl
sudo apt-get install -y curl

# Install npm
sudo apt-get install -y npm

# Install wasm-pack
curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh
```

### macOS

```bash
# Install xcode
xcode-select --install

# Install rustup
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

# Add WASM target
rustup target add wasm32-unknown-unknown

# Install clang
brew install clang

# Install pkg-config
brew install pkg-config

# Install openssl development packages
brew install libssl-dev

# Install protoc
brew install protobuf

# Install wasm-pack
curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh
```

Finally, update your shell environment (e.g., in `~/.zshrc`) to set the following variables:

```bash
export CC=/usr/local/opt/llvm/bin/clang
AR=/usr/local/opt/llvm/bin/llvm-ar
```

#### Apple Silicon

On macOS, when using Apple Silicon architecture, in order to compile some packages for our wasm dependencies, you will need to install
the following:

```bash
# Mac M1/M2 only - install brew's version of llvm
brew install llvm
```

Then, in your shell profile (e.g., `~/.zshrc`), export the following environment variables:

```bash
# Mac M1/M2 only
export LDFLAGS="-L/opt/homebrew/opt/llvm/lib"
export CPPFLAGS="-I/opt/homebrew/opt/llvm/include"
export CC=/opt/homebrew/opt/llvm/bin/clang
export AR=/opt/homebrew/opt/llvm/bin/llvm-ar
```
