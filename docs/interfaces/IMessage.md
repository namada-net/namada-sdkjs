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

[packages/lib/src/types/messages/index.ts:5](https://github.com/anoma/namada-sdkjs/blob/d6a15cde252d70b528d7c09b83d669dea20b267b/packages/lib/src/types/messages/index.ts#L5)
