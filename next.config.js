/** @type {import('next').NextConfig} */
const nextConfig = {
	/* config options here */
	experimental: {
		// appDir is now default in Next.js 13+
	},
	// i18n configuration is not supported in App Router
	// We use react-i18next instead
};

module.exports = nextConfig;

