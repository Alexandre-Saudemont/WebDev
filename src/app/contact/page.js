import ContactPage from '@/components/ContactPage/ContactPage';

export const metadata = {
	title: 'Contact',
	description: 'Un projet de site web ou d’application ? Parlons-en. Devis gratuit et réponse rapide.',
	alternates: {canonical: '/contact/'},
};

export default function Contact() {
	return (
		<div>
			<ContactPage />
		</div>
	);
}

