'use client';

import { useState, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Link from '@/components/LocaleLink';
import '@/components/ContactPage/ContactForm/ContactForm.css';
import './HomeContactForm.css';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/myzbrkkl';

export default function HomeContactForm() {
  const { t } = useTranslation();
  const [status, setStatus] = useState('idle');
  const [formReady, setFormReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFormReady(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const projectTypes = useMemo(() => {
    const data = t('contact.form.qualify.projectTypeOptions', { returnObjects: true });
    return Array.isArray(data) ? data : [];
  }, [t]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formReady) return;

    const formData = new FormData(e.target);
    if (formData.get('website')) return;
    formData.append('origine', 'Formulaire accueil');

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

  if (status === 'success') {
    return <p className="hcf-success">{t('contact.form.success')}</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="cf-form hcf-form">
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

      <fieldset className="cf-group">
        <legend className="cf-legend">{t('contact.form.qualify.projectType')}</legend>
        <div className="cf-pills">
          {projectTypes.map((opt) => (
            <label key={opt} className="cf-pill">
              <input type="radio" name="projectType" value={opt} required />
              <span>{opt}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* honeypot */}
      <input type="text" name="website" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

      <button type="submit" className="cf-submit" disabled={status === 'sending' || !formReady}>
        {status === 'sending' ? t('contact.form.submitting') : t('homePage.cta.formSubmit')}
      </button>

      <p className="hcf-alt">
        {t('homePage.cta.formAlt')}{' '}
        <Link href="/contact" className="hcf-alt-link">
          {t('homePage.cta.formAltLink')}
        </Link>
      </p>

      {status === 'error' && <p className="cf-error">{t('contact.form.error')}</p>}
    </form>
  );
}
