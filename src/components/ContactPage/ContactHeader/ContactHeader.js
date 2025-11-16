'use client';

import {useTranslation} from 'react-i18next';
import {useIntersectionObserver} from '@/hooks/useIntersectionObserver';
import './ContactHeader.css';

export default function ContactHeader() {
	const {t} = useTranslation();
	const {elementRef, isVisible} = useIntersectionObserver({
		threshold: 0.2,
		triggerOnce: true,
	});

	return (
		<header ref={elementRef} className={`contact-header ${isVisible ? 'visible' : ''}`}>
			<div className='contact-header-content'>
				<div className='header-badge'>{t('contact.title')}</div>
				<h1>{t('contact.subtitle')}</h1>
				<p className='header-subtitle'>{t('contact.description')}</p>
			</div>
		</header>
	);
}
