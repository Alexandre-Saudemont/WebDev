'use client';

import React, {useMemo} from 'react';
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

	// Récupère les sections depuis i18n
	const sections = useMemo(() => {
		try {
			const data = t('aboutPage.sections', {returnObjects: true});
			return JSON.parse(JSON.stringify(data));
		} catch (error) {
			console.error('Erreur i18n:', error);
			return {};
		}
	}, [t]);

	return (
		<section className='about'>
			<div className='about-container'>
				{/* 1er cadre seul et centré */}
				{sections.intro && (
					<div className='about-section-single'>
						<div className='about-section intro'>
							<h2>{sections.intro.title}</h2>
							{sections.intro.content.map((paragraph, i) => (
								<p key={i}>{paragraph}</p>
							))}
						</div>
					</div>
				)}

				{/* 2ème ligne : Parcours + Méthode côte à côte */}
				<div className='about-section-pair'>
					{sections.parcours && (
						<div className='about-section parcours'>
							<h2>{sections.parcours.title}</h2>
							{sections.parcours.content.map((paragraph, i) => (
								<p key={i}>{paragraph}</p>
							))}
						</div>
					)}

					{sections.method && (
						<div className='about-section method'>
							<h2>{sections.method.title}</h2>
							{sections.method.content.map((paragraph, i) => (
								<p key={i}>{paragraph}</p>
							))}
						</div>
					)}
					{sections.values && (
						<div className='about-section values'>
							<h2>{sections.values.title}</h2>
							{sections.values.content.map((paragraph, i) => (
								<p key={i}>{paragraph}</p>
							))}
						</div>
					)}
				</div>

				{/* 3ème ligne : Values + Autre section côte à côte */}
				<div className='about-section-pair'>
					{/* Si vous avez une 4ème section, sinon laissez un cadre vide ou supprimez cette partie */}
					{sections.autre && (
						<div className='about-section autre'>
							<h2>{sections.autre.title}</h2>
							{sections.autre.content.map((paragraph, i) => (
								<p key={i}>{paragraph}</p>
							))}
						</div>
					)}
				</div>

				{/* Skills pleine largeur */}
				{sections.skills && (
					<div className='about-section-full'>
						<div className='about-section skills'>
							<h2>{sections.skills.title}</h2>
							{sections.skills.content.map((paragraph, i) => (
								<p key={i}>{paragraph}</p>
							))}

							<div className='skills-container'>
								{skills.map((skill, index) => (
									<div key={index} className='skill'>
										<Image
											src={isDarkMode ? skillIcons[skill].light : skillIcons[skill].dark}
											alt={skill}
											width={32}
											height={32}
										/>
										<span className='skill-label'>{skill}</span>
									</div>
								))}
							</div>
						</div>
					</div>
				)}

				{/* CTA pleine largeur */}
				{sections.cta && (
					<div className='about-section-full'>
						<div className='about-section cta'>
							<h2>{sections.cta.title}</h2>
							{sections.cta.content.map((paragraph, i) => (
								<p key={i}>{paragraph}</p>
							))}
							<button>Me contacter</button>
						</div>
					</div>
				)}
			</div>
		</section>
	);
}
