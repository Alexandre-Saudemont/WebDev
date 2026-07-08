'use client';

import Link from '@/components/LocaleLink';
import { useTranslation } from 'react-i18next';
import './ProjectsCta.css';

export default function ProjectsCta() {
  const { t } = useTranslation();

  return (
    <section className="pcta-section">
      <div className="pcta-container" data-reveal>
        <div className="pcta-glow" />
        <h2 className="pcta-title">{t('projectsPage.cta.title')}</h2>
        <p className="pcta-desc">{t('projectsPage.cta.description')}</p>
        <Link href="/contact" className="btn-primary pcta-btn">
          {t('navigation.contact')}
        </Link>
      </div>
    </section>
  );
}
