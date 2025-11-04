'use client';

import React, {useEffect, useState} from 'react';

export default function CustomCursor() {
	const [mousePosition, setMousePosition] = useState({x: 0, y: 0});
	const [isHovering, setIsHovering] = useState(false);
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);

		const updateMousePosition = (e) => {
			setMousePosition({x: e.clientX, y: e.clientY});
		};

		const handleMouseEnter = () => setIsHovering(true);
		const handleMouseLeave = () => setIsHovering(false);

		// Add event listeners
		window.addEventListener('mousemove', updateMousePosition);

		// Add hover listeners to interactive elements
		const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
		interactiveElements.forEach((el) => {
			el.addEventListener('mouseenter', handleMouseEnter);
			el.addEventListener('mouseleave', handleMouseLeave);
		});

		return () => {
			window.removeEventListener('mousemove', updateMousePosition);
			interactiveElements.forEach((el) => {
				el.removeEventListener('mouseenter', handleMouseEnter);
				el.removeEventListener('mouseleave', handleMouseLeave);
			});
		};
	}, []);

	if (!isClient) return null;

	return (
		<>
			{/* Main cursor */}
			<div
				className='cursor'
				style={{
					left: mousePosition.x - 10,
					top: mousePosition.y - 10,
					transform: isHovering ? 'scale(1.5)' : 'scale(1)',
				}}
			/>

			{/* Cursor follower */}
			<div
				className='cursor-follower'
				style={{
					left: mousePosition.x - 20,
					top: mousePosition.y - 20,
					transform: isHovering ? 'scale(1.2)' : 'scale(1)',
				}}
			/>
		</>
	);
}































