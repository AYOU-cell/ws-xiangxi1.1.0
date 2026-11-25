import type { LandingLanguage } from '../landingCopy';

const SUPPORTED: LandingLanguage[] = ['en', 'zh', 'de', 'it', 'es', 'fr'];

export function detectBrowserLanguage(): LandingLanguage {
  const candidates = navigator.languages && navigator.languages.length > 0 ? navigator.languages : [navigator.language];
  for (const tag of candidates) {
    if (!tag) continue;
    const primary = tag.toLowerCase().split('-')[0] as LandingLanguage;
    if (SUPPORTED.includes(primary)) return primary;
  }
  return 'en';
}
