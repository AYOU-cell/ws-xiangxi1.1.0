import { DEFAULT_SITE, isSiteId, pickNumber, waUrl } from '../shared/whatsapp';
import { fetchRouting } from '../server/store';
import { json } from '../server/http';

const PUBLIC_HEADERS = { 'Access-Control-Allow-Origin': '*' };

export async function GET(req: Request) {
  const site = new URL(req.url).searchParams.get('site') ?? DEFAULT_SITE;
  if (!isSiteId(site)) return json({ error: '网站参数无效' }, 400, PUBLIC_HEADERS);
  try {
    const { config, cursor } = await fetchRouting(site);
    const picked = pickNumber(config, cursor);
    return json({ url: picked ? waUrl(picked.phone) : null, phone: picked?.phone ?? null }, 200, PUBLIC_HEADERS);
  } catch (err) {
    console.error('wa routing failed', err);
    return json({ url: null, phone: null }, 200, PUBLIC_HEADERS);
  }
}
