'use client';

import Link from '@/components/LocaleLink';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import './ProjectsPreview.css';

const PREVIEW_PROJECTS = [
  {
    key: 'project4',
    image: '/img/projects/avenso.webp',
    imagePosition: 'top',
    techKey: 'projectsPage.project4.tech',
    wip: true,
  },
  {
    key: 'project2',
    image: '/img/projects/taiwan.webp',
    imagePosition: 'center',
    techKey: 'projectsPage.project2.tech',
  },
];

export default function ProjectsPreview() {
  const { t } = useTranslation();

  return (
    <section className="projects-preview-section">
      <div className="pp-container">
        <div data-reveal className="pp-header">
          <h2 className="pp-title">{t('homePage.realisations.title')}</h2>
          <Link href="/projects" className="pp-view-all">
            {t('homePage.realisations.viewAll')}
          </Link>
        </div>

        <div className="pp-grid">
          {PREVIEW_PROJECTS.map((p, i) => {
            const techArr = t(`projectsPage.${p.key}.tech`, { returnObjects: true });
            const tech = Array.isArray(techArr) ? techArr : [];
            return (
              <div
                key={p.key}
                data-reveal
                className="pp-card"
                style={{ '--reveal-delay': `${i * 90}ms` }}
              >
                <div className="pp-image">
                  <Image
                    src={p.image}
                    alt={t(`projectsPage.${p.key}.title`)}
                    fill
                    className="pp-img"
                    style={{ objectPosition: p.imagePosition ?? 'center' }}
                  />
                  {p.wip && (
                    <div className="pp-wip-badge">
                      <span className="pp-wip-dot" />
                      En cours
                    </div>
                  )}
                </div>
                <div className="pp-content">
                  <div className="pp-tech">
                    {tech.slice(0, 2).join(' · ')}
                  </div>
                  <h3 className="pp-card-title">{t(`projectsPage.${p.key}.title`)}</h3>
                  <p className="pp-card-desc">{t(`projectsPage.${p.key}.description`)}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
