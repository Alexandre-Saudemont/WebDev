'use client';

import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import ProjectsHeader from './ProjectsHeader/ProjectsHeader';
import ProjectsGrid from './ProjectsGrid/ProjectsGrid';
import ProjectsCta from './ProjectsCta/ProjectsCta';
import type { ProjectItem } from './types';
import './ProjectsPage.css';

export default function ProjectsPage() {
	const { t } = useTranslation();

	const projects = useMemo(() => {
		try {
			const projectKeys = ['project1', 'project2', 'project3'];
			const projectsList: ProjectItem[] = [];

			projectKeys.forEach((key) => {
				const title = t(`projectsPage.${key}.title`);
				const description = t(`projectsPage.${key}.description`);
				const techArray = t(`projectsPage.${key}.tech`, { returnObjects: true });
				const techList = Array.isArray(techArray) ? techArray : [];

				if (title && description) {
					projectsList.push({
						title: String(title),
						description: String(description),
						tech: techList.map((item) => String(item)),
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
		<div className="projects-page">
			<ProjectsHeader />
			<ProjectsGrid projects={projects} />
			<ProjectsCta />
		</div>
	);
}

