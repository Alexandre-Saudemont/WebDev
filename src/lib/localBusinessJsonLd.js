// Données structurées schema.org : indiquent explicitement à Google
// qu'AS-WebDev est une entreprise de services basée à Reims.
// Condition d'éligibilité aux résultats locaux (bloc carte).
const localBusinessJsonLd = {
	'@context': 'https://schema.org',
	'@type': 'ProfessionalService',
	'@id': 'https://as-webdev.com/#business',
	name: 'AS-WebDev',
	description:
		'Développeur web freelance à Reims : création de sites vitrines, e-commerce et applications web sur mesure.',
	url: 'https://as-webdev.com',
	email: 'contact@as-webdev.com',
	image: 'https://as-webdev.com/img/og.png',
	priceRange: '€€',
	founder: {
		'@type': 'Person',
		name: 'Alexandre Saudemont',
		jobTitle: 'Développeur web freelance',
	},
	address: {
		'@type': 'PostalAddress',
		streetAddress: '7 Ter rue du Bastion',
		postalCode: '51100',
		addressLocality: 'Reims',
		addressRegion: 'Grand Est',
		addressCountry: 'FR',
	},
	// Ancrage local sans se fermer le reste du marché national
	areaServed: [
		{'@type': 'City', name: 'Reims'},
		{'@type': 'AdministrativeArea', name: 'Grand Est'},
		{'@type': 'Country', name: 'France'},
	],
	knowsLanguage: ['fr', 'en', 'zh'],
	sameAs: ['https://www.linkedin.com/in/alexandre-saudemont'],
};

export default localBusinessJsonLd;
