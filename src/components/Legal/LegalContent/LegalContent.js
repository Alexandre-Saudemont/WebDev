'use client';

import {useEffect, useRef, useState} from 'react';
import LegalSectionComponent from '../LegalSection/LegalSection';
import './LegalContent.css';

export default function LegalContent({sections}) {
	const [visibleSections, setVisibleSections] = useState(new Set());
	const containerRef = useRef(null);

	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;

		// Fallback si l'Intersection Observer n'est pas supporté, afficher toutes les sections
		if (typeof IntersectionObserver === 'undefined') {
			const indices = new Set();
			sections.forEach((_, index) => indices.add(index));
			setVisibleSections(indices);
			return;
		}

		let observer = null;

		// Utiliser requestAnimationFrame pour s'assurer que le DOM est prêt
		const rafId = requestAnimationFrame(() => {
			setTimeout(() => {
				const sectionElements = container.querySelectorAll('.legal-section');
				if (sectionElements.length === 0) return;

				observer = new IntersectionObserver(
					(entries) => {
						entries.forEach((entry) => {
							if (entry.isIntersecting) {
								const sectionIndex = Array.from(sectionElements).indexOf(entry.target);
								if (sectionIndex !== -1) {
									setTimeout(() => {
										setVisibleSections((prev) => {
											const newSet = new Set(prev);
											newSet.add(sectionIndex);
											return newSet;
										});
									}, sectionIndex * 100);
									if (observer) {
										observer.unobserve(entry.target);
									}
								}
							}
						});
					},
					{threshold: 0.1},
				);

				sectionElements.forEach((section) => observer?.observe(section));
			}, 50);
		});

		return () => {
			cancelAnimationFrame(rafId);
			if (observer) {
				observer.disconnect();
			}
		};
	}, [sections]);

	return (
		<section className='legal-content-section'>
			<div className='legal-content' ref={containerRef}>
				{sections.map((section, index) => (
					<LegalSectionComponent key={index} section={section} isVisible={visibleSections.has(index)} />
				))}
			</div>
		</section>
	);
}
