[@namada/lib](../README.md) / [Exports](../modules.md) / Sdk

# Class: Sdk

API for interacting with Namada SDK

## Table of contents

### Constructors

- [constructor](Sdk.md#constructor)

### Properties

- [memory](Sdk.md#memory)
- [nativeToken](Sdk.md#nativetoken)
- [query](Sdk.md#query)
- [sdk](Sdk.md#sdk)
- [url](Sdk.md#url)
- [version](Sdk.md#version)

### Accessors

- [crypto](Sdk.md#crypto)
- [keys](Sdk.md#keys)
- [masp](Sdk.md#masp)
- [mnemonic](Sdk.md#mnemonic)
- [rpc](Sdk.md#rpc)
- [signing](Sdk.md#signing)
- [tx](Sdk.md#tx)

### Methods

- [getCrypto](Sdk.md#getcrypto)
- [getKeys](Sdk.md#getkeys)
- [getMasp](Sdk.md#getmasp)
- [getMnemonic](Sdk.md#getmnemonic)
- [getRpc](Sdk.md#getrpc)
- [getSigning](Sdk.md#getsigning)
- [getTx](Sdk.md#gettx)
- [initLedger](Sdk.md#initledger)
- [updateNetwork](Sdk.md#updatenetwork)

## Constructors

### constructor

• **new Sdk**(`sdk`, `query`, `memory`, `url`, `nativeToken`): [`Sdk`](Sdk.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sdk` | `Sdk` | Instance of Sdk struct from wasm lib |
| `query` | `Query` | Instance of Query struct from wasm lib |
| `memory` | `Memory` | Memory accessor for wasm lib |
| `url` | `string` | RPC url |
| `nativeToken` | `string` | Address of chain's native token |

#### Returns

[`Sdk`](Sdk.md)

#### Defined in

[packages/lib/src/sdk.ts:28](https://github.com/anoma/namada-sdkjs/blob/e80842ddd4efc976aa8ca5c36c7787d825591628/packages/lib/src/sdk.ts#L28)

## Properties

### memory

• `Readonly` **memory**: `Memory`

Memory accessor for wasm lib

#### Defined in

[packages/lib/src/sdk.ts:31](https://github.com/anoma/namada-sdkjs/blob/e80842ddd4efc976aa8ca5c36c7787d825591628/packages/lib/src/sdk.ts#L31)

___

### nativeToken

• `Readonly` **nativeToken**: `string`

Address of chain's native token

#### Defined in

[packages/lib/src/sdk.ts:33](https://github.com/anoma/namada-sdkjs/blob/e80842ddd4efc976aa8ca5c36c7787d825591628/packages/lib/src/sdk.ts#L33)

___

### query

• `Protected` **query**: `Query`

Instance of Query struct from wasm lib

#### Defined in

[packages/lib/src/sdk.ts:30](https://github.com/anoma/namada-sdkjs/blob/e80842ddd4efc976aa8ca5c36c7787d825591628/packages/lib/src/sdk.ts#L30)

___

### sdk

• `Protected` **sdk**: `Sdk`

Instance of Sdk struct from wasm lib

#### Defined in

[packages/lib/src/sdk.ts:29](https://github.com/anoma/namada-sdkjs/blob/e80842ddd4efc976aa8ca5c36c7787d825591628/packages/lib/src/sdk.ts#L29)

___

### url

• `Readonly` **url**: `string`

RPC url

#### Defined in

[packages/lib/src/sdk.ts:32](https://github.com/anoma/namada-sdkjs/blob/e80842ddd4efc976aa8ca5c36c7787d825591628/packages/lib/src/sdk.ts#L32)

___

### version

▪ `Static` `Readonly` **version**: ``"0.22.0"``

#### Defined in

[packages/lib/src/sdk.ts:19](https://github.com/anoma/namada-sdkjs/blob/e80842ddd4efc976aa8ca5c36c7787d825591628/packages/lib/src/sdk.ts#L19)

## Accessors

### crypto

• `get` **crypto**(): [`Crypto`](Crypto.md)

Define crypto getter to use with destructuring assignment

#### Returns

[`Crypto`](Crypto.md)

Utilities for encrypting and decrypting data

#### Defined in

[packages/lib/src/sdk.ts:171](https://github.com/anoma/namada-sdkjs/blob/e80842ddd4efc976aa8ca5c36c7787d825591628/packages/lib/src/sdk.ts#L171)

___

### keys

• `get` **keys**(): [`Keys`](Keys.md)

Define keys getter to use with destructuring assignment

#### Returns

[`Keys`](Keys.md)

key-related functionality

#### Defined in

[packages/lib/src/sdk.ts:147](https://github.com/anoma/namada-sdkjs/blob/e80842ddd4efc976aa8ca5c36c7787d825591628/packages/lib/src/sdk.ts#L147)

___

### masp

• `get` **masp**(): [`Masp`](Masp.md)

Define signing getter to use with destructuring assignment

#### Returns

[`Masp`](Masp.md)

Masp utilities for handling params

#### Defined in

[packages/lib/src/sdk.ts:163](https://github.com/anoma/namada-sdkjs/blob/e80842ddd4efc976aa8ca5c36c7787d825591628/packages/lib/src/sdk.ts#L163)

___

### mnemonic

• `get` **mnemonic**(): [`Mnemonic`](Mnemonic.md)

Define mnemonic getter to use with destructuring assignment

#### Returns

[`Mnemonic`](Mnemonic.md)

mnemonic-related functionality

#### Defined in

[packages/lib/src/sdk.ts:139](https://github.com/anoma/namada-sdkjs/blob/e80842ddd4efc976aa8ca5c36c7787d825591628/packages/lib/src/sdk.ts#L139)

___

### rpc

• `get` **rpc**(): [`Rpc`](Rpc.md)

Define rpc getter to use with destructuring assignment

#### Returns

[`Rpc`](Rpc.md)

rpc client

#### Defined in

[packages/lib/src/sdk.ts:123](https://github.com/anoma/namada-sdkjs/blob/e80842ddd4efc976aa8ca5c36c7787d825591628/packages/lib/src/sdk.ts#L123)

___

### signing

• `get` **signing**(): [`Signing`](Signing.md)

Define signing getter to use with destructuring assignment

#### Returns

[`Signing`](Signing.md)

Non-Tx signing functionality

#### Defined in

[packages/lib/src/sdk.ts:155](https://github.com/anoma/namada-sdkjs/blob/e80842ddd4efc976aa8ca5c36c7787d825591628/packages/lib/src/sdk.ts#L155)

___

### tx

• `get` **tx**(): [`Tx`](Tx.md)

Define tx getter to use with destructuring assignment

#### Returns

[`Tx`](Tx.md)

tx-related functionality

#### Defined in

[packages/lib/src/sdk.ts:131](https://github.com/anoma/namada-sdkjs/blob/e80842ddd4efc976aa8ca5c36c7787d825591628/packages/lib/src/sdk.ts#L131)

## Methods

### getCrypto

▸ **getCrypto**(): [`Crypto`](Crypto.md)

Return initialized Crypto class

#### Returns

[`Crypto`](Crypto.md)

Utilities for encrypting and decrypting data

#### Defined in

[packages/lib/src/sdk.ts:105](https://github.com/anoma/namada-sdkjs/blob/e80842ddd4efc976aa8ca5c36c7787d825591628/packages/lib/src/sdk.ts#L105)

___

### getKeys

▸ **getKeys**(): [`Keys`](Keys.md)

Return initialized Keys class

#### Returns

[`Keys`](Keys.md)

key-related functionality

#### Defined in

[packages/lib/src/sdk.ts:81](https://github.com/anoma/namada-sdkjs/blob/e80842ddd4efc976aa8ca5c36c7787d825591628/packages/lib/src/sdk.ts#L81)

___

### getMasp

▸ **getMasp**(): [`Masp`](Masp.md)

Return initialized Masp class

#### Returns

[`Masp`](Masp.md)

Masp utilities for handling params

#### Defined in

[packages/lib/src/sdk.ts:97](https://github.com/anoma/namada-sdkjs/blob/e80842ddd4efc976aa8ca5c36c7787d825591628/packages/lib/src/sdk.ts#L97)

___

### getMnemonic

▸ **getMnemonic**(): [`Mnemonic`](Mnemonic.md)

Return initialized Mnemonic class

#### Returns

[`Mnemonic`](Mnemonic.md)

mnemonic-related functionality

#### Defined in

[packages/lib/src/sdk.ts:73](https://github.com/anoma/namada-sdkjs/blob/e80842ddd4efc976aa8ca5c36c7787d825591628/packages/lib/src/sdk.ts#L73)

___

### getRpc

▸ **getRpc**(): [`Rpc`](Rpc.md)

Return initialized Rpc class

#### Returns

[`Rpc`](Rpc.md)

Namada RPC client

#### Defined in

[packages/lib/src/sdk.ts:57](https://github.com/anoma/namada-sdkjs/blob/e80842ddd4efc976aa8ca5c36c7787d825591628/packages/lib/src/sdk.ts#L57)

___

### getSigning

▸ **getSigning**(): [`Signing`](Signing.md)

Return initialized Signing class

#### Returns

[`Signing`](Signing.md)

Non-Tx signing functionality

#### Defined in

[packages/lib/src/sdk.ts:89](https://github.com/anoma/namada-sdkjs/blob/e80842ddd4efc976aa8ca5c36c7787d825591628/packages/lib/src/sdk.ts#L89)

___

### getTx

▸ **getTx**(): [`Tx`](Tx.md)

Return initialized Tx class

#### Returns

[`Tx`](Tx.md)

Tx-related functionality

#### Defined in

[packages/lib/src/sdk.ts:65](https://github.com/anoma/namada-sdkjs/blob/e80842ddd4efc976aa8ca5c36c7787d825591628/packages/lib/src/sdk.ts#L65)

___

### initLedger

▸ **initLedger**(`transport?`): `Promise`\<[`Ledger`](Ledger.md)\>

Intialize Ledger class for use with NamadaApp

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transport?` | `default` | Will default to USB transport if not specified |

#### Returns

`Promise`\<[`Ledger`](Ledger.md)\>

Class for interacting with NamadaApp for Ledger Hardware Wallets

**`Async`**

#### Defined in

[packages/lib/src/sdk.ts:115](https://github.com/anoma/namada-sdkjs/blob/e80842ddd4efc976aa8ca5c36c7787d825591628/packages/lib/src/sdk.ts#L115)

___

### updateNetwork

▸ **updateNetwork**(`url`, `nativeToken?`): [`Sdk`](Sdk.md)

Re-initialize wasm instances and return this instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | RPC url |
| `nativeToken?` | `string` | Address of chain's native token |

#### Returns

[`Sdk`](Sdk.md)

this instance of Sdk

#### Defined in

[packages/lib/src/sdk.ts:42](https://github.com/anoma/namada-sdkjs/blob/e80842ddd4efc976aa8ca5c36c7787d825591628/packages/lib/src/sdk.ts#L42)
