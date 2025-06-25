[@namada/lib](../README.md) / [Exports](../modules.md) / ExtendedViewingKey

# Class: ExtendedViewingKey

Wrap ExtendedViewingKey

## Table of contents

### Constructors

- [constructor](ExtendedViewingKey.md#constructor)

### Methods

- [default\_payment\_address](ExtendedViewingKey.md#default_payment_address)
- [encode](ExtendedViewingKey.md#encode)
- [free](ExtendedViewingKey.md#free)

## Constructors

### constructor

• **new ExtendedViewingKey**(`key`): [`ExtendedViewingKey`](ExtendedViewingKey.md)

Instantiate ExtendedViewingKey from serialized vector

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `Uint8Array` |

#### Returns

[`ExtendedViewingKey`](ExtendedViewingKey.md)

#### Defined in

packages/wasm/src/sdk/sdk.d.ts:118

## Methods

### default\_payment\_address

▸ **default_payment_address**(): `any`

#### Returns

`any`

#### Defined in

packages/wasm/src/sdk/sdk.d.ts:123

___

### encode

▸ **encode**(): `string`

Return ExtendedViewingKey as Bech32-encoded String

#### Returns

`string`

#### Defined in

packages/wasm/src/sdk/sdk.d.ts:122

___

### free

▸ **free**(): `void`

#### Returns

`void`

#### Defined in

packages/wasm/src/sdk/sdk.d.ts:114
