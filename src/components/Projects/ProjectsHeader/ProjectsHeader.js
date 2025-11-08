'use client';

import {useTranslation} from 'react-i18next';
import {useIntersectionObserver} from '@/hooks/useIntersectionObserver';
import './ProjectsHeader.css';

export default function ProjectsHeader() {
	const {t} = useTranslation();
	const {elementRef, isVisible} = useIntersectionObserver({
		threshold: 0.2,
		triggerOnce: true,
	});

	return (
		<header ref={elementRef} className={`projects-header ${isVisible ? 'visible' : ''}`}>
			<div className='projects-header-content'>
				<div className='header-badge'>Projets</div>
				<h1>{t('projectsPage.title')}</h1>
				<p className='header-subtitle'>Découvrez mes réalisations et les technologies utilisées pour chaque projet</p>
			</div>
		</header>
	);
}
