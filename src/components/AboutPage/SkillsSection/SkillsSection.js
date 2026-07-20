'use client';

import { useTranslation } from 'react-i18next';
import './SkillsSection.css';

const STACK = ['React', 'Next.js', 'JavaScript', 'Node.js', 'PostgreSQL', 'Prisma', 'Tailwind'];

export default function SkillsSection({ title }) {
  const { t } = useTranslation();

  return (
    <section className="as-skills-section">
      <div className="as-skills-container">
        <div data-reveal className="as-skills-label section-label">
          {title || t('aboutPage.sections.skills.title')}
        </div>
        <div data-reveal className="as-skills-pills">
          {STACK.map((tech) => (
            <span
              key={tech}
              className={`as-skill-pill ${tech === 'Next.js' ? 'as-skill-pill--highlight' : ''}`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
