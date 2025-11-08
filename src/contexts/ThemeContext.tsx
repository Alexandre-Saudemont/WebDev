'use client';

import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
	theme: Theme;
	isDarkMode: boolean;
	toggleTheme: () => void;
	setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Fonction pour obtenir le thème initial (depuis localStorage ou préférence système)
function getInitialTheme(): Theme {
	if (typeof window === 'undefined') return 'dark';

	const savedTheme = localStorage.getItem('theme') as Theme | null;
	if (savedTheme === 'light' || savedTheme === 'dark') {
		return savedTheme;
	}

	// Détecter la préférence système
	if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
		return 'light';
	}

	return 'dark';
}

// Fonction pour appliquer le thème sur l'élément html
function applyTheme(theme: Theme) {
	if (typeof document === 'undefined') return;

	const root = document.documentElement;
	root.classList.remove('lightMode', 'darkMode');
	root.classList.add(theme === 'dark' ? 'darkMode' : 'lightMode');
	root.setAttribute('data-theme', theme);
}

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const [theme, setThemeState] = useState<Theme>(() => getInitialTheme());
	const [mounted, setMounted] = useState(false);

	// Appliquer le thème au montage et à chaque changement
	useEffect(() => {
		setMounted(true);
		applyTheme(theme);
	}, [theme]);

	// Sauvegarder dans localStorage quand le thème change
	useEffect(() => {
		if (mounted) {
			localStorage.setItem('theme', theme);
		}
	}, [theme, mounted]);

	// Écouter les changements de préférence système (optionnel)
	useEffect(() => {
		if (!mounted) return;

		const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');
		const handleChange = (e: MediaQueryListEvent) => {
			// Ne changer que si l'utilisateur n'a pas de préférence sauvegardée
			if (!localStorage.getItem('theme')) {
				setThemeState(e.matches ? 'light' : 'dark');
			}
		};

		mediaQuery.addEventListener('change', handleChange);
		return () => mediaQuery.removeEventListener('change', handleChange);
	}, [mounted]);

	const toggleTheme = () => {
		setThemeState((prev) => (prev === 'dark' ? 'light' : 'dark'));
	};

	const setTheme = (newTheme: Theme) => {
		setThemeState(newTheme);
	};

	const isDarkMode = theme === 'dark';

	return (
		<ThemeContext.Provider value={{ theme, isDarkMode, toggleTheme, setTheme }}>
			{children}
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

