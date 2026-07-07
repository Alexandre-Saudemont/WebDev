'use client';

import { useTranslation } from 'react-i18next';
import './StatsSection.css';

export default function StatsSection() {
  const { t } = useTranslation();

  const stats = [
    { value: '3+', label: t('homePage.stats.projects') },
    { value: '100%', label: t('homePage.stats.satisfaction'), green: true },
    { value: '2+', label: t('homePage.stats.years') },
  ];

  return (
    <div className="stats-section">
      <div className="stats-inner" data-reveal>
        {stats.map((s, i) => (
          <div key={i} className="stat-card">
            <div className={`stat-value ${s.green ? 'green' : ''}`}>{s.value}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
