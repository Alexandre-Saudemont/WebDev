'use client';

import React from 'react';
import {useTranslation} from 'react-i18next';

export default function AboutSection() {
	const {t} = useTranslation();

	const skills = ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Python', 'MongoDB', 'PostgreSQL'];

	return (
		<section className='about'>
			<div className='container'>
				<h2>{t('about.title')}</h2>
				<p>{t('about.description')}</p>
				<div className='skills'>
					{skills.map((skill, index) => (
						<div key={index} className='skill'>
							{skill}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

