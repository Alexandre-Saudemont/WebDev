'use client';

import TechTags from '../TechTags/TechTags';
import Image from 'next/image';
import './ProjectCard.css';

export default function ProjectCard({project, isVisible = false}) {
	return (
		<div className={`project-card ${isVisible ? 'visible' : ''}`}>
			<div className='project-image'>
				<Image src={project.image} alt={project.title} fill className='project-image-tag' />
				<div className='project-image-overlay'></div>
			</div>

			<div className='project-content'>
				<div className='project-badge'>Projet</div>
				<h3 className='project-title'>{project.title}</h3>
				<p className='project-description'>{project.description}</p>
				<TechTags tech={project.tech} />
				<a href={project.link} target='_blank' rel='noopener noreferrer' className='project-link'>
					Voir le projet
				</a>
			</div>
		</div>
	);
}
