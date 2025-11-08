'use client';

import { ReactNode } from 'react';
import './AboutSection.css';

interface AboutSectionProps {
	title: string;
	children: ReactNode;
	className?: string;
	variant?: 'single' | 'pair' | 'full';
}

export default function AboutSection({ title, children, className = '', variant = 'pair' }: AboutSectionProps) {
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

