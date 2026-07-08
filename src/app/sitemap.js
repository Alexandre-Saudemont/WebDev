export const dynamic = 'force-static';

const BASE_URL = 'https://as-webdev.com';

const ROUTES = [
	{path: '/', priority: 1},
	{path: '/services/', priority: 0.9},
	{path: '/contact/', priority: 0.9},
	{path: '/projects/', priority: 0.8},
	{path: '/about/', priority: 0.7},
];

const LANG_PREFIXES = {fr: '', en: '/en', 'zh-CN': '/cn'};

export default function sitemap() {
	return ROUTES.flatMap(({path, priority}) =>
		Object.entries(LANG_PREFIXES).map(([hreflang, prefix]) => ({
			url: `${BASE_URL}${prefix}${path}`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: hreflang === 'fr' ? priority : priority - 0.1,
			alternates: {
				languages: Object.fromEntries(
					Object.entries(LANG_PREFIXES).map(([hl, p]) => [hl, `${BASE_URL}${p}${path}`]),
				),
			},
		})),
	);
}
