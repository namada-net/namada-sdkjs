[@namada/lib](../README.md) / [Exports](../modules.md) / PseudoExtendedKey

# Class: PseudoExtendedKey

Wrap ExtendedSpendingKey

## Table of contents

### Constructors

- [constructor](PseudoExtendedKey.md#constructor)

### Methods

- [encode](PseudoExtendedKey.md#encode)
- [free](PseudoExtendedKey.md#free)
- [decode](PseudoExtendedKey.md#decode)
- [from](PseudoExtendedKey.md#from)

## Constructors

### constructor

• **new PseudoExtendedKey**(): [`PseudoExtendedKey`](PseudoExtendedKey.md)

#### Returns

[`PseudoExtendedKey`](PseudoExtendedKey.md)

#### Defined in

packages/wasm/src/sdk/sdk.d.ts:198

## Methods

### encode

▸ **encode**(): `string`

#### Returns

`string`

#### Defined in

packages/wasm/src/sdk/sdk.d.ts:200

___

### free

▸ **free**(): `void`

#### Returns

`void`

#### Defined in

packages/wasm/src/sdk/sdk.d.ts:199

___

### decode

▸ **decode**(`encoded`): [`PseudoExtendedKey`](PseudoExtendedKey.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | `string` |

#### Returns

[`PseudoExtendedKey`](PseudoExtendedKey.md)

#### Defined in

packages/wasm/src/sdk/sdk.d.ts:201

___

### from

▸ **from**(`xvk`, `pgk`): [`PseudoExtendedKey`](PseudoExtendedKey.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `xvk` | [`ExtendedViewingKey`](ExtendedViewingKey.md) |
| `pgk` | [`ProofGenerationKey`](ProofGenerationKey.md) |

#### Returns

[`PseudoExtendedKey`](PseudoExtendedKey.md)

#### Defined in

packages/wasm/src/sdk/sdk.d.ts:202
