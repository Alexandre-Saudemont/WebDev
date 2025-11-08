'use client';

import type { LegalSection as LegalSectionType } from '../types';
import LegalInfo from '../LegalInfo/LegalInfo';
import './LegalSection.css';

interface LegalSectionProps {
	section: LegalSectionType;
	isVisible?: boolean;
}

export default function LegalSection({ section, isVisible = false }: LegalSectionProps) {
	return (
		<section className={`legal-section ${isVisible ? 'visible' : ''}`}>
			<h2>{section.title}</h2>
			{section.content && (
				typeof section.content === 'string' ? (
					<p>{section.content}</p>
				) : (
					<div className="legal-content-wrapper">{section.content}</div>
				)
			)}
			{section.content2 && <p>{section.content2}</p>}
			{section.info && <LegalInfo items={section.info} />}
		</section>
	);
}

