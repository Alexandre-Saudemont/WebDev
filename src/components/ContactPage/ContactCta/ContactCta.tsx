'use client';

import { useTranslation } from 'react-i18next';
import './ContactCta.css';

export default function ContactCta() {
	const { t } = useTranslation();

	// Génération du lien mailto dynamique
	const mailSubject = encodeURIComponent(t('contact.cta.emailTemplate.subject'));
	const mailBody = encodeURIComponent(t('contact.cta.emailTemplate.body'));
	const mailTo = `mailto:contact@as-webdev.com?subject=${mailSubject}&body=${mailBody}`;

	return (
		<div className="contact-cta">
			<h4>{t('contact.cta.title')}</h4>
			<p>{t('contact.cta.description')}</p>
			<a href={mailTo} className="cta-btn">
				<span>{t('contact.cta.email')}</span>
			</a>
		</div>
	);
}

