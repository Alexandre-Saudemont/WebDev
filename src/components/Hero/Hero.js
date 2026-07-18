'use client';

import HeroSection from './HeroSection/HeroSection';
import ServicesPreview from './ServicesPreview/ServicesPreview';
import ProjectsPreview from './ProjectsPreview/ProjectsPreview';
import SkillsPreview from './SkillsPreview/SkillsPreview';
import ProcessSection from './ProcessSection/ProcessSection';
import HomeFaq from './HomeFaq/HomeFaq';
import HomeCtaSection from './HomeCtaSection/HomeCtaSection';

export default function Hero() {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <ProjectsPreview />
      <SkillsPreview />
      <ProcessSection />
      <HomeFaq />
      <HomeCtaSection />
    </>
  );
}
