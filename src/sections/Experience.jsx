import AnimatedSectionHeading from '../components/shared/AnimatedSectionHeading';

export default function Experience({ mobilePerformanceMode }) {
  return (
    <section className="content-section glass-panel experience-section" id="experience">
      <AnimatedSectionHeading
        eyebrow="Experience"
        title="Hands-on work in a real technology environment"
        staticMode={mobilePerformanceMode}
      />
      <article className="experience-card">
        <div className="experience-main">
          <p className="experience-period">January 2026 - May 2026</p>
          <h3>Lifewood Data Technology</h3>
          <p className="experience-role">Internship</p>
          <p>
            Gained practical exposure to professional workflows, technology operations, and workplace
            collaboration inside a data-focused company environment.
          </p>
        </div>
        <div className="experience-location">
          <span>Location</span>
          <strong>
            i2 Building, Ground Floor, Jose Del Mar Street, Cebu IT Park, Asiatown, Salinas Drive,
            Apas Lahug, Cebu City, 6000 Cebu, Philippines
          </strong>
        </div>
      </article>
    </section>
  );
}
