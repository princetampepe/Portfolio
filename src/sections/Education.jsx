import AnimatedSectionHeading from '../components/shared/AnimatedSectionHeading';

export default function Education({ mobilePerformanceMode }) {
  return (
    <section className="content-section glass-panel" id="education">
      <AnimatedSectionHeading
        eyebrow="Education"
        title="Academic background"
        staticMode={mobilePerformanceMode}
      />
      <div className="education-grid">
        <div className="education-card">
          <p className="education-level">College</p>
          <h3>Cebu Technological University - Barili Campus</h3>
          <p>
            Graduate of Bachelor of Science in Information Technology, with a focus on modern web
            development, interface design, and practical software skills.
          </p>
          <p className="education-address">Cagay, Barili, Cebu</p>
        </div>
        <div className="education-card">
          <p className="education-level">Senior High School</p>
          <h3>Jose B. Cardenas Senior High School</h3>
          <p>STEM Strand, With Honors</p>
          <p className="education-address">Canlaon City, Negros Oriental</p>
        </div>
        <div className="education-card">
          <p className="education-level">High School</p>
          <h3>Jose B. Cardenas Memorial High School</h3>
          <p>Junior high school education, With Honors</p>
          <p className="education-address">Canlaon City, Negros Oriental</p>
        </div>
      </div>
    </section>
  );
}
