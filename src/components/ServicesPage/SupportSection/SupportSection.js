'use client';

import Link from '@/components/LocaleLink';
import { useTranslation } from 'react-i18next';
import './SupportSection.css';

export default function SupportSection() {
  const { t } = useTranslation();
  const support = t('services.support', { returnObjects: true });

  if (!support || !support.title) return null;

  return (
    <section className="sup-section">
      <div className="sup-container">

        <div className="sup-header" data-reveal>
          <span className="sup-eyebrow">{support.eyebrow}</span>
          <h2 className="sup-title">{support.title}</h2>
          <p className="sup-subtitle">{support.subtitle}</p>
        </div>

        <div className="sup-grid">
          {support.plans?.map((plan, i) => (
            <div
              key={i}
              className={`sup-card ${plan.popular ? 'sup-card--popular' : ''}`}
              data-reveal
              style={{ '--reveal-delay': `${i * 90}ms` }}
            >
              {plan.popular && (
                <div className="sup-badge">{plan.badge}</div>
              )}
              <div className="sup-card-top">
                <h3 className="sup-card-title">{plan.title}</h3>
                <p className="sup-card-desc">{plan.description}</p>
              </div>
              <div className="sup-price-block">
                <span className="sup-price">{plan.price}</span>
                <span className="sup-period">{plan.period}</span>
              </div>
              <div className="sup-divider" />
              <ul className="sup-features">
                {plan.features?.map((f, j) => (
                  <li key={j} className="sup-feature">
                    <span className="sup-check">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={`sup-cta ${plan.popular ? 'sup-cta--primary' : 'sup-cta--outline'}`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        <div className="sup-custom" data-reveal>
          <div className="sup-custom-body">
            <p className="sup-custom-title">{support.custom?.title}</p>
            <p className="sup-custom-text">{support.custom?.text}</p>
          </div>
          <Link href="/contact" className="sup-custom-cta">
            {support.custom?.cta} →
          </Link>
        </div>

        <p className="sup-note" data-reveal>{support.note}</p>

      </div>
    </section>
  );
}
