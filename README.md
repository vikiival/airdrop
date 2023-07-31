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