import { FALLBACK_URL, pickNumber, waUrl } from '../shared/whatsapp';
import { fetchRouting } from '../server/store';
import { json } from '../server/http';

export async function GET() {
  try {
    const { config, cursor } = await fetchRouting();
    const picked = pickNumber(config, cursor);
    return json({ url: picked ? waUrl(picked.phone) : FALLBACK_URL });
  } catch (err) {
    console.error('wa routing failed', err);
    return json({ url: FALLBACK_URL });
  }
}
