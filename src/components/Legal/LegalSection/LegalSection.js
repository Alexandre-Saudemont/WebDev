'use client';

import LegalInfo from '../LegalInfo/LegalInfo';
import './LegalSection.css';

export default function LegalSection({section, isVisible = false}) {
	return (
		<section className={`legal-section ${isVisible ? 'visible' : ''}`}>
			<h2>{section.title}</h2>
			{section.content &&
				(typeof section.content === 'string' ? <p>{section.content}</p> : <div className='legal-content-wrapper'>{section.content}</div>)}
			{section.content2 && <p>{section.content2}</p>}
			{section.info && <LegalInfo items={section.info} />}
		</section>
	);
}
