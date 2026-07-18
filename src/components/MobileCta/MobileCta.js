'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import Link from '@/components/LocaleLink';
import { useTranslation } from 'react-i18next';
import './MobileCta.css';

export default function MobileCta() {
	const { t } = useTranslation();
	const pathname = usePathname();
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		// Apparaît une fois le hero dépassé : c'est là que l'intention est la plus forte
		const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	// Inutile sur la page contact : le formulaire est déjà à l'écran
	if (pathname.includes('/contact')) return null;

	return (
		<div className={`mobile-cta-bar ${visible ? 'visible' : ''}`}>
			<Link href="/contact" className="mobile-cta-btn" tabIndex={visible ? 0 : -1}>
				{t('navigation.quickQuote')}
				<ArrowRight size={16} strokeWidth={2.2} aria-hidden="true" />
			</Link>
		</div>
	);
}
