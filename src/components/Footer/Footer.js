'use client';

import React from 'react';
import Link from 'next/link';
import {useTranslation} from 'react-i18next';
import {Github, Linkedin, Mail} from 'lucide-react';
import './Footer.css';

export default function Footer() {
	const {t} = useTranslation();
	const currentYear = new Date().getFullYear();
	const socialLinks = [
		{
			href: 'https://github.com/alexandre-saudemont',
			icon: <Github size={20} />,
			label: 'GitHub',
		},
		{
			href: 'https://linkedin.com/in/alexandre-saudemont',
			icon: <Linkedin size={20} />,
			label: 'LinkedIn',
		},
		{
			href: 'mailto:contact@alexandre-saudemont.fr',
			icon: <Mail size={20} />,
			label: 'Email',
		},
	];

	return (
		<footer>
			<div className='container'>
				<div className='social-links'>
					{socialLinks.map((social) => (
						<a key={social.label} href={social.href} target='_blank' rel='noopener noreferrer' aria-label={social.label}>
							{social.icon}
						</a>
					))}
				</div>
				<p>
					© {currentYear} AS-WebDev. {t('footer.copyrights')}
				</p>
				{t('footer.madeWith')}
			</div>
			<div className='footer-legal-container'>
				<Link href='/legal/mentions-legales' className='footer-legal'>
					{t('legal.title')}
				</Link>
				<Link href='/legal/conditions-generales-vente' className='footer-legal'>
					{t('legal.subtitle')}
				</Link>
			</div>
		</footer>
	);
}
