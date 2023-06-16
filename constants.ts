import "dotenv/load.ts";

export const COLLECTION_ID = Deno.env.get('COLLECTION_ID')!;
export const BASE_URL = Deno.env.get('BASE_URL')!;
export const KEYRING_SEED = Deno.env.get('KEYRING_SEED')!;
// export const FILE_NAME = Deno.env.get('FILE_NAME')!;
export const METADATA = Deno.env.get('METADATA')!;