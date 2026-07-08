const BASE_URL = 'https://as-webdev.com';

const OG_LOCALES = {fr: 'fr_FR', en: 'en_US', cn: 'zh_CN'};

// Chemins par page, sans préfixe de langue
const PATHS = {
	home: '/',
	services: '/services/',
	projects: '/projects/',
	about: '/about/',
	contact: '/contact/',
};

const CONTENT = {
	fr: {
		home: {
			title: 'Alexandre Saudemont — Développeur web freelance',
			description:
				'Je conçois des sites web et applications modernes, rapides et performants pour entreprises, startups et indépendants.',
		},
		services: {
			title: 'Services & tarifs',
			description:
				'Création de sites vitrines, e-commerce et applications web sur mesure. Tarifs transparents, maintenance et hébergement en France inclus.',
		},
		projects: {
			title: 'Projets',
			description: 'Sélection de projets web réalisés : sites vitrines, e-commerce et applications sur mesure.',
		},
		about: {
			title: 'À propos',
			description:
				'Développeur web freelance passionné, je vous accompagne de la conception à la mise en ligne de votre projet web.',
		},
		contact: {
			title: 'Contact',
			description: 'Un projet de site web ou d’application ? Parlons-en. Devis gratuit et réponse rapide.',
		},
	},
	en: {
		home: {
			title: 'Alexandre Saudemont — Freelance Web Developer',
			description:
				'I build modern, fast and high-performing websites and web applications for businesses, startups and independents.',
		},
		services: {
			title: 'Services & Pricing',
			description:
				'Showcase websites, e-commerce and custom web applications. Transparent pricing, maintenance and hosting in France included.',
		},
		projects: {
			title: 'Projects',
			description: 'A selection of completed web projects: showcase websites, e-commerce and custom applications.',
		},
		about: {
			title: 'About',
			description: 'Passionate freelance web developer, guiding you from design to launch of your web project.',
		},
		contact: {
			title: 'Contact',
			description: 'Have a website or web app project? Let’s talk. Free quote and quick reply.',
		},
	},
	cn: {
		home: {
			title: 'Alexandre Saudemont — 自由职业网页开发工程师',
			description: '为企业、初创公司和个人打造现代、快速、高性能的网站与网页应用。',
		},
		services: {
			title: '服务与价格',
			description: '企业展示网站、电商网站及定制网页应用开发。价格透明，含维护与法国主机托管。',
		},
		projects: {
			title: '项目案例',
			description: '精选网页项目：展示网站、电商平台与定制应用。',
		},
		about: {
			title: '关于我',
			description: '热爱技术的自由职业网页开发者，从设计到上线全程陪伴您的网络项目。',
		},
		contact: {
			title: '联系我',
			description: '有网站或应用项目？欢迎联系，免费报价，快速回复。',
		},
	},
};

function langPath(lang, page) {
	const path = PATHS[page];
	return lang === 'fr' ? path : `/${lang}${path}`;
}

// hreflang : le français est la version par défaut (x-default),
// le chinois utilise zh-CN (code BCP 47, « cn » n'est pas valide ici)
function alternates(lang, page) {
	return {
		canonical: langPath(lang, page),
		languages: {
			fr: langPath('fr', page),
			en: langPath('en', page),
			'zh-CN': langPath('cn', page),
			'x-default': langPath('fr', page),
		},
	};
}

export function pageMetadata(lang, page) {
	const {title, description} = CONTENT[lang][page];
	return {
		title,
		description,
		alternates: alternates(lang, page),
		openGraph: {
			title,
			description,
			url: langPath(lang, page),
			locale: OG_LOCALES[lang],
		},
	};
}

export function layoutMetadata(lang) {
	const {title, description} = CONTENT[lang].home;
	return {
		metadataBase: new URL(BASE_URL),
		title: {
			default: title,
			template: '%s — AS-WebDev',
		},
		description,
		alternates: alternates(lang, 'home'),
		openGraph: {
			type: 'website',
			locale: OG_LOCALES[lang],
			url: langPath(lang, 'home'),
			siteName: 'AS-WebDev',
			title,
			description,
			images: [{url: '/img/og.png', width: 1200, height: 630, alt: 'AS-WebDev — Alexandre Saudemont'}],
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: ['/img/og.png'],
		},
	};
}
