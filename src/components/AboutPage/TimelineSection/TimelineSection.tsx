'use client';

import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import './TimelineSection.css';

interface TimelineItem {
	year?: string;
	title: string;
	description: string;
	icon: string;
}

export default function TimelineSection() {
	const { t } = useTranslation();

	const timelineItems: TimelineItem[] = useMemo(() => {
		const parcoursContent = t('aboutPage.sections.parcours.content', { returnObjects: true }) as string[] | undefined;
		const parcoursArray = Array.isArray(parcoursContent) ? parcoursContent : [];
		
		return [
			{
				title: t('aboutPage.sections.parcours.title') || 'Mon parcours',
				description: parcoursArray[0] || '',
				icon: '🎯',
			},
			{
				title: 'Formation',
				description: parcoursArray[1] || '',
				icon: '📚',
			},
			{
				title: 'Projet d\'équipe',
				description: parcoursArray[2] || '',
				icon: '🚀',
			},
		];
	}, [t]);

	return (
		<section className="timeline-section">
			<div className="timeline-container">
				<div className="section-header">
					<div className="section-badge">Parcours</div>
					<h2>{t('aboutPage.sections.parcours.title') || 'Mon parcours'}</h2>
				</div>
				<div className="timeline">
					{timelineItems.map((item, index) => (
						<div
							key={index}
							className="timeline-item visible">
							<div className="timeline-marker">
								<div className="timeline-icon">{item.icon}</div>
								{index < timelineItems.length - 1 && <div className="timeline-line"></div>}
							</div>
							<div className="timeline-content">
								<h3>{item.title}</h3>
								<p>{item.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

