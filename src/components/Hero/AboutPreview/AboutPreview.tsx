'use client';

import Link from 'next/link';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import SkillsPreview from '../SkillsPreview/SkillsPreview';
import './AboutPreview.css';

interface AboutSections {
	intro?: {
		title?: string;
		content?: string[];
	};
}

export default function AboutPreview() {
	const { t } = useTranslation();
	const { elementRef: sectionRef, isVisible } = useIntersectionObserver<HTMLElement>({
		threshold: 0.15,
		triggerOnce: true,
	});

	const aboutSections = useMemo(() => {
		try {
			return (t('aboutPage.sections', { returnObjects: true }) as AboutSections) || {};
		} catch (error) {
			console.error('Erreur i18n:', error);
			return {};
		}
	}, [t]);

	return (
		<section ref={sectionRef} className={`home-about ${isVisible ? 'visible' : ''}`}>
			<div className="home-about-container">
				<div className="home-about-content">
					<div className="section-badge">À propos</div>
					<h2>{aboutSections?.intro?.title || t('aboutPage.sections.intro.title')}</h2>
					{aboutSections?.intro?.content && Array.isArray(aboutSections.intro.content) ? (
						aboutSections.intro.content.slice(0, 2).map((paragraph, i) => (
							<p key={i} style={{ animationDelay: `${0.3 + i * 0.1}s` }}>
								{paragraph}
							</p>
						))
					) : (
						<p>{t('aboutPage.sections.intro.content.0')}</p>
					)}
					<div className="about-features">
						<div className="about-feature">
							<span className="feature-icon">✓</span>
							<span>{t('aboutPage.sections.method.title') || 'Méthode de travail'}</span>
						</div>
						<div className="about-feature">
							<span className="feature-icon">✓</span>
							<span>{t('aboutPage.sections.values.title') || 'Valeurs'}</span>
						</div>
					</div>
					<Link href="/about" className="home-about-link">
						{t('navigation.about')} →
					</Link>
				</div>

				<SkillsPreview />
			</div>
		</section>
	);
}

