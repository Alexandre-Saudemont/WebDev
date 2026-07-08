/**
 * Vérifie la synchronisation des fichiers de traduction.
 *
 * Le français est la référence : toute clé présente en FR mais absente
 * en EN ou CN provoquerait un fallback en français sur le site — le script
 * échoue donc (bloque le build). Les clés orphelines (présentes en EN/CN
 * mais plus en FR) sont signalées en avertissement.
 */
import {readFileSync} from 'node:fs';

const LANGS = ['fr', 'en', 'cn'];

const files = Object.fromEntries(
	LANGS.map((lang) => [lang, JSON.parse(readFileSync(`src/locales/${lang}/translation.json`, 'utf8'))]),
);

// Aplatit objets ET tableaux (les index détectent une entrée manquante dans une liste)
function flatten(value, prefix = '', out = new Set()) {
	if (Array.isArray(value)) {
		value.forEach((v, i) => flatten(v, `${prefix}[${i}]`, out));
	} else if (typeof value === 'object' && value !== null) {
		for (const [k, v] of Object.entries(value)) {
			flatten(v, prefix ? `${prefix}.${k}` : k, out);
		}
	} else {
		out.add(prefix);
	}
	return out;
}

const keys = Object.fromEntries(LANGS.map((lang) => [lang, flatten(files[lang])]));

let missingTotal = 0;

for (const lang of ['en', 'cn']) {
	const missing = [...keys.fr].filter((k) => !keys[lang].has(k));
	const orphans = [...keys[lang]].filter((k) => !keys.fr.has(k));

	if (missing.length > 0) {
		missingTotal += missing.length;
		console.error(`\n❌ ${lang.toUpperCase()} : ${missing.length} clé(s) manquante(s) (fallback FR à l'écran) :`);
		missing.forEach((k) => console.error(`   - ${k}`));
	}
	if (orphans.length > 0) {
		console.warn(`\n⚠️  ${lang.toUpperCase()} : ${orphans.length} clé(s) orpheline(s) (absentes du FR, probablement obsolètes) :`);
		orphans.forEach((k) => console.warn(`   - ${k}`));
	}
}

if (missingTotal > 0) {
	console.error(`\ncheck-i18n : échec — complétait les traductions manquantes avant de builder.`);
	process.exit(1);
}

console.log(`check-i18n : OK — ${keys.fr.size} clés synchronisées sur ${LANGS.length} langues.`);
