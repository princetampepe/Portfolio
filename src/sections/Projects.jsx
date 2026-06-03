import { FiMail } from 'react-icons/fi';
import AnimatedSectionHeading from '../components/shared/AnimatedSectionHeading';
import { projects } from '../data/portfolioData';

export default function Projects({ mobilePerformanceMode, projectSectionRef, projectTrackRef }) {
  return (
    <section className="horizontal-projects" id="projects" ref={projectSectionRef}>
      <div className="projects-sticky glass-panel">
        <AnimatedSectionHeading
          eyebrow="Selected Work"
          title="Projects that move from idea to product"
          eyebrowDelay={55}
          staticMode={mobilePerformanceMode}
        />
        <div className="project-progress" aria-hidden="true">
          <span />
        </div>
        <div className="project-viewport">
          <div className="project-track" ref={projectTrackRef}>
            {projects.map((project, index) => (
              <article
                className="project-card"
                key={project.name}
                style={{ '--project-accent': project.accent }}
              >
                <ProjectCopy project={project} index={index} />
                <ProjectMockup project={project} />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCopy({ project, index }) {
  return (
    <div className="project-copy">
      <p className="project-count">0{index + 1}</p>
      <p className="project-type">{project.type}</p>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <div className="project-detail-grid">
        <ProjectDetail label="Role" value={project.role} />
        <ProjectDetail label="Outcome" value={project.outcome} />
        <ProjectDetail label="Impact" value={project.impact} />
        <ProjectDetail label="Focus" value={project.focus} />
      </div>
      <div className="tag-row">
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <div className="project-actions">
        <a
          className="secondary-button project-button"
          href={`mailto:tadeochristianprince@gmail.com?subject=${encodeURIComponent(
            `Project walkthrough: ${project.name}`,
          )}`}
        >
          <FiMail aria-hidden="true" />
          <span>Request Walkthrough</span>
        </a>
      </div>
    </div>
  );
}

function ProjectDetail({ label, value }) {
  return (
    <div>
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function ProjectMockup({ project }) {
  return (
    <div
      className={`project-mockup project-mockup-${project.mockup} ${
        project.image ? 'project-mockup-image' : ''
      }`.trim()}
    >
      {project.image ? (
        <img src={project.image} alt={project.imageAlt} loading="lazy" decoding="async" />
      ) : (
        <>
          <div className="mockup-topbar" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="mockup-body" aria-hidden="true">
            <div className="mockup-sidebar" />
            <div className="mockup-main">
              <span className="mockup-line wide" />
              <span className="mockup-line" />
              <div className="mockup-grid">
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
