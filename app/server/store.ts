import { redis } from './redis';
import { DEFAULT_SITE, parseWaConfig, type SiteId, type WaConfig } from '../shared/whatsapp';

const EMPTY: WaConfig = { mode: 'round_robin', numbers: [] };

// offer-b3 keeps the original unsuffixed keys, so its saved numbers stay in place.
function keysFor(site: SiteId) {
  const suffix = site === DEFAULT_SITE ? '' : `:${site}`;
  return { config: `wa:config${suffix}`, cursor: `wa:cursor${suffix}` };
}

function parseStored(raw: unknown): WaConfig {
  if (typeof raw !== 'string') return EMPTY;
  try {
    const parsed = parseWaConfig(JSON.parse(raw));
    return parsed.ok ? parsed.value : EMPTY;
  } catch {
    return EMPTY;
  }
}

export async function fetchRouting(site: SiteId): Promise<{ config: WaConfig; cursor: number }> {
  const keys = keysFor(site);
  const [raw, cursor] = await redis([
    ['GET', keys.config],
    ['INCR', keys.cursor],
  ]);
  return { config: parseStored(raw), cursor: Number(cursor) };
}

export async function readConfig(site: SiteId): Promise<WaConfig> {
  const [raw] = await redis([['GET', keysFor(site).config]]);
  return parseStored(raw);
}

export async function writeConfig(site: SiteId, config: WaConfig): Promise<void> {
  await redis([['SET', keysFor(site).config, JSON.stringify(config)]]);
}
