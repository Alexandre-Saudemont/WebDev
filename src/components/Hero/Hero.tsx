'use client';

import HeroSection from './HeroSection/HeroSection';
import StatsSection from './StatsSection/StatsSection';
import AboutPreview from './AboutPreview/AboutPreview';
import ProcessSection from './ProcessSection/ProcessSection';
import TeasersSection from './TeasersSection/TeasersSection';
import './Hero.css';

export default function Hero() {
	return (
		<div className="hero-container">
			<HeroSection />
			<StatsSection />
			<AboutPreview />
			<ProcessSection />
			<TeasersSection />
		</div>
	);
}

