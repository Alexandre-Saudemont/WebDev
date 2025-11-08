'use client';

import { useTranslation } from 'react-i18next';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import './StatsSection.css';

interface Stat {
	value: string;
	label: string;
	suffix?: string;
}

export default function StatsSection() {
	const { t } = useTranslation();
	const { elementRef: sectionRef, isVisible } = useIntersectionObserver<HTMLElement>({
		threshold: 0.2,
		triggerOnce: true,
	});

	const stats: Stat[] = [
		{ value: '5+', label: t('homePage.stats.projects') || 'Projets réalisés' },
		{ value: '100%', label: t('homePage.stats.satisfaction') || 'Satisfaction client' },
		{ value: '3+', label: t('homePage.stats.years') || "Années d'expérience" },
		{ value: '24/7', label: t('homePage.stats.support') || 'Support disponible' },
	];

	return (
		<section ref={sectionRef} className={`stats-section ${isVisible ? 'visible' : ''}`}>
			<div className="stats-container">
				{stats.map((stat, index) => (
					<div key={index} className="stat-item">
						<div className="stat-value">{stat.value}</div>
						<div className="stat-label">{stat.label}</div>
					</div>
				))}
			</div>
		</section>
	);
}

