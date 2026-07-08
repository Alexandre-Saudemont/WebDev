'use client';

import Link from '@/components/LocaleLink';
import { useTranslation } from 'react-i18next';
import './HeroSection.css';

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="hero-section">
      <div className="hero-inner">
        <div data-reveal className="hero-badge">
          <span className="status-dot" />
          {t('homePage.hero.status')}
        </div>

        <h1 data-reveal className="hero-title">
          {t('homePage.title')}
        </h1>

        <p data-reveal className="hero-desc">
          {t('homePage.hero.description')}
        </p>

        <div data-reveal className="hero-actions">
          <Link href="/contact" className="btn-primary">
            {t('homePage.hero.cta.primary')}
          </Link>
          <Link href="/projects" className="btn-secondary">
            {t('homePage.hero.cta.secondary')}
          </Link>
        </div>

        <div data-reveal className="hero-tagline">
          {t('homePage.hero.tagline')}
        </div>
      </div>
    </section>
  );
}
