[@namada/lib](../README.md) / [Exports](../modules.md) / TransferDetailsMsgValue

# Class: TransferDetailsMsgValue

When deserializing for Transfer Details, return version with
shieldedSectionHash encoded as hex instead of Uint8Array

## Table of contents

### Constructors

- [constructor](TransferDetailsMsgValue.md#constructor)

### Properties

- [shieldedSectionHash](TransferDetailsMsgValue.md#shieldedsectionhash)
- [sources](TransferDetailsMsgValue.md#sources)
- [targets](TransferDetailsMsgValue.md#targets)

## Constructors

### constructor

• **new TransferDetailsMsgValue**(): [`TransferDetailsMsgValue`](TransferDetailsMsgValue.md)

#### Returns

[`TransferDetailsMsgValue`](TransferDetailsMsgValue.md)

## Properties

### shieldedSectionHash

• `Optional` **shieldedSectionHash**: `string`

#### Defined in

[packages/lib/src/types/schema/transfer.ts:240](https://github.com/anoma/namada-sdkjs/blob/e80842ddd4efc976aa8ca5c36c7787d825591628/packages/lib/src/types/schema/transfer.ts#L240)

___

### sources

• **sources**: [`TransferDataMsgValue`](TransferDataMsgValue.md)[]

#### Defined in

[packages/lib/src/types/schema/transfer.ts:234](https://github.com/anoma/namada-sdkjs/blob/e80842ddd4efc976aa8ca5c36c7787d825591628/packages/lib/src/types/schema/transfer.ts#L234)

___

### targets

• **targets**: [`TransferDataMsgValue`](TransferDataMsgValue.md)[]

#### Defined in

[packages/lib/src/types/schema/transfer.ts:237](https://github.com/anoma/namada-sdkjs/blob/e80842ddd4efc976aa8ca5c36c7787d825591628/packages/lib/src/types/schema/transfer.ts#L237)
