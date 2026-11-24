import { useEffect, useState } from 'react';
import { FALLBACK_URL } from '../../shared/whatsapp';

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
