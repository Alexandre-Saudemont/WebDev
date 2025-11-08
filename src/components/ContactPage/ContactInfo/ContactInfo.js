'use client';

import {useTranslation} from 'react-i18next';
import {Mail, Globe, MapPin, Clock} from 'lucide-react';
import './ContactInfo.css';

export default function ContactInfo() {
	const {t} = useTranslation();

	return (
		<div className='contact-info'>
			<h3>{t('contact.info.title')}</h3>
			<p>{t('contact.info.description')}</p>

			<ul>
				<li>
					<Mail className='contact-icon' size={20} />
					<span>
						<strong>{t('contact.info.email.title')}</strong> contact@as-webdev.com
					</span>
				</li>
				<li>
					<Globe className='contact-icon' size={20} />
					<span>
						<strong>{t('contact.info.website.title')}</strong> as-webdev.com
					</span>
				</li>
				<li>
					<MapPin className='contact-icon' size={20} />
					<span>
						<strong>{t('contact.info.location.title')}</strong> {t('contact.info.location.value')}
					</span>
				</li>
				<li>
					<Clock className='contact-icon' size={20} />
					<span>
						<strong>{t('contact.info.availability.title')}</strong> {t('contact.info.availability.value')}
					</span>
				</li>
			</ul>
		</div>
	);
}
