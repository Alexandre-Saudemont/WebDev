'use client';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import './AboutHeader.css';

export default function AboutHeader() {
  const { t } = useTranslation();

  return (
    <section className="about-header-section">
      <div className="ah-container">
        <div className="ah-content" data-reveal>
          <div className="section-label">{t('aboutPage.sections.intro.title')}</div>
          <h1 className="ah-title gradient-heading">
            {t('aboutPage.sections.intro.subtitle')}
          </h1>
          <p className="ah-lead">{t('aboutPage.sections.intro.content.0')}</p>
          <p className="ah-sub">{t('aboutPage.sections.intro.content.1')}</p>
        </div>

        <div data-reveal className="ah-portrait" style={{ transitionDelay: '100ms' }}>
          <Image
            src="/img/portrait.jpg"
            alt="Alexandre Saudemont"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
      </div>
    </section>
  );
}
