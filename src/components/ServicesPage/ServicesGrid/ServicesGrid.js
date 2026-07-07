'use client';

import ServiceCard from '../ServiceCard/ServiceCard';
import './ServicesGrid.css';

export default function ServicesGrid({ services }) {
  return (
    <div className="sv-grid-section">
      <div className="sv-grid-container">
        <div className="sv-grid">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
