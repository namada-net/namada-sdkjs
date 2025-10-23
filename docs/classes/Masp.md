[@namada/lib](../README.md) / [Exports](../modules.md) / Masp

# Class: Masp

Class representing utilities related to MASP

## Table of contents

### Constructors

- [constructor](Masp.md#constructor)

### Properties

- [sdk](Masp.md#sdk)

### Methods

- [addDefaultPaymentAddress](Masp.md#adddefaultpaymentaddress)
- [addSpendingKey](Masp.md#addspendingkey)
- [addViewingKey](Masp.md#addviewingkey)
- [clearShieldedContext](Masp.md#clearshieldedcontext)
- [fetchAndStoreMaspParams](Masp.md#fetchandstoremaspparams)
- [getDescriptorMap](Masp.md#getdescriptormap)
- [getNotesAndConversions](Masp.md#getnotesandconversions)
- [hasMaspParams](Masp.md#hasmaspparams)
- [loadMaspParams](Masp.md#loadmaspparams)
- [maspAddress](Masp.md#maspaddress)

## Constructors

### constructor

• **new Masp**(`sdk`): [`Masp`](Masp.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sdk` | `Sdk` | Instance of Sdk struct from wasm lib |

#### Returns

[`Masp`](Masp.md)

#### Defined in

[packages/lib/src/masp/masp.ts:11](https://github.com/anoma/namada-sdkjs/blob/e80842ddd4efc976aa8ca5c36c7787d825591628/packages/lib/src/masp/masp.ts#L11)

## Properties

### sdk

• `Protected` `Readonly` **sdk**: `Sdk`

Instance of Sdk struct from wasm lib

#### Defined in

[packages/lib/src/masp/masp.ts:11](https://github.com/anoma/namada-sdkjs/blob/e80842ddd4efc976aa8ca5c36c7787d825591628/packages/lib/src/masp/masp.ts#L11)

## Methods

### addDefaultPaymentAddress

▸ **addDefaultPaymentAddress**(`xvk`, `alias`): `Promise`\<`void`\>

Add payment address to SDK wallet

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `xvk` | `string` | Extended viewing key |
| `alias` | `string` | Alias for the key |

#### Returns

`Promise`\<`void`\>

void

**`Async`**

#### Defined in

[packages/lib/src/masp/masp.ts:86](https://github.com/anoma/namada-sdkjs/blob/e80842ddd4efc976aa8ca5c36c7787d825591628/packages/lib/src/masp/masp.ts#L86)

___

### addSpendingKey

▸ **addSpendingKey**(`xsk`, `alias`): `Promise`\<`void`\>

Add spending key to SDK wallet

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `xsk` | `string` | extended spending key |
| `alias` | `string` | alias for the key |

#### Returns

`Promise`\<`void`\>

void

**`Async`**

#### Defined in

[packages/lib/src/masp/masp.ts:64](https://github.com/anoma/namada-sdkjs/blob/e80842ddd4efc976aa8ca5c36c7787d825591628/packages/lib/src/masp/masp.ts#L64)

___

### addViewingKey

▸ **addViewingKey**(`xvk`, `alias`): `Promise`\<`void`\>

Add viewing key to SDK wallet

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `xvk` | `string` | extended viewing key |
| `alias` | `string` | alias for the key |

#### Returns

`Promise`\<`void`\>

void

**`Async`**

#### Defined in

[packages/lib/src/masp/masp.ts:75](https://github.com/anoma/namada-sdkjs/blob/e80842ddd4efc976aa8ca5c36c7787d825591628/packages/lib/src/masp/masp.ts#L75)

___

### clearShieldedContext

▸ **clearShieldedContext**(`chainId`): `Promise`\<`void`\>

Clear shilded context

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chainId` | `string` | Chain ID to clear the shielded context for |

#### Returns

`Promise`\<`void`\>

void

#### Defined in

[packages/lib/src/masp/masp.ts:104](https://github.com/anoma/namada-sdkjs/blob/e80842ddd4efc976aa8ca5c36c7787d825591628/packages/lib/src/masp/masp.ts#L104)

___

### fetchAndStoreMaspParams

▸ **fetchAndStoreMaspParams**(`url?`): `Promise`\<`void`\>

Fetch MASP parameters and store them in SDK

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url?` | `string` | optional URL to override the default |

#### Returns

`Promise`\<`void`\>

void

**`Async`**

#### Defined in

[packages/lib/src/masp/masp.ts:42](https://github.com/anoma/namada-sdkjs/blob/e80842ddd4efc976aa8ca5c36c7787d825591628/packages/lib/src/masp/masp.ts#L42)

___

### getDescriptorMap

▸ **getDescriptorMap**(`tx`, `shieldedHash`): `Promise`\<`number`[]\>

Get spend notes descriptor map

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tx` | `Uint8Array` | tx bytes |
| `shieldedHash` | `Uint8Array` | bytes of the shielded hash |

#### Returns

`Promise`\<`number`[]\>

- Promise resolving to an array of numbers representing the descriptor map

**`Async`**

#### Defined in

[packages/lib/src/masp/masp.ts:20](https://github.com/anoma/namada-sdkjs/blob/e80842ddd4efc976aa8ca5c36c7787d825591628/packages/lib/src/masp/masp.ts#L20)

___

### getNotesAndConversions

▸ **getNotesAndConversions**(`viewingKey`, `chainId`): `Promise`\<[`NotesAndConversions`](../modules.md#notesandconversions)\>

Returns all the notes and conversions connected to the given viewing key

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `viewingKey` | `string` | Viewing key to get notes and conversions for |
| `chainId` | `string` | Chain ID to load correct shielded context |

#### Returns

`Promise`\<[`NotesAndConversions`](../modules.md#notesandconversions)\>

Promise resolving to a map of addresses to arrays of notes and conversions tuple

**`Async`**

#### Defined in

[packages/lib/src/masp/masp.ts:116](https://github.com/anoma/namada-sdkjs/blob/e80842ddd4efc976aa8ca5c36c7787d825591628/packages/lib/src/masp/masp.ts#L116)

___

### hasMaspParams

▸ **hasMaspParams**(): `Promise`\<`boolean`\>

Check if SDK has MASP parameters loaded

#### Returns

`Promise`\<`boolean`\>

True if MASP parameters are loaded

**`Async`**

#### Defined in

[packages/lib/src/masp/masp.ts:32](https://github.com/anoma/namada-sdkjs/blob/e80842ddd4efc976aa8ca5c36c7787d825591628/packages/lib/src/masp/masp.ts#L32)

___

### loadMaspParams

▸ **loadMaspParams**(`pathOrDbName`, `chainId`): `Promise`\<`void`\>

Load stored MASP params

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pathOrDbName` | `string` | Path to stored MASP params(nodejs) or name of the database(browser) |
| `chainId` | `string` | Chain ID to read the MASP params for |

#### Returns

`Promise`\<`void`\>

void

**`Async`**

#### Defined in

[packages/lib/src/masp/masp.ts:53](https://github.com/anoma/namada-sdkjs/blob/e80842ddd4efc976aa8ca5c36c7787d825591628/packages/lib/src/masp/masp.ts#L53)

___

### maspAddress

▸ **maspAddress**(): `string`

Returns the MASP address used as the receiving address in IBC transfers to
shielded accounts

#### Returns

`string`

the MASP address

#### Defined in

[packages/lib/src/masp/masp.ts:95](https://github.com/anoma/namada-sdkjs/blob/e80842ddd4efc976aa8ca5c36c7787d825591628/packages/lib/src/masp/masp.ts#L95)
