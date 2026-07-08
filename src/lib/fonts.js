import {Manrope, JetBrains_Mono} from 'next/font/google';

export const manrope = Manrope({
	subsets: ['latin'],
	variable: '--font-manrope',
	weight: ['300', '400', '500', '600', '700', '800'],
	display: 'swap',
});

export const jetbrainsMono = JetBrains_Mono({
	subsets: ['latin'],
	variable: '--font-mono',
	weight: ['400', '500', '600'],
	display: 'swap',
});
