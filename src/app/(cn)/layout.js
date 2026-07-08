import {manrope, jetbrainsMono} from '@/lib/fonts';
import {layoutMetadata} from '@/lib/pageMetadata';
import AppShell from '@/components/AppShell';

export const metadata = layoutMetadata('cn');

export default function RootLayout({children}) {
	return (
		<html lang='zh-CN' className={`${manrope.variable} ${jetbrainsMono.variable}`}>
			<body>
				<AppShell lang='cn'>{children}</AppShell>
			</body>
		</html>
	);
}
