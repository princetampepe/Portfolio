import { FiArrowRight, FiDownload, FiMail } from 'react-icons/fi';
import SplitText from '../components/SplitText';
import { darkProfileImage, profileImage, resumeFile } from '../assets/portfolioAssets';

export default function Hero({ mobilePerformanceMode }) {
  return (
    <section className="hero-grid">
      <div className="hero-copy glass-panel">
        {mobilePerformanceMode ? (
          <>
            <p className="eyebrow hero-role">Front End Developer</p>
            <h1 className="hero-title">Front-end developer shaping clean product experiences.</h1>
            <p className="hero-text">
              I am Prince Christian T. Tampepe, a BSIT graduate from Canlaon City, Negros Oriental.
              I build responsive React interfaces with a product mindset: clear structure,
              thoughtful motion, usable layouts, and enough visual polish to make the experience
              feel intentional from the first click.
            </p>
          </>
        ) : (
          <>
            <SplitText
              tag="p"
              className="eyebrow hero-role"
              text="Front End Developer"
              delay={22}
              duration={0.55}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 18 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-80px"
              textAlign="left"
            />
            <SplitText
              tag="h1"
              className="hero-title"
              text="Front-end developer shaping clean product experiences."
              delay={26}
              duration={0.65}
              ease="power3.out"
              splitType="words"
              from={{ opacity: 0, y: 42, filter: 'blur(8px)' }}
              to={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              threshold={0.12}
              rootMargin="-80px"
              textAlign="left"
            />
            <SplitText
              tag="p"
              className="hero-text"
              text="I am Prince Christian T. Tampepe, a BSIT graduate from Canlaon City, Negros Oriental. I build responsive React interfaces with a product mindset: clear structure, thoughtful motion, usable layouts, and enough visual polish to make the experience feel intentional from the first click."
              delay={8}
              duration={0.45}
              ease="power2.out"
              splitType="words"
              from={{ opacity: 0, y: 16 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-40px"
              textAlign="left"
            />
          </>
        )}

        <div className="hero-actions">
          <a className="primary-button" href={resumeFile} target="_blank" rel="noreferrer" download>
            <FiDownload aria-hidden="true" />
            <span>Download Resume</span>
          </a>
          <a className="secondary-button" href="mailto:tadeochristianprince@gmail.com">
            <FiMail aria-hidden="true" />
            <span>Contact Me</span>
          </a>
          <a className="secondary-button" href="#projects">
            <FiArrowRight aria-hidden="true" />
            <span>View Projects</span>
          </a>
        </div>

        <div className="hero-pills">
          <span>Canlaon City, Negros Oriental</span>
          <span>React Developer</span>
          <span>Light glass UI</span>
        </div>
      </div>

      <div className="hero-visual glass-panel">
        <div className="portrait-frame">
          <img
            className="profile-image profile-image--light"
            src={profileImage}
            alt="Prince Christian T. Tampepe portrait"
          />
          <img className="profile-image profile-image--dark" src={darkProfileImage} alt="" aria-hidden="true" />
        </div>
        <div className="visual-card">
          <p className="eyebrow">Profile</p>
          <h3>Front End Developer</h3>
          <p>
            Focused on React, product interfaces, AI-assisted workflows, and practical systems that
            people can actually use.
          </p>
        </div>
      </div>
    </section>
  );
}
