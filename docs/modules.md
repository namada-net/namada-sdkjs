[@namada/lib](README.md) / Exports

# @namada/lib

## Table of contents

### Enumerations

- [KdfType](enums/KdfType.md)
- [PhraseSize](enums/PhraseSize.md)
- [ResultCode](enums/ResultCode.md)
- [SdkEvents](enums/SdkEvents.md)
- [TxType](enums/TxType.md)

### Classes

- [BatchTxResultMsgValue](classes/BatchTxResultMsgValue.md)
- [BondMsgValue](classes/BondMsgValue.md)
- [BparamsConvertMsgValue](classes/BparamsConvertMsgValue.md)
- [BparamsMsgValue](classes/BparamsMsgValue.md)
- [BparamsOutputMsgValue](classes/BparamsOutputMsgValue.md)
- [BparamsSpendMsgValue](classes/BparamsSpendMsgValue.md)
- [BroadcastTxError](classes/BroadcastTxError.md)
- [ClaimRewardsMsgValue](classes/ClaimRewardsMsgValue.md)
- [CommitmentMsgValue](classes/CommitmentMsgValue.md)
- [Crypto](classes/Crypto.md)
- [EthBridgeTransferMsgValue](classes/EthBridgeTransferMsgValue.md)
- [ExtendedViewingKey](classes/ExtendedViewingKey.md)
- [IbcTransferMsgValue](classes/IbcTransferMsgValue.md)
- [Keys](classes/Keys.md)
- [Ledger](classes/Ledger.md)
- [Masp](classes/Masp.md)
- [MaspTxIn](classes/MaspTxIn.md)
- [MaspTxOut](classes/MaspTxOut.md)
- [Message](classes/Message.md)
- [Mnemonic](classes/Mnemonic.md)
- [ProgressBarNames](classes/ProgressBarNames.md)
- [ProofGenerationKey](classes/ProofGenerationKey.md)
- [PseudoExtendedKey](classes/PseudoExtendedKey.md)
- [RedelegateMsgValue](classes/RedelegateMsgValue.md)
- [RevealPkMsgValue](classes/RevealPkMsgValue.md)
- [Rpc](classes/Rpc.md)
- [Sdk](classes/Sdk.md)
- [ShieldedTransferDataMsgValue](classes/ShieldedTransferDataMsgValue.md)
- [ShieldedTransferMsgValue](classes/ShieldedTransferMsgValue.md)
- [ShieldingTransferDataMsgValue](classes/ShieldingTransferDataMsgValue.md)
- [ShieldingTransferMsgValue](classes/ShieldingTransferMsgValue.md)
- [SignatureMsgValue](classes/SignatureMsgValue.md)
- [Signing](classes/Signing.md)
- [SigningDataMsgValue](classes/SigningDataMsgValue.md)
- [TransferDataMsgValue](classes/TransferDataMsgValue.md)
- [TransferDetailsMsgValue](classes/TransferDetailsMsgValue.md)
- [TransferMsgValue](classes/TransferMsgValue.md)
- [TransparentTransferDataMsgValue](classes/TransparentTransferDataMsgValue.md)
- [TransparentTransferMsgValue](classes/TransparentTransferMsgValue.md)
- [Tx](classes/Tx.md)
- [TxDetailsMsgValue](classes/TxDetailsMsgValue.md)
- [TxMsgValue](classes/TxMsgValue.md)
- [TxResponseMsgValue](classes/TxResponseMsgValue.md)
- [UnbondMsgValue](classes/UnbondMsgValue.md)
- [UnshieldingTransferDataMsgValue](classes/UnshieldingTransferDataMsgValue.md)
- [UnshieldingTransferMsgValue](classes/UnshieldingTransferMsgValue.md)
- [VoteProposalMsgValue](classes/VoteProposalMsgValue.md)
- [WithdrawMsgValue](classes/WithdrawMsgValue.md)
- [WrapperTxMsgValue](classes/WrapperTxMsgValue.md)

### Interfaces

- [IMessage](interfaces/IMessage.md)

### Type Aliases

- [Address](modules.md#address)
- [Argon2Params](modules.md#argon2params)
- [Balance](modules.md#balance)
- [BatchTxResultProps](modules.md#batchtxresultprops)
- [Bip44Path](modules.md#bip44path)
- [BondProps](modules.md#bondprops)
- [Bonds](modules.md#bonds)
- [ClaimRewardsProps](modules.md#claimrewardsprops)
- [CommitmentDetailProps](modules.md#commitmentdetailprops)
- [CryptoRecord](modules.md#cryptorecord)
- [DatedViewingKey](modules.md#datedviewingkey)
- [DelegationTotals](modules.md#delegationtotals)
- [DelegatorsVotes](modules.md#delegatorsvotes)
- [EncryptionParams](modules.md#encryptionparams)
- [EthBridgeTransferProps](modules.md#ethbridgetransferprops)
- [GeneratedPaymentAddress](modules.md#generatedpaymentaddress)
- [IbcTransferProps](modules.md#ibctransferprops)
- [LedgerAddressAndPublicKey](modules.md#ledgeraddressandpublickey)
- [LedgerProofGenerationKey](modules.md#ledgerproofgenerationkey)
- [LedgerStatus](modules.md#ledgerstatus)
- [LedgerViewingKey](modules.md#ledgerviewingkey)
- [MaspTxInProps](modules.md#masptxinprops)
- [MaspTxOutProps](modules.md#masptxoutprops)
- [RedelegateProps](modules.md#redelegateprops)
- [RevealPkProps](modules.md#revealpkprops)
- [Schema](modules.md#schema)
- [SdkWasmOptions](modules.md#sdkwasmoptions)
- [ShieldedKeys](modules.md#shieldedkeys)
- [ShieldedTransferDataProps](modules.md#shieldedtransferdataprops)
- [ShieldedTransferProps](modules.md#shieldedtransferprops)
- [ShieldingTransferDataProps](modules.md#shieldingtransferdataprops)
- [ShieldingTransferProps](modules.md#shieldingtransferprops)
- [SignatureProps](modules.md#signatureprops)
- [SigningDataProps](modules.md#signingdataprops)
- [StakingPositions](modules.md#stakingpositions)
- [StakingTotals](modules.md#stakingtotals)
- [SupportedTx](modules.md#supportedtx)
- [SupportedTxProps](modules.md#supportedtxprops)
- [TransferDetailsProps](modules.md#transferdetailsprops)
- [TransferProps](modules.md#transferprops)
- [TransparentKeys](modules.md#transparentkeys)
- [TransparentTransferDataProps](modules.md#transparenttransferdataprops)
- [TransparentTransferProps](modules.md#transparenttransferprops)
- [TxDetails](modules.md#txdetails)
- [TxProps](modules.md#txprops)
- [TxResponseProps](modules.md#txresponseprops)
- [UnbondProps](modules.md#unbondprops)
- [Unbonds](modules.md#unbonds)
- [UnshieldingTransferDataProps](modules.md#unshieldingtransferdataprops)
- [UnshieldingTransferProps](modules.md#unshieldingtransferprops)
- [VoteProposalProps](modules.md#voteproposalprops)
- [WithdrawProps](modules.md#withdrawprops)
- [WrapperTxProps](modules.md#wrappertxprops)
- [Zip32Path](modules.md#zip32path)

### Variables

- [Argon2Config](modules.md#argon2config)
- [BigNumberSerializer](modules.md#bignumberserializer)
- [DEFAULT\_BIP44\_PATH](modules.md#default_bip44_path)
- [DEFAULT\_ZIP32\_PATH](modules.md#default_zip32_path)
- [LEDGER\_MASP\_BLACKLISTED](modules.md#ledger_masp_blacklisted)
- [LEDGER\_MIN\_VERSION\_ZIP32](modules.md#ledger_min_version_zip32)
- [MODIFIED\_ZIP32\_PATH](modules.md#modified_zip32_path)
- [NAMADA\_COIN\_TYPE](modules.md#namada_coin_type)
- [ResultCodes](modules.md#resultcodes)
- [TxTypeLabel](modules.md#txtypelabel)

### Functions

- [initLedgerUSBTransport](modules.md#initledgerusbtransport)
- [ledgerUSBList](modules.md#ledgerusblist)
- [makeBip44Path](modules.md#makebip44path)
- [makeSaplingPath](modules.md#makesaplingpath)
- [publicKeyToBech32](modules.md#publickeytobech32)
- [requestLedgerDevice](modules.md#requestledgerdevice)

## Type Aliases

### Address

Ƭ **Address**: `Object`

Address and public key type

#### Type declaration

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `publicKey` | `string` |

#### Defined in

[packages/lib/src/keys/types.ts:6](https://github.com/namada-net/namada-sdkjs/blob/7e52eab0832738d3afb073b6a802625bea75ee25/packages/lib/src/keys/types.ts#L6)

___

### Argon2Params

Ƭ **Argon2Params**: `KdfParams` & \{ `m_cost`: `number` ; `p_cost`: `number` ; `salt`: `string` ; `t_cost`: `number`  }

#### Defined in

[packages/lib/src/crypto/types.ts:23](https://github.com/namada-net/namada-sdkjs/blob/7e52eab0832738d3afb073b6a802625bea75ee25/packages/lib/src/crypto/types.ts#L23)

___

### Balance

Ƭ **Balance**: [`string`, `string`][]

Balance
[tokenAddress, amount][]

#### Defined in

[packages/lib/src/rpc/types.ts:78](https://github.com/namada-net/namada-sdkjs/blob/7e52eab0832738d3afb073b6a802625bea75ee25/packages/lib/src/rpc/types.ts#L78)

___

### BatchTxResultProps

Ƭ **BatchTxResultProps**: [`BatchTxResultMsgValue`](classes/BatchTxResultMsgValue.md)

#### Defined in

[packages/lib/src/types/types.ts:31](https://github.com/namada-net/namada-sdkjs/blob/7e52eab0832738d3afb073b6a802625bea75ee25/packages/lib/src/types/types.ts#L31)

___

### Bip44Path

Ƭ **Bip44Path**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `account` | `number` |
| `change` | `number` |
| `index` | `number` |

#### Defined in

[packages/lib/src/types/account.ts:1](https://github.com/namada-net/namada-sdkjs/blob/7e52eab0832738d3afb073b6a802625bea75ee25/packages/lib/src/types/account.ts#L1)

___

### BondProps

Ƭ **BondProps**: [`BondMsgValue`](classes/BondMsgValue.md)

#### Defined in

[packages/lib/src/types/types.ts:32](https://github.com/namada-net/namada-sdkjs/blob/7e52eab0832738d3afb073b6a802625bea75ee25/packages/lib/src/types/types.ts#L32)

___

### Bonds

Ƭ **Bonds**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `amount` | `string` |
| `owner` | `string` |
| `startEpoch` | `string` |
| `validator` | `string` |

#### Defined in

[packages/lib/src/rpc/types.ts:27](https://github.com/namada-net/namada-sdkjs/blob/7e52eab0832738d3afb073b6a802625bea75ee25/packages/lib/src/rpc/types.ts#L27)

___

### ClaimRewardsProps

Ƭ **ClaimRewardsProps**: [`ClaimRewardsMsgValue`](classes/ClaimRewardsMsgValue.md)

#### Defined in

[packages/lib/src/types/types.ts:54](https://github.com/namada-net/namada-sdkjs/blob/7e52eab0832738d3afb073b6a802625bea75ee25/packages/lib/src/types/types.ts#L54)

___

### CommitmentDetailProps

Ƭ **CommitmentDetailProps**\<`T`\>: `T` & \{ `hash`: `string` ; `maspTxIn?`: [`MaspTxIn`](classes/MaspTxIn.md)[] ; `maspTxOut?`: [`MaspTxOut`](classes/MaspTxOut.md)[] ; `memo?`: `string` ; `txType`: `unknown`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`SupportedTxProps`](modules.md#supportedtxprops) \| `unknown` = `unknown` |

#### Defined in

[packages/lib/src/types/types.ts:72](https://github.com/namada-net/namada-sdkjs/blob/7e52eab0832738d3afb073b6a802625bea75ee25/packages/lib/src/types/types.ts#L72)

___

### CryptoRecord

Ƭ **CryptoRecord**\<`T`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [`Argon2Params`](modules.md#argon2params) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cipher` | \{ `iv`: `Uint8Array` ; `text`: `Uint8Array` ; `type`: ``"aes-256-gcm"``  } |
| `cipher.iv` | `Uint8Array` |
| `cipher.text` | `Uint8Array` |
| `cipher.type` | ``"aes-256-gcm"`` |
| `kdf` | \{ `params`: `T` ; `type`: [`KdfType`](enums/KdfType.md)  } |
| `kdf.params` | `T` |
| `kdf.type` | [`KdfType`](enums/KdfType.md) |

#### Defined in

[packages/lib/src/crypto/types.ts:42](https://github.com/namada-net/namada-sdkjs/blob/7e52eab0832738d3afb073b6a802625bea75ee25/packages/lib/src/crypto/types.ts#L42)

___

### DatedViewingKey

Ƭ **DatedViewingKey**: `Object`

ViewingKey with optional birthday

#### Type declaration

| Name | Type |
| :------ | :------ |
| `birthday` | `number` |
| `key` | `string` |

#### Defined in

[packages/lib/src/types/account.ts:15](https://github.com/namada-net/namada-sdkjs/blob/7e52eab0832738d3afb073b6a802625bea75ee25/packages/lib/src/types/account.ts#L15)

___

### DelegationTotals

Ƭ **DelegationTotals**: `Record`\<`string`, `number`\>

DelegationTotals
Record<address, totalDelegations>

#### Defined in

[packages/lib/src/rpc/types.ts:60](https://github.com/namada-net/namada-sdkjs/blob/7e52eab0832738d3afb073b6a802625bea75ee25/packages/lib/src/rpc/types.ts#L60)

___

### DelegatorsVotes

Ƭ **DelegatorsVotes**: `Record`\<`string`, `boolean`\>

Delegator Votes
Record<address, boolean>

#### Defined in

[packages/lib/src/rpc/types.ts:66](https://github.com/namada-net/namada-sdkjs/blob/7e52eab0832738d3afb073b6a802625bea75ee25/packages/lib/src/rpc/types.ts#L66)

___

### EncryptionParams

Ƭ **EncryptionParams**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `iv` | `Uint8Array` |
| `key` | `VecU8Pointer` |
| `params` | `Argon2ParamsWasm` |
| `salt` | `string` |

#### Defined in

[packages/lib/src/crypto/types.ts:30](https://github.com/namada-net/namada-sdkjs/blob/7e52eab0832738d3afb073b6a802625bea75ee25/packages/lib/src/crypto/types.ts#L30)

___

### EthBridgeTransferProps

Ƭ **EthBridgeTransferProps**: [`EthBridgeTransferMsgValue`](classes/EthBridgeTransferMsgValue.md)

#### Defined in

[packages/lib/src/types/types.ts:33](https://github.com/namada-net/namada-sdkjs/blob/7e52eab0832738d3afb073b6a802625bea75ee25/packages/lib/src/types/types.ts#L33)

___

### GeneratedPaymentAddress

Ƭ **GeneratedPaymentAddress**: `Object`

Result of generating next payment address

#### Type declaration

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `diversifierIndex` | `number` |

#### Defined in

[packages/lib/src/keys/types.ts:32](https://github.com/namada-net/namada-sdkjs/blob/7e52eab0832738d3afb073b6a802625bea75ee25/packages/lib/src/keys/types.ts#L32)

___

### IbcTransferProps

Ƭ **IbcTransferProps**: [`IbcTransferMsgValue`](classes/IbcTransferMsgValue.md)

#### Defined in

[packages/lib/src/types/types.ts:34](https://github.com/namada-net/namada-sdkjs/blob/7e52eab0832738d3afb073b6a802625bea75ee25/packages/lib/src/types/types.ts#L34)

___

### LedgerAddressAndPublicKey

Ƭ **LedgerAddressAndPublicKey**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `publicKey` | `string` |

#### Defined in

[packages/lib/src/ledger.ts:18](https://github.com/namada-net/namada-sdkjs/blob/7e52eab0832738d3afb073b6a802625bea75ee25/packages/lib/src/ledger.ts#L18)

___

### LedgerProofGenerationKey

Ƭ **LedgerProofGenerationKey**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ak` | `Uint8Array` |
| `nsk` | `Uint8Array` |

#### Defined in

[packages/lib/src/ledger.ts:22](https://github.com/namada-net/namada-sdkjs/blob/7e52eab0832738d3afb073b6a802625bea75ee25/packages/lib/src/ledger.ts#L22)

___

### LedgerStatus

Ƭ **LedgerStatus**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `deviceId?` | `string` |
| `deviceName?` | `string` |
| `info` | `ResponseAppInfo` |
| `version` | `ResponseVersion` |

#### Defined in

[packages/lib/src/ledger.ts:27](https://github.com/namada-net/namada-sdkjs/blob/7e52eab0832738d3afb073b6a802625bea75ee25/packages/lib/src/ledger.ts#L27)

___

### LedgerViewingKey

Ƭ **LedgerViewingKey**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `xfvk` | `Uint8Array` |

#### Defined in

[packages/lib/src/ledger.ts:19](https://github.com/namada-net/namada-sdkjs/blob/7e52eab0832738d3afb073b6a802625bea75ee25/packages/lib/src/ledger.ts#L19)

___

### MaspTxInProps

Ƭ **MaspTxInProps**: [`MaspTxIn`](classes/MaspTxIn.md)

#### Defined in

[packages/lib/src/types/types.ts:44](https://github.com/namada-net/namada-sdkjs/blob/7e52eab0832738d3afb073b6a802625bea75ee25/packages/lib/src/types/types.ts#L44)

___

### MaspTxOutProps

Ƭ **MaspTxOutProps**: [`MaspTxOut`](classes/MaspTxOut.md)

#### Defined in

[packages/lib/src/types/types.ts:45](https://github.com/namada-net/namada-sdkjs/blob/7e52eab0832738d3afb073b6a802625bea75ee25/packages/lib/src/types/types.ts#L45)

___

### RedelegateProps

Ƭ **RedelegateProps**: [`RedelegateMsgValue`](classes/RedelegateMsgValue.md)

#### Defined in

[packages/lib/src/types/types.ts:35](https://github.com/namada-net/namada-sdkjs/blob/7e52eab0832738d3afb073b6a802625bea75ee25/packages/lib/src/types/types.ts#L35)

___

### RevealPkProps

Ƭ **RevealPkProps**: [`RevealPkMsgValue`](classes/RevealPkMsgValue.md)

#### Defined in

[packages/lib/src/types/types.ts:57](https://github.com/namada-net/namada-sdkjs/blob/7e52eab0832738d3afb073b6a802625bea75ee25/packages/lib/src/types/types.ts#L57)

___

### Schema

Ƭ **Schema**: [`BatchTxResultMsgValue`](classes/BatchTxResultMsgValue.md) \| [`EthBridgeTransferMsgValue`](classes/EthBridgeTransferMsgValue.md) \| [`IbcTransferMsgValue`](classes/IbcTransferMsgValue.md) \| [`SignatureMsgValue`](classes/SignatureMsgValue.md) \| [`BondMsgValue`](classes/BondMsgValue.md) \| [`UnbondMsgValue`](classes/UnbondMsgValue.md) \| [`VoteProposalMsgValue`](classes/VoteProposalMsgValue.md) \| [`ClaimRewardsMsgValue`](classes/ClaimRewardsMsgValue.md) \| [`WithdrawMsgValue`](classes/WithdrawMsgValue.md) \| [`ShieldedTransferMsgValue`](classes/ShieldedTransferMsgValue.md) \| [`ShieldedTransferDataMsgValue`](classes/ShieldedTransferDataMsgValue.md) \| [`ShieldingTransferMsgValue`](classes/ShieldingTransferMsgValue.md) \| [`ShieldingTransferDataMsgValue`](classes/ShieldingTransferDataMsgValue.md) \| [`SigningDataMsgValue`](classes/SigningDataMsgValue.md) \| [`TransferMsgValue`](classes/TransferMsgValue.md) \| [`TransferDetailsMsgValue`](classes/TransferDetailsMsgValue.md) \| [`TransferDataMsgValue`](classes/TransferDataMsgValue.md) \| [`TransparentTransferMsgValue`](classes/TransparentTransferMsgValue.md) \| [`TransparentTransferDataMsgValue`](classes/TransparentTransferDataMsgValue.md) \| [`TxMsgValue`](classes/TxMsgValue.md) \| [`TxResponseMsgValue`](classes/TxResponseMsgValue.md) \| [`UnshieldingTransferDataMsgValue`](classes/UnshieldingTransferDataMsgValue.md) \| [`UnshieldingTransferMsgValue`](classes/UnshieldingTransferMsgValue.md) \| [`WrapperTxMsgValue`](classes/WrapperTxMsgValue.md) \| [`RedelegateMsgValue`](classes/RedelegateMsgValue.md) \| [`CommitmentMsgValue`](classes/CommitmentMsgValue.md) \| [`TxDetailsMsgValue`](classes/TxDetailsMsgValue.md) \| [`RevealPkMsgValue`](classes/RevealPkMsgValue.md)

#### Defined in

[packages/lib/src/types/schema/index.ts:49](https://github.com/namada-net/namada-sdkjs/blob/7e52eab0832738d3afb073b6a802625bea75ee25/packages/lib/src/types/schema/index.ts#L49)

___

### SdkWasmOptions

Ƭ **SdkWasmOptions**: `Object`

SDK initialization props

#### Type declaration

| Name | Type |
| :------ | :------ |
| `dbName?` | `string` |
| `inline?` | `boolean` |
| `maspIndexerUrl?` | `string` |
| `rpcUrl` | `string` |
| `token` | `string` |

#### Defined in

[packages/lib/src/types/sdk.ts:4](https://github.com/namada-net/namada-sdkjs/blob/7e52eab0832738d3afb073b6a802625bea75ee25/packages/lib/src/types/sdk.ts#L4)

___

### ShieldedKeys

Ƭ **ShieldedKeys**: `Object`

Shielded keys and address

#### Type declaration

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `diversifierIndex` | `number` |
| `pseudoExtendedKey` | `string` |
| `spendingKey` | `string` |
| `viewingKey` | `string` |

#### Defined in

[packages/lib/src/keys/types.ts:21](https://github.com/namada-net/namada-sdkjs/blob/7e52eab0832738d3afb073b6a802625bea75ee25/packages/lib/src/keys/types.ts#L21)

___

### ShieldedTransferDataProps

Ƭ **ShieldedTransferDataProps**: [`ShieldedTransferDataMsgValue`](classes/ShieldedTransferDataMsgValue.md)

#### Defined in

[packages/lib/src/types/types.ts:38](https://github.com/namada-net/namada-sdkjs/blob/7e52eab0832738d3afb073b6a802625bea75ee25/packages/lib/src/types/types.ts#L38)

___

### ShieldedTransferProps

Ƭ **ShieldedTransferProps**: [`ShieldedTransferMsgValue`](classes/ShieldedTransferMsgValue.md)

#### Defined in

[packages/lib/src/types/types.ts:37](https://github.com/namada-net/namada-sdkjs/blob/7e52eab0832738d3afb073b6a802625bea75ee25/packages/lib/src/types/types.ts#L37)

___

### ShieldingTransferDataProps

Ƭ **ShieldingTransferDataProps**: [`ShieldingTransferDataMsgValue`](classes/ShieldingTransferDataMsgValue.md)

#### Defined in

[packages/lib/src/types/types.ts:40](https://github.com/namada-net/namada-sdkjs/blob/7e52eab0832738d3afb073b6a802625bea75ee25/packages/lib/src/types/types.ts#L40)

___

### ShieldingTransferProps

Ƭ **ShieldingTransferProps**: [`ShieldingTransferMsgValue`](classes/ShieldingTransferMsgValue.md)

#### Defined in

[packages/lib/src/types/types.ts:39](https://github.com/namada-net/namada-sdkjs/blob/7e52eab0832738d3afb073b6a802625bea75ee25/packages/lib/src/types/types.ts#L39)

___

### SignatureProps

Ƭ **SignatureProps**: [`SignatureMsgValue`](classes/SignatureMsgValue.md)

#### Defined in

[packages/lib/src/types/types.ts:36](https://github.com/namada-net/namada-sdkjs/blob/7e52eab0832738d3afb073b6a802625bea75ee25/packages/lib/src/types/types.ts#L36)

___

### SigningDataProps

Ƭ **SigningDataProps**: [`SigningDataMsgValue`](classes/SigningDataMsgValue.md)

#### Defined in

[packages/lib/src/types/types.ts:51](https://github.com/namada-net/namada-sdkjs/blob/7e52eab0832738d3afb073b6a802625bea75ee25/packages/lib/src/types/types.ts#L51)

___

### StakingPositions

Ƭ **StakingPositions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `bonds` | [`Bonds`](modules.md#bonds)[] |
| `unbonds` | [`Unbonds`](modules.md#unbonds)[] |

#### Defined in

[packages/lib/src/rpc/types.ts:42](https://github.com/namada-net/namada-sdkjs/blob/7e52eab0832738d3afb073b6a802625bea75ee25/packages/lib/src/rpc/types.ts#L42)

___

### StakingTotals

Ƭ **StakingTotals**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `bonds` | `string` |
| `owner` | `string` |
| `unbonds` | `string` |
| `validator` | `string` |
| `withdrawable` | `string` |

#### Defined in

[packages/lib/src/rpc/types.ts:19](https://github.com/namada-net/namada-sdkjs/blob/7e52eab0832738d3afb073b6a802625bea75ee25/packages/lib/src/rpc/types.ts#L19)

___

### SupportedTx

Ƭ **SupportedTx**: `Extract`\<[`TxType`](enums/TxType.md), [`Bond`](enums/TxType.md#bond) \| [`Unbond`](enums/TxType.md#unbond) \| [`Transfer`](enums/TxType.md#transfer) \| [`IBCTransfer`](enums/TxType.md#ibctransfer) \| [`EthBridgeTransfer`](enums/TxType.md#ethbridgetransfer) \| [`Withdraw`](enums/TxType.md#withdraw) \| [`VoteProposal`](enums/TxType.md#voteproposal) \| [`Redelegate`](enums/TxType.md#redelegate)\>

#### Defined in

[packages/wasm/src/types.ts:3](https://github.com/namada-net/namada-sdkjs/blob/7e52eab0832738d3afb073b6a802625bea75ee25/packages/wasm/src/types.ts#L3)

___

### SupportedTxProps

Ƭ **SupportedTxProps**: [`BondProps`](modules.md#bondprops) \| [`UnbondProps`](modules.md#unbondprops) \| [`WithdrawProps`](modules.md#withdrawprops) \| [`RedelegateProps`](modules.md#redelegateprops) \| [`EthBridgeTransferProps`](modules.md#ethbridgetransferprops) \| [`IbcTransferProps`](modules.md#ibctransferprops) \| [`VoteProposalProps`](modules.md#voteproposalprops) \| [`ClaimRewardsProps`](modules.md#claimrewardsprops) \| [`TransferProps`](modules.md#transferprops) \| [`TransferDetailsProps`](modules.md#transferdetailsprops) \| [`RevealPkProps`](modules.md#revealpkprops)

#### Defined in

[packages/lib/src/types/types.ts:59](https://github.com/namada-net/namada-sdkjs/blob/7e52eab0832738d3afb073b6a802625bea75ee25/packages/lib/src/types/types.ts#L59)

___

### TransferDetailsProps

Ƭ **TransferDetailsProps**: [`TransferDetailsMsgValue`](classes/TransferDetailsMsgValue.md)

#### Defined in

[packages/lib/src/types/types.ts:46](https://github.com/namada-net/namada-sdkjs/blob/7e52eab0832738d3afb073b6a802625bea75ee25/packages/lib/src/types/types.ts#L46)

___

### TransferProps

Ƭ **TransferProps**: [`TransferMsgValue`](classes/TransferMsgValue.md)

#### Defined in

[packages/lib/src/types/types.ts:43](https://github.com/namada-net/namada-sdkjs/blob/7e52eab0832738d3afb073b6a802625bea75ee25/packages/lib/src/types/types.ts#L43)

___

### TransparentKeys

Ƭ **TransparentKeys**: \{ `privateKey`: `string`  } & [`Address`](modules.md#address)

Public and private keypair with address

#### Defined in

[packages/lib/src/keys/types.ts:14](https://github.com/namada-net/namada-sdkjs/blob/7e52eab0832738d3afb073b6a802625bea75ee25/packages/lib/src/keys/types.ts#L14)

___

### TransparentTransferDataProps

Ƭ **TransparentTransferDataProps**: [`TransparentTransferDataMsgValue`](classes/TransparentTransferDataMsgValue.md)

#### Defined in

[packages/lib/src/types/types.ts:48](https://github.com/namada-net/namada-sdkjs/blob/7e52eab0832738d3afb073b6a802625bea75ee25/packages/lib/src/types/types.ts#L48)

___

### TransparentTransferProps

Ƭ **TransparentTransferProps**: [`TransparentTransferMsgValue`](classes/TransparentTransferMsgValue.md)

#### Defined in

[packages/lib/src/types/types.ts:47](https://github.com/namada-net/namada-sdkjs/blob/7e52eab0832738d3afb073b6a802625bea75ee25/packages/lib/src/types/types.ts#L47)

___

### TxDetails

Ƭ **TxDetails**: [`WrapperTxProps`](modules.md#wrappertxprops) & \{ `commitments`: [`CommitmentDetailProps`](modules.md#commitmentdetailprops)[] ; `wrapperFeePayer`: `string`  }

#### Defined in

[packages/lib/src/types/types.ts:82](https://github.com/namada-net/namada-sdkjs/blob/7e52eab0832738d3afb073b6a802625bea75ee25/packages/lib/src/types/types.ts#L82)

___

### TxProps

Ƭ **TxProps**: [`TxMsgValue`](classes/TxMsgValue.md)

#### Defined in

[packages/lib/src/types/types.ts:49](https://github.com/namada-net/namada-sdkjs/blob/7e52eab0832738d3afb073b6a802625bea75ee25/packages/lib/src/types/types.ts#L49)

___

### TxResponseProps

Ƭ **TxResponseProps**: [`TxResponseMsgValue`](classes/TxResponseMsgValue.md)

#### Defined in

[packages/lib/src/types/types.ts:50](https://github.com/namada-net/namada-sdkjs/blob/7e52eab0832738d3afb073b6a802625bea75ee25/packages/lib/src/types/types.ts#L50)

___

### UnbondProps

Ƭ **UnbondProps**: [`UnbondMsgValue`](classes/UnbondMsgValue.md)

#### Defined in

[packages/lib/src/types/types.ts:52](https://github.com/namada-net/namada-sdkjs/blob/7e52eab0832738d3afb073b6a802625bea75ee25/packages/lib/src/types/types.ts#L52)

___

### Unbonds

Ƭ **Unbonds**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `amount` | `string` |
| `owner` | `string` |
| `startEpoch` | `string` |
| `validator` | `string` |
| `withdrawableEpoch` | `string` |

#### Defined in

[packages/lib/src/rpc/types.ts:34](https://github.com/namada-net/namada-sdkjs/blob/7e52eab0832738d3afb073b6a802625bea75ee25/packages/lib/src/rpc/types.ts#L34)

___

### UnshieldingTransferDataProps

Ƭ **UnshieldingTransferDataProps**: [`UnshieldingTransferDataMsgValue`](classes/UnshieldingTransferDataMsgValue.md)

#### Defined in

[packages/lib/src/types/types.ts:41](https://github.com/namada-net/namada-sdkjs/blob/7e52eab0832738d3afb073b6a802625bea75ee25/packages/lib/src/types/types.ts#L41)

___

### UnshieldingTransferProps

Ƭ **UnshieldingTransferProps**: [`UnshieldingTransferMsgValue`](classes/UnshieldingTransferMsgValue.md)

#### Defined in

[packages/lib/src/types/types.ts:42](https://github.com/namada-net/namada-sdkjs/blob/7e52eab0832738d3afb073b6a802625bea75ee25/packages/lib/src/types/types.ts#L42)

___

### VoteProposalProps

Ƭ **VoteProposalProps**: [`VoteProposalMsgValue`](classes/VoteProposalMsgValue.md)

#### Defined in

[packages/lib/src/types/types.ts:53](https://github.com/namada-net/namada-sdkjs/blob/7e52eab0832738d3afb073b6a802625bea75ee25/packages/lib/src/types/types.ts#L53)

___

### WithdrawProps

Ƭ **WithdrawProps**: [`WithdrawMsgValue`](classes/WithdrawMsgValue.md)

#### Defined in

[packages/lib/src/types/types.ts:55](https://github.com/namada-net/namada-sdkjs/blob/7e52eab0832738d3afb073b6a802625bea75ee25/packages/lib/src/types/types.ts#L55)

___

### WrapperTxProps

Ƭ **WrapperTxProps**: [`WrapperTxMsgValue`](classes/WrapperTxMsgValue.md)

#### Defined in

[packages/lib/src/types/types.ts:56](https://github.com/namada-net/namada-sdkjs/blob/7e52eab0832738d3afb073b6a802625bea75ee25/packages/lib/src/types/types.ts#L56)

___

### Zip32Path

Ƭ **Zip32Path**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `account` | `number` |
| `index?` | `number` |

#### Defined in

[packages/lib/src/types/account.ts:7](https://github.com/namada-net/namada-sdkjs/blob/7e52eab0832738d3afb073b6a802625bea75ee25/packages/lib/src/types/account.ts#L7)

## Variables

### Argon2Config

• `Const` **Argon2Config**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `m_cost` | `number` |
| `p_cost` | `number` |
| `t_cost` | `number` |

#### Defined in

[packages/lib/src/crypto/types.ts:3](https://github.com/namada-net/namada-sdkjs/blob/7e52eab0832738d3afb073b6a802625bea75ee25/packages/lib/src/crypto/types.ts#L3)

___

### BigNumberSerializer

• `Const` **BigNumberSerializer**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `deserialize` | (`reader`: `BinaryReader`) => `BigNumber` |
| `serialize` | (`value`: `BigNumber`, `writer`: `BinaryWriter`) => `void` |

#### Defined in

[packages/lib/src/types/schema/utils.ts:4](https://github.com/namada-net/namada-sdkjs/blob/7e52eab0832738d3afb073b6a802625bea75ee25/packages/lib/src/types/schema/utils.ts#L4)

___

### DEFAULT\_BIP44\_PATH

• `Const` **DEFAULT\_BIP44\_PATH**: [`Bip44Path`](modules.md#bip44path)

#### Defined in

[packages/lib/src/keys/types.ts:37](https://github.com/namada-net/namada-sdkjs/blob/7e52eab0832738d3afb073b6a802625bea75ee25/packages/lib/src/keys/types.ts#L37)

___

### DEFAULT\_ZIP32\_PATH

• `Const` **DEFAULT\_ZIP32\_PATH**: [`Zip32Path`](modules.md#zip32path)

#### Defined in

[packages/lib/src/keys/types.ts:49](https://github.com/namada-net/namada-sdkjs/blob/7e52eab0832738d3afb073b6a802625bea75ee25/packages/lib/src/keys/types.ts#L49)

___

### LEDGER\_MASP\_BLACKLISTED

• `Const` **LEDGER\_MASP\_BLACKLISTED**: ``"nanoS"``

#### Defined in

[packages/lib/src/ledger.ts:35](https://github.com/namada-net/namada-sdkjs/blob/7e52eab0832738d3afb073b6a802625bea75ee25/packages/lib/src/ledger.ts#L35)

___

### LEDGER\_MIN\_VERSION\_ZIP32

• `Const` **LEDGER\_MIN\_VERSION\_ZIP32**: ``"3.0.0"``

#### Defined in

[packages/lib/src/ledger.ts:34](https://github.com/namada-net/namada-sdkjs/blob/7e52eab0832738d3afb073b6a802625bea75ee25/packages/lib/src/ledger.ts#L34)

___

### MODIFIED\_ZIP32\_PATH

• `Const` **MODIFIED\_ZIP32\_PATH**: [`Bip44Path`](modules.md#bip44path)

#### Defined in

[packages/lib/src/keys/types.ts:43](https://github.com/namada-net/namada-sdkjs/blob/7e52eab0832738d3afb073b6a802625bea75ee25/packages/lib/src/keys/types.ts#L43)

___

### NAMADA\_COIN\_TYPE

• `Const` **NAMADA\_COIN\_TYPE**: ``877``

Constant of SLIP-044 coin type used for Namada

#### Defined in

[packages/lib/src/types/account.ts:23](https://github.com/namada-net/namada-sdkjs/blob/7e52eab0832738d3afb073b6a802625bea75ee25/packages/lib/src/types/account.ts#L23)

___

### ResultCodes

• `Const` **ResultCodes**: `Record`\<[`ResultCode`](enums/ResultCode.md), `string`\>

#### Defined in

[packages/lib/src/types/types.ts:104](https://github.com/namada-net/namada-sdkjs/blob/7e52eab0832738d3afb073b6a802625bea75ee25/packages/lib/src/types/types.ts#L104)

___

### TxTypeLabel

• `Const` **TxTypeLabel**: `Record`\<[`TxType`](enums/TxType.md), `TxLabel`\>

#### Defined in

[packages/wasm/src/types.ts:28](https://github.com/namada-net/namada-sdkjs/blob/7e52eab0832738d3afb073b6a802625bea75ee25/packages/wasm/src/types.ts#L28)

## Functions

### initLedgerUSBTransport

▸ **initLedgerUSBTransport**(): `Promise`\<`default`\>

Initialize USB transport

#### Returns

`Promise`\<`default`\>

Transport object

**`Async`**

#### Defined in

[packages/lib/src/ledger.ts:56](https://github.com/namada-net/namada-sdkjs/blob/7e52eab0832738d3afb073b6a802625bea75ee25/packages/lib/src/ledger.ts#L56)

___

### ledgerUSBList

▸ **ledgerUSBList**(): `Promise`\<`USBDevice`[]\>

Returns a list of ledger devices

#### Returns

`Promise`\<`USBDevice`[]\>

List of USB devices

**`Async`**

#### Defined in

[packages/lib/src/ledger.ts:65](https://github.com/namada-net/namada-sdkjs/blob/7e52eab0832738d3afb073b6a802625bea75ee25/packages/lib/src/ledger.ts#L65)

___

### makeBip44Path

▸ **makeBip44Path**(`coinType`, `bip44Path`, `fullPath?`): `string`

Return a properly formatted BIP-044 path

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `coinType` | `number` | `undefined` | SLIP-044 Coin designation |
| `bip44Path` | [`Bip44Path`](modules.md#bip44path) | `undefined` | path object |
| `fullPath?` | `boolean` | `true` | boolean to determine whether to show full path or just path components |

#### Returns

`string`

BIP-044 path

#### Defined in

[packages/lib/src/utils.ts:24](https://github.com/namada-net/namada-sdkjs/blob/7e52eab0832738d3afb073b6a802625bea75ee25/packages/lib/src/utils.ts#L24)

___

### makeSaplingPath

▸ **makeSaplingPath**(`coinType`, `zip32Path`, `fullPath?`): `string`

Return a properly formatted Sapling path (Zip32)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `coinType` | `number` | `undefined` | SLIP-044 Coin designation |
| `zip32Path` | [`Zip32Path`](modules.md#zip32path) | `undefined` | zip32 path object |
| `fullPath?` | `boolean` | `true` | boolean to determine whether to show full path or just path components |

#### Returns

`string`

Sapling path

#### Defined in

[packages/lib/src/utils.ts:42](https://github.com/namada-net/namada-sdkjs/blob/7e52eab0832738d3afb073b6a802625bea75ee25/packages/lib/src/utils.ts#L42)

___

### publicKeyToBech32

▸ **publicKeyToBech32**(`publicKey`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | `Uint8Array` |

#### Returns

`string`

#### Defined in

[packages/lib/src/keys/keys.ts:278](https://github.com/namada-net/namada-sdkjs/blob/7e52eab0832738d3afb073b6a802625bea75ee25/packages/lib/src/keys/keys.ts#L278)

___

### requestLedgerDevice

▸ **requestLedgerDevice**(): `Promise`\<`default`\>

Request ledger device - opens a popup to request the user to connect a ledger device

#### Returns

`Promise`\<`default`\>

Transport object

**`Async`**

#### Defined in

[packages/lib/src/ledger.ts:74](https://github.com/namada-net/namada-sdkjs/blob/7e52eab0832738d3afb073b6a802625bea75ee25/packages/lib/src/ledger.ts#L74)
