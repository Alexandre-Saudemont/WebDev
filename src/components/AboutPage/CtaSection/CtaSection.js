'use client';

import Link from '@/components/LocaleLink';
import { useTranslation } from 'react-i18next';
import './CtaSection.css';

export default function CtaSection({ title, content }) {
  const { t } = useTranslation();

  return (
    <section className="about-cta-section">
      <div className="about-cta-container" data-reveal>
        <div className="about-cta-glow" />
        <h2 className="about-cta-title">{title || t('aboutPage.sections.cta.title')}</h2>
        {Array.isArray(content) && content.map((p, i) => (
          <p key={i} className="about-cta-text">{p}</p>
        ))}
        <Link href="/contact" className="btn-primary about-cta-btn">
          {t('navigation.contact')}
        </Link>
      </div>
    </section>
  );
}
