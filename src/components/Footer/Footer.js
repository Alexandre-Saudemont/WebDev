'use client';

import Link from '@/components/LocaleLink';
import { useTranslation } from 'react-i18next';
import './Footer.css';

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  const navLinks = [
    { href: '/', label: t('navigation.home') },
    { href: '/services', label: t('navigation.services') },
    { href: '/projects', label: t('navigation.projects') },
    { href: '/about', label: t('navigation.about') },
    { href: '/contact', label: t('navigation.contact') },
  ];

  const legalLinks = [
    { href: '/legal/mentions-legales', label: t('legal.title') },
    { href: '/legal/conditions-generales-vente', label: t('legal.subtitle') },
  ];

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link href="/" className="footer-logo">
            <span className="footer-logo-badge">AS</span>
            Alexandre Saudemont
          </Link>
          <p className="footer-tagline">{t('homePage.subtitle')}</p>
          <div className="footer-socials">
            <a href="https://github.com/alexandre-saudemont" target="_blank" rel="noopener noreferrer" className="footer-social-link">GitHub</a>
            <a href="https://www.linkedin.com/in/alexandre-saudemont-535481239/" target="_blank" rel="noopener noreferrer" className="footer-social-link">LinkedIn</a>
            <a href="mailto:contact@as-webdev.com" className="footer-social-link">Email</a>
          </div>
        </div>

        <div className="footer-nav-col">
          <h3 className="footer-col-title">{t('footer.sections.navigation')}</h3>
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="footer-nav-link">{l.label}</Link>
          ))}
        </div>

        <div className="footer-nav-col">
          <h3 className="footer-col-title">{t('footer.sections.legal')}</h3>
          {legalLinks.map((l) => (
            <Link key={l.href} href={l.href} className="footer-nav-link">{l.label}</Link>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {year} Alexandre Saudemont. {t('footer.copyrights')}</span>
        <span className="footer-made" style={{ fontFamily: 'var(--font-mono, monospace)' }}>
          {t('footer.madeWith')}
        </span>
      </div>
    </footer>
  );
}
