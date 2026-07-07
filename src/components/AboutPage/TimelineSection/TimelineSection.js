'use client';

import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import './TimelineSection.css';

const TIMELINE_DATES = ['2020 →', '2022 → 2024', '2024 → 2025'];

export default function TimelineSection() {
  const { t } = useTranslation();

  const items = useMemo(() => {
    const title = t('aboutPage.sections.parcours.title');
    const content = t('aboutPage.sections.parcours.content', { returnObjects: true });
    const lines = Array.isArray(content) ? content : [];
    return lines.map((text, i) => ({
      date: TIMELINE_DATES[i] ?? '',
      title: i === 0 ? title : i === 1 ? 'Formation' : "Projet d'équipe",
      text,
    }));
  }, [t]);

  return (
    <section className="tl-section">
      <div className="tl-container">
        <h2 data-reveal className="tl-heading">
          {t('aboutPage.sections.parcours.subtitle')}
        </h2>
        <div className="tl-list">
          {items.map((item, i) => (
            <div
              key={i}
              data-reveal
              className="tl-item"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="tl-date">{item.date}</div>
              <div className="tl-body">
                <h3 className="tl-item-title">{item.title}</h3>
                <p className="tl-item-text">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
