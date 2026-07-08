'use client';

import Link from '@/components/LocaleLink';
import { useTranslation } from 'react-i18next';
import './ServicesCta.css';

export default function ServicesCta() {
  const { t } = useTranslation();

  return (
    <section className="sv-cta-section">
      <div className="sv-cta-container" data-reveal>
        <div className="sv-cta-glow" />
        <h2 className="sv-cta-title">{t('services.cta.title')}</h2>
        <p className="sv-cta-desc">{t('services.cta.description')}</p>
        <Link href="/contact" className="btn-primary sv-cta-btn">
          {t('services.cta.button')}
        </Link>
      </div>
    </section>
  );
}
