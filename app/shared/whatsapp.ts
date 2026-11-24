export const FALLBACK_PHONE = '12182135478';
export const FALLBACK_URL = `https://wa.me/${FALLBACK_PHONE}`;
export const MAX_NUMBERS = 50;

export type Mode = 'round_robin' | 'random';

export type WaNumber = {
  id: string;
  label: string;
  phone: string;
  enabled: boolean;
};

export type WaConfig = {
  mode: Mode;
  numbers: WaNumber[];
};

export type ParseResult = { ok: true; value: WaConfig } | { ok: false; error: string };

export function waUrl(phone: string): string {
  return `https://wa.me/${phone}`;
}

export function pickNumber(config: WaConfig, cursor: number): WaNumber | null {
  const active = config.numbers.filter((n) => n.enabled);
  if (active.length === 0) return null;
  if (config.mode === 'random') {
    return active[Math.floor(Math.random() * active.length)];
  }
  return active[Math.max(cursor - 1, 0) % active.length];
}

export function parseWaConfig(input: unknown): ParseResult {
  if (!input || typeof input !== 'object') {
    return { ok: false, error: '请求格式错误' };
  }
  const { mode, numbers } = input as { mode?: unknown; numbers?: unknown };
  if (mode !== 'round_robin' && mode !== 'random') {
    return { ok: false, error: '分配方式无效' };
  }
  if (!Array.isArray(numbers)) {
    return { ok: false, error: '号码列表格式错误' };
  }
  if (numbers.length > MAX_NUMBERS) {
    return { ok: false, error: `最多 ${MAX_NUMBERS} 个号码` };
  }

  const seenIds = new Set<string>();
  const seenPhones = new Set<string>();
  const out: WaNumber[] = [];

  for (let i = 0; i < numbers.length; i++) {
    const raw = numbers[i] as Partial<Record<keyof WaNumber, unknown>> | null;
    if (!raw || typeof raw !== 'object') {
      return { ok: false, error: `第 ${i + 1} 个号码格式错误` };
    }

    const phone = typeof raw.phone === 'string' ? raw.phone.replace(/[\s\-+().]/g, '') : '';
    if (!/^\d{8,15}$/.test(phone)) {
      return { ok: false, error: `第 ${i + 1} 个号码格式不对，请填国际格式，如 12182135478` };
    }
    if (seenPhones.has(phone)) {
      return { ok: false, error: `号码 ${phone} 重复` };
    }
    seenPhones.add(phone);

    let id = typeof raw.id === 'string' && raw.id.length > 0 && raw.id.length <= 64 ? raw.id : '';
    if (!id || seenIds.has(id)) {
      id = crypto.randomUUID();
    }
    seenIds.add(id);

    const label = typeof raw.label === 'string' ? raw.label.trim().slice(0, 40) : '';
    out.push({
      id,
      label: label || `号码 ${i + 1}`,
      phone,
      enabled: raw.enabled === true,
    });
  }

  return { ok: true, value: { mode, numbers: out } as WaConfig };
}
