import BlurText from './components/BlurText';
import GlassIcons from './components/GlassIcons';
import PillNav from './components/PillNav';
import SplitText from './components/SplitText';
import TextType from './components/TextType';
import { useEffect, useState } from 'react';
import { FiBarChart2, FiBook, FiCloud, FiEdit, FiFileText, FiHeart, FiLayout, FiCode } from 'react-icons/fi';

const profileImage = new URL('../my pic/Tampepe_ID.jpg', import.meta.url).href;
const resumeFile = new URL('../resume/Minimalist White and Grey Professional Resume.pdf', import.meta.url).href;

const skills = [
  'React',
  'JavaScript',
  'HTML5',
  'CSS3',
  'Responsive Design',
  'Tailwind CSS',
  'Figma',
  'UI Systems',
];

const highlights = [
  {
    title: 'BSIT Student',
    text: 'Focused on building strong foundations in modern web development and clean user experiences.',
  },
  {
    title: 'Front End Developer',
    text: 'Turning ideas into fast, polished interfaces with a glassmorphism touch and a modern visual rhythm.',
  },
  {
    title: 'Canlaon City',
    text: 'Based in Negros Oriental and ready for opportunities, collaborations, and portfolio work.',
  },
];

const glassIconItems = [
  { icon: <FiCode />, color: 'blue', label: 'React', customClass: 'glass-icon-item' },
  { icon: <FiLayout />, color: 'purple', label: 'UI Layout', customClass: 'glass-icon-item' },
  { icon: <FiFileText />, color: 'indigo', label: 'Docs', customClass: 'glass-icon-item' },
  { icon: <FiBook />, color: 'green', label: 'Learning', customClass: 'glass-icon-item' },
  { icon: <FiEdit />, color: 'orange', label: 'Design', customClass: 'glass-icon-item' },
  { icon: <FiBarChart2 />, color: 'red', label: 'Analytics', customClass: 'glass-icon-item' },
  { icon: <FiHeart />, color: 'red', label: 'Passion', customClass: 'glass-icon-item' },
  { icon: <FiCloud />, color: 'blue', label: 'Cloud', customClass: 'glass-icon-item' },
];

const projects = [
  {
    name: 'Campus Connect',
    type: 'Student portal concept',
    description: 'A clean dashboard concept for announcements, schedules, and student resources.',
    tags: ['React', 'Dashboards', 'Responsive UI'],
  },
  {
    name: 'Glass Landing System',
    type: 'Brand landing page concept',
    description: 'A bright, elegant landing page with layered cards, soft gradients, and bold typography.',
    tags: ['UI Design', 'Motion', 'Accessibility'],
  },
  {
    name: 'Personal Portfolio',
    type: 'Starter showcase',
    description: 'A compact space for your strongest work, achievements, and contact details.',
    tags: ['React', 'Portfolio', 'Modern Layout'],
  },
];

function App() {
  const [activeHref, setActiveHref] = useState('#about');

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const syncHash = () => {
      setActiveHref(window.location.hash || '#about');
    };

    syncHash();
    window.addEventListener('hashchange', syncHash);
    return () => window.removeEventListener('hashchange', syncHash);
  }, []);

  return (
    <main className="page-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="topbar glass-panel">
        <PillNav
          logo="/logo.svg"
          logoAlt="Prince Christian T. Tampepe logo"
          items={navItems}
          activeHref={activeHref}
          className="custom-nav"
          ease="power2.easeOut"
          baseColor="#101828"
          pillColor="#ffffff"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#101828"
          particleCount={15}
          particleDistances={[90, 10]}
          particleR={100}
          initialActiveIndex={0}
          animationTime={600}
          timeVariance={300}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        />
      </header>

      <section className="hero-grid">
        <div className="hero-copy glass-panel">
          <TextType
            as="p"
            className="eyebrow hero-role"
            text={['BSIT Student', 'Front End Developer', 'React Developer']}
            typingSpeed={70}
            pauseDuration={1200}
            deletingSpeed={30}
            showCursor={true}
            cursorCharacter="|"
            cursorClassName="hero-cursor"
          />
          <SplitText
            tag="h2"
            text="Modern glass UI built for a clean, bright first impression."
            className="hero-title"
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
          <p className="hero-text">
            I am Prince Christian T. Tampepe from Canlaon City, Negros Oriental. I build modern
            front-end experiences with React, thoughtful spacing, and a polished visual style that
            feels professional and easy to explore.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href={resumeFile} target="_blank" rel="noreferrer" download>
              Download Resume
            </a>
            <a className="secondary-button" href="mailto:tadeochristianprince@gmail.com">
              Contact Me
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
            <img src={profileImage} alt="Prince Christian T. Tampepe portrait" />
          </div>
          <div className="visual-card">
            <p className="eyebrow">Profile</p>
            <h3>Front End Developer</h3>
            <p>
              Building interfaces that feel modern, calm, and easy to use on any screen size.
            </p>
          </div>
        </div>
      </section>

      <section className="highlights-grid">
        {highlights.map((item) => (
          <article className="glass-panel info-card" key={item.title}>
            <p className="eyebrow">Overview</p>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </section>

      <section className="content-section glass-panel" id="about">
        <div className="section-heading">
          <BlurText
            text="About Me"
            animateBy="letters"
            direction="top"
            delay={60}
            stepDuration={0.32}
            className="eyebrow section-animated-label"
          />
          <SplitText
            tag="h2"
            text="A simple, professional portfolio with a soft glass finish."
            className="section-animated-title"
            delay={22}
            duration={0.62}
            ease="power3.out"
            splitType="words"
            from={{ opacity: 0, y: 28, filter: 'blur(5px)' }}
            to={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            threshold={0.15}
            rootMargin="-100px"
            textAlign="left"
          />
        </div>
        <p>
          This portfolio is designed to present your identity clearly: your name, location, course,
          and front-end focus, all wrapped in a modern interface that uses light backgrounds,
          dark typography, and layered glass cards.
        </p>
      </section>

      <section className="split-layout">
        <div className="content-section glass-panel" id="skills">
          <div className="section-heading">
            <BlurText
              text="Skills"
              animateBy="letters"
              direction="top"
              delay={50}
              stepDuration={0.28}
              className="eyebrow section-animated-label"
            />
            <SplitText
              tag="h2"
              text="Tools and strengths"
              className="section-animated-title"
              delay={18}
              duration={0.58}
              ease="power3.out"
              splitType="words"
              from={{ opacity: 0, y: 24, filter: 'blur(4px)' }}
              to={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              threshold={0.12}
              rootMargin="-100px"
              textAlign="left"
            />
          </div>
          <GlassIcons items={glassIconItems} className="glass-icons-grid" />
          <div className="skill-grid">
            {skills.map((skill) => (
              <span className="skill-pill" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="content-section glass-panel contact-mini">
          <div className="section-heading">
            <BlurText
              text="Reach Out"
              animateBy="letters"
              direction="top"
              delay={50}
              stepDuration={0.28}
              className="eyebrow section-animated-label"
            />
            <SplitText
              tag="h2"
              text="Open for opportunities"
              className="section-animated-title"
              delay={18}
              duration={0.58}
              ease="power3.out"
              splitType="words"
              from={{ opacity: 0, y: 24, filter: 'blur(4px)' }}
              to={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              threshold={0.12}
              rootMargin="-100px"
              textAlign="left"
            />
          </div>
          <p>
            If you want a clean portfolio, a landing page, or a React interface with a glass look,
            you can reach me directly.
          </p>
          <a className="primary-button compact" href="mailto:tadeochristianprince@gmail.com">
            Email Prince
          </a>
        </div>
      </section>

      <section className="content-section glass-panel" id="projects">
        <div className="section-heading">
          <BlurText
            text="Selected Work"
            animateBy="letters"
            direction="top"
            delay={55}
            stepDuration={0.3}
            className="eyebrow section-animated-label"
          />
          <SplitText
            tag="h2"
            text="Portfolio-ready project slots"
            className="section-animated-title"
            delay={18}
            duration={0.58}
            ease="power3.out"
            splitType="words"
            from={{ opacity: 0, y: 24, filter: 'blur(4px)' }}
            to={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            threshold={0.12}
            rootMargin="-100px"
            textAlign="left"
          />
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.name}>
              <p className="project-type">{project.type}</p>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="tag-row">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-banner glass-panel" id="contact">
        <div>
          <BlurText
            text="Contact"
            animateBy="letters"
            direction="top"
            delay={50}
            stepDuration={0.28}
            className="eyebrow section-animated-label"
          />
          <SplitText
            tag="h2"
            text="Let us build something polished and memorable."
            className="section-animated-title"
            delay={20}
            duration={0.6}
            ease="power3.out"
            splitType="words"
            from={{ opacity: 0, y: 24, filter: 'blur(4px)' }}
            to={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            threshold={0.12}
            rootMargin="-100px"
            textAlign="left"
          />
        </div>
        <div className="contact-links">
          <a href="mailto:tadeochristianprince@gmail.com">tadeochristianprince@gmail.com</a>
          <a href="tel:+639319154737">09319154737</a>
          <span>Canlaon City, Negros Oriental</span>
        </div>
      </section>

      <footer className="footer-note">
        <p>Prince Christian T. Tampepe | BSIT Student | Front End Developer</p>
      </footer>
    </main>
  );
}

export default App;
