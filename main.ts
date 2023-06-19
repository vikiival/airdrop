import { printArt } from "@/art.ts"
import { Call, magicApi, submit } from "@/mint.ts"
import { airdrop } from "@/airdrop.ts"

printArt();

const api = await magicApi();

const calls: Call[] = airdrop(api);
const tx = await submit(api, calls);

const hash = tx.toHex();

console.log('Transaction hash:', hash);
console.log(`https://statemine.subscan.io/extrinsic/${hash}`);