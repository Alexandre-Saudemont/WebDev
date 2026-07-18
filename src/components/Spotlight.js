'use client';

import { useEffect } from 'react';

/* Alimente --spot-x/--spot-y sur les éléments [data-spotlight] au passage
   de la souris. Un seul listener délégué, mutation directe du style :
   aucun re-render React. Le rendu du halo est géré en CSS (globals.css). */
export default function Spotlight() {
	useEffect(() => {
		if (window.matchMedia('(hover: none)').matches) return;

		const onMove = (e) => {
			const card = e.target.closest?.('[data-spotlight]');
			if (!card) return;
			const rect = card.getBoundingClientRect();
			card.style.setProperty('--spot-x', `${e.clientX - rect.left}px`);
			card.style.setProperty('--spot-y', `${e.clientY - rect.top}px`);
		};

		document.addEventListener('pointermove', onMove, { passive: true });
		return () => document.removeEventListener('pointermove', onMove);
	}, []);

	return null;
}
