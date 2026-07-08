import CgvPage from '@/components/Legal/CgvPage/CgvPage';

export const metadata = {
	title: 'Conditions générales de vente',
	description: 'Conditions générales de vente d’AS-WebDev.',
	alternates: {canonical: '/legal/conditions-generales-vente/'},
	robots: {index: false},
};

export default function CGV() {
	return (
		<div>
			<CgvPage />
		</div>
	);
}

