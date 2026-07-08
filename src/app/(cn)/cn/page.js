import Hero from '@/components/Hero/Hero';
import {pageMetadata} from '@/lib/pageMetadata';

export const metadata = pageMetadata('cn', 'home');

export default function Home() {
	return <Hero />;
}
