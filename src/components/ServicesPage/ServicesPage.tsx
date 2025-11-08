'use client';

import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import ServicesHeader from './ServicesHeader/ServicesHeader';
import ServicesGrid from './ServicesGrid/ServicesGrid';
import ServicesCta from './ServicesCta/ServicesCta';
import type { ServiceItem } from './types';
import './ServicesPage.css';

export default function ServicesPage() {
	const { t } = useTranslation();

	const services = useMemo(() => {
		try {
			const data = t('services.items', { returnObjects: true });
			return (JSON.parse(JSON.stringify(data)) as ServiceItem[]) || [];
		} catch (error) {
			console.error('Erreur i18n:', error);
			return [];
		}
	}, [t]);

	return (
		<div className="services-page">
			<ServicesHeader />
			<ServicesGrid services={services} />
			<ServicesCta />
		</div>
	);
}

