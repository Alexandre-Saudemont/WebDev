'use client';

import { useTranslation } from 'react-i18next';
import './ContactHeader.css';

export default function ContactHeader() {
  const { t } = useTranslation();

  return (
    <header className="ch-header">
      <div className="ch-inner">
        <div data-reveal className="ch-status">
          <span className="status-dot" />
          {t('homePage.hero.status')}
        </div>
        <h1 data-reveal className="ch-title gradient-heading">
          {t('contact.subtitle')}
        </h1>
        <p data-reveal className="ch-desc">{t('contact.description')}</p>
      </div>
    </header>
  );
}
