'use client';

import type { LegalInfoItem } from '../types';
import './LegalInfo.css';

interface LegalInfoProps {
	items: LegalInfoItem[];
}

export default function LegalInfo({ items }: LegalInfoProps) {
	return (
		<div className="legal-info">
			{items.map((item, index) => (
				<p key={index}>
					<strong>{item.label} :</strong>{' '}
					{item.link ? (
						<a
							href={item.link.href}
							className="legal-link"
							target={item.link.type === 'url' ? '_blank' : undefined}
							rel={item.link.type === 'url' ? 'noopener noreferrer' : undefined}>
							{item.value}
						</a>
					) : (
						item.value
					)}
				</p>
			))}
		</div>
	);
}

