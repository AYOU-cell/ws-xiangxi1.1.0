import { checkPassword, createSession, loginBlocked, recordFailedLogin } from '../../server/auth';
import { json } from '../../server/http';

export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as { password?: unknown } | null;
  if (!body || typeof body.password !== 'string') {
    return json({ error: '请输入密码' }, 400);
  }
  if (await loginBlocked()) {
    return json({ error: '尝试次数过多，请 15 分钟后再试' }, 429);
  }
  if (!checkPassword(body.password)) {
    await recordFailedLogin();
    return json({ error: '密码错误' }, 401);
  }
  return json({ ok: true }, 200, { 'Set-Cookie': await createSession() });
}
