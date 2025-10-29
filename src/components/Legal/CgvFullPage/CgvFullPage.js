'use client';

import {useTranslation} from 'react-i18next';
import './CgvFullPage.css';

// Configuration des disclaimers par langue
const TRANSLATION_DISCLAIMERS = {
	en: {
		title: '⚠️ Unofficial Translation',
		message:
			'This document is an unofficial translation for information purposes only. The only legally binding version is the original French document. In case of discrepancy, the French version shall prevail.',
	},
	cn: {
		title: '⚠️ 非官方翻译',
		message: '本文档为非官方翻译，仅供参考。唯一具有法律效力的是原始法语文档。如有歧义，以法语版本为准。',
	},
};

export default function CgvFullPage() {
	const {t, i18n} = useTranslation();
	const currentLanguage = i18n.language;
	const currentYear = new Date().getFullYear();

	const disclaimer = TRANSLATION_DISCLAIMERS[currentLanguage];

	return (
		<div className='cgv-container'>
			<div className='cgv-header'>
				<h1>{t('legal.cgv.legal.cgvComplete.title')}</h1>
				<p className='cgv-subtitle'>{t('legal.cgv.legal.cgvComplete.subtitle')}</p>
			</div>

			{/* Disclaimer pour les langues non-françaises */}
			{disclaimer && (
				<div className='translation-disclaimer'>
					<strong>{disclaimer.title}</strong>
					<p>{disclaimer.message}</p>
				</div>
			)}

			<div className='cgv-content'>
				{t('legal.cgv.legal.cgvComplete.articles', {returnObjects: true}).map((article, index) => (
					<section key={index} className='legal-section'>
						<h2>{article.title}</h2>
						<div className='legal-article-content'>
							{article.paragraphs.map((paragraph, pIndex) => (
								<p key={pIndex}>{paragraph}</p>
							))}
						</div>
					</section>
				))}

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
