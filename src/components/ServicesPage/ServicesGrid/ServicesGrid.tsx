'use client';

import { useEffect, useRef } from 'react';
import type { ServiceItem } from '../types';
import ServiceCard from '../ServiceCard/ServiceCard';
import './ServicesGrid.css';

interface ServicesGridProps {
	services: ServiceItem[];
}

export default function ServicesGrid({ services }: ServicesGridProps) {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;

		// Fallback : si l'Intersection Observer n'est pas supporté, afficher toutes les cartes
		if (typeof IntersectionObserver === 'undefined') {
			const cards = container.querySelectorAll('.service-card');
			cards.forEach((card) => {
				(card as HTMLElement).classList.add('visible');
			});
			return;
		}

		let observer: IntersectionObserver | null = null;

		// Utiliser requestAnimationFrame pour s'assurer que le DOM est prêt
		const rafId = requestAnimationFrame(() => {
			setTimeout(() => {
				const cards = container.querySelectorAll('.service-card');
				if (cards.length === 0) return;

				observer = new IntersectionObserver(
					(entries) => {
						entries.forEach((entry, i) => {
							if (entry.isIntersecting) {
								const target = entry.target as HTMLElement;
								const cardIndex = Array.from(cards).indexOf(entry.target);
								target.style.transitionDelay = `${cardIndex * 0.15}s`;
								target.classList.add('visible');
								if (observer) {
									observer.unobserve(entry.target);
								}
							}
						});
					},
					{ threshold: 0.2 },
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
	}, [services]);

	return (
		<div className="services-grid" ref={containerRef}>
			{services.map((service, index) => (
				<ServiceCard key={index} service={service} index={index} />
			))}
		</div>
	);
}

