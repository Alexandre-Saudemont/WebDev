'use client';

import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {useTranslation} from 'react-i18next';
import {useTheme} from '@/contexts/ThemeContext';
import {Moon, Sun, Menu, X} from 'lucide-react';
import './Header.css';

export default function Header() {
	const {t} = useTranslation();
	const {isDarkMode, toggleTheme} = useTheme();
	const pathname = usePathname();
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	// Scroll detection
	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 50);
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// Fermer le menu mobile lors du changement de page sans trigger de warning
	useEffect(() => {
		const rafId = requestAnimationFrame(() => setIsMobileMenuOpen(false));
		return () => cancelAnimationFrame(rafId);
	}, [pathname]);

	const navItems = [
		{href: '/', label: t('navigation.home')},
		{href: '/about', label: t('navigation.about')},
		{href: '/services', label: t('navigation.services')},
		{href: '/projects', label: t('navigation.projects')},
		{href: '/contact', label: t('navigation.contact')},
	];

	return (
		<header className={`header ${isScrolled ? 'scrolled' : ''} ${isMobileMenuOpen ? 'menu-open' : ''}`}>
			<nav className='header-container'>
				<Link href='/' className='logo'>
					<span className='logo-text'>AS</span>
					<span className='logo-subtitle'>WebDev</span>
				</Link>

				<ul className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
					{navItems.map((item) => {
						const isActive = pathname === item.href;
						return (
							<li key={item.href}>
								<Link href={item.href} className={isActive ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>
									{item.label}
								</Link>
							</li>
						);
					})}
				</ul>

				<div className='header-controls'>
					<LanguageSelector />
					<button onClick={toggleTheme} className='theme-toggle' aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}>
						{isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
					</button>
					<button
						className='mobile-menu-toggle'
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}>
						{isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>
			</nav>
		</header>
	);
}

function LanguageSelector() {
	const {i18n} = useTranslation();
	const languages = [
		{code: 'fr', name: 'FR'},
		{code: 'en', name: 'EN'},
		{code: 'cn', name: 'CN'},
	];

	const changeLanguage = (lng) => i18n.changeLanguage(lng);

	return (
		<div className='language-selector'>
			{languages.map((lang) => (
				<button
					key={lang.code}
					onClick={() => changeLanguage(lang.code)}
					className={`lang-btn ${i18n.language === lang.code ? 'active' : ''}`}
					aria-label={`Switch to ${lang.name}`}>
					{lang.name}
				</button>
			))}
		</div>
	);
}
