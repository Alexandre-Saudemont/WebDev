'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import type { FormStatus } from '../types';
import './ContactForm.css';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/myzbrkkl';

export default function ContactForm() {
	const { t } = useTranslation();
	const [status, setStatus] = useState<FormStatus>('idle');
	const [formReady, setFormReady] = useState(false);

	// Anti-bot delay
	useEffect(() => {
		const timer = setTimeout(() => setFormReady(true), 2000);
		return () => clearTimeout(timer);
	}, []);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!formReady) return;

		const formData = new FormData(e.target as HTMLFormElement);

		// Honeypot check
		if (formData.get('website')) {
			console.warn('Spam détecté — champ honeypot rempli.');
			return;
		}

		setStatus('sending');

		try {
			const response = await fetch(FORMSPREE_ENDPOINT, {
				method: 'POST',
				body: formData,
				headers: { Accept: 'application/json' },
			});

			if (response.ok) {
				setStatus('success');
				(e.target as HTMLFormElement).reset();
			} else {
				setStatus('error');
			}
		} catch (error) {
			setStatus('error');
		}
	};

	return (
		<form onSubmit={handleSubmit} className="contact-form">
			<h3>{t('contact.form.title')}</h3>
			<p className="form-description">{t('contact.form.description')}</p>

			<label>
				{t('contact.form.fields.name')}
				<input type="text" name="name" placeholder={t('contact.form.fields.namePlaceholder')} required />
			</label>

			<label>
				{t('contact.form.fields.email')}
				<input type="email" name="email" placeholder={t('contact.form.fields.emailPlaceholder')} required />
			</label>

			<label>
				{t('contact.form.fields.subject')}
				<input type="text" name="subject" placeholder={t('contact.form.fields.subjectPlaceholder')} />
			</label>

			<label>
				{t('contact.form.fields.message')}
				<textarea name="message" placeholder={t('contact.form.fields.messagePlaceholder')} rows={5} required />
			</label>

			{/* 🕵️‍♂️ Honeypot (champ invisible) */}
			<input type="text" name="website" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

			<button type="submit" className="contact-submit-btn" disabled={status === 'sending' || !formReady}>
				{status === 'sending' ? t('contact.form.submitting') : t('contact.form.submit')}
			</button>

			{status === 'success' && <p className="form-success">{t('contact.form.success')}</p>}
			{status === 'error' && <p className="form-error">{t('contact.form.error')}</p>}
		</form>
	);
}

