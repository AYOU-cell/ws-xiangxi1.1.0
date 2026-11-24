import { redis } from './redis';
import type { SiteId } from '../shared/whatsapp';

export type NumberStats = {
  totalClicks: number;
  totalVisitors: number;
  todayClicks: number;
  todayVisitors: number;
};

const DAY_SECONDS = 60 * 60 * 24 * 2;

const totalClicksKey = (site: SiteId, id: string) => `stats:clicks:${site}:${id}`;
const totalVisitorsKey = (site: SiteId, id: string) => `stats:visitors:${site}:${id}`;
const dayClicksKey = (site: SiteId, id: string, day: string) => `stats:day:clicks:${site}:${id}:${day}`;
const dayVisitorsKey = (site: SiteId, id: string, day: string) => `stats:day:visitors:${site}:${id}:${day}`;

// UTC day, so "today" resets at 00:00 UTC.
export function todayKey(now = new Date()): string {
  return now.toISOString().slice(0, 10);
}

export async function visitorHash(req: Request): Promise<string> {
  const ip = (req.headers.get('x-forwarded-for') ?? '').split(',')[0].trim();
  const ua = req.headers.get('user-agent') ?? '';
  const salt = process.env.ADMIN_PASSWORD ?? '';
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(`${salt}|${ip}|${ua}`));
  return Array.from(new Uint8Array(digest), (b) => b.toString(16).padStart(2, '0')).join('');
}

export async function recordClick(site: SiteId, id: string, visitor: string, day = todayKey()): Promise<void> {
  const dc = dayClicksKey(site, id, day);
  const dv = dayVisitorsKey(site, id, day);
  await redis([
    ['INCR', totalClicksKey(site, id)],
    ['PFADD', totalVisitorsKey(site, id), visitor],
    ['INCR', dc],
    ['EXPIRE', dc, DAY_SECONDS],
    ['PFADD', dv, visitor],
    ['EXPIRE', dv, DAY_SECONDS],
  ]);
}

export async function readStats(site: SiteId, ids: string[], day = todayKey()): Promise<Record<string, NumberStats>> {
  if (ids.length === 0) return {};
  const replies = await redis(
    ids.flatMap((id) => [
      ['GET', totalClicksKey(site, id)],
      ['PFCOUNT', totalVisitorsKey(site, id)],
      ['GET', dayClicksKey(site, id, day)],
      ['PFCOUNT', dayVisitorsKey(site, id, day)],
    ]),
  );
  const out: Record<string, NumberStats> = {};
  ids.forEach((id, i) => {
    const r = i * 4;
    out[id] = {
      totalClicks: Number(replies[r] ?? 0),
      totalVisitors: Number(replies[r + 1] ?? 0),
      todayClicks: Number(replies[r + 2] ?? 0),
      todayVisitors: Number(replies[r + 3] ?? 0),
    };
  });
  return out;
}
