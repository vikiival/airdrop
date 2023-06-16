import { printArt } from "@/art.ts";
import { addressList } from "@/parser.ts";
import { COLLECTION_ID, METADATA } from "@/constants.ts";
import { Call, magicApi, mintTo, setMetadata, submit } from "@/mint.ts";

printArt();
console.log('SENDING NFTs from Collection', COLLECTION_ID, 'to', addressList.length, 'addresses');

const calls: Call[] = [];
const api = await magicApi();

for (const [key, address] of addressList.entries()) {
  const index = key.toString()
  const mint = mintTo(api, COLLECTION_ID, index, address);
  calls.push(mint);
  if (METADATA) {
    const set = setMetadata(api, COLLECTION_ID, index, METADATA);
    calls.push(set);
  }
}

console.log('Sending', calls.length, 'transactions');
const tx = await submit(api, calls);

const hash = tx.toHex();

console.log('Transaction hash:', hash);
console.log(`https://statemine.subscan.io/extrinsic/${hash}`);