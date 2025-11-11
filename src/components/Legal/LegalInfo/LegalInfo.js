'use client';

import './LegalInfo.css';
import Link from 'next/link';
export default function LegalInfo({items}) {
	return (
		<div className='legal-info'>
			{items.map((item, index) => (
				<p key={index}>
					<strong>{item.label}</strong>{' '}
					{item.link ? (
						item.link.type === 'url' ? (
							<a href={item.link.href} className='legal-link' target='_blank' rel='noopener noreferrer'>
								{item.value || item.label}
							</a>
						) : (
							<Link href={item.link.href} className='legal-link'>
								{item.value || item.label}
							</Link>
						)
					) : (
						item.value
					)}
				</p>
			))}
		</div>
	);
}
