import { COLLECTION_ID, COUNT } from "@/constants.ts"
import { Call, me, uniqueMintTo } from "@/mint.ts"
import { type ApiPromise } from 'polkadot/api/mod.ts'

export function massMint(api: ApiPromise): Call[] {
  console.log(`MINTING EMPTY ${COUNT} NFTs for Collection`, COLLECTION_ID);
  const calls: Call[] = [];

  const count = parseInt(COUNT);

  if (!count) {
    console.error('COUNT is not a number');
    Deno.exit(1);
  }

  const address = me();

  for (let key = 0; key < count; key++) {
    const index = key.toString()
    const mint = uniqueMintTo(api, COLLECTION_ID, index, address);
    calls.push(mint);
    // if (METADATA) {
    //   const set = uniqueSetMetadata(api, COLLECTION_ID, index, METADATA);
    //   calls.push(set);
    // }
  }

  return calls;
}