'use client';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import ContactForm from '../ContactForm/ContactForm';
import ContactInfo from '../ContactInfo/ContactInfo';
import ContactCta from '../ContactCta/ContactCta';
import './ContactContent.css';

export default function ContactContent() {
	const { elementRef: sectionRef, isVisible } = useIntersectionObserver<HTMLElement>({
		threshold: 0.1,
		triggerOnce: true,
	});

	return (
		<section ref={sectionRef} className={`contact-content-section ${isVisible ? 'visible' : ''}`}>
			<div className="contact-content">
				<ContactForm />
				<div className="contact-info-wrapper">
					<ContactInfo />
					<ContactCta />
				</div>
			</div>
		</section>
	);
}

