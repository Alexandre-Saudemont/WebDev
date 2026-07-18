'use client';

import { Search, Palette, Code2, Rocket } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './ProcessSection.css';

/* Vague passant par le centre de chaque colonne (y=40), crêtes entre les étapes */
const WAVE_PATH = 'M 125 40 Q 250 8, 375 40 T 625 40 T 875 40';

export default function ProcessSection() {
  const { t } = useTranslation();

  const steps = [
    { num: '01', icon: Search, title: t('homePage.process.discovery.title'), desc: t('homePage.process.discovery.description') },
    { num: '02', icon: Palette, title: t('homePage.process.design.title'), desc: t('homePage.process.design.description') },
    { num: '03', icon: Code2, title: t('homePage.process.development.title'), desc: t('homePage.process.development.description') },
    { num: '04', icon: Rocket, title: t('homePage.process.launch.title'), desc: t('homePage.process.launch.description') },
  ];

  return (
    <section className="process-section">
      <div className="proc-container">
        <h2 data-reveal className="proc-title">{t('homePage.process.subtitle')}</h2>
        <div className="proc-track">
          <svg data-reveal className="proc-line" viewBox="0 0 1000 80" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <linearGradient id="procLineGrad" x1="0%" x2="100%">
                <stop offset="0%" stopColor="var(--green-dark)" />
                <stop offset="50%" stopColor="var(--green)" />
                <stop offset="100%" stopColor="var(--green-dark)" />
              </linearGradient>
              <linearGradient id="procLineFlowGrad" x1="0%" x2="100%">
                <stop offset="0%" stopColor="#fff" stopOpacity="0" />
                <stop offset="50%" stopColor="#fff" stopOpacity=".9" />
                <stop offset="100%" stopColor="#fff" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d={WAVE_PATH} fill="none" stroke="url(#procLineGrad)" strokeWidth="2" strokeDasharray="4 7" strokeLinecap="round" opacity=".35" />
            <path d={WAVE_PATH} fill="none" stroke="url(#procLineGrad)" strokeWidth="2.5" strokeLinecap="round" className="proc-line-draw" />
            <path d={WAVE_PATH} fill="none" stroke="url(#procLineFlowGrad)" strokeWidth="3.5" strokeLinecap="round" strokeDasharray="50 1500" className="proc-line-flow" />
          </svg>
          <div className="proc-grid">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={s.num} data-reveal className="proc-step" style={{ transitionDelay: `${i * 80}ms` }}>
                  <div className="proc-orb">
                    <Icon size={24} strokeWidth={1.6} aria-hidden="true" />
                  </div>
                  <div className="proc-num">{s.num}</div>
                  <h3 className="proc-step-title">{s.title}</h3>
                  <p className="proc-step-desc">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
