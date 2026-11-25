import { useEffect, useRef } from 'react';
import { track } from '@vercel/analytics/react';

// Fires a `section_view` analytics event the first time each section
// element becomes visible, so we can see how far down the page visitors scroll.
export function useSectionView(section: string) {
  const ref = useRef<HTMLElement | null>(null);
  const seen = useRef(false);

  useEffect(() => {
    const target = ref.current;
    if (!target || seen.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !seen.current) {
          seen.current = true;
          track('section_view', { section });
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [section]);

  return ref;
}
