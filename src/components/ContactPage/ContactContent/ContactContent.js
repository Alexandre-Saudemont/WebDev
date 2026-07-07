'use client';

import ContactForm from '../ContactForm/ContactForm';
import ContactInfo from '../ContactInfo/ContactInfo';
import './ContactContent.css';

export default function ContactContent() {
  return (
    <section className="cc-section">
      <div className="cc-container">
        <div data-reveal className="cc-form-card">
          <ContactForm />
        </div>
        <ContactInfo />
      </div>
    </section>
  );
}
