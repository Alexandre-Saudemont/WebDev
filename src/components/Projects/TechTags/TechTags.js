'use client';

import './TechTags.css';

export default function TechTags({tech}) {
	return (
		<div className='project-tech'>
			{tech.map((techItem, index) => (
				<span key={index} className='tech-tag'>
					{techItem}
				</span>
			))}
		</div>
	);
}
