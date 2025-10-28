'use client';
import Link from 'next/link';
import React from 'react';
import {useTranslation} from 'react-i18next';
import './Hero.css';

export default function Hero() {
	const {t} = useTranslation();

	return (
		<div className='hero-container'>
			<section className='container hero'>
				<div className='hero-content'>
					<h1>
						{t(`homePage.title`)} <span className='highlight'>Alexandre Saudemont</span>
					</h1>
					<p>{t('homePage.subtitle')}</p>
					<Link href='/projects' className='cta-button'>
						{t('homePage.project')}
					</Link>
				</div>
				<div className='hero-visual'>
					<div className='card'>
						<h3 className='card-title'>{t('homePage.hero.cards.frontend.title')}</h3>
						<p>{t('homePage.hero.cards.frontend.desc')}</p>
					</div>
					<div className='card'>
						<h3 className='card-title'>{t('homePage.hero.cards.backend.title')}</h3>
						<p>{t('homePage.hero.cards.backend.desc')}</p>
					</div>
				</div>
			</section>
		</div>
	);
}
