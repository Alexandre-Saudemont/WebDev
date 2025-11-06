'use client';

import React, {useState, useEffect, useRef} from 'react';

export default function LoadingScreen() {
	const [isLoading, setIsLoading] = useState(true);
	const hasClosedRef = useRef(false);

	const closeLoading = () => {
		if (!hasClosedRef.current) {
			hasClosedRef.current = true;
			setIsLoading(false);
		}
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			closeLoading();
		}, 2000);

		// Fermer au clic n'importe où (phase de capture pour intercepter avant les autres éléments)
		const handleClick = (e) => {
			closeLoading();
		};

		// Fermer lors d'une interaction tactile
		const handleTouch = (e) => {
			closeLoading();
		};

		// Fermer lors d'une pression de touche
		const handleKeyDown = (e) => {
			closeLoading();
		};

		// Fermer lors d'un mouvement de souris (interaction)
		const handleMouseMove = () => {
			closeLoading();
		};

		// Détecter les clics sur les liens (navigation)
		const handleLinkClick = (e) => {
			const target = e.target.closest('a');
			if (target) {
				closeLoading();
			}
		};

		// Ajouter les écouteurs en phase de capture pour intercepter les événements
		// Utiliser capture: true pour intercepter avant que les autres éléments ne les reçoivent
		document.addEventListener('click', handleClick, {capture: true});
		document.addEventListener('touchstart', handleTouch, {capture: true});
		document.addEventListener('keydown', handleKeyDown);
		document.addEventListener('mousemove', handleMouseMove, {once: true});
		document.addEventListener('click', handleLinkClick, {capture: true});

		return () => {
			clearTimeout(timer);
			document.removeEventListener('click', handleClick, {capture: true});
			document.removeEventListener('touchstart', handleTouch, {capture: true});
			document.removeEventListener('keydown', handleKeyDown);
			document.removeEventListener('mousemove', handleMouseMove);
			document.removeEventListener('click', handleLinkClick, {capture: true});
		};
	}, []);

	// Détecter les changements de route et les interactions utilisateur
	useEffect(() => {
		// Écouter les changements d'URL (navigation avec boutons précédent/suivant)
		const handleRouteChange = () => {
			closeLoading();
		};

		window.addEventListener('popstate', handleRouteChange);
		
		// Intercepter history.pushState et history.replaceState pour détecter les navigations Next.js
		const originalPushState = history.pushState;
		const originalReplaceState = history.replaceState;

		history.pushState = function(...args) {
			originalPushState.apply(history, args);
			closeLoading();
		};

		history.replaceState = function(...args) {
			originalReplaceState.apply(history, args);
			closeLoading();
		};
		
		// Intercepter les clics sur tous les liens (y compris Next.js Link)
		const handleAnyClick = (e) => {
			// Si c'est un clic sur un lien ou un élément interactif, fermer
			const isLink = e.target.closest('a') || e.target.closest('[role="link"]');
			const isButton = e.target.closest('button') || e.target.closest('[role="button"]');
			
			if (isLink || isButton || e.target.closest('nav')) {
				closeLoading();
			}
		};

		// Écouter tous les clics en phase de capture
		document.addEventListener('click', handleAnyClick, {capture: true});

		return () => {
			window.removeEventListener('popstate', handleRouteChange);
			history.pushState = originalPushState;
			history.replaceState = originalReplaceState;
			document.removeEventListener('click', handleAnyClick, {capture: true});
		};
	}, []);

	if (!isLoading) return null;

	return (
		<div 
			className='loading-screen' 
			onClick={closeLoading}
			onTouchStart={closeLoading}
			onMouseDown={closeLoading}
			style={{
				position: 'fixed',
				top: 0,
				left: 0,
				width: '100%',
				height: '100%',
				backgroundColor: 'var(--bg-primary)',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				zIndex: 9999,
				cursor: 'pointer',
				userSelect: 'none'
			}}
		>
			<div className='loading-text' style={{
				color: 'var(--text-primary)',
				fontSize: '1.5rem'
			}}>
				Loading...
			</div>
		</div>
	);
}

































