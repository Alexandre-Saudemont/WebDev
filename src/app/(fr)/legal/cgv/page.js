import CgvFullPage from '@/components/Legal/CgvFullPage/CgvFullPage';

export const metadata = {
	title: 'Conditions générales de vente',
	description: 'Conditions générales de vente d’AS-WebDev.',
	alternates: {canonical: '/legal/cgv/'},
	robots: {index: false},
};

export default function CgvFull() {
	return (
		<div className='container'>
			<CgvFullPage />
		</div>
	);
}
