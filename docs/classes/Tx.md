[@namada/lib](../README.md) / [Exports](../modules.md) / Tx

# Class: Tx

SDK functionality related to transactions

## Table of contents

### Constructors

- [constructor](Tx.md#constructor)

### Properties

- [sdk](Tx.md#sdk)

### Methods

- [appendMaspSignatures](Tx.md#appendmaspsignatures)
- [appendSignature](Tx.md#appendsignature)
- [buildBatch](Tx.md#buildbatch)
- [buildBond](Tx.md#buildbond)
- [buildClaimRewards](Tx.md#buildclaimrewards)
- [buildEthBridgeTransfer](Tx.md#buildethbridgetransfer)
- [buildIbcTransfer](Tx.md#buildibctransfer)
- [buildRedelegate](Tx.md#buildredelegate)
- [buildRevealPk](Tx.md#buildrevealpk)
- [buildShieldedTransfer](Tx.md#buildshieldedtransfer)
- [buildShieldingTransfer](Tx.md#buildshieldingtransfer)
- [buildTransparentTransfer](Tx.md#buildtransparenttransfer)
- [buildUnbond](Tx.md#buildunbond)
- [buildUnshieldingTransfer](Tx.md#buildunshieldingtransfer)
- [buildVoteProposal](Tx.md#buildvoteproposal)
- [buildWithdraw](Tx.md#buildwithdraw)
- [deserialize](Tx.md#deserialize)
- [encodeTxArgs](Tx.md#encodetxargs)
- [generateIbcShieldingMemo](Tx.md#generateibcshieldingmemo)
- [getInnerTxMeta](Tx.md#getinnertxmeta)

## Constructors

### constructor

• **new Tx**(`sdk`): [`Tx`](Tx.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sdk` | `Sdk` | Instance of Sdk struct from wasm lib |

#### Returns

[`Tx`](Tx.md)

#### Defined in

[packages/lib/src/tx/tx.ts:56](https://github.com/anoma/namada-sdkjs/blob/edf30efe7e90e48022c5a06b224e44eb58087392/packages/lib/src/tx/tx.ts#L56)

## Properties

### sdk

• `Protected` `Readonly` **sdk**: `Sdk`

Instance of Sdk struct from wasm lib

#### Defined in

[packages/lib/src/tx/tx.ts:56](https://github.com/anoma/namada-sdkjs/blob/edf30efe7e90e48022c5a06b224e44eb58087392/packages/lib/src/tx/tx.ts#L56)

## Methods

### appendMaspSignatures

▸ **appendMaspSignatures**(`txBytes`, `signingData`, `signatures`): `Uint8Array`

Append signature for transactions signed by Ledger Hardware Wallet

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `txBytes` | `Uint8Array` | bytes of the transaction |
| `signingData` | `Uint8Array`[] | signing data |
| `signatures` | `Uint8Array`[] | masp signature |

#### Returns

`Uint8Array`

transaction bytes with signature appended

#### Defined in

[packages/lib/src/tx/tx.ts:378](https://github.com/anoma/namada-sdkjs/blob/edf30efe7e90e48022c5a06b224e44eb58087392/packages/lib/src/tx/tx.ts#L378)

___

### appendSignature

▸ **appendSignature**(`txBytes`, `ledgerSignatureResponse`): `Uint8Array`

Append signature for transactions signed by Ledger Hardware Wallet

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `txBytes` | `Uint8Array` | Serialized transaction |
| `ledgerSignatureResponse` | `ResponseSign` | Serialized signature as returned from Ledger |

#### Returns

`Uint8Array`

- Serialized Tx bytes with signature appended

#### Defined in

[packages/lib/src/tx/tx.ts:392](https://github.com/anoma/namada-sdkjs/blob/edf30efe7e90e48022c5a06b224e44eb58087392/packages/lib/src/tx/tx.ts#L392)

___

### buildBatch

▸ **buildBatch**(`txs`): [`TxMsgValue`](TxMsgValue.md)

Build a batched transaction

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `txs` | [`TxMsgValue`](TxMsgValue.md)[] | array of TxProp |

#### Returns

[`TxMsgValue`](TxMsgValue.md)

a serialized TxMsgValue type

#### Defined in

[packages/lib/src/tx/tx.ts:360](https://github.com/anoma/namada-sdkjs/blob/edf30efe7e90e48022c5a06b224e44eb58087392/packages/lib/src/tx/tx.ts#L360)

___

### buildBond

▸ **buildBond**(`wrapperTxProps`, `bondProps`): `Promise`\<[`TxMsgValue`](TxMsgValue.md)\>

Build Bond Tx

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `wrapperTxProps` | [`WrapperTxMsgValue`](WrapperTxMsgValue.md) | properties of the transaction |
| `bondProps` | [`BondMsgValue`](BondMsgValue.md) | properties of the bond tx |

#### Returns

`Promise`\<[`TxMsgValue`](TxMsgValue.md)\>

promise that resolves to an TxMsgValue

**`Async`**

#### Defined in

[packages/lib/src/tx/tx.ts:180](https://github.com/anoma/namada-sdkjs/blob/edf30efe7e90e48022c5a06b224e44eb58087392/packages/lib/src/tx/tx.ts#L180)

___

### buildClaimRewards

▸ **buildClaimRewards**(`wrapperTxProps`, `claimRewardsProps`): `Promise`\<[`TxMsgValue`](TxMsgValue.md)\>

Build Claim Rewards Tx

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `wrapperTxProps` | [`WrapperTxMsgValue`](WrapperTxMsgValue.md) | properties of the transaction |
| `claimRewardsProps` | [`ClaimRewardsMsgValue`](ClaimRewardsMsgValue.md) | properties of the claim rewards tx |

#### Returns

`Promise`\<[`TxMsgValue`](TxMsgValue.md)\>

promise that resolves to an TxMsgValue

**`Async`**

#### Defined in

[packages/lib/src/tx/tx.ts:339](https://github.com/anoma/namada-sdkjs/blob/edf30efe7e90e48022c5a06b224e44eb58087392/packages/lib/src/tx/tx.ts#L339)

___

### buildEthBridgeTransfer

▸ **buildEthBridgeTransfer**(`wrapperTxProps`, `ethBridgeTransferProps`): `Promise`\<[`TxMsgValue`](TxMsgValue.md)\>

Build Ethereum Bridge Transfer Tx

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `wrapperTxProps` | [`WrapperTxMsgValue`](WrapperTxMsgValue.md) | properties of the transaction |
| `ethBridgeTransferProps` | [`EthBridgeTransferMsgValue`](EthBridgeTransferMsgValue.md) | properties of the eth bridge transfer tx |

#### Returns

`Promise`\<[`TxMsgValue`](TxMsgValue.md)\>

promise that resolves to an TxMsgValue

**`Async`**

#### Defined in

[packages/lib/src/tx/tx.ts:292](https://github.com/anoma/namada-sdkjs/blob/edf30efe7e90e48022c5a06b224e44eb58087392/packages/lib/src/tx/tx.ts#L292)

___

### buildIbcTransfer

▸ **buildIbcTransfer**(`wrapperTxProps`, `ibcTransferProps`): `Promise`\<[`TxMsgValue`](TxMsgValue.md)\>

Build Ibc Transfer Tx
`ibcTransferProps.amountInBaseDenom` is the amount in the **base** denom
e.g. the value of 1 NAM should be BigNumber(1_000_000), not BigNumber(1).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `wrapperTxProps` | [`WrapperTxMsgValue`](WrapperTxMsgValue.md) | properties of the transaction |
| `ibcTransferProps` | [`IbcTransferMsgValue`](IbcTransferMsgValue.md) | properties of the ibc transfer tx |

#### Returns

`Promise`\<[`TxMsgValue`](TxMsgValue.md)\>

promise that resolves to an TxMsgValue

**`Async`**

#### Defined in

[packages/lib/src/tx/tx.ts:269](https://github.com/anoma/namada-sdkjs/blob/edf30efe7e90e48022c5a06b224e44eb58087392/packages/lib/src/tx/tx.ts#L269)

___

### buildRedelegate

▸ **buildRedelegate**(`wrapperTxProps`, `redelegateProps`): `Promise`\<[`TxMsgValue`](TxMsgValue.md)\>

Build Redelegate Tx

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `wrapperTxProps` | [`WrapperTxMsgValue`](WrapperTxMsgValue.md) | properties of the transaction |
| `redelegateProps` | [`RedelegateMsgValue`](RedelegateMsgValue.md) | properties of the redelegate tx |

#### Returns

`Promise`\<[`TxMsgValue`](TxMsgValue.md)\>

promise that resolves to an TxMsgValue

**`Async`**

#### Defined in

[packages/lib/src/tx/tx.ts:244](https://github.com/anoma/namada-sdkjs/blob/edf30efe7e90e48022c5a06b224e44eb58087392/packages/lib/src/tx/tx.ts#L244)

___

### buildRevealPk

▸ **buildRevealPk**(`wrapperTxProps`): `Promise`\<[`TxMsgValue`](TxMsgValue.md)\>

Build RevealPK Tx

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `wrapperTxProps` | [`WrapperTxMsgValue`](WrapperTxMsgValue.md) | properties of the transaction |

#### Returns

`Promise`\<[`TxMsgValue`](TxMsgValue.md)\>

promise that resolves to an TxMsgValue

**`Async`**

#### Defined in

[packages/lib/src/tx/tx.ts:167](https://github.com/anoma/namada-sdkjs/blob/edf30efe7e90e48022c5a06b224e44eb58087392/packages/lib/src/tx/tx.ts#L167)

___

### buildShieldedTransfer

▸ **buildShieldedTransfer**(`wrapperTxProps`, `shieldedTransferProps`): `Promise`\<[`TxMsgValue`](TxMsgValue.md)\>

Build Shielded Transfer Tx

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `wrapperTxProps` | [`WrapperTxMsgValue`](WrapperTxMsgValue.md) | properties of the transaction |
| `shieldedTransferProps` | [`ShieldedTransferMsgValue`](ShieldedTransferMsgValue.md) | properties of the shielded transfer |

#### Returns

`Promise`\<[`TxMsgValue`](TxMsgValue.md)\>

promise that resolves to an TxMsgValue

**`Async`**

#### Defined in

[packages/lib/src/tx/tx.ts:90](https://github.com/anoma/namada-sdkjs/blob/edf30efe7e90e48022c5a06b224e44eb58087392/packages/lib/src/tx/tx.ts#L90)

___

### buildShieldingTransfer

▸ **buildShieldingTransfer**(`wrapperTxProps`, `shieldingTransferProps`): `Promise`\<[`TxMsgValue`](TxMsgValue.md)\>

Build Shielding Transfer Tx

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `wrapperTxProps` | [`WrapperTxMsgValue`](WrapperTxMsgValue.md) | properties of the transaction |
| `shieldingTransferProps` | [`ShieldingTransferMsgValue`](ShieldingTransferMsgValue.md) | properties of the shielding transfer |

#### Returns

`Promise`\<[`TxMsgValue`](TxMsgValue.md)\>

promise that resolves to an TxMsgValue

**`Async`**

#### Defined in

[packages/lib/src/tx/tx.ts:116](https://github.com/anoma/namada-sdkjs/blob/edf30efe7e90e48022c5a06b224e44eb58087392/packages/lib/src/tx/tx.ts#L116)

___

### buildTransparentTransfer

▸ **buildTransparentTransfer**(`wrapperTxProps`, `transferProps`): `Promise`\<[`TxMsgValue`](TxMsgValue.md)\>

Build Transparent Transfer Tx

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `wrapperTxProps` | [`WrapperTxMsgValue`](WrapperTxMsgValue.md) | properties of the transaction |
| `transferProps` | [`TransparentTransferMsgValue`](TransparentTransferMsgValue.md) | properties of the transfer |

#### Returns

`Promise`\<[`TxMsgValue`](TxMsgValue.md)\>

promise that resolves to an TxMsgValue

**`Async`**

#### Defined in

[packages/lib/src/tx/tx.ts:65](https://github.com/anoma/namada-sdkjs/blob/edf30efe7e90e48022c5a06b224e44eb58087392/packages/lib/src/tx/tx.ts#L65)

___

### buildUnbond

▸ **buildUnbond**(`wrapperTxProps`, `unbondProps`): `Promise`\<[`TxMsgValue`](TxMsgValue.md)\>

Build Unbond Tx

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `wrapperTxProps` | [`WrapperTxMsgValue`](WrapperTxMsgValue.md) | properties of the transaction |
| `unbondProps` | [`UnbondMsgValue`](UnbondMsgValue.md) | properties of the unbond tx |

#### Returns

`Promise`\<[`TxMsgValue`](TxMsgValue.md)\>

promise that resolves to an TxMsgValue

**`Async`**

#### Defined in

[packages/lib/src/tx/tx.ts:201](https://github.com/anoma/namada-sdkjs/blob/edf30efe7e90e48022c5a06b224e44eb58087392/packages/lib/src/tx/tx.ts#L201)

___

### buildUnshieldingTransfer

▸ **buildUnshieldingTransfer**(`wrapperTxProps`, `unshieldingTransferProps`): `Promise`\<[`TxMsgValue`](TxMsgValue.md)\>

Build Unshielding Transfer Tx

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `wrapperTxProps` | [`WrapperTxMsgValue`](WrapperTxMsgValue.md) | properties of the transaction |
| `unshieldingTransferProps` | [`UnshieldingTransferMsgValue`](UnshieldingTransferMsgValue.md) | properties of the unshielding transfer |

#### Returns

`Promise`\<[`TxMsgValue`](TxMsgValue.md)\>

promise that resolves to an TxMsgValue

**`Async`**

#### Defined in

[packages/lib/src/tx/tx.ts:142](https://github.com/anoma/namada-sdkjs/blob/edf30efe7e90e48022c5a06b224e44eb58087392/packages/lib/src/tx/tx.ts#L142)

___

### buildVoteProposal

▸ **buildVoteProposal**(`wrapperTxProps`, `voteProposalProps`): `Promise`\<[`TxMsgValue`](TxMsgValue.md)\>

Build Vote Proposal Tx

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `wrapperTxProps` | [`WrapperTxMsgValue`](WrapperTxMsgValue.md) | properties of the transaction |
| `voteProposalProps` | [`VoteProposalMsgValue`](VoteProposalMsgValue.md) | properties of the vote proposal tx |

#### Returns

`Promise`\<[`TxMsgValue`](TxMsgValue.md)\>

promise that resolves to an TxMsgValue

**`Async`**

#### Defined in

[packages/lib/src/tx/tx.ts:315](https://github.com/anoma/namada-sdkjs/blob/edf30efe7e90e48022c5a06b224e44eb58087392/packages/lib/src/tx/tx.ts#L315)

___

### buildWithdraw

▸ **buildWithdraw**(`wrapperTxProps`, `withdrawProps`): `Promise`\<[`TxMsgValue`](TxMsgValue.md)\>

Build Withdraw Tx

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `wrapperTxProps` | [`WrapperTxMsgValue`](WrapperTxMsgValue.md) | properties of the transaction |
| `withdrawProps` | [`WithdrawMsgValue`](WithdrawMsgValue.md) | properties of the withdraw tx |

#### Returns

`Promise`\<[`TxMsgValue`](TxMsgValue.md)\>

promise that resolves to an TxMsgValue

**`Async`**

#### Defined in

[packages/lib/src/tx/tx.ts:223](https://github.com/anoma/namada-sdkjs/blob/edf30efe7e90e48022c5a06b224e44eb58087392/packages/lib/src/tx/tx.ts#L223)

___

### deserialize

▸ **deserialize**(`txBytes`, `checksums`): [`TxDetails`](../modules.md#txdetails)

Method to retrieve JSON strings for all commitments of a Tx

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `txBytes` | `Uint8Array` | Bytes of a transaction |
| `checksums` | `Record`\<`string`, `string`\> | Record of paths mapped to their respective hashes |

#### Returns

[`TxDetails`](../modules.md#txdetails)

a TxDetails object

#### Defined in

[packages/lib/src/tx/tx.ts:445](https://github.com/anoma/namada-sdkjs/blob/edf30efe7e90e48022c5a06b224e44eb58087392/packages/lib/src/tx/tx.ts#L445)

___

### encodeTxArgs

▸ **encodeTxArgs**(`wrapperTxProps`): `Uint8Array`

Helper to encode Tx args given TxProps

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `wrapperTxProps` | [`WrapperTxMsgValue`](WrapperTxMsgValue.md) | properties of the transaction |

#### Returns

`Uint8Array`

Serialized WrapperTxMsgValue

#### Defined in

[packages/lib/src/tx/tx.ts:433](https://github.com/anoma/namada-sdkjs/blob/edf30efe7e90e48022c5a06b224e44eb58087392/packages/lib/src/tx/tx.ts#L433)

___

### generateIbcShieldingMemo

▸ **generateIbcShieldingMemo**(`target`, `token`, `amount`, `channelId`): `Promise`\<`string`\>

Generate the memo needed for performing an IBC transfer to a Namada shielded
address.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `string` | the Namada shielded address to send tokens to |
| `token` | `string` | the token to transfer |
| `amount` | `BigNumber` | the amount to transfer |
| `channelId` | `string` | the IBC channel ID on the Namada side |

#### Returns

`Promise`\<`string`\>

promise that resolves to the shielding memo

**`Async`**

#### Defined in

[packages/lib/src/tx/tx.ts:512](https://github.com/anoma/namada-sdkjs/blob/edf30efe7e90e48022c5a06b224e44eb58087392/packages/lib/src/tx/tx.ts#L512)

___

### getInnerTxMeta

▸ **getInnerTxMeta**(`bytes`): [`string`, ``null`` \| `number`[]][]

Return the inner tx hashes from the provided tx bytes

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bytes` | `Uint8Array` | Uint8Array |

#### Returns

[`string`, ``null`` \| `number`[]][]

array of tuple of [inner Tx hashes, utf8 bytes memo]

#### Defined in

[packages/lib/src/tx/tx.ts:531](https://github.com/anoma/namada-sdkjs/blob/edf30efe7e90e48022c5a06b224e44eb58087392/packages/lib/src/tx/tx.ts#L531)
