'use client';

import Link from 'next/link';
import {useTranslation} from 'react-i18next';
import {ArrowRight} from 'lucide-react';
import {useIntersectionObserver} from '@/hooks/useIntersectionObserver';
import './ServicesCta.css';

export default function ServicesCta() {
	const {t} = useTranslation();
	const {elementRef, isVisible} = useIntersectionObserver({
		threshold: 0.2,
		triggerOnce: true,
	});

	return (
		<section ref={elementRef} className={`services-cta ${isVisible ? 'visible' : ''}`}>
			<div className='services-cta-container'>
				<div className='services-cta-content'>
					<h2>{t('services.cta.title')}</h2>
					<p>{t('services.cta.description')}</p>
					<Link href='/contact' className='cta-button'>
						{t('navigation.contact')}
						<ArrowRight size={18} />
					</Link>
				</div>
			</div>
		</section>
	);
}
