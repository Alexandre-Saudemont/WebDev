'use client';

import React, {useState, useEffect} from 'react';

export default function LoadingScreen() {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 2000);

		// Fermer la page au clic n'importe où
		const handleClick = () => {
			setIsLoading(false);
		};

		// Fermer la page lors d'une interaction (clic, touche, etc.)
		const handleInteraction = () => {
			setIsLoading(false);
		};

		// Ajouter les écouteurs d'événements
		window.addEventListener('click', handleClick);
		window.addEventListener('touchstart', handleInteraction);
		window.addEventListener('keydown', handleInteraction);

		return () => {
			clearTimeout(timer);
			window.removeEventListener('click', handleClick);
			window.removeEventListener('touchstart', handleInteraction);
			window.removeEventListener('keydown', handleInteraction);
		};
	}, []);

	const handleScreenClick = () => {
		setIsLoading(false);
	};

	if (!isLoading) return null;

	return (
		<div className='loading-screen' onClick={handleScreenClick}>
			<div className='loading-text'>Loading...</div>
		</div>
	);
}

































