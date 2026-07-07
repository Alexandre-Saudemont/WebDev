'use client';

import { useTranslation } from 'react-i18next';
import './ValuesGrid.css';

const VALUES = [
  {
    icon: '⧗',
    titleKey: 'aboutPage.sections.method.title',
    contentKey: 'aboutPage.sections.method.content',
  },
  {
    icon: '◇',
    titleKey: 'aboutPage.sections.transparency.title',
    contentKey: 'aboutPage.sections.transparency.content',
  },
  {
    icon: '◆',
    titleKey: 'aboutPage.sections.values.title',
    contentKey: 'aboutPage.sections.values.content',
  },
  {
    icon: '◎',
    titleKey: 'aboutPage.sections.objectif.title',
    contentKey: 'aboutPage.sections.objectif.content',
  },
];

export default function ValuesGrid() {
  const { t } = useTranslation();

  return (
    <section className="vg-section">
      <div className="vg-container">
        <h2 data-reveal className="vg-heading">
          {t('aboutPage.sections.methodAndValues.subtitle')}
        </h2>
        <div className="vg-grid">
          {VALUES.map((val, i) => {
            const content = t(val.contentKey, { returnObjects: true });
            const lines = Array.isArray(content) ? content : [content];
            return (
              <div
                key={i}
                data-reveal
                className="vg-card"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className="vg-icon">{val.icon}</div>
                <h3 className="vg-card-title">{t(val.titleKey)}</h3>
                {lines.map((line, j) => (
                  <p key={j} className="vg-card-text">{line}</p>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
