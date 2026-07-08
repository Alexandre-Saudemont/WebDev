import {manrope, jetbrainsMono} from '@/lib/fonts';
import {layoutMetadata} from '@/lib/pageMetadata';
import AppShell from '@/components/AppShell';

export const metadata = layoutMetadata('fr');

export default function RootLayout({children}) {
	return (
		<html lang='fr' className={`${manrope.variable} ${jetbrainsMono.variable}`}>
			<body>
				<AppShell lang='fr'>{children}</AppShell>
			</body>
		</html>
	);
}
