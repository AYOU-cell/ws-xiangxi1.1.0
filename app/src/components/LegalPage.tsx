import { useEffect, useState } from 'react';
import logoMark from '../assets/ez-entrepreneurship-mark.png';
import { LANGUAGE_LABELS, type LandingLanguage } from '../landingCopy';
import { legalCopy, type LegalDoc } from '../legalCopy';
import '../landing.css';
import '../legal.css';

const LANGUAGES: LandingLanguage[] = ['en', 'zh', 'de', 'it', 'es', 'fr'];
const LOCALE_TAG: Record<LandingLanguage, string> = {
  en: 'en',
  zh: 'zh-CN',
  de: 'de',
  it: 'it',
  es: 'es',
  fr: 'fr',
};

function detectInitialLanguage(): LandingLanguage {
  const params = new URLSearchParams(window.location.search);
  const requested = params.get('lang');
  if (requested && LANGUAGES.includes(requested as LandingLanguage)) {
    return requested as LandingLanguage;
  }
  return 'en';
}

export function LegalPage({ doc }: { doc: 'privacy' | 'terms' }) {
  const [language, setLanguage] = useState<LandingLanguage>(detectInitialLanguage);
  const content: LegalDoc = legalCopy[language][doc];
  const backHome = legalCopy[language].backHome;

  useEffect(() => {
    document.documentElement.lang = LOCALE_TAG[language];
  }, [language]);

  return (
    <div className="site-shell legal-shell">
      <header className="site-header">
        <a className="brand" href="/" aria-label="EZ Entrepreneur Academy home">
          <span className="brand-logo-wrap">
            <img className="brand-logo" src={logoMark} alt="" />
          </span>
          <span>Entrepreneur Academy</span>
        </a>
        <select
          className="language-toggle"
          value={language}
          onChange={(e) => setLanguage(e.target.value as LandingLanguage)}
          aria-label="Language"
        >
          {LANGUAGES.map((lang) => (
            <option key={lang} value={lang}>
              {LANGUAGE_LABELS[lang]}
            </option>
          ))}
        </select>
      </header>

      <main className="legal-main">
        <a className="legal-back" href="/">
          {backHome}
        </a>
        <h1>{content.title}</h1>
        <p className="legal-updated">{content.updated}</p>
        <p className="legal-intro">{content.intro}</p>
        {content.sections.map((section) => (
          <section key={section.heading} className="legal-section">
            <h2>{section.heading}</h2>
            {section.body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </section>
        ))}
      </main>
    </div>
  );
}
