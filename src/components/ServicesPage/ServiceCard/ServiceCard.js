'use client';

import {useMemo} from 'react';
import {useTheme} from '../../../contexts/ThemeContext';
import Image from 'next/image';
import './ServiceCard.css';

export default function ServiceCard({service, index}) {
	const {isDarkMode} = useTheme();

	const servicesIcons = useMemo(
		() => [
			isDarkMode ? '/img/dark/web_dark.svg' : '/img/light/web_light.svg',
			isDarkMode ? '/img/dark/shopcart_dark.svg' : '/img/light/shopcart_light.svg',
			isDarkMode ? '/img/dark/gear_dark.svg' : '/img/light/gear_light.svg',
			isDarkMode ? '/img/dark/tools_dark.svg' : '/img/light/tools_light.svg',
		],
		[isDarkMode],
	);

	return (
		<div className='service-card' data-index={index}>
			<div className='service-icon'>
				<Image src={servicesIcons[index]} alt={service.title} width={50} height={50} />
			</div>
			<h3 className='service-name'>{service.title}</h3>
			<p className='service-description'>{service.description}</p>
			<ul className='service-features'>
				{service.features.map((feature, featureIndex) => (
					<li key={featureIndex} className='service-feature'>
						{feature}
					</li>
				))}
			</ul>
		</div>
	);
}
