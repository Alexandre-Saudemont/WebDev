'use client';

import {useEffect, useRef, useState, useMemo} from 'react';
import {useTranslation} from 'react-i18next';
import {useTheme} from '../../../contexts/ThemeContext';
import './ProcessSection.css';
import Image from 'next/image';

export default function ProcessSection() {
	const {t} = useTranslation();
	const [visibleSteps, setVisibleSteps] = useState(new Set());
	const sectionRef = useRef(null);
	const {isDarkMode} = useTheme();

	// Utilisation de useMemo pour stabiliser les steps et éviter le warning SSR
	const steps = useMemo(
		() => [
			{
				number: '01',
				title: t('homePage.process.discovery.title') || 'Découverte',
				description: t('homePage.process.discovery.description') || 'Discussion pour comprendre vos besoins et objectifs',
				icon: isDarkMode ? '/img/dark/discovery_dark.svg' : '/img/light/discovery_light.svg',
			},
			{
				number: '02',
				title: t('homePage.process.design.title') || 'Conception',
				description: t('homePage.process.design.description') || "Création d'un design moderne et adapté à votre identité",
				icon: isDarkMode ? '/img/dark/art_dark.svg' : '/img/light/art_light.svg',
			},
			{
				number: '03',
				title: t('homePage.process.development.title') || 'Développement',
				description: t('homePage.process.development.description') || 'Développement avec suivi régulier et transparence totale',
				icon: isDarkMode ? '/img/dark/gear_dark.svg' : '/img/light/gear_light.svg',
			},
			{
				number: '04',
				title: t('homePage.process.launch.title') || 'Lancement',
				description: t('homePage.process.launch.description') || 'Mise en ligne et accompagnement pour la suite',
				icon: isDarkMode ? '/img/dark/rocket_dark.svg' : '/img/light/rocket_light.svg',
			},
		],
		[t, isDarkMode],
	);

	useEffect(() => {
		const section = sectionRef.current;
		if (!section) return;

		// Fallback si IntersectionObserver n'est pas supporté
		if (typeof IntersectionObserver === 'undefined') {
			const allIndices = new Set(steps.map((_, index) => index));
			// Déférer le setState pour éviter le warning
			requestAnimationFrame(() => setVisibleSteps(allIndices));
			return;
		}

		let observer = null;

		const rafId = requestAnimationFrame(() => {
			const stepElements = section.querySelectorAll('.process-step');
			if (stepElements.length === 0) return;

			observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							const stepIndex = Array.from(stepElements).indexOf(entry.target);
							if (stepIndex !== -1) {
								setTimeout(() => {
									setVisibleSteps((prev) => {
										const newSet = new Set(prev);
										newSet.add(stepIndex);
										return newSet;
									});
								}, stepIndex * 150);
								observer.unobserve(entry.target);
							}
						}
					});
				},
				{threshold: 0.2},
			);

			stepElements.forEach((step) => observer.observe(step));
		});

		return () => {
			cancelAnimationFrame(rafId);
			if (observer) observer.disconnect();
		};
	}, [steps]);

	return (
		<section ref={sectionRef} className='process-section'>
			<div className='process-container'>
				<div className='process-header'>
					<div className='section-badge'>Processus</div>
					<h2>{t('homePage.process.title') || 'Comment je travaille'}</h2>
					<p>{t('homePage.process.subtitle') || 'Un processus clair et transparent pour votre projet'}</p>
				</div>

				<div className='process-steps'>
					{steps.map((step, index) => (
						<div key={index} className={`process-step ${visibleSteps.has(index) ? 'visible' : ''}`}>
							<div className='step-number'>{step.number}</div>
							<div className='step-content'>
								<Image className='step-icon' src={step.icon} alt={step.title} height={50} width={50}></Image>
								<h3>{step.title}</h3>
								<p>{step.description}</p>
							</div>
							{index < steps.length - 1 && <div className='step-connector'></div>}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
