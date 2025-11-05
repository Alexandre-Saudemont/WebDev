'use client';
import React, {useState, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {Mail, Globe, MapPin, Clock, Send} from 'lucide-react';
import './ContactPage.css';

const Contact = () => {
	const {t} = useTranslation();
	const [status, setStatus] = useState('idle');
	const [formReady, setFormReady] = useState(false);

	// Anti-bot delay
	useEffect(() => {
		const timer = setTimeout(() => setFormReady(true), 2000);
		return () => clearTimeout(timer);
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!formReady) return;

		const formData = new FormData(e.target);

		// Honeypot check
		if (formData.get('website')) {
			console.warn('Spam détecté — champ honeypot rempli.');
			return;
		}

		setStatus('sending');

		try {
			const response = await fetch('https://formspree.io/f/myzbrkkl', {
				method: 'POST',
				body: formData,
				headers: {Accept: 'application/json'},
			});

			if (response.ok) {
				setStatus('success');
				e.target.reset();
			} else {
				setStatus('error');
			}
		} catch (error) {
			setStatus('error');
		}
	};

	// Génération du lien mailto dynamique
	const mailSubject = encodeURIComponent(t('contact.cta.emailTemplate.subject'));
	const mailBody = encodeURIComponent(t('contact.cta.emailTemplate.body'));
	const mailTo = `mailto:contact@as-webdev.com?subject=${mailSubject}&body=${mailBody}`;

	return (
		<section className='contact-section'>
			<div className='contact-container'>
				<h2 className='contact-title'>{t('contact.title')}</h2>
				<p className='contact-subtitle'>{t('contact.subtitle')}</p>

				<div className='contact-content'>
					{/* --- FORMULAIRE --- */}
					<form onSubmit={handleSubmit} className='contact-form'>
						<h3>{t('contact.form.title')}</h3>
						<p className='form-description'>{t('contact.form.description')}</p>

						<label>
							{t('contact.form.fields.name')}
							<input type='text' name='name' placeholder={t('contact.form.fields.namePlaceholder')} required />
						</label>

						<label>
							{t('contact.form.fields.email')}
							<input type='email' name='email' placeholder={t('contact.form.fields.emailPlaceholder')} required />
						</label>

						<label>
							{t('contact.form.fields.subject')}
							<input type='text' name='subject' placeholder={t('contact.form.fields.subjectPlaceholder')} />
						</label>

						<label>
							{t('contact.form.fields.message')}
							<textarea name='message' placeholder={t('contact.form.fields.messagePlaceholder')} rows='5' required />
						</label>

						{/* 🕵️‍♂️ Honeypot (champ invisible) */}
						<input type='text' name='website' style={{display: 'none'}} tabIndex='-1' autoComplete='off' />

						<button type='submit' className='contact-submit-btn' disabled={status === 'sending' || !formReady}>
							{status === 'sending' ? t('contact.form.submitting') : t('contact.form.submit')}
						</button>

						{status === 'success' && <p className='form-success'>{t('contact.form.success')}</p>}
						{status === 'error' && <p className='form-error'>{t('contact.form.error')}</p>}
					</form>

					{/* --- INFORMATIONS --- */}
					<div className='contact-info'>
						<h3>{t('contact.info.title')}</h3>
						<p>{t('contact.info.description')}</p>

						<ul>
							<li>
								<Mail className='contact-icon' />
								<span>
									<strong>{t('contact.info.email.title')} :</strong> contact@alexandre-saudemont.fr
								</span>
							</li>
							<li>
								<Globe className='contact-icon' />
								<span>
									<strong>{t('contact.info.website.title')} :</strong> portfolio.alexandre-saudemont.fr
								</span>
							</li>
							<li>
								<MapPin className='contact-icon' />
								<span>
									<strong>{t('contact.info.location.title')} :</strong> {t('contact.info.location.value')}
								</span>
							</li>
							<li>
								<Clock className='contact-icon' />
								<span>
									<strong>{t('contact.info.availability.title')} :</strong> {t('contact.info.availability.value')}
								</span>
							</li>
						</ul>

						{/* --- CTA CONTACT DIRECT --- */}
						<div className='contact-cta'>
							<h4>{t('contact.cta.title')}</h4>
							<p>{t('contact.cta.description')}</p>
							<a href={mailTo} className='cta-btn'>
								<span>{t('contact.cta.email')}</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
