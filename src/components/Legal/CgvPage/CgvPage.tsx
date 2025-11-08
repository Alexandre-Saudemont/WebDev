'use client';

import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import LegalHeader from '../LegalHeader/LegalHeader';
import LegalContent from '../LegalContent/LegalContent';
import LastUpdate from '../LastUpdate/LastUpdate';
import type { LegalSection as LegalSectionType } from '../types';
import './CgvPage.css';

export default function CGVPage() {
	const { t } = useTranslation();

	const sections = useMemo<LegalSectionType[]>(() => {
		const sectionKeys = [
			'1_definitions',
			'2_commandes',
			'3_responsabilite',
			'4_creation_site',
			'5_paiement',
			'6_annulation',
			'7_propriete_intellectuelle',
			'8_donnees_personnelles',
			'9_droit_applicable',
		];

		return [
			...sectionKeys.map((key) => ({
				title: t(`legal.cgvkeypoint.sections.${key}.title`),
				content: t(`legal.cgvkeypoint.sections.${key}.text`),
			})),
			{
				title: t('legal.cgvkeypoint.cgvtitle'),
				content: (
					<Link href="/legal/conditions-generales-vente" className="legal-link">
						{t('legal.cgvkeypoint.fullcgv')}
					</Link>
				),
			},
		];
	}, [t]);

	return (
		<div className="legal-page">
			<LegalHeader titleKey="legal.cgvkeypoint.intro" badge="CGV" />
			<LegalContent sections={sections} />
			<LastUpdate />
		</div>
	);
}

