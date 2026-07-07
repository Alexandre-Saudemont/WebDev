'use client';

import { useTranslation } from 'react-i18next';
import './ProjectsHeader.css';

export default function ProjectsHeader() {
  const { t } = useTranslation();

  return (
    <header className="ph-header">
      <div className="ph-inner">
        <div data-reveal className="section-label">{t('projectsPage.title')}</div>
        <h1 data-reveal className="ph-title gradient-heading">{t('projectsPage.subtitle')}</h1>
        <p data-reveal className="ph-desc">{t('projectsPage.description')}</p>
      </div>
    </header>
  );
}
