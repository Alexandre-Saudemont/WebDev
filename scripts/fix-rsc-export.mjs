/**
 * Corrige l'export statique de Next.js pour le segment cache client.
 *
 * Le navigateur demande les segments RSC sous forme de fichiers plats à points
 * (ex: /services/__next.services.__PAGE__.txt) mais l'export les écrit dans des
 * sous-dossiers (ex: /services/__next.services/__PAGE__.txt), ce qui provoque
 * des 404 sur un hébergement statique. Ce script crée les copies plates attendues.
 */
import {readdirSync, copyFileSync, statSync} from 'node:fs';
import {join, dirname, relative, basename} from 'node:path';

const OUT_DIR = join(process.cwd(), 'out');
let count = 0;

function walk(dir) {
	for (const entry of readdirSync(dir)) {
		const fullPath = join(dir, entry);
		if (!statSync(fullPath).isDirectory()) continue;

		if (entry.startsWith('__next.')) {
			flattenDir(fullPath);
		} else {
			walk(fullPath);
		}
	}
}

function flattenDir(segmentDir) {
	const parent = dirname(segmentDir);

	function copyFlat(dir) {
		for (const entry of readdirSync(dir)) {
			const fullPath = join(dir, entry);
			if (statSync(fullPath).isDirectory()) {
				copyFlat(fullPath);
			} else {
				const flatName = basename(segmentDir) + '.' + relative(segmentDir, fullPath).replaceAll('\\', '/').replaceAll('/', '.');
				copyFileSync(fullPath, join(parent, flatName));
				count++;
			}
		}
	}

	copyFlat(segmentDir);
}

walk(OUT_DIR);
console.log(`fix-rsc-export : ${count} fichier(s) plat(s) créé(s)`);
