'use client';

import { useTranslation } from 'react-i18next';
import './LegalHeader.css';

export default function LegalHeader({ titleKey, subtitleKey, descriptionKey, badge }) {
  const { t } = useTranslation();

  return (
    <header className="legal-header">
      <div className="legal-header-content">
        {badge && <div data-reveal className="section-label">{badge}</div>}
        <h1 data-reveal className="legal-header-title gradient-heading">{t(titleKey)}</h1>
        {subtitleKey && <p data-reveal className="legal-subtitle">{t(subtitleKey)}</p>}
        {descriptionKey && <p data-reveal className="legal-description">{t(descriptionKey)}</p>}
      </div>
    </header>
  );
}
