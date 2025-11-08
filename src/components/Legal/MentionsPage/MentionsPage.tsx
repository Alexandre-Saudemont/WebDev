'use client';

import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import LegalHeader from '../LegalHeader/LegalHeader';
import LegalContent from '../LegalContent/LegalContent';
import LastUpdate from '../LastUpdate/LastUpdate';
import type { LegalSection } from '../types';
import './MentionsPage.css';

export default function MentionsPage() {
	const { t } = useTranslation();

	const sections = useMemo<LegalSection[]>(() => {
		return [
			{
				title: t('legal.mention.editor.title'),
				info: [
					{ label: 'Nom', value: t('legal.mention.editor.name') },
					{ label: 'Adresse', value: t('legal.mention.editor.address') },
					{
						label: 'Email',
						value: t('legal.mention.editor.email'),
						link: {
							href: `mailto:${t('legal.mention.editor.email')}`,
							type: 'email',
						},
					},
					{ label: 'SIRET', value: t('legal.mention.editor.siret') },
				],
			},
			{
				title: t('legal.mention.hosting.title'),
				info: [
					{ label: 'Fournisseur', value: t('legal.mention.hosting.prodiver') },
					{ label: 'Adresse', value: t('legal.mention.hosting.address') },
					{
						label: 'Téléphone',
						value: t('legal.mention.hosting.phone'),
						link: {
							href: `tel:${t('legal.mention.hosting.phone')}`,
							type: 'tel',
						},
					},
					{
						label: 'Site web',
						value: t('legal.mention.hosting.website'),
						link: {
							href: t('legal.mention.hosting.website'),
							type: 'url',
						},
					},
				],
			},
			{
				title: t('legal.mention.intellectual.title'),
				content: t('legal.mention.intellectual.description'),
				content2: t('legal.mention.intellectual.description2'),
			},
			{
				title: t('legal.mention.liability.title'),
				content: t('legal.mention.liability.description'),
			},
			{
				title: t('legal.mention.privacy.title'),
				content: t('legal.mention.privacy.description'),
			},
			{
				title: t('legal.mention.law.title'),
				content: t('legal.mention.law.description'),
			},
		];
	}, [t]);

	return (
		<div className="legal-page">
			<LegalHeader
				titleKey="legal.mention.title"
				subtitleKey="legal.mention.subtitle"
				descriptionKey="legal.mention.description"
				badge="Mentions légales"
			/>
			<LegalContent sections={sections} />
			<LastUpdate />
		</div>
	);
}

