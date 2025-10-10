'use client';

import React from 'react';
import Link from 'next/link';
import {useTranslation} from 'react-i18next';

export default function Hero() {
	const {t} = useTranslation();

	const cards = [
		{
			title: t('home.cards.frontend.title'),
			description: t('home.cards.frontend.description'),
		},
		{
			title: t('home.cards.backend.title'),
			description: t('home.cards.backend.description'),
		},
		{
			title: t('home.cards.devops.title'),
			description: t('home.cards.devops.description'),
		},
	];

	return (
		<div className={styles['homePage-container']}>
			<section ref={ref} id='home' className={styles['container hero']}>
				<div className={styles['hero-content']}>
					<h1>
						{t(`homePage.title`)} <span className={styles['highlight']}>Alexandre Saudemont</span>
					</h1>
					<p>{t('homePage.subtitle')}</p>
					<a href='#projects' className={styles['cta-button']}>
						{t('homePage.project')}
					</a>
				</div>
				<div className={styles['hero-visual']}>
					<div className={styles['card']}>
						<h3 className={styles['card-title']}>{t('homePage.hero.cards.frontend.title')}</h3>
						<p>{t('homePage.hero.cards.frontend.desc')}</p>
					</div>
					<div className={styles['card']}>
						<h3 className={styles['card-title']}>{t('homePage.hero.cards.backend.title')}</h3>
						<p>{t('homePage.hero.cards.backend.desc')}</p>
					</div>
				</div>
			</section>
		</div>
	);
}
