import ProjectsPage from '@/components/Projects/ProjectsPage';
import {pageMetadata} from '@/lib/pageMetadata';

export const metadata = pageMetadata('fr', 'projects');

export default function Projects() {
	return <ProjectsPage />;
}
