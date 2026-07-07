'use client';

import { useTranslation } from 'react-i18next';
import './SkillsPreview.css';

const STACK = ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma', 'Tailwind', 'Vercel'];

export default function SkillsPreview() {
  const { t } = useTranslation();

  return (
    <section className="stack-section">
      <div className="stack-container">
        <div data-reveal className="stack-label section-label">{t('homePage.stack.title')}</div>
        <div data-reveal className="stack-pills">
          {STACK.map((tech) => (
            <span
              key={tech}
              className={`stack-pill ${tech === 'Next.js' ? 'stack-pill--highlight' : ''}`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
