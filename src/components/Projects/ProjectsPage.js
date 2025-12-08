'use client';

import {useMemo} from 'react';
import {useTranslation} from 'react-i18next';
import ProjectsHeader from './ProjectsHeader/ProjectsHeader';
import ProjectsGrid from './ProjectsGrid/ProjectsGrid';
import ProjectsCta from './ProjectsCta/ProjectsCta';
import './ProjectsPage.css';

export default function ProjectsPage() {
	const {t} = useTranslation();

	const projects = useMemo(() => {
		try {
			const projectKeys = ['project1', 'project2', 'project3'];
			const projectsList = [];

			const projectImages = ['/img/projects/pokedeck.webp', '/img/projects/taiwan.webp', '/img/projects/hsk.webp'];
			projectKeys.forEach((key, index) => {
				const title = t(`projectsPage.${key}.title`);
				const description = t(`projectsPage.${key}.description`);
				const techArray = t(`projectsPage.${key}.tech`, {returnObjects: true});
				const techList = Array.isArray(techArray) ? techArray : [];
				const projectLinks = t(`projectsPage.${key}.link`);

				if (title && description) {
					projectsList.push({
						title: title,
						description: description,
						tech: techList.map((item) => String(item)),
						image: projectImages[index],
						link: projectLinks,
					});
				}
			});

			return projectsList;
		} catch (error) {
			console.error('Erreur i18n:', error);
			return [];
		}
	}, [t]);

	return (
		<div className='projects-page'>
			<ProjectsHeader />
			<ProjectsGrid projects={projects} />
			<ProjectsCta />
		</div>
	);
}
