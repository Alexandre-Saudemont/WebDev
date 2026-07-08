import AboutPage from '@/components/AboutPage/AboutPage';
import {pageMetadata} from '@/lib/pageMetadata';

export const metadata = pageMetadata('fr', 'about');

export default function About() {
	return <AboutPage />;
}
