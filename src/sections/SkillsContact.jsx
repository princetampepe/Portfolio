import { lazy, Suspense } from 'react';
import AnimatedSectionHeading from '../components/shared/AnimatedSectionHeading';
import SectionLoader from '../components/shared/SectionLoader';
import { skillGroups, skills, techLogos } from '../data/portfolioData';
import { useHasEnteredViewport } from '../hooks/useHasEnteredViewport';

const LogoLoop = lazy(() => import('../components/LogoLoop'));

export default function SkillsContact({ mobilePerformanceMode }) {
  const [skillsRef, showLogoLoop] = useHasEnteredViewport({ rootMargin: '260px 0px' });

  return (
    <section className="split-layout">
      <div className="content-section glass-panel" id="skills" ref={skillsRef}>
        <AnimatedSectionHeading
          eyebrow="Skills"
          title="Tools and strengths"
          staticMode={mobilePerformanceMode}
        />
        <div className="logo-loop-wrap">
          {mobilePerformanceMode ? (
            <LogoGrid className="mobile-logo-grid" />
          ) : showLogoLoop ? (
            <Suspense fallback={<SectionLoader label="Loading technology logos" />}>
              <LogoLoop
                logos={techLogos}
                speed={80}
                direction="left"
                logoHeight={42}
                gap={26}
                pauseOnHover={false}
                scaleOnHover
                ariaLabel="Technology logos"
              />
            </Suspense>
          ) : (
            <LogoGrid className="mobile-logo-grid logo-preview-grid" />
          )}
        </div>
        <div className="skill-grid">
          {skills.map((skill) => (
            <span className="skill-pill" key={skill}>
              {skill}
            </span>
          ))}
        </div>
        <div className="skill-groups">
          {skillGroups.map((group) => (
            <article className="skill-group" key={group.title}>
              <h3>{group.title}</h3>
              <p>{group.items.join(' / ')}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="content-section glass-panel contact-mini">
        <AnimatedSectionHeading
          eyebrow="Reach Out"
          title="Open for opportunities"
          staticMode={mobilePerformanceMode}
        />
        <p>
          If you want a clean portfolio, a landing page, or a React interface with a glass look, you
          can reach me directly.
        </p>
        <div className="contact-mini-list">
          <a href="mailto:tadeochristianprince@gmail.com">
            <span>Email</span>
            <strong>tadeochristianprince@gmail.com</strong>
          </a>
          <a href="tel:+639319154737">
            <span>Contact Number</span>
            <strong>09319154737</strong>
          </a>
          <div>
            <span>Facebook</span>
            <strong>Prince T. Tampepe</strong>
          </div>
        </div>
        <a className="primary-button compact" href="mailto:tadeochristianprince@gmail.com">
          <span>Email Prince</span>
        </a>
      </div>
    </section>
  );
}

function LogoGrid({ className }) {
  return (
    <div className={className} aria-label="Technology logos">
      {techLogos.slice(0, 6).map((logo) => (
        <span key={logo.title}>
          <img src={logo.src} alt={logo.alt} loading="lazy" decoding="async" />
        </span>
      ))}
    </div>
  );
}
