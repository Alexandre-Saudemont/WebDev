'use client';

import {useMemo} from 'react';
import {useTranslation} from 'react-i18next';
import {useTheme} from '../../../contexts/ThemeContext';
import './TimelineSection.css';
import Image from 'next/image';

export default function TimelineSection() {
	const {t} = useTranslation();
	const {isDarkMode} = useTheme();

	const timelineItems = useMemo(() => {
		const parcoursContent = t('aboutPage.sections.parcours.content', {returnObjects: true}) || undefined;
		const parcoursArray = Array.isArray(parcoursContent) ? parcoursContent : [];
		return [
			{
				title: t('aboutPage.sections.parcours.title') || 'Mon parcours',
				description: parcoursArray[0] || '',
				icon: isDarkMode ? '/img/dark/target_dark.svg' : '/img/light/target_light.svg',
			},
			{
				title: 'Formation',
				description: parcoursArray[1] || '',
				icon: isDarkMode ? '/img/dark/books_dark.svg' : '/img/light/books_light.svg',
			},
			{
				title: "Projet d'équipe",
				description: parcoursArray[2] || '',
				icon: isDarkMode ? '/img/dark/rocket_dark.svg' : '/img/light/rocket_light.svg',
			},
		];
	}, [t, isDarkMode]);

	return (
		<section className='timeline-section'>
			<div className='timeline-container'>
				<div className='section-header'>
					<div className='section-badge'>Parcours</div>
					<h2>{t('aboutPage.sections.parcours.title') || 'Mon parcours'}</h2>
				</div>
				<div className='timeline'>
					{timelineItems.map((item, index) => (
						<div key={index} className='timeline-item visible'>
							<div className='timeline-marker'>
								<div className='timeline-icon-container'>
									<Image className='timeline-icon' src={item.icon} alt='Icon' width={20} height={20}></Image>
								</div>
								{index < timelineItems.length - 1 && <div className='timeline-line'></div>}
							</div>
							<div className='timeline-content'>
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
