'use client';

import React, {useState, useEffect} from 'react';

export default function LoadingScreen() {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 2000);

		return () => clearTimeout(timer);
	}, []);

	if (!isLoading) return null;

	return (
		<div className='loading-screen'>
			<div className='loading-text'>Loading...</div>
		</div>
	);
}
































