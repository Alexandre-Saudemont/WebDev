'use client';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import './CtaSection.css';

interface CtaSectionProps {
	title: string;
	content: string[];
}

export default function CtaSection({ title, content }: CtaSectionProps) {
	const { t } = useTranslation();
	const { elementRef: sectionRef, isVisible } = useIntersectionObserver<HTMLElement>({
		threshold: 0.2,
		triggerOnce: true,
	});

	return (
		<section ref={sectionRef} className={`cta-section ${isVisible ? 'visible' : ''}`}>
			<div className="cta-container">
				<div className="cta-content">
					<h2>{title}</h2>
					{content.map((paragraph, i) => (
						<p key={i}>{paragraph}</p>
					))}
					<Link href="/contact" className="cta-button">
						{t('navigation.contact')}
						<ArrowRight size={18} />
					</Link>
				</div>
			</div>
		</section>
	);
}

