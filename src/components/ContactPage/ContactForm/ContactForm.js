'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './ContactForm.css';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/myzbrkkl';

export default function ContactForm() {
  const { t } = useTranslation();
  const [status, setStatus] = useState('idle');
  const [formReady, setFormReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFormReady(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formReady) return;

    const formData = new FormData(e.target);
    if (formData.get('website')) return;

    setStatus('sending');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });
      if (response.ok) {
        setStatus('success');
        e.target.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="cf-form">
      <div className="cf-row">
        <label className="cf-label">
          {t('contact.form.fields.name')}
          <input
            className="cf-field"
            type="text"
            name="name"
            placeholder={t('contact.form.fields.namePlaceholder')}
            required
          />
        </label>
        <label className="cf-label">
          {t('contact.form.fields.email')}
          <input
            className="cf-field"
            type="email"
            name="email"
            placeholder={t('contact.form.fields.emailPlaceholder')}
            required
          />
        </label>
      </div>

      <label className="cf-label">
        {t('contact.form.fields.subject')}
        <input
          className="cf-field"
          type="text"
          name="subject"
          placeholder={t('contact.form.fields.subjectPlaceholder')}
        />
      </label>

      <label className="cf-label">
        {t('contact.form.fields.message')}
        <textarea
          className="cf-field cf-textarea"
          name="message"
          placeholder={t('contact.form.fields.messagePlaceholder')}
          rows={5}
          required
        />
      </label>

      {/* honeypot */}
      <input type="text" name="website" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

      <button
        type="submit"
        className="cf-submit"
        disabled={status === 'sending' || !formReady}
      >
        {status === 'sending' ? t('contact.form.submitting') : t('contact.form.submit')}
      </button>

      <p className="cf-privacy">
        {t('contact.form.securityIndicator')}
      </p>

      {status === 'success' && <p className="cf-success">{t('contact.form.success')}</p>}
      {status === 'error' && <p className="cf-error">{t('contact.form.error')}</p>}
    </form>
  );
}
