'use client';

import { useTranslation } from 'react-i18next';
import './ServicesHeader.css';

export default function ServicesHeader() {
  const { t } = useTranslation();

  return (
    <header className="sv-header">
      <div className="sv-header-inner">
        <div data-reveal className="section-label">{t('services.subtitle')}</div>
        <h1 data-reveal className="sv-title gradient-heading">
          {t('services.description')}
        </h1>
        <p data-reveal className="sv-lead">{t('services.headerSubtitle')}</p>
      </div>
    </header>
  );
}
