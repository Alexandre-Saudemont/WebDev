'use client';

import Hero from '@/components/Hero/Hero';
import Link from 'next/link';
import {useTranslation} from 'react-i18next';
import {useTheme} from '@/contexts/ThemeContext';
import {useMemo} from 'react';
import Image from 'next/image';

import html_dark from '@img/dark/html_dark.svg';
import html_light from '@img/light/html_light.svg';
import css_dark from '@img/dark/css_dark.svg';
import css_light from '@img/light/css_light.svg';
import js_dark from '@img/dark/js_dark.svg';
import js_light from '@img/light/js_light.svg';
import reactjs_dark from '@img/dark/reactjs_dark.svg';
import reactjs_light from '@img/light/reactjs_light.svg';
import nextjs_dark from '@img/dark/nextjs_dark.svg';
import nextjs_light from '@img/light/nextjs_light.svg';
import nodejs_dark from '@img/dark/nodejs_dark.svg';
import nodejs_light from '@img/light/nodejs_light.svg';
import expressjs_dark from '@img/dark/expressjs_dark.svg';
import expressjs_light from '@img/light/expressjs_light.svg';
import psql_dark from '@img/dark/psql_dark.svg';
import psql_light from '@img/light/psql_light.svg';

export default function Home() {
	const {t} = useTranslation();
	const {isDarkMode} = useTheme();

	const skills = ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'NextJS', 'NodeJs', 'ExpressJS', 'PostgreSQL'];

	const skillIcons = {
		HTML: {dark: html_dark, light: html_light},
		CSS: {dark: css_dark, light: css_light},
		JavaScript: {dark: js_dark, light: js_light},
		ReactJS: {dark: reactjs_dark, light: reactjs_light},
		NextJS: {dark: nextjs_dark, light: nextjs_light},
		NodeJs: {dark: nodejs_dark, light: nodejs_light},
		ExpressJS: {dark: expressjs_dark, light: expressjs_light},
		PostgreSQL: {dark: psql_dark, light: psql_light},
	};

	const aboutSections = useMemo(() => {
		try {
			return t('aboutPage.sections', {returnObjects: true});
		} catch (error) {
			console.error('Erreur i18n:', error);
			return {};
		}
	}, [t]);

	return (
		<>
			<Hero />
			<section className='home-about'>
				<div className='home-about-container'>
					<div className='home-about-content'>
						<h2>{aboutSections?.intro?.title || t('aboutPage.sections.intro.title')}</h2>
						{aboutSections?.intro?.content && Array.isArray(aboutSections.intro.content) ? (
							aboutSections.intro.content.slice(0, 2).map((paragraph, i) => <p key={i}>{paragraph}</p>)
						) : (
							<p>{t('aboutPage.sections.intro.content.0')}</p>
						)}
						<Link href='/about' className='home-about-link'>
							{t('navigation.about')} →
						</Link>
					</div>
					<div className='home-skills-preview'>
						<h3>{t('homePage.skills')}</h3>
						<div className='home-skills-grid'>
							{skills.slice(0, 6).map((skill, index) => (
								<div key={index} className='home-skill-item'>
									<Image
										src={isDarkMode ? skillIcons[skill].light : skillIcons[skill].dark}
										alt={skill}
										width={40}
										height={40}
									/>
									<span>{skill}</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
			<section className='home-teasers'>
				<Link href='/projects' className='teaser-card projects-teaser'>
					<div className='teaser-icon'>🚀</div>
					<h3>{t('navigation.projects')}</h3>
					<p>{t('projectsPage.title')}</p>
					<ul className='teaser-features'>
						<li>{t('projectsPage.project1.title')}</li>
						<li>{t('projectsPage.project2.title')}</li>
						<li>{t('projectsPage.project3.title')}</li>
					</ul>
					<span className='teaser-cta'>{t('homePage.project')} →</span>
				</Link>
				<Link href='/services' className='teaser-card services-teaser'>
					<div className='teaser-icon'>⚡</div>
					<h3>{t('navigation.services')}</h3>
					<p>{t('services.subtitle')}</p>
					<ul className='teaser-features'>
						<li>{t('services.items.0.title')}</li>
						<li>{t('services.items.1.title')}</li>
						<li>{t('services.items.2.title')}</li>
						<li>{t('services.items.3.title')}</li>
					</ul>
					<span className='teaser-cta'>{t('navigation.services')} →</span>
				</Link>
			</section>
		</>
	);
}
