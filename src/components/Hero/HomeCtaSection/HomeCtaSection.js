'use client';

import Link from '@/components/LocaleLink';
import { useTranslation } from 'react-i18next';
import './HomeCtaSection.css';

export default function HomeCtaSection() {
  const { t } = useTranslation();

  return (
    <section className="home-cta-section">
      <div className="hcta-glow" aria-hidden="true" />
      <h2 data-reveal className="hcta-title gradient-heading">
        {t('homePage.cta.title')}
      </h2>
      <p data-reveal className="hcta-desc">
        {t('homePage.cta.description')}
      </p>
      <div data-reveal className="hcta-actions">
        <Link href="/contact" className="btn-primary hcta-btn">
          {t('homePage.cta.primary')}
        </Link>
        <span className="hcta-email">contact@as-webdev.com</span>
      </div>
    </section>
  );
}
