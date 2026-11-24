import { useEffect, useState } from 'react';
import { DEFAULT_SITE, SITE_DEFAULT_PHONE, waUrl } from '../../shared/whatsapp';

const FALLBACK_URL = waUrl(SITE_DEFAULT_PHONE[DEFAULT_SITE]);

let pending: Promise<string> | null = null;

function loadWaUrl(): Promise<string> {
  if (!pending) {
    pending = fetch('/api/wa', { cache: 'no-store' })
      .then((res) => res.json() as Promise<{ url?: unknown }>)
      .then((data) => (typeof data.url === 'string' ? data.url : FALLBACK_URL))
      .catch(() => FALLBACK_URL);
  }
  return pending;
}

export function useWhatsAppUrl(): string {
  const [url, setUrl] = useState(FALLBACK_URL);
  useEffect(() => {
    let active = true;
    loadWaUrl().then((next) => {
      if (active) setUrl(next);
    });
    return () => {
      active = false;
    };
  }, []);
  return url;
}
