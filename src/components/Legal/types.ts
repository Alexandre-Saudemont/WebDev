import type { ReactNode } from 'react';

export interface LegalInfoItem {
	label: string;
	value: string;
	link?: {
		href: string;
		type: 'email' | 'tel' | 'url';
	};
}

export interface LegalSection {
	title: string;
	content?: string | ReactNode;
	content2?: string;
	info?: LegalInfoItem[];
}

