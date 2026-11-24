import { isAdmin } from '../../server/auth';
import { json } from '../../server/http';
import { readConfig, writeConfig } from '../../server/store';
import { parseWaConfig } from '../../shared/whatsapp';

export async function GET(req: Request) {
  if (!(await isAdmin(req))) return json({ error: '未登录' }, 401);
  return json(await readConfig());
}

export async function PUT(req: Request) {
  if (!(await isAdmin(req))) return json({ error: '未登录' }, 401);
  const parsed = parseWaConfig(await req.json().catch(() => null));
  if (parsed.ok === false) return json({ error: parsed.error }, 400);
  await writeConfig(parsed.value);
  return json(parsed.value);
}
