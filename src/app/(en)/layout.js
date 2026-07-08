import {manrope, jetbrainsMono} from '@/lib/fonts';
import {layoutMetadata} from '@/lib/pageMetadata';
import AppShell from '@/components/AppShell';

export const metadata = layoutMetadata('en');

export default function RootLayout({children}) {
	return (
		<html lang='en' className={`${manrope.variable} ${jetbrainsMono.variable}`}>
			<body>
				<AppShell lang='en'>{children}</AppShell>
			</body>
		</html>
	);
}
