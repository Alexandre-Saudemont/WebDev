'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import './Header.css';

export default function Header() {
  const { t, i18n } = useTranslation();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: '/', label: t('navigation.home') },
    { href: '/services', label: t('navigation.services') },
    { href: '/projects', label: t('navigation.projects') },
    { href: '/about', label: t('navigation.about') },
  ];

  const isActive = (href) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-inner">
        <Link href="/" className="header-logo">
          <span className="logo-badge">AS</span>
          AS-WebDev
        </Link>

        <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${isActive(link.href) ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="nav-cta">
            {t('navigation.contact')}
          </Link>
        </nav>

        <div className="header-right">
          <LanguageSelector i18n={i18n} />
          <button
            className="burger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            <span className={`burger-line ${menuOpen ? 'open' : ''}`} />
            <span className={`burger-line ${menuOpen ? 'open' : ''}`} />
            <span className={`burger-line ${menuOpen ? 'open' : ''}`} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`mobile-link ${isActive(link.href) ? 'active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="mobile-cta" onClick={() => setMenuOpen(false)}>
            {t('navigation.contact')}
          </Link>
        </div>
      )}
    </header>
  );
}

function LanguageSelector({ i18n }) {
  const langs = ['fr', 'en', 'cn'];
  return (
    <div className="lang-selector">
      {langs.map((l) => (
        <button
          key={l}
          onClick={() => i18n.changeLanguage(l)}
          className={`lang-btn ${i18n.language === l ? 'active' : ''}`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
