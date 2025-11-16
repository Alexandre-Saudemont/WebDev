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
				<div className='header-badge'>{t('services.title')}</div>
				<h1>{t('services.subtitle')}</h1>
				<p className='header-subtitle'>{t('services.description')}</p>
			</div>
		</header>
	);
}
