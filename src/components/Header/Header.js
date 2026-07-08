'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import Link, { useLang, localePath } from '@/components/LocaleLink';
import './Header.css';

export default function Header() {
  const { t } = useTranslation();
  const pathname = usePathname();
  const lang = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  // Fermer le menu au changement de route, ajusté pendant le rendu
  // plutôt qu'en effet pour éviter un cycle de rendu supplémentaire
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMenuOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: '/', label: t('navigation.home') },
    { href: '/services', label: t('navigation.services') },
    { href: '/projects', label: t('navigation.projects') },
    { href: '/about', label: t('navigation.about') },
  ];

  const isActive = (href) => {
    const localized = localePath(lang, href);
    return href === '/' ? pathname === localized : pathname.startsWith(localized);
  };

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
          <LanguageSelector lang={lang} pathname={pathname} />
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

function LanguageSelector({ lang, pathname }) {
  const langs = ['fr', 'en', 'cn'];

  // Chemin équivalent dans une autre langue : on retire le préfixe actuel
  // puis on applique celui de la langue cible (les pages fr-only retombent sur l'accueil)
  const switchPath = (target) => {
    let base = pathname;
    if (lang !== 'fr') {
      base = pathname.replace(`/${lang}`, '') || '/';
    }
    if (target !== 'fr' && (base.startsWith('/legal') || base.startsWith('/profil'))) {
      base = '/';
    }
    return localePath(target, base);
  };

  return (
    <div className="lang-selector">
      {langs.map((l) => (
        <a key={l} href={switchPath(l)} className={`lang-btn ${lang === l ? 'active' : ''}`}>
          {l.toUpperCase()}
        </a>
      ))}
    </div>
  );
}
