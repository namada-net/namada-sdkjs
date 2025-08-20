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

[packages/lib/src/masp/masp.ts:10](https://github.com/namada-net/namada-sdkjs/blob/486c99748287d465c971045c4ea76d959898b452/packages/lib/src/masp/masp.ts#L10)

## Properties

### sdk

• `Protected` `Readonly` **sdk**: `Sdk`

Instance of Sdk struct from wasm lib

#### Defined in

[packages/lib/src/masp/masp.ts:10](https://github.com/namada-net/namada-sdkjs/blob/486c99748287d465c971045c4ea76d959898b452/packages/lib/src/masp/masp.ts#L10)

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

[packages/lib/src/masp/masp.ts:85](https://github.com/namada-net/namada-sdkjs/blob/486c99748287d465c971045c4ea76d959898b452/packages/lib/src/masp/masp.ts#L85)

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

[packages/lib/src/masp/masp.ts:63](https://github.com/namada-net/namada-sdkjs/blob/486c99748287d465c971045c4ea76d959898b452/packages/lib/src/masp/masp.ts#L63)

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

[packages/lib/src/masp/masp.ts:74](https://github.com/namada-net/namada-sdkjs/blob/486c99748287d465c971045c4ea76d959898b452/packages/lib/src/masp/masp.ts#L74)

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

[packages/lib/src/masp/masp.ts:103](https://github.com/namada-net/namada-sdkjs/blob/486c99748287d465c971045c4ea76d959898b452/packages/lib/src/masp/masp.ts#L103)

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

[packages/lib/src/masp/masp.ts:41](https://github.com/namada-net/namada-sdkjs/blob/486c99748287d465c971045c4ea76d959898b452/packages/lib/src/masp/masp.ts#L41)

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

[packages/lib/src/masp/masp.ts:19](https://github.com/namada-net/namada-sdkjs/blob/486c99748287d465c971045c4ea76d959898b452/packages/lib/src/masp/masp.ts#L19)

___

### hasMaspParams

▸ **hasMaspParams**(): `Promise`\<`boolean`\>

Check if SDK has MASP parameters loaded

#### Returns

`Promise`\<`boolean`\>

True if MASP parameters are loaded

**`Async`**

#### Defined in

[packages/lib/src/masp/masp.ts:31](https://github.com/namada-net/namada-sdkjs/blob/486c99748287d465c971045c4ea76d959898b452/packages/lib/src/masp/masp.ts#L31)

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

[packages/lib/src/masp/masp.ts:52](https://github.com/namada-net/namada-sdkjs/blob/486c99748287d465c971045c4ea76d959898b452/packages/lib/src/masp/masp.ts#L52)

___

### maspAddress

▸ **maspAddress**(): `string`

Returns the MASP address used as the receiving address in IBC transfers to
shielded accounts

#### Returns

`string`

the MASP address

#### Defined in

[packages/lib/src/masp/masp.ts:94](https://github.com/namada-net/namada-sdkjs/blob/486c99748287d465c971045c4ea76d959898b452/packages/lib/src/masp/masp.ts#L94)
