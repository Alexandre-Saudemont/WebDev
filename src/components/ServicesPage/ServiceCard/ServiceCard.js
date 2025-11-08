'use client';

import './ServiceCard.css';

export default function ServiceCard({service, index}) {
	return (
		<div className='service-card' data-index={index}>
			<div className='service-icon'>{service.icon}</div>
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
