'use client';

import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import ServicesHeader from './ServicesHeader/ServicesHeader';
import ServicesGrid from './ServicesGrid/ServicesGrid';
import SupportSection from './SupportSection/SupportSection';
import ServicesCta from './ServicesCta/ServicesCta';
import './ServicesPage.css';

export default function ServicesPage() {
  const { t } = useTranslation();

  const services = useMemo(() => {
    const data = t('services.items', { returnObjects: true });
    return Array.isArray(data) ? data : [];
  }, [t]);

  const processSteps = useMemo(() => {
    const data = t('services.process.steps', { returnObjects: true });
    return Array.isArray(data) ? data : [];
  }, [t]);

  const faqItems = useMemo(() => {
    const data = t('services.faq.items', { returnObjects: true });
    return Array.isArray(data) ? data : [];
  }, [t]);

  return (
    <div className="sv-page">
      <ServicesHeader />
      <ServicesGrid services={services} />

      <p data-reveal className="sv-pricing-note">{t('services.pricingNote')}</p>

      <SupportSection />

      {/* Process */}
      <section className="sv-process-section">
        <div className="sv-process-container">
          <h2 data-reveal className="sv-section-heading">{t('services.process.title')}</h2>
          <p data-reveal className="sv-section-sub">{t('services.process.subtitle')}</p>
          <div className="sv-process-list">
            {processSteps.map((step, i) => (
              <div
                key={i}
                data-reveal
                className="sv-process-item"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className="sv-process-step">{step.step}</div>
                <div>
                  <h3 className="sv-process-title">{step.title}</h3>
                  <p className="sv-process-desc">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sv-faq-section" id="faq">
        <div className="sv-faq-container">
          <h2 data-reveal className="sv-section-heading">{t('services.faq.title')}</h2>
          <div data-reveal className="sv-faq-list">
            {faqItems.map((item, i) => (
              <details key={i} className="sv-faq-item">
                <summary className="sv-faq-q">{item.q}</summary>
                <p className="sv-faq-a">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ServicesCta />
    </div>
  );
}
