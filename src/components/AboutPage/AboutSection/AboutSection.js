'use client';

import './AboutSection.css';

export default function AboutSection({title, children, className = '', variant = 'pair'}) {
	const wrapperClass = variant === 'single' ? 'about-section-single' : variant === 'full' ? 'about-section-full' : '';
	const sectionClass = `about-section ${className}`.trim();

	return (
		<div className={wrapperClass}>
			<div className={sectionClass}>
				<h2>{title}</h2>
				{children}
			</div>
		</div>
	);
}
