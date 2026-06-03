import AnimatedSectionHeading from '../components/shared/AnimatedSectionHeading';

export default function About({ mobilePerformanceMode }) {
  return (
    <section className="content-section glass-panel about-section" id="about">
      <div className="about-grid">
        <div className="about-lead">
          <AnimatedSectionHeading
            eyebrow="About Me"
            title="I turn ideas into interfaces that feel clear, fast, and useful."
            eyebrowDelay={60}
            titleDelay={22}
            staticMode={mobilePerformanceMode}
          />
          <p>
            Front-end developer with product instincts, building responsive interfaces,
            AI-assisted workflows, and practical web systems.
          </p>
          <div className="about-proof">
            <span>React UI</span>
            <span>Product Thinking</span>
            <span>AI Workflows</span>
          </div>
        </div>
        <div className="about-copy">
          <p>
            I work at the intersection of front-end development, UX design, and product thinking. I
            build with JavaScript, TypeScript, React, HTML, and CSS, then connect ideas to practical
            back-end and database tools like Firebase, Supabase, and Spring Boot when a project
            needs more than a static interface.
          </p>
          <div className="about-stack">
            <div>
              <strong>Front-end</strong>
              <span>JavaScript</span>
              <span>TypeScript</span>
              <span>React</span>
              <span>HTML</span>
              <span>CSS</span>
            </div>
            <div>
              <strong>Database</strong>
              <span>Firebase</span>
              <span>Supabase</span>
            </div>
            <div>
              <strong>Back-end</strong>
              <span>Spring Boot</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
