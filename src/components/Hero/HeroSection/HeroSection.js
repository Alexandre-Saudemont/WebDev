'use client';

import {useEffect, useRef, useState} from 'react';
import Link from 'next/link';
import {useTranslation} from 'react-i18next';
import {ArrowRight} from 'lucide-react';
import {useIntersectionObserver} from '@/hooks/useIntersectionObserver';
import Image from 'next/image';
import {useTheme} from '../../../contexts/ThemeContext';
import './HeroSection.css';

export default function HeroSection() {
	const {t} = useTranslation();
	const {elementRef, isVisible} = useIntersectionObserver({
		threshold: 0.1,
		triggerOnce: true,
	});
	const {isDarkMode} = useTheme();

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
						<Image
							className='card-icon'
							src={isDarkMode ? '/img/dark/art_dark.svg' : '/img/light/art_light.svg'}
							alt='Icon art'
							width={40}
							height={40}></Image>
						<h3>{t('homePage.hero.cards.frontend.title')}</h3>
						<p>{t('homePage.hero.cards.frontend.desc')}</p>
					</div>
					<div className='hero-card'>
						<Image
							className='card-icon'
							src={isDarkMode ? '/img/dark/gear_dark.svg' : '/img/light/gear_light.svg'}
							alt='Icon gear'
							width={40}
							height={40}></Image>
						<h3>{t('homePage.hero.cards.backend.title')}</h3>
						<p>{t('homePage.hero.cards.backend.desc')}</p>
					</div>
				</div>
			</div>
		</section>
	);
}
