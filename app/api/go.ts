import { DEFAULT_SITE, SITE_DEFAULT_PHONE, isSiteId, pickNumber, waUrl, type SiteId } from '../shared/whatsapp';
import { fetchRouting } from '../server/store';
import { recordClick, visitorHash } from '../server/stats';
import { json } from '../server/http';

// Each click is counted here, then the visitor is redirected to the chosen number.
export async function GET(req: Request) {
  const site = new URL(req.url).searchParams.get('site') ?? DEFAULT_SITE;
  if (!isSiteId(site)) return json({ error: '网站参数无效' }, 400);
  const url = await pickAndCount(req, site);
  return new Response(null, { status: 302, headers: { Location: url, 'Cache-Control': 'no-store' } });
}

async function pickAndCount(req: Request, site: SiteId): Promise<string> {
  let picked: ReturnType<typeof pickNumber> = null;
  try {
    const { config, cursor } = await fetchRouting(site);
    picked = pickNumber(config, cursor);
  } catch (err) {
    console.error('wa routing failed', err);
  }
  if (!picked) return waUrl(SITE_DEFAULT_PHONE[site]);
  try {
    await recordClick(site, picked.id, await visitorHash(req));
  } catch (err) {
    console.error('wa click count failed', err);
  }
  return waUrl(picked.phone);
}
