'use client';

import profilePic from './profile-picV2.webp';
import Image from 'next/image';

export default function profil() {
	return (
		<div>
			<Image src={profilePic} alt='Profil' width={1259} height={1375} />
		</div>
	);
}
