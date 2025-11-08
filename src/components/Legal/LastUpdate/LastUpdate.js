'use client';

import {useTranslation} from 'react-i18next';
import {useIntersectionObserver} from '@/hooks/useIntersectionObserver';
import './LastUpdate.css';

export default function LastUpdate() {
	const {t} = useTranslation();
	const {elementRef, isVisible} = useIntersectionObserver({
		threshold: 0.2,
		triggerOnce: true,
	});
	const currentYear = new Date().getFullYear();

	return (
		<div ref={elementRef} className={`last-update ${isVisible ? 'visible' : ''}`}>
			<p>
				{t('legal.mention.lastUpdate')} {currentYear}
			</p>
		</div>
	);
}
