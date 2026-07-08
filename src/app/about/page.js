import AboutPage from '@/components/AboutPage/AboutPage';

export const metadata = {
	title: 'À propos',
	description:
		'Développeur web freelance passionné, je vous accompagne de la conception à la mise en ligne de votre projet web.',
	alternates: {canonical: '/about/'},
};

export default function About() {
	return (
		<div>
			<AboutPage />
		</div>
	);
}

