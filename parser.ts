import { isAddress } from 'polkadot/util-crypto/mod.ts';

const file = await Deno.readTextFile("./drop.txt")

// line starts with a dash and optionaly a space
export const addressList = file.split("\n")
  .map((line) => line.replace(/^- ?/, ""))
  .filter((line) => isAddress(line))

