'use client';

import {useEffect, useRef, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {useTheme} from '@/contexts/ThemeContext';
import {SKILLS, SKILL_ICONS} from '@/lib/constants';
import './SkillsSection.css';

export default function SkillsSection({title, description}) {
	const {isDarkMode} = useTheme();
	const [visibleItems, setVisibleItems] = useState(new Set());
	const sectionRef = useRef(null);

	useEffect(() => {
		const section = sectionRef.current;
		if (!section) return;

		// Fallback si l'Intersection Observer n'est pas supporté, afficher tous les éléments
		if (typeof IntersectionObserver === 'undefined') {
			const indices = new Set();
			SKILLS.forEach((_, index) => indices.add(index));
			setVisibleItems(indices);
			return;
		}

		let observer = null;

		// Utiliser requestAnimationFrame pour s'assurer que le DOM est prêt
		const rafId = requestAnimationFrame(() => {
			setTimeout(() => {
				const items = section.querySelectorAll('.skill');
				if (items.length === 0) return;

				observer = new IntersectionObserver(
					(entries) => {
						entries.forEach((entry) => {
							if (entry.isIntersecting) {
								const skillIndex = Array.from(items).indexOf(entry.target);
								if (skillIndex !== -1) {
									setTimeout(() => {
										setVisibleItems((prev) => {
											const newSet = new Set(prev);
											newSet.add(skillIndex);
											return newSet;
										});
									}, skillIndex * 50);
									if (observer) {
										observer.unobserve(entry.target);
									}
								}
							}
						});
					},
					{threshold: 0.1},
				);

				items.forEach((item) => observer?.observe(item));
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
		<section ref={sectionRef} className='skills-section'>
			<div className='skills-container-inner'>
				<div className='section-header'>
					<div className='section-badge'>Compétences</div>
					<h2>{title}</h2>
					{description && <p className='section-description'>{description}</p>}
				</div>
				<div className='skills-grid'>
					{SKILLS.map((skill, index) => (
						<div key={skill} className={`skill ${visibleItems.has(index) ? 'visible' : ''}`}>
							<img src={isDarkMode ? SKILL_ICONS[skill].dark : SKILL_ICONS[skill].light} alt={skill} width={40} height={40} />
							<span className='skill-label'>{skill}</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
