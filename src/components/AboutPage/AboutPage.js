'use client';

import React from 'react';
import {useTranslation} from 'react-i18next';
import Image from 'next/image';
import {useTheme} from '@/contexts/ThemeContext';

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

import './AboutPage.css';

export default function AboutPage() {
	const {t} = useTranslation();
	const {isDarkMode} = useTheme();

	// Skills et mapping des icônes
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

	// Récupère les sections depuis i18n (fallback sur {} si jamais)
	const sections = t('aboutPage.sections', {returnObjects: true}) || {};

	return (
		<section className='about'>
			<div className='about-container'>
				{Object.entries(sections).map(([key, section]) => (
					<div key={key} className={`about-section ${key}`}>
						<h2>{section.title}</h2>

						{section.content.map((paragraph, i) => (
							<p key={i}>{paragraph}</p>
						))}

						{key === 'skills' && (
							<div className='skills-container'>
								{skills.map((skill, index) => (
									<div key={index} className='skill'>
										<span className='skill-label'>{skill}</span>
										<Image
											src={isDarkMode ? skillIcons[skill].light : skillIcons[skill].dark}
											alt={skill}
											width={32}
											height={32}
										/>
									</div>
								))}
							</div>
						)}
					</div>
				))}
			</div>
		</section>
	);
}
