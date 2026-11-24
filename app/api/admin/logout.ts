import { endSession } from '../../server/auth';
import { json } from '../../server/http';

export async function POST(req: Request) {
  return json({ ok: true }, 200, { 'Set-Cookie': await endSession(req) });
}
