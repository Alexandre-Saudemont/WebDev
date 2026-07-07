'use client';

import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import AboutHeader from './AboutHeader/AboutHeader';
import TimelineSection from './TimelineSection/TimelineSection';
import ValuesGrid from './ValuesGrid/ValuesGrid';
import SkillsSection from './SkillsSection/SkillsSection';
import CtaSection from './CtaSection/CtaSection';
import './AboutPage.css';

export default function AboutPage() {
  const { t } = useTranslation();

  const ctaData = useMemo(() => ({
    title: t('aboutPage.sections.cta.title'),
    content: t('aboutPage.sections.cta.content', { returnObjects: true }),
  }), [t]);

  return (
    <div className="about-page">
      <AboutHeader />
      <ValuesGrid />
      <TimelineSection />
      <SkillsSection />
      <CtaSection title={ctaData.title} content={Array.isArray(ctaData.content) ? ctaData.content : [ctaData.content]} />
    </div>
  );
}
