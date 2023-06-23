import { printArt } from "@/art.ts"
import { Call, magicApi, submit } from "@/mint.ts"
import { airdrop } from "@/airdrop.ts"

printArt();

const api = await magicApi();

const calls: Call[] = airdrop(api);
const hash = await submit(api, calls);

console.log('Transaction hash:', hash);
console.log(`https://statemine.subscan.io/extrinsic/${hash}`);