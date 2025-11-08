// Types pour les sections de la page About
export interface AboutSection {
	title?: string;
	content?: string[];
}

export interface AboutSections {
	intro?: AboutSection;
	parcours?: AboutSection;
	method?: AboutSection;
	values?: AboutSection;
	skills?: AboutSection;
	cta?: AboutSection;
}

