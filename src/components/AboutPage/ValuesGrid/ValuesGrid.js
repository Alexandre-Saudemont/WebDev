'use client';

import {useEffect, useRef, useState} from 'react';
import {useTranslation} from 'react-i18next';
import './ValuesGrid.css';

export default function ValuesGrid() {
	const {t} = useTranslation();
	const [visibleCards, setVisibleCards] = useState(new Set());
	const sectionRef = useRef(null);

	const values = [
		{
			icon: '💡',
			title: t('aboutPage.sections.method.title') || 'Ma manière de travailler',
			description: t('aboutPage.sections.method.content.0') || '',
		},
		{
			icon: '🤝',
			title: t('aboutPage.sections.method.content.1')?.split('—')[0] || 'Transparence',
			description: t('aboutPage.sections.method.content.1')?.split('—')[1] || '',
		},
		{
			icon: '✨',
			title: t('aboutPage.sections.values.title') || "Ce qui m'anime",
			description: t('aboutPage.sections.values.content.0') || '',
		},
		{
			icon: '🎯',
			title: 'Objectif',
			description: t('aboutPage.sections.values.content.1') || '',
		},
	];

	useEffect(() => {
		const section = sectionRef.current;
		if (!section) return;

		// Fallback si l'Intersection Observer n'est pas supporté, afficher toutes les cartes
		if (typeof IntersectionObserver === 'undefined') {
			const indices = new Set();
			values.forEach((_, index) => indices.add(index));
			setVisibleCards(indices);
			return;
		}

		let observer = null;

		// Utiliser requestAnimationFrame pour s'assurer que le DOM est prêt
		const rafId = requestAnimationFrame(() => {
			setTimeout(() => {
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
									if (observer) {
										observer.unobserve(entry.target);
									}
								}
							}
						});
					},
					{threshold: 0.2},
				);

				cards.forEach((card) => observer?.observe(card));
			}, 50);
		});

		return () => {
			cancelAnimationFrame(rafId);
			if (observer) {
				observer.disconnect();
			}
		};
	}, [values]);

	return (
		<section ref={sectionRef} className='values-grid-section'>
			<div className='values-container'>
				<div className='section-header'>
					<div className='section-badge'>Valeurs</div>
					<h2>Ma méthode & mes valeurs</h2>
				</div>
				<div className='values-grid'>
					{values.map((value, index) => (
						<div key={index} className={`value-card ${visibleCards.has(index) ? 'visible' : ''}`}>
							<div className='value-icon'>{value.icon}</div>
							<h3>{value.title}</h3>
							<p>{value.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
