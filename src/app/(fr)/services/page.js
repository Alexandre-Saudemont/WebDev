import ServicesPage from '@/components/ServicesPage/ServicesPage';
import {pageMetadata} from '@/lib/pageMetadata';

export const metadata = pageMetadata('fr', 'services');

export default function Services() {
	return <ServicesPage />;
}
