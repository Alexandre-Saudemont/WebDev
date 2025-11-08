'use client';

import {useTranslation} from 'react-i18next';
import {useIntersectionObserver} from '@/hooks/useIntersectionObserver';
import './LegalHeader.css';

export default function LegalHeader({titleKey, subtitleKey, descriptionKey, badge}) {
	const {t} = useTranslation();
	const {elementRef, isVisible} = useIntersectionObserver({
		threshold: 0.2,
		triggerOnce: true,
	});

	return (
		<header ref={elementRef} className={`legal-header ${isVisible ? 'visible' : ''}`}>
			<div className='legal-header-content'>
				{badge && <div className='header-badge'>{badge}</div>}
				<h1>{t(titleKey)}</h1>
				{subtitleKey && <p className='legal-subtitle'>{t(subtitleKey)}</p>}
				{descriptionKey && <p className='legal-description'>{t(descriptionKey)}</p>}
			</div>
		</header>
	);
}
