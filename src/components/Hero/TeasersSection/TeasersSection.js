'use client';

import {useEffect, useRef, useState} from 'react';
import Link from 'next/link';
import {useTranslation} from 'react-i18next';
import './TeasersSection.css';

export default function TeasersSection() {
	const {t} = useTranslation();
	const [visibleCards, setVisibleCards] = useState(new Set());
	const sectionRef = useRef(null);

	useEffect(() => {
		const section = sectionRef.current;
		if (!section) return;

		// Fallback si l'Intersection Observer n'est pas supporté, afficher toutes les cartes
		if (typeof IntersectionObserver === 'undefined') {
			const indices = new Set();
			indices.add(0);
			indices.add(1);
			setVisibleCards(indices);
			return;
		}

		let observer = null;

		// Utiliser requestAnimationFrame pour s'assurer que le DOM est prêt
		const rafId = requestAnimationFrame(() => {
			setTimeout(() => {
				const cards = section.querySelectorAll('.teaser-card');
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
									}, cardIndex * 200);
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
	}, []);

	return (
		<section ref={sectionRef} className='home-teasers'>
			<Link href='/projects' className={`teaser-card projects-teaser ${visibleCards.has(0) ? 'visible' : ''}`}>
				<div className='teaser-icon'>🚀</div>
				<h3>{t('navigation.projects')}</h3>
				<p>{t('projectsPage.title')}</p>
				<ul className='teaser-features'>
					<li>{t('projectsPage.project1.title')}</li>
					<li>{t('projectsPage.project2.title')}</li>
					<li>{t('projectsPage.project3.title')}</li>
				</ul>
				<span className='teaser-cta'>{t('homePage.project')} →</span>
			</Link>

			<Link href='/services' className={`teaser-card services-teaser ${visibleCards.has(1) ? 'visible' : ''}`}>
				<div className='teaser-icon'>⚡</div>
				<h3>{t('navigation.services')}</h3>
				<p>{t('services.subtitle')}</p>
				<ul className='teaser-features'>
					<li>{t('services.items.0.title')}</li>
					<li>{t('services.items.1.title')}</li>
					<li>{t('services.items.2.title')}</li>
					<li>{t('services.items.3.title')}</li>
				</ul>
				<span className='teaser-cta'>{t('navigation.services')} →</span>
			</Link>
		</section>
	);
}
