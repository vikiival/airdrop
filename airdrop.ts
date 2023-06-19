import { COLLECTION_ID, METADATA } from "@/constants.ts"
import { Call, mintTo, setMetadata } from "@/mint.ts"
import { addressList } from "@/parser.ts"
import { type ApiPromise } from 'polkadot/api/mod.ts'

export function airdrop(api: ApiPromise): Call[] {
  console.log('SENDING NFTs from Collection', COLLECTION_ID, 'to', addressList.length, 'addresses');
  const calls: Call[] = [];

  for (const [key, address] of addressList.entries()) {
    const index = key.toString()
    const mint = mintTo(api, COLLECTION_ID, index, address);
    calls.push(mint);
    if (METADATA) {
      const set = setMetadata(api, COLLECTION_ID, index, METADATA);
      calls.push(set);
    }
  }

  return calls;
}