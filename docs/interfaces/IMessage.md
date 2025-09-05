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

[packages/lib/src/types/messages/index.ts:5](https://github.com/anoma/namada-sdkjs/blob/edf30efe7e90e48022c5a06b224e44eb58087392/packages/lib/src/types/messages/index.ts#L5)
