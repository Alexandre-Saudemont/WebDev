'use client';

import Link from '@/components/LocaleLink';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import BrowserFrame from '@/components/BrowserFrame/BrowserFrame';
import PhoneFrame from '@/components/PhoneFrame/PhoneFrame';
import './ProjectsPreview.css';

const SHOWCASE = [
	{ key: 'project4', slug: 'avenso', wip: true },
	{ key: 'project2', slug: 'taiwan' },
	{ key: 'project3', slug: 'matchpair' },
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

				{SHOWCASE.map((p, i) => {
					const title = t(`projectsPage.${p.key}.title`);
					const link = t(`projectsPage.${p.key}.link`);
					const techArr = t(`projectsPage.${p.key}.tech`, { returnObjects: true });
					const tech = Array.isArray(techArr) ? techArr : [];

					return (
						<div key={p.key} className={`pp-row ${i % 2 ? 'pp-row--flip' : ''}`}>
							<div data-reveal className="pp-visual">
								<div className="pp-browser">
									<BrowserFrame url={link}>
										<div className="pp-shot">
											<Image
												src={`/img/projects/${p.slug}-desktop.webp`}
												alt={title}
												fill
												sizes="(max-width: 860px) 100vw, 60vw"
												className="pp-shot-img"
											/>
											{p.wip && (
												<div className="pp-wip-badge">
													<span className="pp-wip-dot" />
													En cours
												</div>
											)}
										</div>
									</BrowserFrame>
								</div>
								<div className="pp-phone">
									<PhoneFrame>
										<Image
											src={`/img/projects/${p.slug}-mobile.webp`}
											alt=""
											fill
											sizes="180px"
											className="pp-phone-img"
										/>
									</PhoneFrame>
								</div>
							</div>

							<div data-reveal className="pp-info" style={{ transitionDelay: '90ms' }}>
								<div className="pp-tech">{tech.slice(0, 3).join(' · ')}</div>
								<h3 className="pp-info-title">{title}</h3>
								<p className="pp-info-desc">{t(`projectsPage.${p.key}.description`)}</p>
								<a href={link} target="_blank" rel="noopener noreferrer" className="pp-link">
									{t('projectsPage.viewProject', { defaultValue: 'Voir le projet →' })}
								</a>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
}
