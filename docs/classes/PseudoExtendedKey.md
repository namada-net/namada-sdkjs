[@namada/lib](../README.md) / [Exports](../modules.md) / PseudoExtendedKey

# Class: PseudoExtendedKey

Wrap ExtendedSpendingKey

## Table of contents

### Constructors

- [constructor](PseudoExtendedKey.md#constructor)

### Methods

- [encode](PseudoExtendedKey.md#encode)
- [free](PseudoExtendedKey.md#free)
- [to\_viewing\_key](PseudoExtendedKey.md#to_viewing_key)
- [can\_decode](PseudoExtendedKey.md#can_decode)
- [decode](PseudoExtendedKey.md#decode)
- [from](PseudoExtendedKey.md#from)

## Constructors

### constructor

• **new PseudoExtendedKey**(): [`PseudoExtendedKey`](PseudoExtendedKey.md)

#### Returns

[`PseudoExtendedKey`](PseudoExtendedKey.md)

#### Defined in

packages/wasm/src/sdk/sdk.d.ts:199

## Methods

### encode

▸ **encode**(): `string`

#### Returns

`string`

#### Defined in

packages/wasm/src/sdk/sdk.d.ts:201

___

### free

▸ **free**(): `void`

#### Returns

`void`

#### Defined in

packages/wasm/src/sdk/sdk.d.ts:200

___

### to\_viewing\_key

▸ **to_viewing_key**(): [`ExtendedViewingKey`](ExtendedViewingKey.md)

#### Returns

[`ExtendedViewingKey`](ExtendedViewingKey.md)

#### Defined in

packages/wasm/src/sdk/sdk.d.ts:205

___

### can\_decode

▸ **can_decode**(`encoded`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | `string` |

#### Returns

`boolean`

#### Defined in

packages/wasm/src/sdk/sdk.d.ts:203

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

packages/wasm/src/sdk/sdk.d.ts:202

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

packages/wasm/src/sdk/sdk.d.ts:204
