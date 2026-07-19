'use client';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import BrowserFrame from '@/components/BrowserFrame/BrowserFrame';
import './ProjectCard.css';

export default function ProjectCard({ project, index }) {
  const { t } = useTranslation();

  return (
    <div
      className="pc-card"
      data-reveal
      style={{ '--reveal-delay': `${index * 90}ms` }}
    >
      <BrowserFrame url={project.link}>
        <div className="pc-image">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="pc-img"
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectPosition: project.imagePosition ?? 'center' }}
          />
          <div className="pc-overlay" />
          {project.wip && (
            <div className="pc-wip-badge">
              <span className="pc-wip-dot" />
              En cours
            </div>
          )}
        </div>
      </BrowserFrame>
      <div className="pc-body">
        <div className="pc-tags">
          {project.tech.map((tag) => (
            <span key={tag} className="pc-tag">{tag}</span>
          ))}
        </div>
        <h3 className="pc-title">{project.title}</h3>
        <p className="pc-desc">{project.description}</p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="pc-link"
        >
          {t('projectsPage.viewProject', { defaultValue: 'Voir le projet →' })}
        </a>
      </div>
    </div>
  );
}
