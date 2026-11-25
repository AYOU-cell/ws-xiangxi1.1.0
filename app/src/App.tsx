import {
  ArrowRight,
  ChevronDown,
  CircleDollarSign,
  ClipboardCheck,
  Handshake,
  MessageCircle,
  PackageCheck,
  Store,
} from 'lucide-react';
import portraitImage from 'figma:asset/bd1f7fed47f295cb26419e1a7c51e6229abba87e.png';
import './landing.css';

const WHATSAPP_URL = 'https://wa.me/12182135478';

const platforms = ['Shopify', 'Amazon', 'OZON', 'TikTok Shop'];

const faqs = [
  {
    question: 'I have no experience. Can I still do this?',
    answer:
      'Yes. Many people start with no experience, and we guide you through each step. How well your store performs depends on your effort, your products and the market.',
  },
  {
    question: 'Is it free?',
    answer:
      "There is no upfront fee. We charge 5% (Self-Managed) or 9% (Fully Managed) of your store's sales revenue. You also pay your own inventory, platform and advertising costs.",
  },
  {
    question: 'How long before I see results?',
    answer:
      "It varies a lot. Some stores get early orders, many take months, and some never become profitable. We can't promise any specific result or timeline.",
  },
  {
    question: 'How much do I need to invest?',
    answer:
      "That depends on your products, platform fees and whether you advertise. We'll talk through a realistic budget with you before you start.",
  },
  {
    question: 'Where do the products come from?',
    answer:
      'We help you find suppliers for unbranded or properly licensed products. We do not help sell counterfeit or unauthorized branded goods.',
  },
  {
    question: "What's the difference between the two plans?",
    answer:
      'On the Self-Managed plan you run the store with our guidance. On the Fully Managed plan our team handles most daily operations and you review and approve key decisions.',
  },
  {
    question: 'Can I do this alongside a full-time job?',
    answer:
      'Many people do. The Self-Managed plan usually needs 1–3 hours a day; the Fully Managed plan needs less of your time but has a higher fee.',
  },
  {
    question: 'Can I stop at any time?',
    answer:
      'Yes. There is no cancellation fee or notice period. You can stop using the service at any time. Please contact us so we can confirm the end of the service in writing and close out any active work.',
  },
];

function WhatsAppButton({ label = 'Chat with us on WhatsApp' }: { label?: string }) {
  return (
    <a className="wa-button" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
      <MessageCircle size={20} aria-hidden="true" />
      <span>{label}</span>
      <ArrowRight size={18} aria-hidden="true" />
    </a>
  );
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
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="EZ Entrepreneur Academy home">
          <span className="brand-mark">EZ</span>
          <span>Entrepreneur Academy</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#apply">Plans</a>
          <a href="#how-it-works">How it works</a>
          <a href="#about">About</a>
          <a href="#faq">FAQ</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Practical e-commerce guidance</p>
            <h1>Build Your Online Store With a Mentor by Your Side</h1>
            <p className="hero-lead">
              Personal, step-by-step guidance on store setup, product research and listing on
              Shopify, Amazon, OZON and TikTok Shop. No upfront fee — we only earn a share of
              your store revenue.
            </p>
            <div className="platform-list" aria-label="Supported platforms">
              {platforms.map((platform) => (
                <span key={platform}>{platform}</span>
              ))}
            </div>
            <WhatsAppButton />
            <p className="disclaimer-line">
              Results vary. We do not guarantee any income or sales.
            </p>
          </div>

          <div className="hero-visual">
            <div className="portrait-frame">
              <img src={portraitImage} alt="EZ Entrepreneur Academy mentor" />
            </div>
            <div className="mentor-note">
              <span className="status-dot" />
              Personal guidance from setup to launch
            </div>
          </div>
        </section>

        <section className="plans-section" id="apply">
          <div className="section-wrap">
            <SectionHeading
              eyebrow="Clear, aligned fees"
              title="Two Ways to Work With Us"
              description="There is no upfront fee for either plan. Instead, we receive a percentage of your store's sales revenue, so our fees are clear from day one."
            />

            <div className="plan-grid">
              <article className="plan-card">
                <div className="plan-card-header">
                  <div>
                    <p className="plan-label">Self-Managed Plan</p>
                    <h3>Learn while you run your store</h3>
                  </div>
                  <div className="fee">
                    <strong>5%</strong>
                    <span>of store sales revenue</span>
                  </div>
                </div>
                <dl className="plan-details">
                  <div>
                    <dt>Best for</dt>
                    <dd>People who want to learn and run their own store (about 1–3 hours a day).</dd>
                  </div>
                  <div>
                    <dt>You handle</dt>
                    <dd>Store registration, product selection, pricing, listings, operations and customer service.</dd>
                  </div>
                  <div>
                    <dt>We provide</dt>
                    <dd>1-on-1 mentoring, daily guidance and answers to your questions.</dd>
                  </div>
                </dl>
              </article>

              <article className="plan-card plan-card-featured">
                <div className="plan-card-header">
                  <div>
                    <p className="plan-label">Fully Managed Plan</p>
                    <h3>Let our team handle daily operations</h3>
                  </div>
                  <div className="fee">
                    <strong>9%</strong>
                    <span>of store sales revenue</span>
                  </div>
                </div>
                <dl className="plan-details">
                  <div>
                    <dt>Best for</dt>
                    <dd>People who prefer us to handle daily operations (about 10 minutes a day to review).</dd>
                  </div>
                  <div>
                    <dt>You handle</dt>
                    <dd>Account registration, approving products and setting prices.</dd>
                  </div>
                  <div>
                    <dt>We provide</dt>
                    <dd>Product research, listings, inventory and order sync, shipping coordination, store maintenance and daily reports.</dd>
                  </div>
                </dl>
              </article>
            </div>

            <div className="cost-note">
              <CircleDollarSign size={22} aria-hidden="true" />
              <p>
                You are responsible for your own store, inventory costs, platform fees and any
                advertising spend. Sales depend on your products, market conditions and many
                other factors.
              </p>
            </div>
            <div className="centered-action">
              <WhatsAppButton />
            </div>
          </div>
        </section>

        <section className="process-section" id="how-it-works">
          <div className="section-wrap">
            <SectionHeading
              eyebrow="A practical path forward"
              title="How It Works"
              description="Four clear steps, with honest guidance at every stage."
            />
            <ol className="process-grid">
              {[
                {
                  icon: MessageCircle,
                  title: 'Chat with us',
                  text: "Tell us about your goals, available time and budget. We'll explain both plans and answer your questions.",
                },
                {
                  icon: ClipboardCheck,
                  title: 'Choose a plan',
                  text: "If it's a good fit, choose the Self-Managed or Fully Managed plan and agree the terms in writing.",
                },
                {
                  icon: Store,
                  title: 'Set up your store',
                  text: 'We guide you through account registration, store setup and your first product research.',
                },
                {
                  icon: PackageCheck,
                  title: 'Launch and improve',
                  text: 'List your first products, then keep improving with regular check-ins and practical advice.',
                },
              ].map((step, index) => (
                <li key={step.title}>
                  <div className="step-number">0{index + 1}</div>
                  <step.icon size={24} aria-hidden="true" />
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
            <p className="fit-note">
              Not everyone is a good fit. If we don&apos;t think we can help you, we&apos;ll tell
              you honestly.
            </p>
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="section-wrap about-grid">
            <div className="about-image">
              <img src={portraitImage} alt="Mentor from EZ Entrepreneur Academy" />
            </div>
            <div className="about-copy">
              <SectionHeading eyebrow="Guidance from real people" title="About Us" />
              <p>
                EZ Entrepreneur Academy is operated by BlueVision Interactive Limited. We help
                people set up and run online stores on Shopify, Amazon, OZON and TikTok Shop with
                practical, hands-on guidance.
              </p>
              <div className="mentor-card">
                <p className="mentor-title">Your mentor</p>
                <h3>A dedicated e-commerce guide by your side</h3>
                <p>
                  Your mentor works with you on store setup, product research and listings, and
                  helps you make informed decisions as your store develops.
                </p>
              </div>
              <div className="earning-model">
                <Handshake size={24} aria-hidden="true" />
                <div>
                  <h3>How we earn money</h3>
                  <p>
                    We don&apos;t sell courses. We earn a percentage of your store&apos;s sales
                    revenue under the plan you choose. We may also receive referral rewards from
                    e-commerce platforms when you open a store through our partner link.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="faq-section" id="faq">
          <div className="section-wrap faq-wrap">
            <SectionHeading
              eyebrow="Straight answers"
              title="Frequently Asked Questions"
              description="What to know before deciding whether this service is right for you."
            />
            <div className="faq-list">
              {faqs.map((faq) => (
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
              <WhatsAppButton />
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-grid">
          <div>
            <a className="brand brand-light" href="#top">
              <span className="brand-mark">EZ</span>
              <span>Entrepreneur Academy</span>
            </a>
            <p className="company-line">
              A service of BlueVision Interactive Limited
              <br />
              UNIT 1618A, 16/F, PIONEER CENTRE, 750 NATHAN ROAD, MONG KOK, HONG KONG
              <br />
              <a href="mailto:support@ezecomacademy.com">support@ezecomacademy.com</a>
              {' · '}
              <a href={WHATSAPP_URL}>WhatsApp: +1 218 213 5478</a>
            </p>
          </div>
          <div className="footer-disclosures">
            <p>
              <strong>Disclosure:</strong> We earn a percentage of store sales revenue from
              clients on our paid plans. We may also receive referral rewards from e-commerce
              platforms when you open a store through our partner link.
            </p>
            <p>
              <strong>Important disclaimer:</strong> EZ Entrepreneur Academy provides guidance
              and store management services. We do not guarantee any income, sales or profit.
              Results depend on individual effort, products, market conditions and other factors.
              Running an online store involves costs and financial risk.
            </p>
          </div>
        </div>
        <div className="footer-bottom" id="policy-links">
          <p>© 2020–2026 BlueVision Interactive Limited. All rights reserved.</p>
          <nav aria-label="Legal">
            <a href="#policy-links" title="Link to be added">Privacy Policy</a>
            <a href="#policy-links" title="Link to be added">Terms of Service</a>
            <a href="#policy-links" title="Link to be added">Cancellation Policy</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
