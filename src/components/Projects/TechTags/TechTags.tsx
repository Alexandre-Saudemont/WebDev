'use client';

import './TechTags.css';

interface TechTagsProps {
	tech: string[];
}

export default function TechTags({ tech }: TechTagsProps) {
	return (
		<div className="project-tech">
			{tech.map((techItem, index) => (
				<span key={index} className="tech-tag">
					{techItem}
				</span>
			))}
		</div>
	);
}

