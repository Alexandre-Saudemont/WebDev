import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import fr from '@/locales/fr/translation.json';
import en from '@/locales/en/translation.json';
import cn from '@/locales/cn/translation.json';

const isBrowser = typeof window !== 'undefined';

if (isBrowser) {
	i18n.use(LanguageDetector);
}

i18n.use(initReactI18next).init({
	resources: {
		fr: { translation: fr },
		en: { translation: en },
		cn: { translation: cn },
	},
	supportedLngs: ['en', 'fr', 'cn'],
	lng: 'fr',
	fallbackLng: 'fr',
	debug: false,
	interpolation: {
		escapeValue: false,
	},
	detection: isBrowser ? { order: ['querystring', 'localStorage', 'navigator'] } : undefined,
});

export { i18n };
export default i18n;

