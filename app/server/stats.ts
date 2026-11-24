import { redis } from './redis';
import type { SiteId } from '../shared/whatsapp';

export type NumberStats = { clicks: number; visitors: number };

const clicksKey = (site: SiteId, id: string) => `stats:clicks:${site}:${id}`;
const visitorsKey = (site: SiteId, id: string) => `stats:visitors:${site}:${id}`;

export async function visitorHash(req: Request): Promise<string> {
  const ip = (req.headers.get('x-forwarded-for') ?? '').split(',')[0].trim();
  const ua = req.headers.get('user-agent') ?? '';
  const salt = process.env.ADMIN_PASSWORD ?? '';
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(`${salt}|${ip}|${ua}`));
  return Array.from(new Uint8Array(digest), (b) => b.toString(16).padStart(2, '0')).join('');
}

export async function recordClick(site: SiteId, id: string, visitor: string): Promise<void> {
  await redis([
    ['INCR', clicksKey(site, id)],
    ['PFADD', visitorsKey(site, id), visitor],
  ]);
}

export async function readStats(site: SiteId, ids: string[]): Promise<Record<string, NumberStats>> {
  if (ids.length === 0) return {};
  const replies = await redis(
    ids.flatMap((id) => [
      ['GET', clicksKey(site, id)],
      ['PFCOUNT', visitorsKey(site, id)],
    ]),
  );
  const out: Record<string, NumberStats> = {};
  ids.forEach((id, i) => {
    out[id] = { clicks: Number(replies[i * 2] ?? 0), visitors: Number(replies[i * 2 + 1] ?? 0) };
  });
  return out;
}
