import {createInstance} from 'i18next';
import {initReactI18next} from 'react-i18next';

import fr from '@/locales/fr/translation.json';
import en from '@/locales/en/translation.json';
import cn from '@/locales/cn/translation.json';

// La langue est déterminée par l'URL (/, /en/, /cn/), jamais détectée côté client :
// chaque arborescence reçoit sa propre instance afin que le HTML pré-rendu
// au build soit dans la bonne langue (indexable par les moteurs de recherche).
export function createI18n(lng) {
	const instance = createInstance();

	instance.use(initReactI18next).init({
		resources: {
			fr: {translation: fr},
			en: {translation: en},
			cn: {translation: cn},
		},
		supportedLngs: ['en', 'fr', 'cn'],
		lng,
		fallbackLng: 'fr',
		interpolation: {
			escapeValue: false,
		},
	});

	return instance;
}
