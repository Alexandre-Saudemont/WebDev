'use client';

import HeroSection from './HeroSection/HeroSection';
import WhyMe from './WhyMe/WhyMe';
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
      <WhyMe />
      <ProjectsPreview />
      <SkillsPreview />
      <ProcessSection />
      <ServicesPreview />
      <HomeFaq />
      <HomeCtaSection />
    </>
  );
}
