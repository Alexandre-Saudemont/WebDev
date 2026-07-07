'use client';

import ProjectCard from '../ProjectCard/ProjectCard';
import './ProjectsGrid.css';

export default function ProjectsGrid({ projects }) {
  return (
    <section className="pg-section">
      <div className="pg-container">
        <div className="pg-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
