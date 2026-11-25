import { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  ChevronDown,
  ClipboardCheck,
  Handshake,
  MessageCircle,
  PackageCheck,
  Store,
} from 'lucide-react';
import portraitImage from 'figma:asset/bd1f7fed47f295cb26419e1a7c51e6229abba87e.png';
import logoMark from './assets/ez-entrepreneurship-mark.png';
import { LANGUAGE_LABELS, landingCopy, type LandingLanguage } from './landingCopy';
import { useWhatsAppUrl } from './lib/waUrl';
import './landing.css';

const LANGUAGES: LandingLanguage[] = ['en', 'zh', 'de', 'it', 'es', 'fr'];
const LOCALE_TAG: Record<LandingLanguage, string> = {
  en: 'en',
  zh: 'zh-CN',
  de: 'de',
  it: 'it',
  es: 'es',
  fr: 'fr',
};

const platforms = ['Shopify', 'Amazon', 'OZON', 'TikTok Shop'];
const processIcons = [MessageCircle, ClipboardCheck, Store, PackageCheck];

function WhatsAppButton({ label }: { label: string }) {
  const waUrl = useWhatsAppUrl();
  return (
    <a className="wa-button" href={waUrl} target="_blank" rel="noreferrer">
      <MessageCircle size={20} aria-hidden="true" />
      <span>{label}</span>
      <ArrowRight size={18} aria-hidden="true" />
    </a>
  );
}

function FooterWhatsAppLink() {
  const waUrl = useWhatsAppUrl();
  return <a href={waUrl}>WhatsApp</a>;
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

export default function App() {
  const heroCtaRef = useRef<HTMLDivElement>(null);
  const [showFloatingCta, setShowFloatingCta] = useState(false);
  const [language, setLanguage] = useState<LandingLanguage>('en');
  const copy = landingCopy[language];

  useEffect(() => {
    document.documentElement.lang = LOCALE_TAG[language];
  }, [language]);

  useEffect(() => {
    const target = heroCtaRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowFloatingCta(!entry.isIntersecting && entry.boundingClientRect.top < 0);
      },
      { threshold: 0 },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="site-shell">
      <div className={`floating-wa ${showFloatingCta ? 'floating-wa-visible' : ''}`}>
        <WhatsAppButton label={copy.whatsapp} />
      </div>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="EZ Entrepreneur Academy home">
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
        <nav aria-label="Main navigation">
          <a href="#apply">{copy.nav.plans}</a>
          <a href="#how-it-works">{copy.nav.process}</a>
          <a href="#about">{copy.nav.about}</a>
          <a href="#faq">{copy.nav.faq}</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow">{copy.hero.eyebrow}</p>
            <h1>{copy.hero.title}</h1>
            <p className="hero-lead">{copy.hero.lead}</p>
            <div className="platform-list" aria-label="Supported platforms">
              {platforms.map((platform) => (
                <span key={platform}>{platform}</span>
              ))}
            </div>
            <div ref={heroCtaRef} className="hero-cta">
              <WhatsAppButton label={copy.whatsapp} />
            </div>
            <p className="disclaimer-line">{copy.hero.disclaimer}</p>
          </div>

          <div className="hero-visual">
            <div className="portrait-frame">
              <img src={portraitImage} alt="EZ Entrepreneur Academy mentor" />
            </div>
            <div className="mentor-note">
              <span className="status-dot" />
              {copy.hero.note}
            </div>
          </div>
        </section>

        <section className="plans-section" id="apply">
          <div className="section-wrap">
            <SectionHeading
              eyebrow={copy.plans.eyebrow}
              title={copy.plans.title}
              description={copy.plans.description}
            />

            <div className="plan-grid">
              <article className="plan-card">
                <div className="plan-card-header">
                  <div>
                    <p className="plan-label">{copy.plans.self.label}</p>
                    <h3>{copy.plans.self.title}</h3>
                  </div>
                  <div className="fee">
                    <strong>5%</strong>
                    <span>{copy.plans.feeSuffix}</span>
                  </div>
                </div>
                <dl className="plan-details">
                  <div>
                    <dt>{copy.plans.bestFor}</dt>
                    <dd>{copy.plans.self.bestFor}</dd>
                  </div>
                  <div>
                    <dt>{copy.plans.youHandle}</dt>
                    <dd>{copy.plans.self.youHandle}</dd>
                  </div>
                  <div>
                    <dt>{copy.plans.weProvide}</dt>
                    <dd>{copy.plans.self.weProvide}</dd>
                  </div>
                </dl>
              </article>

              <article className="plan-card plan-card-featured">
                <div className="plan-card-header">
                  <div>
                    <p className="plan-label">{copy.plans.managed.label}</p>
                    <h3>{copy.plans.managed.title}</h3>
                  </div>
                  <div className="fee">
                    <strong>9%</strong>
                    <span>{copy.plans.feeSuffix}</span>
                  </div>
                </div>
                <dl className="plan-details">
                  <div>
                    <dt>{copy.plans.bestFor}</dt>
                    <dd>{copy.plans.managed.bestFor}</dd>
                  </div>
                  <div>
                    <dt>{copy.plans.youHandle}</dt>
                    <dd>{copy.plans.managed.youHandle}</dd>
                  </div>
                  <div>
                    <dt>{copy.plans.weProvide}</dt>
                    <dd>{copy.plans.managed.weProvide}</dd>
                  </div>
                </dl>
              </article>
            </div>

            <div className="centered-action">
              <WhatsAppButton label={copy.whatsapp} />
            </div>
          </div>
        </section>

        <section className="process-section" id="how-it-works">
          <div className="section-wrap">
            <SectionHeading
              eyebrow={copy.process.eyebrow}
              title={copy.process.title}
              description={copy.process.description}
            />
            <ol className="process-grid">
              {copy.process.steps.map((step, index) => {
                const StepIcon = processIcons[index];
                return (
                <li key={step.title}>
                  <div className="step-number">0{index + 1}</div>
                  <StepIcon size={24} aria-hidden="true" />
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </li>
                );
              })}
            </ol>
            <p className="fit-note">{copy.process.fitNote}</p>
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="section-wrap about-grid">
            <div className="about-image">
              <img src={portraitImage} alt="Mentor from EZ Entrepreneur Academy" />
            </div>
            <div className="about-copy">
              <SectionHeading eyebrow={copy.about.eyebrow} title={copy.about.title} />
              <p>{copy.about.intro}</p>
              <div className="mentor-card">
                <p className="mentor-title">{copy.about.mentorLabel}</p>
                <h3>{copy.about.mentorTitle}</h3>
                <p>{copy.about.mentorText}</p>
              </div>
              <div className="earning-model">
                <Handshake size={24} aria-hidden="true" />
                <div>
                  <h3>{copy.about.earningTitle}</h3>
                  <p>{copy.about.earningText}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="faq-section" id="faq">
          <div className="section-wrap faq-wrap">
            <SectionHeading
              eyebrow={copy.faq.eyebrow}
              title={copy.faq.title}
              description={copy.faq.description}
            />
            <div className="faq-list">
              {copy.faq.items.map((faq) => (
                <details key={faq.question}>
                  <summary>
                    <span>{faq.question}</span>
                    <ChevronDown size={20} aria-hidden="true" />
                  </summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
            <div className="centered-action">
              <WhatsAppButton label={copy.whatsapp} />
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-grid">
          <div>
            <a className="brand brand-light" href="#top">
              <span className="brand-logo-wrap">
                <img className="brand-logo" src={logoMark} alt="" />
              </span>
              <span>Entrepreneur Academy</span>
            </a>
            <p className="company-line">
              {copy.footer.service}
              <br />
              UNIT 1618A, 16/F, PIONEER CENTRE, 750 NATHAN ROAD, MONG KOK, HONG KONG
              <br />
              <a href="mailto:support@ezecomacademy.com">support@ezecomacademy.com</a>
              {' · '}
              <FooterWhatsAppLink />
            </p>
          </div>
          <div className="footer-disclosures">
            <p>
              <strong>{copy.footer.disclosureLabel}</strong> {copy.footer.disclosure}
            </p>
            <p>
              <strong>{copy.footer.disclaimerLabel}</strong> {copy.footer.disclaimer}
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>{copy.footer.rights}</p>
          <nav aria-label="Legal">
            <a href="/privacy">{copy.footer.privacy}</a>
            <a href="/terms">{copy.footer.terms}</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
