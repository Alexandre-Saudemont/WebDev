/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		unoptimized: true,
	},

	trailingSlash: true,
	experimental: {
		optimizeCss: true,
	},
	output: 'export',
};

export default nextConfig;
