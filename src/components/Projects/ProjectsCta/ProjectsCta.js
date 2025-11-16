'use client';

import Link from 'next/link';
import {useTranslation} from 'react-i18next';
import {ArrowRight} from 'lucide-react';
import {useIntersectionObserver} from '@/hooks/useIntersectionObserver';
import './ProjectsCta.css';

export default function ProjectsCta() {
	const {t} = useTranslation();
	const {elementRef, isVisible} = useIntersectionObserver({
		threshold: 0.2,
		triggerOnce: true,
	});

	return (
		<section ref={elementRef} className={`projects-cta ${isVisible ? 'visible' : ''}`}>
			<div className='projects-cta-container'>
				<div className='projects-cta-content'>
					<h2>{t('projectsPage.cta.title')}</h2>
					<p>{t('projectsPage.cta.description')}</p>
					<Link href='/contact' className='cta-button'>
						{t('navigation.contact')}
						<ArrowRight size={18} />
					</Link>
				</div>
			</div>
		</section>
	);
}
