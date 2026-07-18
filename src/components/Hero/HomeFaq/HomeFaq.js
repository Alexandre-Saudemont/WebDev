'use client';

import { useMemo } from 'react';
import Link from '@/components/LocaleLink';
import { useTranslation } from 'react-i18next';
import './HomeFaq.css';

/* Sélection des questions les plus décisives pour un premier visiteur :
   délais, paiement, tarifs « à partir de », accompagnement après livraison */
const FEATURED_INDEXES = [0, 2, 6, 4];

export default function HomeFaq() {
  const { t } = useTranslation();

  const items = useMemo(() => {
    const data = t('services.faq.items', { returnObjects: true });
    if (!Array.isArray(data)) return [];
    return FEATURED_INDEXES.map((i) => data[i]).filter(Boolean);
  }, [t]);

  if (!items.length) return null;

  return (
    <section className="home-faq-section">
      <div className="hf-container">
        <h2 data-reveal className="hf-title">{t('homePage.faq.title')}</h2>
        <div data-reveal className="hf-list" style={{ transitionDelay: '80ms' }}>
          {items.map((item) => (
            <details key={item.q} className="hf-item">
              <summary className="hf-q">{item.q}</summary>
              <p className="hf-a">{item.a}</p>
            </details>
          ))}
        </div>
        <div data-reveal className="hf-more">
          <Link href="/services#faq" className="hf-link">
            {t('homePage.faq.link')} →
          </Link>
        </div>
      </div>
    </section>
  );
}
