'use client';

import {useTranslation} from 'react-i18next';
import {useIntersectionObserver} from '@/hooks/useIntersectionObserver';
import './StatsSection.css';

export default function StatsSection() {
	const {t} = useTranslation();
	const {elementRef, isVisible} = useIntersectionObserver({
		threshold: 0.2,
		triggerOnce: true,
	});

	const stats = [
		{value: '3+', label: t('homePage.stats.projects') || 'Projets réalisés'},
		{value: '100%', label: t('homePage.stats.satisfaction') || 'Implication projet'},
		{value: '2+', label: t('homePage.stats.years') || "Années d'expérience"},
		{value: '3000+', label: t('homePage.stats.support') || 'Ligne code'},
	];

	return (
		<section ref={elementRef} className={`stats-section ${isVisible ? 'visible' : ''}`}>
			<div className='stats-container'>
				{stats.map((stat, index) => (
					<div key={index} className='stat-item'>
						<div className='stat-value'>{stat.value}</div>
						<div className='stat-label'>{stat.label}</div>
					</div>
				))}
			</div>
		</section>
	);
}
