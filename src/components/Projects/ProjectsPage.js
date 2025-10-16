'use client';

import React from 'react';
import {useTranslation} from 'react-i18next';
import './ProjectsPage.css';

export default function ProjectsPage() {
	const {t} = useTranslation();

	const projects = ['project1', 'project2', 'project3'];

	return (
		<section className='projects'>
			<div className='container'>
				<h2>{t('projectsPage.title')}</h2>
				<div className='project-grid'>
					{projects.map((key, index) => (
						<div key={index} className='project-card'>
							<div className='project-image'></div>
							<div className='project-content'>
								<h3 className='project-title'>{t(`projectsPage.${key}.title`)}</h3>
								<p>{t(`projectsPage.${key}.description`)}</p>
								<div className='project-tech'>
									{t(`projectsPage.${key}.tech`, {returnObjects: true}).map((tech, index) => (
										<span key={index} className='tech-tag'>
											{tech}
										</span>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
