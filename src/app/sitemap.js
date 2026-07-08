export const dynamic = 'force-static';

const BASE_URL = 'https://as-webdev.com';

export default function sitemap() {
	const routes = [
		{path: '/', priority: 1},
		{path: '/services/', priority: 0.9},
		{path: '/projects/', priority: 0.8},
		{path: '/about/', priority: 0.7},
		{path: '/contact/', priority: 0.9},
	];

	return routes.map(({path, priority}) => ({
		url: `${BASE_URL}${path}`,
		lastModified: new Date(),
		changeFrequency: 'monthly',
		priority,
	}));
}
