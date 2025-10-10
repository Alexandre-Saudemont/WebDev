import {Inter} from 'next/font/google';
import './globals.css';
import I18nProvider from '@/components/I18nProvider';
import {ThemeProvider} from '@/contexts/ThemeContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({subsets: ['latin']});

export const metadata = {
	title: 'Alexandre Saudemont - Full Stack Developer',
	description: 'Développeur full-stack passionné par les belles expériences numériques',
};

export default function RootLayout({children}) {
	return (
		<html lang='en'>
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
