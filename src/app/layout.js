import { Manrope, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import I18nProvider from '@/components/I18nProvider';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import ScrollReveal from '@/components/ScrollReveal';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500', '600'],
  display: 'swap',
});

export const metadata = {
  title: 'Alexandre Saudemont — Développeur web freelance',
  description: 'Je conçois des sites web et applications modernes, rapides et performants pour entreprises, startups et indépendants.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${manrope.variable} ${jetbrainsMono.variable}`}>
      <body>
        <I18nProvider>
          <div className="aurora-bg" aria-hidden="true">
            <div className="aurora-1" />
            <div className="aurora-2" />
            <div className="aurora-3" />
            <div className="aurora-4" />
          </div>
          <div className="grain-overlay" aria-hidden="true" />
          <ScrollReveal />
          <div className="page-wrapper">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </I18nProvider>
      </body>
    </html>
  );
}
