'use client';

import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import AboutHeader from './AboutHeader/AboutHeader';
import TimelineSection from './TimelineSection/TimelineSection';
import ValuesGrid from './ValuesGrid/ValuesGrid';
import SkillsSection from './SkillsSection/SkillsSection';
import CtaSection from './CtaSection/CtaSection';
import type { AboutSections } from './types';
import './AboutPage.css';

export default function AboutPage() {
	const { t } = useTranslation();

	const sections = useMemo(() => {
		try {
			const data = t('aboutPage.sections', { returnObjects: true });
			return (JSON.parse(JSON.stringify(data)) as AboutSections) || {};
		} catch (error) {
			console.error('Erreur i18n:', error);
			return {};
		}
	}, [t]);

	return (
		<div className="about-page">
			<AboutHeader />
			<TimelineSection />
			<ValuesGrid />
			{sections.skills && (
				<SkillsSection
					title={sections.skills.title || ''}
					description={sections.skills.content?.[0]}
				/>
			)}
			{sections.cta && sections.cta.content && (
				<CtaSection title={sections.cta.title || ''} content={sections.cta.content} />
			)}
		</div>
	);
}

