[@namada/lib](../README.md) / [Exports](../modules.md) / Tx

# Class: Tx

SDK functionality related to transactions

## Table of contents

### Constructors

- [constructor](Tx.md#constructor)

### Properties

- [sdk](Tx.md#sdk)

### Methods

- [appendMaspSignature](Tx.md#appendmaspsignature)
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
- [getInnerTxHashes](Tx.md#getinnertxhashes)

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

[packages/lib/src/tx/tx.ts:56](https://github.com/namada-net/namada-sdkjs/blob/317e383a8ca213c3545ce431bc294c7340c765cd/packages/lib/src/tx/tx.ts#L56)

## Properties

### sdk

• `Protected` `Readonly` **sdk**: `Sdk`

Instance of Sdk struct from wasm lib

#### Defined in

[packages/lib/src/tx/tx.ts:56](https://github.com/namada-net/namada-sdkjs/blob/317e383a8ca213c3545ce431bc294c7340c765cd/packages/lib/src/tx/tx.ts#L56)

## Methods

### appendMaspSignature

▸ **appendMaspSignature**(`txBytes`, `signingData`, `signatures`): `Uint8Array`

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

[packages/lib/src/tx/tx.ts:376](https://github.com/namada-net/namada-sdkjs/blob/317e383a8ca213c3545ce431bc294c7340c765cd/packages/lib/src/tx/tx.ts#L376)

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

[packages/lib/src/tx/tx.ts:390](https://github.com/namada-net/namada-sdkjs/blob/317e383a8ca213c3545ce431bc294c7340c765cd/packages/lib/src/tx/tx.ts#L390)

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

[packages/lib/src/tx/tx.ts:358](https://github.com/namada-net/namada-sdkjs/blob/317e383a8ca213c3545ce431bc294c7340c765cd/packages/lib/src/tx/tx.ts#L358)

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

[packages/lib/src/tx/tx.ts:178](https://github.com/namada-net/namada-sdkjs/blob/317e383a8ca213c3545ce431bc294c7340c765cd/packages/lib/src/tx/tx.ts#L178)

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

[packages/lib/src/tx/tx.ts:337](https://github.com/namada-net/namada-sdkjs/blob/317e383a8ca213c3545ce431bc294c7340c765cd/packages/lib/src/tx/tx.ts#L337)

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

[packages/lib/src/tx/tx.ts:290](https://github.com/namada-net/namada-sdkjs/blob/317e383a8ca213c3545ce431bc294c7340c765cd/packages/lib/src/tx/tx.ts#L290)

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

[packages/lib/src/tx/tx.ts:267](https://github.com/namada-net/namada-sdkjs/blob/317e383a8ca213c3545ce431bc294c7340c765cd/packages/lib/src/tx/tx.ts#L267)

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

[packages/lib/src/tx/tx.ts:242](https://github.com/namada-net/namada-sdkjs/blob/317e383a8ca213c3545ce431bc294c7340c765cd/packages/lib/src/tx/tx.ts#L242)

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

[packages/lib/src/tx/tx.ts:165](https://github.com/namada-net/namada-sdkjs/blob/317e383a8ca213c3545ce431bc294c7340c765cd/packages/lib/src/tx/tx.ts#L165)

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

[packages/lib/src/tx/tx.ts:90](https://github.com/namada-net/namada-sdkjs/blob/317e383a8ca213c3545ce431bc294c7340c765cd/packages/lib/src/tx/tx.ts#L90)

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

[packages/lib/src/tx/tx.ts:115](https://github.com/namada-net/namada-sdkjs/blob/317e383a8ca213c3545ce431bc294c7340c765cd/packages/lib/src/tx/tx.ts#L115)

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

[packages/lib/src/tx/tx.ts:65](https://github.com/namada-net/namada-sdkjs/blob/317e383a8ca213c3545ce431bc294c7340c765cd/packages/lib/src/tx/tx.ts#L65)

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

[packages/lib/src/tx/tx.ts:199](https://github.com/namada-net/namada-sdkjs/blob/317e383a8ca213c3545ce431bc294c7340c765cd/packages/lib/src/tx/tx.ts#L199)

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

[packages/lib/src/tx/tx.ts:141](https://github.com/namada-net/namada-sdkjs/blob/317e383a8ca213c3545ce431bc294c7340c765cd/packages/lib/src/tx/tx.ts#L141)

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

[packages/lib/src/tx/tx.ts:313](https://github.com/namada-net/namada-sdkjs/blob/317e383a8ca213c3545ce431bc294c7340c765cd/packages/lib/src/tx/tx.ts#L313)

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

[packages/lib/src/tx/tx.ts:221](https://github.com/namada-net/namada-sdkjs/blob/317e383a8ca213c3545ce431bc294c7340c765cd/packages/lib/src/tx/tx.ts#L221)

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

[packages/lib/src/tx/tx.ts:443](https://github.com/namada-net/namada-sdkjs/blob/317e383a8ca213c3545ce431bc294c7340c765cd/packages/lib/src/tx/tx.ts#L443)

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

[packages/lib/src/tx/tx.ts:431](https://github.com/namada-net/namada-sdkjs/blob/317e383a8ca213c3545ce431bc294c7340c765cd/packages/lib/src/tx/tx.ts#L431)

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

[packages/lib/src/tx/tx.ts:510](https://github.com/namada-net/namada-sdkjs/blob/317e383a8ca213c3545ce431bc294c7340c765cd/packages/lib/src/tx/tx.ts#L510)

___

### getInnerTxHashes

▸ **getInnerTxHashes**(`bytes`): `string`[]

Return the inner tx hashes from the provided tx bytes

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bytes` | `Uint8Array` | Uint8Array |

#### Returns

`string`[]

array of inner Tx hashes

#### Defined in

[packages/lib/src/tx/tx.ts:529](https://github.com/namada-net/namada-sdkjs/blob/317e383a8ca213c3545ce431bc294c7340c765cd/packages/lib/src/tx/tx.ts#L529)
