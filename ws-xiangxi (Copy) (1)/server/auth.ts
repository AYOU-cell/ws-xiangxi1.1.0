import { redis } from './redis';

const COOKIE = 'ez_admin';
const SESSION_SECONDS = 60 * 60 * 24 * 7;
const TOKEN_PATTERN = /^[0-9a-f]{64}$/;

function adminPassword(): string {
  const password = process.env.ADMIN_PASSWORD;
  if (!password) throw new Error('ADMIN_PASSWORD is not set');
  return password;
}

function sessionKey(token: string): string {
  return `admin:session:${token}`;
}

function readCookie(req: Request): string | null {
  for (const part of (req.headers.get('cookie') ?? '').split(';')) {
    const eq = part.indexOf('=');
    if (eq > 0 && part.slice(0, eq).trim() === COOKIE) {
      return part.slice(eq + 1).trim();
    }
  }
  return null;
}

function cookieAttributes(maxAge: number): string {
  return `Path=/api; HttpOnly; Secure; SameSite=Strict; Max-Age=${maxAge}`;
}

const FAIL_KEY = 'admin:login_fails';
const MAX_FAILS = 10;
const FAIL_WINDOW_SECONDS = 15 * 60;

export async function loginBlocked(): Promise<boolean> {
  const [count] = await redis([['GET', FAIL_KEY]]);
  return Number(count ?? 0) >= MAX_FAILS;
}

export async function recordFailedLogin(): Promise<void> {
  const [count] = await redis([['INCR', FAIL_KEY]]);
  if (Number(count) === 1) {
    await redis([['EXPIRE', FAIL_KEY, FAIL_WINDOW_SECONDS]]);
  }
}

export function checkPassword(input: string): boolean {
  const expected = adminPassword();
  if (input.length !== expected.length) return false;
  let diff = 0;
  for (let i = 0; i < input.length; i++) {
    diff |= input.charCodeAt(i) ^ expected.charCodeAt(i);
  }
  return diff === 0;
}

export async function createSession(): Promise<string> {
  const bytes = crypto.getRandomValues(new Uint8Array(32));
  const token = Array.from(bytes, (b) => b.toString(16).padStart(2, '0')).join('');
  await redis([['SET', sessionKey(token), '1', 'EX', SESSION_SECONDS]]);
  return `${COOKIE}=${token}; ${cookieAttributes(SESSION_SECONDS)}`;
}

export async function isAdmin(req: Request): Promise<boolean> {
  const token = readCookie(req);
  if (!token || !TOKEN_PATTERN.test(token)) return false;
  const [exists] = await redis([['EXISTS', sessionKey(token)]]);
  return exists === 1;
}

export async function endSession(req: Request): Promise<string> {
  const token = readCookie(req);
  if (token && TOKEN_PATTERN.test(token)) {
    await redis([['DEL', sessionKey(token)]]);
  }
  return `${COOKIE}=; ${cookieAttributes(0)}`;
}
