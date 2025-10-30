'use client';

import {useTranslation} from 'react-i18next';
import {useEffect, useRef} from 'react';
import './ServicesPage.css';

export default function Services() {
	const {t} = useTranslation();
	const services = t('services.items', {returnObjects: true});
	const containerRef = useRef(null);

	useEffect(() => {
		const cards = containerRef.current?.querySelectorAll('.service-card');
		if (!cards) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry, i) => {
					if (entry.isIntersecting) {
						// ajoute un délai progressif selon l'ordre des cartes
						entry.target.style.transitionDelay = `${i * 0.15}s`;
						entry.target.classList.add('visible');
						observer.unobserve(entry.target);
					}
				});
			},
			{threshold: 0.2},
		);

		cards.forEach((card) => observer.observe(card));

		return () => observer.disconnect();
	}, []);

	return (
		<section className='services-container' id='services'>
			<div className='services-header'>
				<h2 className='services-title'>{t('services.title')}</h2>
				<p className='services-subtitle'>{t('services.subtitle')}</p>
			</div>

			<div className='services-grid' ref={containerRef}>
				{services.map((service, index) => (
					<div key={index} className='service-card'>
						<div className='service-icon'>{service.icon}</div>
						<h3 className='service-name'>{service.title}</h3>
						<p className='service-description'>{service.description}</p>
						<ul className='service-features'>
							{service.features.map((feature, featureIndex) => (
								<li key={featureIndex} className='service-feature'>
									{feature}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</section>
	);
}
