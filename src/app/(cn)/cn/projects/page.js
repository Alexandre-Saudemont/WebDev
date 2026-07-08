import ProjectsPage from '@/components/Projects/ProjectsPage';
import {pageMetadata} from '@/lib/pageMetadata';

export const metadata = pageMetadata('cn', 'projects');

export default function Projects() {
	return <ProjectsPage />;
}
