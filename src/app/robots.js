export const dynamic = 'force-static';

export default function robots() {
	return {
		rules: {
			userAgent: '*',
			allow: '/',
			disallow: ['/profil/', '/legal/'],
		},
		sitemap: 'https://as-webdev.com/sitemap.xml',
	};
}
