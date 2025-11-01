/** @type {import('next').NextConfig} */
const nextConfig = {
	/* config options here */
	turbopack: {
		enabled: false,
	},
};
// i18n configuration is not supported in App Router
// We use react-i18next instead

module.exports = nextConfig;
