'use client';

import { useTranslation } from 'react-i18next';
import { useTheme } from '@/contexts/ThemeContext';
import { SKILLS, SKILL_ICONS } from '@/lib/constants';
import './SkillsPreview.css';

export default function SkillsPreview() {
	const { t } = useTranslation();
	const { isDarkMode } = useTheme();

	return (
		<div className="home-skills-preview">
			<h3>{t('homePage.skills')}</h3>
			<div className="home-skills-grid">
				{SKILLS.map((skill, index) => (
					<div
						key={skill}
						className="home-skill-item visible"
						style={{ transitionDelay: `${index * 0.05}s` }}>
						<img
							src={isDarkMode ? SKILL_ICONS[skill].dark : SKILL_ICONS[skill].light}
							alt={skill}
							width={40}
							height={40}
						/>
						<span>{skill}</span>
					</div>
				))}
			</div>
		</div>
	);
}

