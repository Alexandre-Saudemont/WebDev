import localFont from 'next/font/local';

// Polices hébergées dans le dépôt plutôt que via next/font/google : le build
// ne dépend plus d'un téléchargement chez Google, qui échouait de façon
// aléatoire sur le serveur Coolify. Fichiers variables, sous-ensemble latin
// (accents, œ, €), sous licence SIL Open Font License.

export const manrope = localFont({
	src: '../assets/fonts/manrope-latin-variable.woff2',
	weight: '300 800',
	style: 'normal',
	variable: '--font-manrope',
	display: 'swap',
});

export const jetbrainsMono = localFont({
	src: '../assets/fonts/jetbrains-mono-latin-variable.woff2',
	weight: '400 600',
	style: 'normal',
	variable: '--font-mono',
	display: 'swap',
});
