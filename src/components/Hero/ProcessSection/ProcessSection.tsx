'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './ProcessSection.css';

interface ProcessStep {
	number: string;
	title: string;
	description: string;
	icon: string;
}

export default function ProcessSection() {
	const { t } = useTranslation();
	const [visibleSteps, setVisibleSteps] = useState<Set<number>>(new Set());
	const sectionRef = useRef<HTMLElement>(null);

	const steps: ProcessStep[] = [
		{
			number: '01',
			title: t('homePage.process.discovery.title') || 'Découverte',
			description:
				t('homePage.process.discovery.description') ||
				'Discussion pour comprendre vos besoins et objectifs',
			icon: '💬',
		},
		{
			number: '02',
			title: t('homePage.process.design.title') || 'Conception',
			description:
				t('homePage.process.design.description') ||
				'Création d\'un design moderne et adapté à votre identité',
			icon: '🎨',
		},
		{
			number: '03',
			title: t('homePage.process.development.title') || 'Développement',
			description:
				t('homePage.process.development.description') ||
				'Développement avec suivi régulier et transparence totale',
			icon: '⚙️',
		},
		{
			number: '04',
			title: t('homePage.process.launch.title') || 'Lancement',
			description:
				t('homePage.process.launch.description') ||
				'Mise en ligne et accompagnement pour la suite',
			icon: '🚀',
		},
	];

	useEffect(() => {
		const section = sectionRef.current;
		if (!section) return;

		// Fallback : si l'Intersection Observer n'est pas supporté, afficher tous les éléments
		if (typeof IntersectionObserver === 'undefined') {
			const indices = new Set<number>();
			steps.forEach((_, index) => indices.add(index));
			setVisibleSteps(indices);
			return;
		}

		let observer: IntersectionObserver | null = null;

		// Utiliser requestAnimationFrame pour s'assurer que le DOM est prêt
		const rafId = requestAnimationFrame(() => {
			setTimeout(() => {
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
									if (observer) {
										observer.unobserve(entry.target);
									}
								}
							}
						});
					},
					{ threshold: 0.2 },
				);

				stepElements.forEach((step) => observer?.observe(step));
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
		<section ref={sectionRef} className="process-section">
			<div className="process-container">
				<div className="process-header">
					<div className="section-badge">Processus</div>
					<h2>{t('homePage.process.title') || 'Comment je travaille'}</h2>
					<p>{t('homePage.process.subtitle') || 'Un processus clair et transparent pour votre projet'}</p>
				</div>

				<div className="process-steps">
					{steps.map((step, index) => (
						<div
							key={index}
							className={`process-step ${visibleSteps.has(index) ? 'visible' : ''}`}>
							<div className="step-number">{step.number}</div>
							<div className="step-content">
								<div className="step-icon">{step.icon}</div>
								<h3>{step.title}</h3>
								<p>{step.description}</p>
							</div>
							{index < steps.length - 1 && <div className="step-connector"></div>}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

