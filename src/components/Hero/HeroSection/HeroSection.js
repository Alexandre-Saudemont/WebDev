'use client';

import Link from '@/components/LocaleLink';
import { Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './HeroSection.css';

export default function HeroSection() {
  const { t } = useTranslation();

  const reassuranceData = t('homePage.hero.reassurance', { returnObjects: true });
  const reassurance = Array.isArray(reassuranceData) ? reassuranceData : [];

  return (
    <section className="hero-section">
      <div className="hero-inner">
        <div data-reveal className="hero-badge">
          <span className="status-dot" />
          {t('homePage.hero.status')}
        </div>

        <h1 data-reveal className="hero-title">
          {t('homePage.hero.titleLead')}{' '}
          <span className="hero-title-accent">{t('homePage.hero.titleAccent')}</span>{' '}
          {t('homePage.hero.titleTrail')}
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

        <ul data-reveal className="hero-reassurance" style={{ transitionDelay: '80ms' }}>
          {reassurance.map((item) => (
            <li key={item}>
              <Check size={13} strokeWidth={2.5} aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>

        <div data-reveal className="hero-tagline">
          {t('homePage.hero.tagline')}
        </div>
      </div>
    </section>
  );
}
