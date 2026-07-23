import {manrope, jetbrainsMono} from '@/lib/fonts';
import {layoutMetadata} from '@/lib/pageMetadata';
import AppShell from '@/components/AppShell';
import localBusinessJsonLd from '@/lib/localBusinessJsonLd';

export const metadata = layoutMetadata('fr');

export default function RootLayout({children}) {
	return (
		<html lang='fr' className={`${manrope.variable} ${jetbrainsMono.variable}`}>
			<body>
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{__html: JSON.stringify(localBusinessJsonLd)}}
				/>
				<AppShell lang='fr'>{children}</AppShell>
			</body>
		</html>
	);
}
