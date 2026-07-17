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

  const contactItems = [
    t('footer.contact.location'),
    t('footer.contact.availability'),
    t('footer.contact.response'),
  ];

  const legalLinks = [
    { href: '/legal/mentions-legales', label: t('footer.legalLinks.mentions') },
    { href: '/legal/mentions-legales#confidentialite', label: t('footer.legalLinks.privacy') },
    { href: '/legal/conditions-generales-vente', label: t('footer.legalLinks.cgv') },
  ];

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link href="/" className="footer-logo">
            <span className="footer-logo-badge">AS</span>
            AS-WebDev
          </Link>
          <p className="footer-tagline">{t('footer.tagline')}</p>
        </div>

        <div className="footer-nav-col">
          <h3 className="footer-col-title">{t('footer.sections.navigation')}</h3>
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="footer-nav-link">{l.label}</Link>
          ))}
        </div>

        <div className="footer-nav-col">
          <h3 className="footer-col-title">{t('footer.sections.contact')}</h3>
          <a href="mailto:contact@as-webdev.com" className="footer-nav-link">contact@as-webdev.com</a>
          {contactItems.map((item) => (
            <span key={item} className="footer-contact-item">{item}</span>
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
        <span>© {year} AS-WebDev — {t('footer.copyrights')}</span>
      </div>
    </footer>
  );
}
