export const themeScript = `
(function() {
  try {
    const root = document.documentElement;
    const storedTheme = localStorage.getItem('theme');
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    const theme = storedTheme || (prefersLight ? 'light' : 'dark');

    root.classList.remove('lightMode', 'darkMode');
    root.classList.add(theme === 'dark' ? 'darkMode' : 'lightMode');
    root.setAttribute('data-theme', theme);
  } catch (e) {
    console.error('Theme script error:', e);
  }
})();
`;
