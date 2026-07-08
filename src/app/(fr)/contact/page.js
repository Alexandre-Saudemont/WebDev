import ContactPage from '@/components/ContactPage/ContactPage';
import {pageMetadata} from '@/lib/pageMetadata';

export const metadata = pageMetadata('fr', 'contact');

export default function Contact() {
	return <ContactPage />;
}
