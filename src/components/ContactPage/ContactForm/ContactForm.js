'use client';

import { useState, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import './ContactForm.css';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/myzbrkkl';

function PillGroup({ name, label, hint, options, required = false }) {
  return (
    <fieldset className="cf-group">
      <legend className="cf-legend">
        {label}
        {hint && <span className="cf-optional"> ({hint})</span>}
      </legend>
      <div className="cf-pills">
        {options.map((opt) => (
          <label key={opt} className="cf-pill">
            <input type="radio" name={name} value={opt} required={required} />
            <span>{opt}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export default function ContactForm() {
  const { t } = useTranslation();
  const [status, setStatus] = useState('idle');
  const [formReady, setFormReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFormReady(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const asArray = (key) => {
    const data = t(key, { returnObjects: true });
    return Array.isArray(data) ? data : [];
  };

  const projectTypes = useMemo(() => asArray('contact.form.qualify.projectTypeOptions'), [t]);
  const budgets = useMemo(() => asArray('contact.form.qualify.budgetOptions'), [t]);
  const timelines = useMemo(() => asArray('contact.form.qualify.timelineOptions'), [t]);

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

      <PillGroup
        name="projectType"
        label={t('contact.form.qualify.projectType')}
        options={projectTypes}
        required
      />
      <PillGroup
        name="budget"
        label={t('contact.form.qualify.budget')}
        hint={t('contact.form.qualify.optional')}
        options={budgets}
      />
      <PillGroup
        name="timeline"
        label={t('contact.form.qualify.timeline')}
        hint={t('contact.form.qualify.optional')}
        options={timelines}
      />

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
