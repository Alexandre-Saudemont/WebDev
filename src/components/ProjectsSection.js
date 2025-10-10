'use client';

import React from 'react';
import {useTranslation} from 'react-i18next';

export default function ProjectsSection() {
	const {t} = useTranslation();

	const projects = [
		{
			title: t('projects.project1.title'),
			description: t('projects.project1.description'),
			tech: ['React', 'Node.js', 'MongoDB'],
		},
		{
			title: t('projects.project2.title'),
			description: t('projects.project2.description'),
			tech: ['Next.js', 'TypeScript', 'Tailwind'],
		},
		{
			title: t('projects.project3.title'),
			description: t('projects.project3.description'),
			tech: ['Vue.js', 'Express', 'PostgreSQL'],
		},
	];

	return (
		<section className='projects'>
			<div className='container'>
				<h2>{t('projects.title')}</h2>
				<div className='project-grid'>
					{projects.map((project, index) => (
						<div key={index} className='project-card'>
							<div className='project-image'></div>
							<div className='project-content'>
								<h3 className='project-title'>{project.title}</h3>
								<p>{project.description}</p>
								<div className='project-tech'>
									{project.tech.map((tech, i) => (
										<span key={i} className='tech-tag'>
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

