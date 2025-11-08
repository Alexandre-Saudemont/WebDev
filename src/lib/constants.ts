// Constantes pour les compétences et leurs icônes
export const SKILLS = ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'NextJS', 'NodeJs', 'ExpressJS', 'PostgreSQL'] as const;

export type Skill = (typeof SKILLS)[number];

export const SKILL_ICONS: Record<Skill, { dark: string; light: string }> = {
	HTML: { dark: '/img/dark/html_dark.svg', light: '/img/light/html_light.svg' },
	CSS: { dark: '/img/dark/css_dark.svg', light: '/img/light/css_light.svg' },
	JavaScript: { dark: '/img/dark/js_dark.svg', light: '/img/light/js_light.svg' },
	ReactJS: { dark: '/img/dark/reactjs_dark.svg', light: '/img/light/reactjs_light.svg' },
	NextJS: { dark: '/img/dark/nextjs_dark.svg', light: '/img/light/nextjs_light.svg' },
	NodeJs: { dark: '/img/dark/nodejs_dark.svg', light: '/img/light/nodejs_light.svg' },
	ExpressJS: { dark: '/img/dark/expressjs_dark.svg', light: '/img/light/expressjs_light.svg' },
	PostgreSQL: { dark: '/img/dark/psql_dark.svg', light: '/img/light/psql_light.svg' },
};

