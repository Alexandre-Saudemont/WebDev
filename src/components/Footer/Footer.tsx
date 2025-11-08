'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { Github, Linkedin, Mail, MapPin, Clock } from 'lucide-react';
import './Footer.css';

export default function Footer() {
	const { t } = useTranslation();
	const currentYear = new Date().getFullYear();
	
	const socialLinks = [
		{
			href: 'https://github.com/alexandre-saudemont',
			icon: <Github size={20} />,
			label: 'GitHub',
		},
		{
			href: 'https://www.linkedin.com/in/alexandre-saudemont-535481239/',
			icon: <Linkedin size={20} />,
			label: 'LinkedIn',
		},
		{
			href: 'mailto:alexandre.saudemont.pro@gmail.com',
			icon: <Mail size={20} />,
			label: 'Email',
		},
	];

	const navItems = [
		{ href: '/', label: t('navigation.home') },
		{ href: '/about', label: t('navigation.about') },
		{ href: '/services', label: t('navigation.services') },
		{ href: '/projects', label: t('navigation.projects') },
		{ href: '/contact', label: t('navigation.contact') },
	];

	const legalLinks = [
		{ href: '/legal/mentions-legales', label: t('legal.title') },
		{ href: '/legal/conditions-generales-vente', label: t('legal.subtitle') },
	];

	return (
		<footer className="footer">
			<div className="footer-content">
				<div className="footer-section footer-brand">
					<Link href="/" className="footer-logo">
						<span className="footer-logo-text">AS</span>
						<span className="footer-logo-subtitle">WebDev</span>
					</Link>
					<p className="footer-tagline">
						{t('homePage.subtitle')}
					</p>
					<div className="footer-social">
						{socialLinks.map((social) => (
							<a
								key={social.label}
								href={social.href}
								target={social.href.startsWith('mailto:') ? undefined : '_blank'}
								rel={social.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
								className="social-link"
								aria-label={social.label}>
								{social.icon}
							</a>
						))}
					</div>
				</div>

				<div className="footer-section footer-nav">
					<h3 className="footer-section-title">{t('footer.sections.navigation')}</h3>
					<nav className="footer-nav-links">
						{navItems.map((item) => (
							<Link key={item.href} href={item.href} className="footer-nav-link">
								{item.label}
							</Link>
						))}
					</nav>
				</div>

				<div className="footer-section footer-info">
					<h3 className="footer-section-title">{t('footer.sections.information')}</h3>
					<div className="footer-info-list">
						<div className="footer-info-item">
							<MapPin size={16} />
							<span>{t('contact.info.location.value')}</span>
						</div>
						<div className="footer-info-item">
							<Clock size={16} />
							<span>{t('contact.info.availability.value')}</span>
						</div>
					</div>
				</div>

				<div className="footer-section footer-legal">
					<h3 className="footer-section-title">{t('footer.sections.legal')}</h3>
					<nav className="footer-legal-links">
						{legalLinks.map((link) => (
							<Link key={link.href} href={link.href} className="footer-legal-link">
								{link.label}
							</Link>
						))}
					</nav>
				</div>
			</div>

			<div className="footer-bottom">
				<div className="footer-bottom-content">
					<p className="footer-copyright">
						© {currentYear} AS-WebDev. {t('footer.copyrights')}
					</p>
					<p className="footer-made-with">{t('footer.madeWith')}</p>
				</div>
			</div>
		</footer>
	);
}

