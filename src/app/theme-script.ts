// Script pour appliquer le thème avant le rendu (évite le FOUC)
export const themeScript = `
(function() {
  function getInitialTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme;
    }
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      return 'light';
    }
    return 'dark';
  }
  
  const theme = getInitialTheme();
  const root = document.documentElement;
  root.classList.remove('lightMode', 'darkMode');
  root.classList.add(theme === 'dark' ? 'darkMode' : 'lightMode');
  root.setAttribute('data-theme', theme);
})();
`;

