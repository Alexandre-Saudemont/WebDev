'use client';

import {useEffect, useRef, useState, useMemo} from 'react';
import {useTranslation} from 'react-i18next';
import {useTheme} from '../../../contexts/ThemeContext';
import './ValuesGrid.css';
import Image from 'next/image';

export default function ValuesGrid() {
	const {t} = useTranslation();
	const [visibleCards, setVisibleCards] = useState(new Set());
	const sectionRef = useRef(null);
	const {isDarkMode} = useTheme();
	const values = useMemo(
		() => [
			{
				title: t('aboutPage.sections.method.title') || 'Ma manière de travailler',
				description: t('aboutPage.sections.method.content', {returnObjects: true}) || [],
				icon: isDarkMode ? '/img/dark/lightbulb_dark.svg' : '/img/light/lightbulb_light.svg',
			},
			{
				title: t('aboutPage.sections.transparency.title') || 'Transparence',
				description: t('aboutPage.sections.transparency.content', {returnObjects: true}) || [],
				icon: isDarkMode ? '/img/dark/handshake_dark.svg' : '/img/light/handshake_light.svg',
			},
			{
				title: t('aboutPage.sections.values.title') || 'Ce qui m’anime',
				description: t('aboutPage.sections.values.content', {returnObjects: true}) || [],
				icon: isDarkMode ? '/img/dark/stars_dark.svg' : '/img/light/stars_light.svg',
			},
			{
				title: t('aboutPage.sections.objectif.title') || 'Objectif',
				description: t('aboutPage.sections.objectif.content', {returnObjects: true}) || [],
				icon: isDarkMode ? '/img/dark/target_dark.svg' : '/img/light/target_light.svg',
			},
		],
		[t, isDarkMode],
	);

	useEffect(() => {
		const section = sectionRef.current;
		if (!section) return;

		let observer = null;

		// Fallback si IntersectionObserver n'est pas supporté
		if (typeof IntersectionObserver === 'undefined') {
			const allIndices = new Set(values.map((_, index) => index));
			requestAnimationFrame(() => setVisibleCards(allIndices));
			return;
		}

		const rafId = requestAnimationFrame(() => {
			const cards = section.querySelectorAll('.value-card');
			if (cards.length === 0) return;

			observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							const cardIndex = Array.from(cards).indexOf(entry.target);
							if (cardIndex !== -1) {
								setTimeout(() => {
									setVisibleCards((prev) => {
										const newSet = new Set(prev);
										newSet.add(cardIndex);
										return newSet;
									});
								}, cardIndex * 150);
								observer.unobserve(entry.target);
							}
						}
					});
				},
				{threshold: 0.2},
			);

			cards.forEach((card) => observer.observe(card));
		});

		return () => {
			cancelAnimationFrame(rafId);
			if (observer) observer.disconnect();
		};
	}, [values]);

	return (
		<section ref={sectionRef} className='values-grid-section'>
			<div className='values-container'>
				<div className='section-header'>
					<div className='section-badge'>{t('aboutPage.sections.methodAndValues.title')}</div>
					<h2>{t('aboutPage.sections.methodAndValues.subtitle')}</h2>
				</div>
				<div className='values-grid'>
					{values.map((value, index) => (
						<div key={index} className={`value-card ${visibleCards.has(index) ? 'visible' : ''}`}>
							<Image className='value-icon' src={value.icon} alt='Icon' width={50} height={50}></Image>
							<h3>{value.title}</h3>
							{Array.isArray(value.description) ? (
								value.description.map((text, i) => <p key={i}>{text}</p>)
							) : (
								<p>{value.description}</p>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
