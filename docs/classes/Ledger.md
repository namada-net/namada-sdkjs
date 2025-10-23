[@namada/lib](../README.md) / [Exports](../modules.md) / Ledger

# Class: Ledger

Functionality for interacting with NamadaApp for Ledger Hardware Wallets

## Table of contents

### Constructors

- [constructor](Ledger.md#constructor)

### Properties

- [namadaApp](Ledger.md#namadaapp)

### Methods

- [closeTransport](Ledger.md#closetransport)
- [getAddressAndPublicKey](Ledger.md#getaddressandpublickey)
- [getBparams](Ledger.md#getbparams)
- [getProofGenerationKey](Ledger.md#getproofgenerationkey)
- [getViewingKey](Ledger.md#getviewingkey)
- [isZip32Supported](Ledger.md#iszip32supported)
- [queryErrors](Ledger.md#queryerrors)
- [showAddressAndPublicKey](Ledger.md#showaddressandpublickey)
- [sign](Ledger.md#sign)
- [status](Ledger.md#status)
- [validateZip32Support](Ledger.md#validatezip32support)
- [init](Ledger.md#init)

## Constructors

### constructor

• **new Ledger**(`namadaApp`): [`Ledger`](Ledger.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `namadaApp` | `NamadaApp` | Inititalized NamadaApp class from Zondax package |

#### Returns

[`Ledger`](Ledger.md)

#### Defined in

[packages/lib/src/ledger.ts:95](https://github.com/anoma/namada-sdkjs/blob/dd361cd98692159413426f6fb0fdf1714d54b437/packages/lib/src/ledger.ts#L95)

## Properties

### namadaApp

• `Readonly` **namadaApp**: `NamadaApp`

Inititalized NamadaApp class from Zondax package

#### Defined in

[packages/lib/src/ledger.ts:95](https://github.com/anoma/namada-sdkjs/blob/dd361cd98692159413426f6fb0fdf1714d54b437/packages/lib/src/ledger.ts#L95)

## Methods

### closeTransport

▸ **closeTransport**(): `Promise`\<`void`\>

Close the initialized transport, which may be needed if Ledger needs to be reinitialized due to error state
Throw exception if app is not initialized.

#### Returns

`Promise`\<`void`\>

void

**`Async`**

#### Defined in

[packages/lib/src/ledger.ts:338](https://github.com/anoma/namada-sdkjs/blob/dd361cd98692159413426f6fb0fdf1714d54b437/packages/lib/src/ledger.ts#L338)

___

### getAddressAndPublicKey

▸ **getAddressAndPublicKey**(`path?`): `Promise`\<[`LedgerAddressAndPublicKey`](../modules.md#ledgeraddressandpublickey)\>

Get address and public key associated with optional path, otherwise, use default path
Throw exception if app is not initialized.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `path?` | `string` | `DEFAULT_LEDGER_BIP44_PATH` | Bip44 path for deriving key |

#### Returns

`Promise`\<[`LedgerAddressAndPublicKey`](../modules.md#ledgeraddressandpublickey)\>

Address and public key

**`Async`**

#### Defined in

[packages/lib/src/ledger.ts:141](https://github.com/anoma/namada-sdkjs/blob/dd361cd98692159413426f6fb0fdf1714d54b437/packages/lib/src/ledger.ts#L141)

___

### getBparams

▸ **getBparams**(): `Promise`\<`Bparams`[]\>

Get Bparams for masp transactions

#### Returns

`Promise`\<`Bparams`[]\>

bparams

**`Async`**

#### Defined in

[packages/lib/src/ledger.ts:184](https://github.com/anoma/namada-sdkjs/blob/dd361cd98692159413426f6fb0fdf1714d54b437/packages/lib/src/ledger.ts#L184)

___

### getProofGenerationKey

▸ **getProofGenerationKey**(`path?`, `promptUser?`): `Promise`\<[`LedgerProofGenerationKey`](../modules.md#ledgerproofgenerationkey)\>

Prompt user to get proof generation key associated with optional path, otherwise, use default path.
Throw exception if app is not initialized, zip32 is not supported, or key is not returned.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `path?` | `string` | `DEFAULT_LEDGER_ZIP32_PATH` | Zip32 path for deriving key |
| `promptUser?` | `boolean` | `true` | boolean to determine whether to display on Ledger device and require approval |

#### Returns

`Promise`\<[`LedgerProofGenerationKey`](../modules.md#ledgerproofgenerationkey)\>

ShieldedKeys

**`Async`**

#### Defined in

[packages/lib/src/ledger.ts:271](https://github.com/anoma/namada-sdkjs/blob/dd361cd98692159413426f6fb0fdf1714d54b437/packages/lib/src/ledger.ts#L271)

___

### getViewingKey

▸ **getViewingKey**(`path?`, `promptUser?`): `Promise`\<[`LedgerViewingKey`](../modules.md#ledgerviewingkey)\>

Prompt user to get viewing key associated with optional path, otherwise, use default path.
Throw exception if app is not initialized, zip32 is not supported, or key is not returned.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `path?` | `string` | `DEFAULT_LEDGER_ZIP32_PATH` | Zip32 path for deriving key |
| `promptUser?` | `boolean` | `true` | boolean to determine whether to display on Ledger device and require approval |

#### Returns

`Promise`\<[`LedgerViewingKey`](../modules.md#ledgerviewingkey)\>

ShieldedKeys

**`Async`**

#### Defined in

[packages/lib/src/ledger.ts:238](https://github.com/anoma/namada-sdkjs/blob/dd361cd98692159413426f6fb0fdf1714d54b437/packages/lib/src/ledger.ts#L238)

___

### isZip32Supported

▸ **isZip32Supported**(): `Promise`\<`boolean`\>

Check if Zip32 is supported by the installed app's version.
Throws error if app is not initialized

#### Returns

`Promise`\<`boolean`\>

boolean

**`Async`**

#### Defined in

[packages/lib/src/ledger.ts:348](https://github.com/anoma/namada-sdkjs/blob/dd361cd98692159413426f6fb0fdf1714d54b437/packages/lib/src/ledger.ts#L348)

___

### queryErrors

▸ **queryErrors**(): `Promise`\<`string`\>

Query status to determine if device has thrown an error.
Throw exception if app is not initialized.

#### Returns

`Promise`\<`string`\>

Error message if error is found

**`Async`**

#### Defined in

[packages/lib/src/ledger.ts:321](https://github.com/anoma/namada-sdkjs/blob/dd361cd98692159413426f6fb0fdf1714d54b437/packages/lib/src/ledger.ts#L321)

___

### showAddressAndPublicKey

▸ **showAddressAndPublicKey**(`path?`): `Promise`\<[`LedgerAddressAndPublicKey`](../modules.md#ledgeraddressandpublickey)\>

Prompt user to get address and public key associated with optional path, otherwise, use default path.
Throw exception if app is not initialized.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `path?` | `string` | `DEFAULT_LEDGER_BIP44_PATH` | Bip44 path for deriving key |

#### Returns

`Promise`\<[`LedgerAddressAndPublicKey`](../modules.md#ledgeraddressandpublickey)\>

Address and public key

**`Async`**

#### Defined in

[packages/lib/src/ledger.ts:161](https://github.com/anoma/namada-sdkjs/blob/dd361cd98692159413426f6fb0fdf1714d54b437/packages/lib/src/ledger.ts#L161)

___

### sign

▸ **sign**(`tx`, `path?`): `Promise`\<`ResponseSign`\>

Sign tx bytes with the key associated with the provided (or default) path.
Throw exception if app is not initialized.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `tx` | `Uint8Array` | `undefined` | tx data blob to sign |
| `path?` | `string` | `DEFAULT_LEDGER_BIP44_PATH` | Bip44 path for signing account |

#### Returns

`Promise`\<`ResponseSign`\>

Response signature

**`Async`**

#### Defined in

[packages/lib/src/ledger.ts:306](https://github.com/anoma/namada-sdkjs/blob/dd361cd98692159413426f6fb0fdf1714d54b437/packages/lib/src/ledger.ts#L306)

___

### status

▸ **status**(): `Promise`\<[`LedgerStatus`](../modules.md#ledgerstatus)\>

Return status and version info of initialized NamadaApp.
Throw exception if app is not initialized.

#### Returns

`Promise`\<[`LedgerStatus`](../modules.md#ledgerstatus)\>

Version and info of NamadaApp

**`Async`**

#### Defined in

[packages/lib/src/ledger.ts:121](https://github.com/anoma/namada-sdkjs/blob/dd361cd98692159413426f6fb0fdf1714d54b437/packages/lib/src/ledger.ts#L121)

___

### validateZip32Support

▸ **validateZip32Support**(): `Promise`\<`void`\>

Validate the version against the minimum required version and
device type for Zip32 functionality.
Throw error if it is unsupported or app is not initialized.

#### Returns

`Promise`\<`void`\>

void

**`Async`**

#### Defined in

[packages/lib/src/ledger.ts:366](https://github.com/anoma/namada-sdkjs/blob/dd361cd98692159413426f6fb0fdf1714d54b437/packages/lib/src/ledger.ts#L366)

___

### init

▸ **init**(`transport?`): `Promise`\<[`Ledger`](Ledger.md)\>

Initialize and return Ledger class instance with initialized Transport

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transport?` | `default` | Ledger transport |

#### Returns

`Promise`\<[`Ledger`](Ledger.md)\>

Ledger class instance

**`Async`**

#### Defined in

[packages/lib/src/ledger.ts:103](https://github.com/anoma/namada-sdkjs/blob/dd361cd98692159413426f6fb0fdf1714d54b437/packages/lib/src/ledger.ts#L103)
