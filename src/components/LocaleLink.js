'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';

// Pages qui n'existent qu'en français (documents légaux, page perso)
const FR_ONLY = ['/legal', '/profil'];

export function useLang() {
	const pathname = usePathname() || '/';
	if (pathname === '/en' || pathname.startsWith('/en/')) return 'en';
	if (pathname === '/cn' || pathname.startsWith('/cn/')) return 'cn';
	return 'fr';
}

export function localePath(lang, href) {
	if (lang === 'fr' || !href.startsWith('/')) return href;
	if (FR_ONLY.some((p) => href === p || href.startsWith(p + '/'))) return href;
	return href === '/' ? `/${lang}/` : `/${lang}${href}`;
}

// Remplaçant de next/link qui préfixe les liens internes avec la langue
// courante (déduite de l'URL), afin que la navigation reste dans la langue.
export default function LocaleLink({href, ...props}) {
	const lang = useLang();
	return <Link href={localePath(lang, href)} {...props} />;
}
