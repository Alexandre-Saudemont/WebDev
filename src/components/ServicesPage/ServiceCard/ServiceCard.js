'use client';

import Link from '@/components/LocaleLink';
import { useTranslation } from 'react-i18next';
import './ServiceCard.css';

export default function ServiceCard({ service, index }) {
  const { t } = useTranslation();
  const isPopular = service.popular === true;

  return (
    <div
      className={`sv-card ${isPopular ? 'sv-card--popular' : ''}`}
      data-reveal
      style={{ '--reveal-delay': `${index * 90}ms` }}
    >
      {isPopular && (
        <div className="sv-card-badge">{t('services.popularLabel', { defaultValue: 'POPULAIRE' })}</div>
      )}
      <div className="sv-card-icon">{service.icon}</div>
      <h3 className="sv-card-title">{service.title}</h3>
      <p className="sv-card-desc">{service.description}</p>
      <div className="sv-card-price-label">{service.priceLabel}</div>
      <div className="sv-card-price">
        {service.price}
        {service.priceSuffix && <span className="sv-card-price-suffix">{service.priceSuffix}</span>}
      </div>
      <div className="sv-card-divider" />
      <ul className="sv-card-features">
        {service.features.map((f, i) => (
          <li key={i} className="sv-card-feature">
            <span className="sv-check">✓</span>
            {f}
          </li>
        ))}
      </ul>
      <Link href="/contact" className={`sv-card-cta ${isPopular ? 'sv-card-cta--primary' : 'sv-card-cta--outline'}`}>
        {service.cta}
      </Link>
    </div>
  );
}
