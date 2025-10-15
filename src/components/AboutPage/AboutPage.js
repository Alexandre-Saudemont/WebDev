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
import nodejs_dark from '@img/dark/nodejs_dark.svg';
import nodejs_light from '@img/light/nodejs_light.svg';
import expressjs_dark from '@img/dark/expressjs_dark.svg';
import expressjs_light from '@img/light/expressjs_light.svg';
import psql_dark from '@img/dark/psql_dark.svg';
import psql_light from '@img/light/psql_light.svg';
import './AboutPage.css';

export default function AboutPage() {
	const {t} = useTranslation();
	const isDarkMode = useTheme();

	const skills = [
		{name: 'HTML', dark: html_light, light: html_dark},
		{name: 'CSS', dark: css_light, light: css_dark},
		{name: 'JavaScript', dark: js_light, light: js_dark},
		{name: 'ReactJS', dark: reactjs_light, light: reactjs_dark},
		{name: 'NodeJs', dark: nodejs_light, light: nodejs_dark},
		{name: 'ExpressJS', dark: expressjs_light, light: expressjs_dark},
		{name: 'PostgreSQL', dark: psql_light, light: psql_dark},
	];

	const paragraphs = t(`aboutPage.description`, {returnObjects: true});

	return (
		<section className='about'>
			<div className='container'>
				<h2>{t('aboutPage.title')}</h2>
				{paragraphs.map((paragraph, index) => (
					<p key={index}>{paragraph}</p>
				))}
				<div className='skills'>
					{skills.map((skill, index) => (
						<div key={index} className='skill'>
							{skill.name}
							<Image src={isDarkMode ? skill.dark : skill.light} alt={skill.name} width={32} height={32} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
