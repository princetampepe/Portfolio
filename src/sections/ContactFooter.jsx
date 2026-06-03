import { resumeFile } from '../assets/portfolioAssets';
import AnimatedSectionHeading from '../components/shared/AnimatedSectionHeading';

export default function ContactFooter({ mobilePerformanceMode }) {
  return (
    <>
      <section className="contact-banner glass-panel" id="contact">
        <div>
          <AnimatedSectionHeading
            eyebrow="Contact"
            title="Let us build something polished and memorable."
            staticMode={mobilePerformanceMode}
          />
        </div>
        <div className="contact-links">
          <a href="mailto:tadeochristianprince@gmail.com">tadeochristianprince@gmail.com</a>
          <a href="tel:+639319154737">09319154737</a>
          <a href={resumeFile} target="_blank" rel="noreferrer">
            Resume PDF
          </a>
          <span>Canlaon City, Negros Oriental</span>
        </div>
      </section>

      <footer className="footer-note">
        <p>Prince Christian T. Tampepe | BSIT Graduate | Front End Developer</p>
      </footer>
    </>
  );
}
