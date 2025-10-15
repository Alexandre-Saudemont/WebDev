'use client';

import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import {useTranslation} from 'react-i18next';
import {useTheme} from '@/contexts/ThemeContext';
import {Moon, Sun} from 'lucide-react';

export default function Header() {
	const {t} = useTranslation();
	const {isDarkMode, toggleDarkMode} = useTheme();
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const navItems = [
		{href: '/', label: t('navigation.home')},
		{href: '/about', label: t('navigation.about')},
		{href: '/services', label: t('navigation.services')},
		{href: '/projects', label: t('navigation.projects')},
		{href: '/contact', label: t('navigation.contact')},
	];

	return (
		<header className={`header ${isScrolled ? 'scrolled' : ''}`}>
			<nav className='container'>
				<div className='logo'>AS</div>
				<ul className='nav-links'>
					{navItems.map((item) => (
						<li key={item.href}>
							<Link href={item.href}>{item.label}</Link>
						</li>
					))}
				</ul>
				<div className='header-controls'>
					<LanguageSelector />
					<button onClick={toggleDarkMode} className='theme-toggle'>
						{isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
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

	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
	};

	return (
		<div className='language-selector'>
			{languages.map((lang) => (
				<button
					key={lang.code}
					onClick={() => changeLanguage(lang.code)}
					className={`lang-btn ${i18n.language === lang.code ? 'active' : ''}`}>
					{lang.name}
				</button>
			))}
		</div>
	);
}
