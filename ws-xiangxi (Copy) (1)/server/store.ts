import { redis } from './redis';
import { parseWaConfig, type WaConfig } from '../shared/whatsapp';

const CONFIG_KEY = 'wa:config';
const CURSOR_KEY = 'wa:cursor';
const EMPTY: WaConfig = { mode: 'round_robin', numbers: [] };

function parseStored(raw: unknown): WaConfig {
  if (typeof raw !== 'string') return EMPTY;
  try {
    const parsed = parseWaConfig(JSON.parse(raw));
    return parsed.ok ? parsed.value : EMPTY;
  } catch {
    return EMPTY;
  }
}

export async function fetchRouting(): Promise<{ config: WaConfig; cursor: number }> {
  const [raw, cursor] = await redis([
    ['GET', CONFIG_KEY],
    ['INCR', CURSOR_KEY],
  ]);
  return { config: parseStored(raw), cursor: Number(cursor) };
}

export async function readConfig(): Promise<WaConfig> {
  const [raw] = await redis([['GET', CONFIG_KEY]]);
  return parseStored(raw);
}

export async function writeConfig(config: WaConfig): Promise<void> {
  await redis([['SET', CONFIG_KEY, JSON.stringify(config)]]);
}
