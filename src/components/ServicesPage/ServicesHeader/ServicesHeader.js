'use client';

import {useTranslation} from 'react-i18next';
import {useIntersectionObserver} from '@/hooks/useIntersectionObserver';
import './ServicesHeader.css';

export default function ServicesHeader() {
	const {t} = useTranslation();
	const {elementRef, isVisible} = useIntersectionObserver({
		threshold: 0.2,
		triggerOnce: true,
	});

	return (
		<header ref={elementRef} className={`services-header ${isVisible ? 'visible' : ''}`}>
			<div className='services-header-content'>
				<div className='header-badge'>Services</div>
				<h1>{t('services.title')}</h1>
				<p className='header-subtitle'>{t('services.subtitle')}</p>
			</div>
		</header>
	);
}
