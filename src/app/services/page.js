import ServicesPage from '@/components/ServicesPage/ServicesPage';

export const metadata = {
	title: 'Services & tarifs',
	description:
		'Création de sites vitrines, e-commerce et applications web sur mesure. Tarifs transparents, maintenance et hébergement en France inclus.',
	alternates: { canonical: '/services/' },
};

export default function Services() {
	return (
		<div>
			<ServicesPage />
		</div>
	);
}

