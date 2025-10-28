import {Inter} from 'next/font/google';
import './globals.css';
import I18nProvider from '@/components/I18nProvider';
import {ThemeProvider} from '@/contexts/ThemeContext';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

const inter = Inter({subsets: ['latin']});

export default function RootLayout({children}) {
	return (
		<html lang='fr'>
			<body className={inter.className}>
				<I18nProvider>
					<ThemeProvider>
						<Header />
						<main className='pt-20'>{children}</main>
						<Footer />
					</ThemeProvider>
				</I18nProvider>
			</body>
		</html>
	);
}
