[@namada/lib](../README.md) / [Exports](../modules.md) / IMessage

# Interface: IMessage\<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Schema`](../modules.md#schema) |

## Implemented by

- [`Message`](../classes/Message.md)

## Table of contents

### Methods

- [encode](IMessage.md#encode)

## Methods

### encode

▸ **encode**(`value`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`Uint8Array`

#### Defined in

[packages/lib/src/types/messages/index.ts:5](https://github.com/anoma/namada-sdkjs/blob/ddb1fbe158b34c3d0747a37bae4f012eab37a978/packages/lib/src/types/messages/index.ts#L5)
