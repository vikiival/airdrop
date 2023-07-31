import { airdrop } from "@/airdrop.ts"
import { printArt } from "@/art.ts"
import { CHAIN } from "@/constants.ts"
import { Call, magicApi, submit } from "@/mint.ts"

printArt();

console.log('Minting on chain:', CHAIN);

const api = await magicApi();

const calls: Call[] = airdrop(api);
const hash = await submit(api, calls);

console.log('Transaction hash:', hash);
console.log(`https://${CHAIN}.subscan.io/extrinsic/${hash}`);