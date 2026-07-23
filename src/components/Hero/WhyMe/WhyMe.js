'use client';

import { ShieldCheck, UserRound, Clock, Gauge } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './WhyMe.css';

export default function WhyMe() {
  const { t } = useTranslation();

  const items = [
    // La garantie ouvre la liste : c'est l'argument qui lève le plus de freins
    { icon: ShieldCheck, key: 'mockup' },
    { icon: UserRound, key: 'contact' },
    { icon: Clock, key: 'reactivity' },
    { icon: Gauge, key: 'performance' },
  ];

  return (
    <section className="whyme-section">
      <div className="whyme-container">
        <div data-reveal className="whyme-header">
          <div className="section-label">{t('homePage.whyMe.subtitle')}</div>
          <h2 className="whyme-title">{t('homePage.whyMe.title')}</h2>
        </div>

        <div className="whyme-grid">
          {items.map(({ icon: Icon, key }, i) => (
            <div
              key={key}
              data-reveal
              className="whyme-item"
              style={{ '--reveal-delay': `${i * 80}ms` }}
            >
              <div className="whyme-orb">
                <Icon size={22} strokeWidth={1.6} aria-hidden="true" />
              </div>
              <h3 className="whyme-item-title">{t(`homePage.whyMe.items.${key}.title`)}</h3>
              <p className="whyme-item-desc">{t(`homePage.whyMe.items.${key}.desc`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
