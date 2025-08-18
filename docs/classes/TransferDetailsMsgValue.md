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

[packages/lib/src/types/schema/transfer.ts:255](https://github.com/namada-net/namada-sdkjs/blob/486c99748287d465c971045c4ea76d959898b452/packages/lib/src/types/schema/transfer.ts#L255)

___

### sources

• **sources**: [`TransferDataMsgValue`](TransferDataMsgValue.md)[]

#### Defined in

[packages/lib/src/types/schema/transfer.ts:249](https://github.com/namada-net/namada-sdkjs/blob/486c99748287d465c971045c4ea76d959898b452/packages/lib/src/types/schema/transfer.ts#L249)

___

### targets

• **targets**: [`TransferDataMsgValue`](TransferDataMsgValue.md)[]

#### Defined in

[packages/lib/src/types/schema/transfer.ts:252](https://github.com/namada-net/namada-sdkjs/blob/486c99748287d465c971045c4ea76d959898b452/packages/lib/src/types/schema/transfer.ts#L252)
