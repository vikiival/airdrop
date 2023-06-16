import { ApiPromise, HttpProvider, Keyring } from 'polkadot/api/mod.ts';
import { hexToU8a } from 'polkadot/util/mod.ts';
import { BASE_URL, KEYRING_SEED } from "@/constants.ts";
import { SubmittableExtrinsic } from "polkadot/api/types/index.ts";

const keyring = new Keyring({ ss58Format: 2 })

export type Call = SubmittableExtrinsic<'promise'>

export const magicApi = () => {
  const provider = new HttpProvider(BASE_URL)
  return ApiPromise.create({ provider })
}

const buildAccount = () => {
  const seed = KEYRING_SEED;
  const pair = keyring.addFromSeed(hexToU8a(seed))
  return pair
}

export const mintTo = (api: ApiPromise, collectionId: string, nextId: string, address: string) => {
  const create = api.tx.nfts.mint(collectionId, nextId, address, undefined)
  return create
}

export const setMetadata = (api: ApiPromise, collectionId: string, nextId: string, metadata: string) => {
  const set = api.tx.nfts.setMetadata(collectionId, nextId, metadata)
  return set
}

const buildBatch = (api: ApiPromise, calls: Call[]) => {
  const batch = api.tx.utility.batchAll(calls)
  return batch  
}

export const submit = async (api: ApiPromise, calls: Call[]) => {
  const batch = buildBatch(api, calls)
  const account = buildAccount()
  const tx = await batch.signAndSend(account)
  return tx
}