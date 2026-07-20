'use client';

import { useTranslation } from 'react-i18next';
import './SkillsPreview.css';

const STACK = ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma', 'Tailwind', 'Vercel'];

function StackTrack({ ariaHidden = false }) {
  return (
    <ul className="stack-track" aria-hidden={ariaHidden || undefined}>
      {STACK.map((tech) => (
        <li
          key={tech}
          className={`stack-pill ${tech === 'Next.js' ? 'stack-pill--highlight' : ''}`}
        >
          {tech}
        </li>
      ))}
    </ul>
  );
}

export default function SkillsPreview() {
  const { t } = useTranslation();

  return (
    <section className="stack-section">
      <div className="stack-container">
        <div data-reveal className="stack-label section-label">{t('homePage.stack.title')}</div>
      </div>
      {/* Piste dupliquée : la seconde copie (masquée aux lecteurs d'écran)
          prend le relais pour une boucle sans couture */}
      <div data-reveal className="stack-marquee">
        <StackTrack />
        <StackTrack ariaHidden />
      </div>
    </section>
  );
}
