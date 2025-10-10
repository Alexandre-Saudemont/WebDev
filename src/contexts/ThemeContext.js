'use client';

import React, {createContext, useState, useEffect, useContext} from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
	const [isDarkMode, setIsDarkMode] = useState(true);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
		const savedTheme = localStorage.getItem('theme');
		if (savedTheme) {
			setIsDarkMode(savedTheme === 'dark');
		}
	}, []);

	useEffect(() => {
		if (mounted) {
			localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
		}
	}, [isDarkMode, mounted]);

	const toggleDarkMode = () => {
		setIsDarkMode((prevMode) => !prevMode);
	};

	const themeClass = isDarkMode ? 'darkMode' : 'lightMode';

	return (
		<ThemeContext.Provider value={{isDarkMode, toggleDarkMode, themeClass}}>
			<div className={themeClass}>{children}</div>
		</ThemeContext.Provider>
	);
};

export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (context === undefined) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}
	return context;
};

