'use client';

import { useTranslation } from 'react-i18next';
import './ProcessSection.css';

export default function ProcessSection() {
  const { t } = useTranslation();

  const steps = [
    { num: '01', title: t('homePage.process.discovery.title'), desc: t('homePage.process.discovery.description') },
    { num: '02', title: t('homePage.process.design.title'), desc: t('homePage.process.design.description') },
    { num: '03', title: t('homePage.process.development.title'), desc: t('homePage.process.development.description') },
    { num: '04', title: t('homePage.process.launch.title'), desc: t('homePage.process.launch.description') },
  ];

  return (
    <section className="process-section">
      <div className="proc-container">
        <h2 data-reveal className="proc-title">{t('homePage.process.subtitle')}</h2>
        <div className="proc-grid">
          {steps.map((s, i) => (
            <div key={i} data-reveal className="proc-step" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="proc-num">{s.num}</div>
              <h3 className="proc-step-title">{s.title}</h3>
              <p className="proc-step-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
