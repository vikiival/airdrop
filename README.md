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