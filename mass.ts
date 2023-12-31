import { COLLECTION_ID, COUNT, START_INDEX } from "@/constants.ts"
import { Call, me, uniqueList, uniqueMintTo } from "@/mint.ts"
import { type ApiPromise } from 'polkadot/api/mod.ts'

export function massMint(api: ApiPromise): Call[] {
  console.log(`MINTING EMPTY ${COUNT} NFTs for Collection`, COLLECTION_ID);
  const calls: Call[] = [];

  const count = parseInt(COUNT);
  const min = parseInt(START_INDEX) || 0;

  if (!count) {
    console.error('COUNT is not a number');
    Deno.exit(1);
  }

  const address = me();
  const price = 9000000000 // 0.0001 * 1e12;

  const max = min + count;

  for (let key = min; key < max; key++) {
    const index = key.toString()
    const mint = uniqueMintTo(api, COLLECTION_ID, index, address);
    const setPrice = uniqueList(api, COLLECTION_ID, index, price);
    calls.push(mint);
    calls.push(setPrice);
    // if (METADATA) {
    //   const set = uniqueSetMetadata(api, COLLECTION_ID, index, METADATA);
    //   calls.push(set);
    // }
  }

  return calls;
}