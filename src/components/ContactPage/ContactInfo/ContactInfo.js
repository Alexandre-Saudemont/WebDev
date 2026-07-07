'use client';

import { useTranslation } from 'react-i18next';
import './ContactInfo.css';

export default function ContactInfo() {
  const { t } = useTranslation();

  return (
    <div className="ci-stack">
      {/* Contact direct */}
      <div data-reveal className="ci-card" style={{ transitionDelay: '80ms' }}>
        <div className="ci-card-label">Direct</div>
        <div className="ci-items">
          <div className="ci-item">
            <div className="ci-item-key">{t('contact.info.email.title')}</div>
            <div className="ci-item-val">contact@as-webdev.com</div>
          </div>
          <div className="ci-item">
            <div className="ci-item-key">{t('contact.info.location.title')}</div>
            <div className="ci-item-val">{t('contact.info.location.value')}</div>
          </div>
          <div className="ci-item">
            <div className="ci-item-key">{t('contact.info.availability.title')}</div>
            <div className="ci-item-val">{t('contact.info.availability.value')}</div>
          </div>
        </div>
      </div>

      {/* Disponibilité */}
      <div data-reveal className="ci-card ci-card--green" style={{ transitionDelay: '160ms' }}>
        <div className="ci-avail-dot">
          <span className="status-dot" />
          <span className="ci-avail-text">{t('homePage.hero.status')}</span>
        </div>
        <p className="ci-avail-desc">{t('contact.info.description')}</p>
      </div>

      {/* Temps de réponse */}
      <div data-reveal className="ci-card" style={{ transitionDelay: '240ms' }}>
        <div className="ci-response-time">{'< 24h'}</div>
        <div className="ci-response-label">
          {t('contact.form.securityIndicator', { defaultValue: 'Temps de réponse moyen garanti.' })}
        </div>
      </div>
    </div>
  );
}
