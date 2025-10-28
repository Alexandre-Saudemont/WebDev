'use client';

import {useTranslation} from 'react-i18next';
import './CgvPage.css';

export default function CGVPage() {
	const {t} = useTranslation();
	const currentYear = new Date().getFullYear();

	return (
		<div className='cgv-container'>
			<div className='cgv-header'>
				<h1>{t('legal.cgvkeypoint.intro')}</h1>
			</div>

			<div className='cgv-content'>
				{/* Définitions */}
				<section className='legal-section'>
					<h2>{t('legal.cgvkeypoint.sections.1_definitions.title')}</h2>
					<p>{t('legal.cgvkeypoint.sections.1_definitions.text')}</p>
				</section>

				{/* Commandes */}
				<section className='legal-section'>
					<h2>{t('legal.cgvkeypoint.sections.2_commandes.title')}</h2>
					<p>{t('legal.cgvkeypoint.sections.2_commandes.text')}</p>
				</section>

				{/* Responsabilité */}
				<section className='legal-section'>
					<h2>{t('legal.cgvkeypoint.sections.3_responsabilite.title')}</h2>
					<p>{t('legal.cgvkeypoint.sections.3_responsabilite.text')}</p>
				</section>

				{/* Création de site */}
				<section className='legal-section'>
					<h2>{t('legal.cgvkeypoint.sections.4_creation_site.title')}</h2>
					<p>{t('legal.cgvkeypoint.sections.4_creation_site.text')}</p>
				</section>

				{/* Paiement */}
				<section className='legal-section'>
					<h2>{t('legal.cgvkeypoint.sections.5_paiement.title')}</h2>
					<p>{t('legal.cgvkeypoint.sections.5_paiement.text')}</p>
				</section>

				{/* Annulation */}
				<section className='legal-section'>
					<h2>{t('legal.cgvkeypoint.sections.6_annulation.title')}</h2>
					<p>{t('legal.cgvkeypoint.sections.6_annulation.text')}</p>
				</section>

				{/* Propriété intellectuelle */}
				<section className='legal-section'>
					<h2>{t('legal.cgvkeypoint.sections.7_propriete_intellectuelle.title')}</h2>
					<p>{t('legal.cgvkeypoint.sections.7_propriete_intellectuelle.text')}</p>
				</section>

				{/* Données personnelles */}
				<section className='legal-section'>
					<h2>{t('legal.cgvkeypoint.sections.8_donnees_personnelles.title')}</h2>
					<p>{t('legal.cgvkeypoint.sections.8_donnees_personnelles.text')}</p>
				</section>

				{/* Droit applicable */}
				<section className='legal-section'>
					<h2>{t('legal.cgvkeypoint.sections.9_droit_applicable.title')}</h2>
					<p>{t('legal.cgvkeypoint.sections.9_droit_applicable.text')}</p>
				</section>

				{/* CGV complète */}
				<section className='legal-section'>
					<h2>{t('legal.cgvkeypoint.cgvtitle')}</h2>
					<p>
						<a href={t('legal.cgv.sections.pdf.link')} target='_blank' rel='noopener noreferrer' className='legal-link'>
							{t('legal.cgvkeypoint.sections.pdf.text')}
						</a>
						<a href={t('legal.cgvkeypoint.full_link')} target='_blank' rel='noopener noreferrer' className='legal-link'></a>
					</p>
				</section>

				{/* Date de mise à jour */}
				<div className='last-update'>
					<p>
						{t('legal.cgv.lastUpdate')} {currentYear}
					</p>
				</div>
			</div>
		</div>
	);
}
