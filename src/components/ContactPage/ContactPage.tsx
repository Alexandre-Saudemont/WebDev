'use client';

import ContactHeader from './ContactHeader/ContactHeader';
import ContactContent from './ContactContent/ContactContent';
import './ContactPage.css';

export default function ContactPage() {
	return (
		<div className="contact-page">
			<ContactHeader />
			<ContactContent />
		</div>
	);
}

