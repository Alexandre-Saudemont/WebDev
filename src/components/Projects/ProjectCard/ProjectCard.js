'use client';

import TechTags from '../TechTags/TechTags';
import './ProjectCard.css';

export default function ProjectCard({project, isVisible = false}) {
	return (
		<div className={`project-card ${isVisible ? 'visible' : ''}`}>
			<div className='project-image'>
				<div className='project-image-overlay'></div>
			</div>
			<div className='project-content'>
				<div className='project-badge'>Projet</div>
				<h3 className='project-title'>{project.title}</h3>
				<p className='project-description'>{project.description}</p>
				<TechTags tech={project.tech} />
			</div>
		</div>
	);
}
