'use client';

import {useEffect, useRef, useState} from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import './ProjectsGrid.css';

export default function ProjectsGrid({projects}) {
	const [visibleCards, setVisibleCards] = useState(new Set());
	const containerRef = useRef(null);

	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;

		// Fallback si l'Intersection Observer n'est pas supporté, afficher toutes les cartes
		if (typeof IntersectionObserver === 'undefined') {
			const indices = new Set();
			projects.forEach((_, index) => indices.add(index));
			setVisibleCards(indices);
			return;
		}

		let observer = null;

		// Utiliser requestAnimationFrame pour s'assurer que le DOM est prêt
		const rafId = requestAnimationFrame(() => {
			setTimeout(() => {
				const cards = container.querySelectorAll('.project-card');
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
	}, [projects]);

	return (
		<section className='projects-grid-section'>
			<div className='project-grid' ref={containerRef}>
				{projects.map((project, index) => (
					<ProjectCard key={index} project={project} isVisible={visibleCards.has(index)} />
				))}
			</div>
		</section>
	);
}
