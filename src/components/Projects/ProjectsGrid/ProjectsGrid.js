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

		const cards = container.querySelectorAll('.project-card');

		// Affiche directement toutes les cartes déjà dans le viewport avec un stagger
		cards.forEach((card, index) => {
			setTimeout(() => {
				setVisibleCards((prev) => {
					const newSet = new Set(prev);
					newSet.add(index);
					return newSet;
				});
			}, index * 150);
		});

		// IntersectionObserver pour les cartes ajoutées plus bas si nécessaire
		if (typeof IntersectionObserver !== 'undefined') {
			const observer = new IntersectionObserver(
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
			return () => observer.disconnect();
		}
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
