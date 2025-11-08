'use client';

import './SectionPair.css';

interface SectionPairProps {
	sections: Array<{
		title: string;
		content: string[];
		className?: string;
	}>;
}

export default function SectionPair({ sections }: SectionPairProps) {
	return (
		<div className="about-section-pair">
			{sections.map((section, index) => (
				<div key={index} className={`about-section ${section.className || ''}`}>
					<h2>{section.title}</h2>
					{section.content.map((paragraph, i) => (
						<p key={i}>{paragraph}</p>
					))}
				</div>
			))}
		</div>
	);
}

