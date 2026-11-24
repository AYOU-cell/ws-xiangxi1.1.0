import { isAdmin } from '../../server/auth';
import { json } from '../../server/http';
import { readConfig, writeConfig } from '../../server/store';
import { readStats } from '../../server/stats';
import { DEFAULT_SITE, isSiteId, parseWaConfig, type SiteId } from '../../shared/whatsapp';

function siteFrom(req: Request): SiteId | null {
  const site = new URL(req.url).searchParams.get('site') ?? DEFAULT_SITE;
  return isSiteId(site) ? site : null;
}

export async function GET(req: Request) {
  if (!(await isAdmin(req))) return json({ error: '未登录' }, 401);
  const site = siteFrom(req);
  if (!site) return json({ error: '网站参数无效' }, 400);
  const config = await readConfig(site);
  const stats = await readStats(site, config.numbers.map((n) => n.id));
  return json({ ...config, stats });
}

export async function PUT(req: Request) {
  if (!(await isAdmin(req))) return json({ error: '未登录' }, 401);
  const site = siteFrom(req);
  if (!site) return json({ error: '网站参数无效' }, 400);
  const parsed = parseWaConfig(await req.json().catch(() => null));
  if (parsed.ok === false) return json({ error: parsed.error }, 400);
  await writeConfig(site, parsed.value);
  const stats = await readStats(site, parsed.value.numbers.map((n) => n.id));
  return json({ ...parsed.value, stats });
}
