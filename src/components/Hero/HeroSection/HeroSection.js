'use client';

import {useEffect, useRef, useState} from 'react';
import Link from 'next/link';
import {useTranslation} from 'react-i18next';
import {ArrowRight} from 'lucide-react';
import {useIntersectionObserver} from '@/hooks/useIntersectionObserver';
import './HeroSection.css';

export default function HeroSection() {
	const {t} = useTranslation();
	const {elementRef, isVisible} = useIntersectionObserver({
		threshold: 0.1,
		triggerOnce: true,
	});

	return (
		<section ref={elementRef} className={`hero-section ${isVisible ? 'visible' : ''}`}>
			<div className='hero-container-inner'>
				<div className='hero-content'>
					<div className='hero-badge'>
						<span className='badge-dot'></span>
						{t('homePage.subtitle')}
					</div>
					<h1>
						{t('homePage.title')} <span className='highlight'>AS-WebDev</span>
					</h1>
					<p className='hero-subtitle'>{t('homePage.hero.subtitle')}</p>
					<div className='hero-description'>
						<p>
							{t('homePage.hero.description') ||
								'Je crée des sites web modernes et performants pour aider les entreprises à développer leur présence en ligne.'}
						</p>
					</div>
					<div className='hero-actions'>
						<Link href='/projects' className='btn-primary'>
							{t('homePage.project')}
							<ArrowRight size={18} />
						</Link>
						<Link href='/contact' className='btn-secondary'>
							{t('navigation.contact')}
						</Link>
					</div>
				</div>

				<div className='hero-cards'>
					<div className='hero-card'>
						<div className='card-icon'>🎨</div>
						<h3>{t('homePage.hero.cards.frontend.title')}</h3>
						<p>{t('homePage.hero.cards.frontend.desc')}</p>
					</div>
					<div className='hero-card'>
						<div className='card-icon'>⚙️</div>
						<h3>{t('homePage.hero.cards.backend.title')}</h3>
						<p>{t('homePage.hero.cards.backend.desc')}</p>
					</div>
				</div>
			</div>
		</section>
	);
}
