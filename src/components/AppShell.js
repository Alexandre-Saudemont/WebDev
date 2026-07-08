import '@/app/globals.css';
import I18nProvider from '@/components/I18nProvider';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import ScrollReveal from '@/components/ScrollReveal';

export default function AppShell({lang, children}) {
	return (
		<I18nProvider lang={lang}>
			<div className='aurora-bg' aria-hidden='true'>
				<div className='aurora-1' />
				<div className='aurora-2' />
				<div className='aurora-3' />
				<div className='aurora-4' />
			</div>
			<div className='grain-overlay' aria-hidden='true' />
			<ScrollReveal />
			<div className='page-wrapper'>
				<Header />
				<main>{children}</main>
				<Footer />
			</div>
		</I18nProvider>
	);
}
