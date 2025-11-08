'use client';

import { useTranslation } from 'react-i18next';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import './AboutHeader.css';

export default function AboutHeader() {
	const { t } = useTranslation();
	const { elementRef: sectionRef, isVisible } = useIntersectionObserver<HTMLElement>({
		threshold: 0.2,
		triggerOnce: true,
	});

	return (
		<header ref={sectionRef} className={`about-header ${isVisible ? 'visible' : ''}`}>
			<div className="about-header-content">
				<div className="header-badge">À propos</div>
				<h1>{t('aboutPage.sections.intro.title') || 'À propos de moi'}</h1>
				<p className="header-subtitle">
					{t('aboutPage.sections.intro.content.0') ||
						'Je suis développeur web freelance, spécialisé dans la création de sites modernes et performants pour les indépendants et petites entreprises.'}
				</p>
			</div>
		</header>
	);
}

