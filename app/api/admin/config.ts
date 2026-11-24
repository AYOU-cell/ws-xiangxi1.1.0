import { isAdmin } from '../../server/auth';
import { json } from '../../server/http';
import { readConfig, writeConfig } from '../../server/store';
import { DEFAULT_SITE, isSiteId, parseWaConfig, type SiteId } from '../../shared/whatsapp';

function siteFrom(req: Request): SiteId | null {
  const site = new URL(req.url).searchParams.get('site') ?? DEFAULT_SITE;
  return isSiteId(site) ? site : null;
}

export async function GET(req: Request) {
  if (!(await isAdmin(req))) return json({ error: '未登录' }, 401);
  const site = siteFrom(req);
  if (!site) return json({ error: '网站参数无效' }, 400);
  return json(await readConfig(site));
}

export async function PUT(req: Request) {
  if (!(await isAdmin(req))) return json({ error: '未登录' }, 401);
  const site = siteFrom(req);
  if (!site) return json({ error: '网站参数无效' }, 400);
  const parsed = parseWaConfig(await req.json().catch(() => null));
  if (parsed.ok === false) return json({ error: parsed.error }, 400);
  await writeConfig(site, parsed.value);
  return json(parsed.value);
}
