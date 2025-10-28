'use client';

import {useTranslation} from 'react-i18next';
import './MentionsPage.css';

export default function MentionsPage() {
	const {t} = useTranslation();
	const currentYear = new Date().getFullYear();

	return (
		<div className='mentions-container'>
			<div className='mentions-header'>
				<h1>{t('legal.mention.title')}</h1>
				<p className='mentions-subtitle'>{t('legal.mention.subtitle')}</p>
				<p className='mentions-description'>{t('legal.mention.description')}</p>
			</div>

			<div className='mentions-content'>
				{/* Éditeur du site */}
				<section className='legal-section'>
					<h2>{t('legal.mention.editor.title')}</h2>
					<div className='legal-info'>
						<p>
							<strong>Nom :</strong> {t('legal.mention.editor.name')}
						</p>
						<p>
							<strong>Adresse :</strong> {t('legal.mention.editor.address')}
						</p>
						<p>
							<strong>Email : </strong>
							<a href={`mailto:${t('legal.mention.editor.email')}`} className='legal-link'>
								{t('legal.mention.editor.email')}
							</a>
						</p>
						<p>
							<strong>SIRET :</strong> {t('legal.mention.editor.siret')}
						</p>
					</div>
				</section>

				{/* Hébergement */}
				<section className='legal-section'>
					<h2>{t('legal.mention.hosting.title')}</h2>

					<div className='legal-info'>
						<p>
							<strong>Fournisseur :</strong> {t('legal.mention.hosting.prodiver')}
						</p>
						<p>
							<strong>Adresse :</strong> {t('legal.mention.hosting.address')}
						</p>
						<p>
							<strong>Téléphone : </strong>
							<a href={`tel:${t('legal.mention.hosting.phone')}`} className='legal-link'>
								{t('legal.mention.hosting.phone')}
							</a>
						</p>
						<p>
							<strong>Site web : </strong>
							<a href={t('legal.mention.hosting.website')} target='_blank' rel='noopener noreferrer' className='legal-link'>
								{t('legal.mention.hosting.website')}
							</a>
						</p>
					</div>
				</section>

				{/* Propriété intellectuelle */}
				<section className='legal-section'>
					<h2>{t('legal.mention.intellectual.title')}</h2>
					<p>{t('legal.mention.intellectual.description')}</p>
					<p>{t('legal.mention.intellectual.description2')}</p>
				</section>

				{/* Responsabilité */}
				<section className='legal-section'>
					<h2>{t('legal.mention.liability.title')}</h2>
					<p>{t('legal.mention.liability.description')}</p>
				</section>

				{/* Protection des données */}
				<section className='legal-section'>
					<h2>{t('legal.mention.privacy.title')}</h2>
					<p>{t('legal.mention.privacy.description')}</p>
				</section>

				{/* Droit applicable */}
				<section className='legal-section'>
					<h2>{t('legal.mention.law.title')}</h2>
					<p>{t('legal.mention.law.description')}</p>
				</section>

				{/* Date de mise à jour */}
				<div className='last-update'>
					<p>
						{t('legal.mention.lastUpdate')} {currentYear}
					</p>
				</div>
			</div>
		</div>
	);
}
