'use client';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import './ServicesCta.css';

export default function ServicesCta() {
	const { t } = useTranslation();
	const { elementRef: sectionRef, isVisible } = useIntersectionObserver<HTMLElement>({
		threshold: 0.2,
		triggerOnce: true,
	});

	return (
		<section ref={sectionRef} className={`services-cta ${isVisible ? 'visible' : ''}`}>
			<div className="services-cta-container">
				<div className="services-cta-content">
					<h2>Prêt à démarrer votre projet ?</h2>
					<p>
						Discutons de vos besoins et créons ensemble une solution web adaptée à votre activité.
					</p>
					<Link href="/contact" className="cta-button">
						{t('navigation.contact')}
						<ArrowRight size={18} />
					</Link>
				</div>
			</div>
		</section>
	);
}

