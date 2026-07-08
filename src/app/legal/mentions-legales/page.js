import MentionsPage from '@/components/Legal/MentionsPage/MentionsPage';

export const metadata = {
	title: 'Mentions légales',
	description: 'Mentions légales du site AS-WebDev.',
	alternates: {canonical: '/legal/mentions-legales/'},
	robots: {index: false},
};

export default function Mentions() {
	return (
		<div>
			<MentionsPage />
		</div>
	);
}

