import { printArt } from "@/art.ts"
import { Call, magicApi, submit } from "@/mint.ts"
// import { airdrop } from "@/airdrop.ts"
import { massMint } from "@/mass.ts";

printArt();

const api = await magicApi();

const calls: Call[] = massMint(api);
const hash = await submit(api, calls);

console.log('Transaction hash:', hash);
console.log(`https://statemint.subscan.io/extrinsic/${hash}`);