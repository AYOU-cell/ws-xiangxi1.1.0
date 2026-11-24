import { useEffect, useState, type CSSProperties, type FormEvent } from 'react';
import type { NumberStats } from '../../server/stats';
import type { SiteId, WaConfig, WaNumber } from '../../shared/whatsapp';
import { DEFAULT_SITE, MAX_NUMBERS, SITES } from '../../shared/whatsapp';

type Status = 'loading' | 'login' | 'ready';
type Loaded = WaConfig & { stats?: Record<string, NumberStats> };


const JSON_HEADERS = { 'Content-Type': 'application/json' };

const page: CSSProperties = { maxWidth: 640, margin: '0 auto', padding: '32px 20px', fontFamily: 'Inter, system-ui, sans-serif', color: '#1A1F36' };
const card: CSSProperties = { border: '1px solid #E3E8EF', borderRadius: 12, padding: 16, marginBottom: 12, background: '#fff' };
const input: CSSProperties = { border: '1px solid #CBD2E0', borderRadius: 8, padding: '8px 10px', fontSize: 15, width: '100%', boxSizing: 'border-box' };
const button: CSSProperties = { border: 'none', borderRadius: 8, padding: '8px 14px', fontSize: 14, cursor: 'pointer', background: '#1A73E8', color: '#fff' };
const ghost: CSSProperties = { ...button, background: '#EEF2F7', color: '#1A1F36' };
const danger: CSSProperties = { ...button, background: '#FDECEC', color: '#B42318' };

export function AdminPage() {
  const [status, setStatus] = useState<Status>('loading');
  const [site, setSite] = useState<SiteId>(DEFAULT_SITE);
  const [config, setConfig] = useState<Loaded | null>(null);
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [busy, setBusy] = useState(false);

  async function load(target: SiteId = site) {
    try {
      const res = await fetch(`/api/admin/config?site=${target}`, { cache: 'no-store' });
      if (!res.ok) {
        setStatus('login');
        return;
      }
      setConfig((await res.json()) as Loaded);
      setStatus('ready');
    } catch {
      setStatus('login');
      setMessage('无法连接服务器');
    }
  }

  function switchSite(next: SiteId) {
    setSite(next);
    setMessage('');
    load(next);
  }


  useEffect(() => {
    load();
  }, []);

  async function login(e: FormEvent) {
    e.preventDefault();
    setBusy(true);
    setMessage('');
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: JSON_HEADERS,
        body: JSON.stringify({ password }),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        setMessage(data.error ?? '登录失败');
        return;
      }
      setPassword('');
      await load();
    } finally {
      setBusy(false);
    }
  }

  async function logout() {
    await fetch('/api/admin/logout', { method: 'POST' });
    setConfig(null);
    setStatus('login');
  }

  async function save() {
    if (!config) return;
    setBusy(true);
    setMessage('');
    try {
      const res = await fetch(`/api/admin/config?site=${site}`, {
        method: 'PUT',
        headers: JSON_HEADERS,
        body: JSON.stringify(config),
      });
      const data = (await res.json().catch(() => ({}))) as Loaded & { error?: string };
      if (res.status === 401) {
        setStatus('login');
        setMessage('登录已过期，请重新登录');
        return;
      }
      if (!res.ok) {
        setMessage(data.error ?? '保存失败');
        return;
      }
      setConfig(data);
      setMessage('已保存，立即生效');
    } finally {
      setBusy(false);
    }
  }

  function patchNumber(index: number, changes: Partial<WaNumber>) {
    if (!config) return;
    const numbers = config.numbers.map((n, i) => (i === index ? { ...n, ...changes } : n));
    setConfig({ ...config, numbers });
  }

  function move(index: number, delta: number) {
    if (!config) return;
    const target = index + delta;
    if (target < 0 || target >= config.numbers.length) return;
    const numbers = [...config.numbers];
    [numbers[index], numbers[target]] = [numbers[target], numbers[index]];
    setConfig({ ...config, numbers });
  }

  function remove(index: number) {
    if (!config) return;
    setConfig({ ...config, numbers: config.numbers.filter((_, i) => i !== index) });
  }

  function add() {
    if (!config || config.numbers.length >= MAX_NUMBERS) return;
    const blank: WaNumber = { id: '', label: '', phone: '', enabled: true };
    setConfig({ ...config, numbers: [...config.numbers, blank] });
  }

  if (status === 'loading') {
    return <div style={page}>加载中...</div>;
  }

  if (status === 'login' || !config) {
    return (
      <div style={{ ...page, maxWidth: 360 }}>
        <h1 style={{ fontSize: 22, marginBottom: 16 }}>后台登录</h1>
        <form onSubmit={login}>
          <input
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="密码"
            style={{ ...input, marginBottom: 12 }}
          />
          <button type="submit" disabled={busy || !password} style={{ ...button, width: '100%' }}>
            登录
          </button>
        </form>
        {message && <p style={{ color: '#B42318', marginTop: 12 }}>{message}</p>}
      </div>
    );
  }

  return (
    <div style={page}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
        <h1 style={{ fontSize: 22 }}>WhatsApp 号码管理</h1>
        <button onClick={logout} style={ghost}>退出</button>
      </div>

      <div style={{ ...card, display: 'flex', alignItems: 'center', gap: 12 }}>
        <label style={{ fontSize: 14, fontWeight: 600 }}>网站</label>
        <select
          value={site}
          onChange={(e) => switchSite(e.target.value as SiteId)}
          style={{ ...input, width: 'auto', flex: 1 }}
        >
          {SITES.map((s) => (
            <option key={s.id} value={s.id}>{s.name}</option>
          ))}
        </select>
      </div>

      <p style={{ color: '#4A5568', fontSize: 14, marginBottom: 20 }}>
        当前网站首页的 WhatsApp 按钮会从下面启用的号码中分配一个。全部关闭或读取失败时，按钮使用该网站自己的默认号码。
      </p>

      <div style={card}>
        <label style={{ fontSize: 14, fontWeight: 600, marginRight: 12 }}>分配方式</label>
        <select
          value={config.mode}
          onChange={(e) => setConfig({ ...config, mode: e.target.value as WaConfig['mode'] })}
          style={{ ...input, width: 'auto' }}
        >
          <option value="round_robin">轮询（依次分配）</option>
          <option value="random">随机</option>
        </select>
      </div>

      {config.numbers.map((n, i) => (
        <div key={i} style={card}>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 8 }}>
            <input
              value={n.label}
              onChange={(e) => patchNumber(i, { label: e.target.value })}
              placeholder={`号码 ${i + 1}`}
              maxLength={40}
              style={{ ...input, flex: 1 }}
            />
            <button
              role="switch"
              aria-checked={n.enabled}
              onClick={() => patchNumber(i, { enabled: !n.enabled })}
              style={{ ...button, background: n.enabled ? '#25D366' : '#A0AEC0', minWidth: 64 }}
            >
              {n.enabled ? '开' : '关'}
            </button>
          </div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <input
              value={n.phone}
              onChange={(e) => patchNumber(i, { phone: e.target.value })}
              placeholder="国际格式，如 12182135478"
              inputMode="numeric"
              style={{ ...input, flex: 1 }}
            />
            <button onClick={() => move(i, -1)} disabled={i === 0} style={ghost} aria-label="上移">↑</button>
            <button onClick={() => move(i, 1)} disabled={i === config.numbers.length - 1} style={ghost} aria-label="下移">↓</button>
            <button onClick={() => remove(i)} style={danger}>删除</button>
          </div>
          {n.id && config.stats?.[n.id] && (
            <div style={{ color: '#4A5568', fontSize: 13, marginTop: 8, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px 16px' }}>
              <span>总点击次数：{config.stats[n.id].totalClicks}</span>
              <span>总点击人数：{config.stats[n.id].totalVisitors}</span>
              <span>今日点击次数：{config.stats[n.id].todayClicks}</span>
              <span>今日点击人数：{config.stats[n.id].todayVisitors}</span>
            </div>
          )}
        </div>
      ))}

      <div style={{ display: 'flex', gap: 8, marginTop: 8, alignItems: 'center' }}>
        <button onClick={add} disabled={config.numbers.length >= MAX_NUMBERS} style={ghost}>
          + 添加号码
        </button>
        <span style={{ color: '#718096', fontSize: 13 }}>
          {config.numbers.length} / {MAX_NUMBERS}
        </span>
        <div style={{ flex: 1 }} />
        <button onClick={save} disabled={busy} style={button}>
          保存
        </button>
      </div>

      {message && <p style={{ marginTop: 16, color: message.startsWith('已保存') ? '#1E7F4F' : '#B42318' }}>{message}</p>}
    </div>
  );
}
