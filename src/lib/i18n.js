import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import fr from '../../public/locales/fr/translation.json';
import en from '../../public/locales/en/translation.json';
import cn from '../../public/locales/cn/translation.json';

const isBrowser = typeof window !== 'undefined';

if (isBrowser) {
	i18n.use(HttpApi).use(LanguageDetector);
}

i18n.use(initReactI18next).init({
	resources: {
		fr: {translation: fr},
		en: {translation: en},
		cn: {translation: cn},
	},
	supportedLngs: ['en', 'fr', 'cn'],
	lng: 'fr',
	fallbackLng: 'fr',
	debug: false,
	interpolation: {
		escapeValue: false,
	},

	backend: isBrowser
		? {
				loadPath: '/locales/{{lng}}/{{ns}}.json',
		  }
		: undefined,
	detection: isBrowser ? {order: ['querystring', 'localStorage', 'navigator']} : undefined,
});

export {i18n};
export default i18n;
