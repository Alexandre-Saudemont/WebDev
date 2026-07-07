'use client';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import './AboutPreview.css';

export default function AboutPreview() {
  const { t } = useTranslation();

  const miniStats = [
    { value: '2+', label: t('homePage.stats.years') },
    { value: '3+', label: t('homePage.stats.projects') },
    { value: '100%', label: t('homePage.stats.satisfaction'), green: true },
  ];

  return (
    <section className="about-preview-section">
      <div className="ap-container">
        <div data-reveal className="ap-portrait">
          <div className="ap-portrait-placeholder">[ portrait ]</div>
        </div>

        <div data-reveal className="ap-content" style={{ transitionDelay: '90ms' }}>
          <div className="section-label">{t('navigation.about')}</div>
          <h2 className="ap-title">{t('homePage.about.title')}</h2>
          <p className="ap-desc">{t('aboutPage.sections.intro.content.0')}</p>

          <div className="ap-stats">
            {miniStats.map((s, i) => (
              <div key={i} className="ap-stat">
                <div className={`ap-stat-value ${s.green ? 'green' : ''}`}>{s.value}</div>
                <div className="ap-stat-label">{s.label}</div>
              </div>
            ))}
          </div>

          <Link href="/about" className="ap-link">
            {t('homePage.about.link')} →
          </Link>
        </div>
      </div>
    </section>
  );
}
