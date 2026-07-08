import ProjectsPage from '@/components/Projects/ProjectsPage';

export const metadata = {
	title: 'Projets',
	description: 'Sélection de projets web réalisés : sites vitrines, e-commerce et applications sur mesure.',
	alternates: {canonical: '/projects/'},
};

export default function Projects() {
	return (
		<div>
			<ProjectsPage />
		</div>
	);
}

