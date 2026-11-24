import { DEFAULT_SITE, isSiteId } from '../shared/whatsapp';
import { json } from '../server/http';

const PUBLIC_HEADERS = { 'Access-Control-Allow-Origin': '*' };

// Buttons link to /api/go, which picks a number at click time and counts the click.
export async function GET(req: Request) {
  const site = new URL(req.url).searchParams.get('site') ?? DEFAULT_SITE;
  if (!isSiteId(site)) return json({ error: '网站参数无效' }, 400, PUBLIC_HEADERS);
  const origin = new URL(req.url).origin;
  return json({ url: `${origin}/api/go?site=${site}` }, 200, PUBLIC_HEADERS);
}
