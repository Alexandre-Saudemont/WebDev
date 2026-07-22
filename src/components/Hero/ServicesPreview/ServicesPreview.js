'use client';

import Link from '@/components/LocaleLink';
import { useTranslation } from 'react-i18next';
import './ServicesPreview.css';

export default function ServicesPreview() {
  const { t } = useTranslation();

  const services = [
    {
      num: '01',
      title: t('services.items.0.title'),
      desc: t('services.items.0.description'),
      price: t('services.items.0.price'),
      priceSuffix: t('services.items.0.priceSuffix'),
      popular: false,
    },
    {
      num: '02',
      title: t('services.items.1.title'),
      desc: t('services.items.1.description'),
      price: t('services.items.1.price'),
      priceSuffix: t('services.items.1.priceSuffix'),
      popular: true,
    },
    {
      num: '03',
      title: t('services.items.2.title'),
      desc: t('services.items.2.description'),
      price: t('services.items.2.price'),
      priceSuffix: t('services.items.2.priceSuffix'),
      popular: false,
    },
  ];

  return (
    <section className="services-preview-section">
      <div className="sp-container">
        <div data-reveal className="sp-header">
          <div className="section-label">{t('services.subtitle')}</div>
          <h2 className="sp-title">{t('services.badge')}</h2>
        </div>

        <div className="sp-grid">
          {services.map((s, i) => (
            <div
              key={i}
              data-reveal
              data-spotlight
              className={`sp-card ${s.popular ? 'sp-card--popular' : ''}`}
              style={{ '--reveal-delay': `${i * 80}ms` }}
            >
              {s.popular && <span className="sp-badge">{t('services.popularShort')}</span>}
              <div className={`sp-num mono-num ${s.popular ? 'green' : ''}`}>{s.num}</div>
              <h3 className="sp-card-title">{s.title}</h3>
              <p className="sp-card-desc">{s.desc}</p>
              <div className="sp-price-label">{t('services.items.0.priceLabel')}</div>
              <div className="sp-price">
                {s.price}
                {s.priceSuffix && <span className="sp-price-suffix">{s.priceSuffix}</span>}
              </div>
            </div>
          ))}
        </div>

        <div data-reveal className="sp-footer">
          <p className="sp-payment-note">{t('services.paymentNote')}</p>
          <Link href="/services" className="sp-link">
            {t('homePage.services.viewAll')} →
          </Link>
        </div>
      </div>
    </section>
  );
}
