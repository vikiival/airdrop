import { Call, asSystemRemark } from "@/mint.ts"
import { type ApiPromise } from 'polkadot/api/mod.ts'

const remarks: string[] = await Deno.readTextFile("./drop.json").then(JSON.parse)

export function drop(api: ApiPromise): Call[] {
  console.log('MINTING', remarks.length,  'NFTs from Collection');
  const calls: Call[] = [];

  for (const [_key, remark] of remarks.entries()) {
    const call = asSystemRemark(api, remark);
    calls.push(call);
  }

  return calls;
}