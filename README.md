## Airdrop script for Polkadot NFTs pallet

## Usage

1. create `.env` file with the following content:

```
COLLECTION_ID=<Collection ID>
BASE_URL=<HTTPS URL of the node>
KEYRING_SEED=<your seed phrase>
METADATA=ipfs://ipfs/<CID>
```

2. create `drop.txt` file with the following content:

```txt
- <recipient address>
- <recipient2 address>
```

3. run `deno task dev` to run the script

## BASE_URL

List of public nodes:
- STATEMINE - https://kusama-asset-hub-rpc.polkadot.io/
- STATEMINT - https://polkadot-asset-hub-rpc.polkadot.io/
- WESTMINT - https://westend-asset-hub-rpc.polkadot.io/
- KUSAMA - https://kusama-rpc.polkadot.io

## Hints

If you have a list of addresses in your clipboard, you can use the following command to create `drop.txt` file:

```bash
pbpaste | sort | uniq | xargs -I{} echo '- {}' > drop.txt
```

If you need to split drop into multiple files, you can use the following command:


```bash
split -l 500 -d drop.txt drop_
````

## Errors

**1. `RPC-CORE: submitExtrinsic(extrinsic: Extrinsic): Hash:: [413]: Payload Too Large`**

You are sending too many transactions at once. Try to reduce the number of transactions in `drop.txt` file.

**2. `RPC-CORE: submitExtrinsic(extrinsic: Extrinsic): Hash:: 1010: Invalid Transaction: Transaction would exhaust the block limits`**

You are sending too many transactions at once. Try to reduce the number of transactions in `drop.txt` file.