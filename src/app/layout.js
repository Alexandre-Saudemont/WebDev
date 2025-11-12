import {Inter} from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import I18nProvider from '@/components/I18nProvider';
import {ThemeProvider} from '@/contexts/ThemeContext';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import {themeScript} from './theme-script';

const inter = Inter({subsets: ['latin']});

export const metadata = {
	title: 'AS-WebDev',
	description: 'Bienvenue sur mon site',
};

export default function RootLayout({children}) {
	return (
		<html lang='fr'>
			<body className={inter.className}>
				<Script id='theme-script' strategy='beforeInteractive' dangerouslySetInnerHTML={{__html: themeScript}} />
				<I18nProvider>
					<ThemeProvider>
						<Header />
						<main>{children}</main>
						<Footer />
					</ThemeProvider>
				</I18nProvider>
			</body>
		</html>
	);
}
