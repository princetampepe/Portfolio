import BlurText from './components/BlurText';
import LineWaves from './components/LineWaves';
import LogoLoop from './components/LogoLoop';
import PillNav from './components/PillNav';
import ScrollStack, { ScrollStackItem } from './components/ScrollStack';
import SplitText from './components/SplitText';
import { useEffect, useRef, useState } from 'react';

const profileImage = new URL('../my pic/Tampepe_ID.jpg', import.meta.url).href;
const resumeFile = new URL('../resume/Minimalist White and Grey Professional Resume.pdf', import.meta.url).href;
const siteLogo = new URL('../logo/logo.png', import.meta.url).href;
const chatGptLogo = new URL('../logos/chat gpt ㅣㅐ해 - Google 검색.jpg', import.meta.url).href;
const claudeLogo = new URL('../logos/Claude Logo - Claude Ai - Claude Code Sticker.jpg', import.meta.url).href;
const githubLogo = new URL('../logos/Dominando GitHub_ Tu guía completa para principiantes.jpg', import.meta.url).href;
const deepseekLogo = new URL('../logos/Why DeepSeek’s logo represents a new era of AI branding.jpg', import.meta.url).href;
const vscodeLogo = new URL('../logos/Visual Studio Code logo in vector format - Brandlogos_net.jpg', import.meta.url).href;
const linkedinLogo = new URL('../logos/Inloggen.jpg', import.meta.url).href;
const extraLogo = new URL('../logos/download (6).jpg', import.meta.url).href;
const uxDesignImage = new URL('../scroll stack pics/ux design.jpg', import.meta.url).href;
const productThinkingImage = new URL('../scroll stack pics/product thinking.jpg', import.meta.url).href;
const frontEndImage = new URL('../scroll stack pics/front end developing.jpg', import.meta.url).href;
const aiIntegrationImage = new URL('../scroll stack pics/ai integration.jpg', import.meta.url).href;
const userResearchImage = new URL('../scroll stack pics/user research.jpg', import.meta.url).href;
const interfaceDesignImage = new URL('../scroll stack pics/interface design.jpg', import.meta.url).href;
const aiAgentProjectImage = new URL('../projects pics/ai agent.png', import.meta.url).href;
const abductedProjectImage = new URL('../projects pics/abducted.jpeg', import.meta.url).href;

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

const skillGroups = [
  {
    title: 'Build',
    items: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Responsive UI'],
  },
  {
    title: 'Design',
    items: ['Figma', 'UX flows', 'Interface systems', 'Accessibility'],
  },
  {
    title: 'Product',
    items: ['AI-assisted workflows', 'Dashboards', 'Kiosk systems', 'Case study thinking'],
  },
];

const highlights = [
  {
    title: 'Front-end first',
    text: 'I build interfaces that are clean, responsive, and easy to scan under real user pressure.',
  },
  {
    title: 'Product aware',
    text: 'I think beyond screens: what the feature solves, who it helps, and how the flow should behave.',
  },
  {
    title: 'AI curious',
    text: 'I use AI as a practical layer for research, workflow ideas, and smarter product experiences.',
  },
];

const projects = [
  {
    name: 'Lifewood Website',
    type: 'Full-stack website',
    role: 'Full-stack developer',
    description: 'A complete web platform shaped around clean presentation, responsive layouts, and practical data-backed features.',
    outcome: 'Built as a polished business website experience with front-end structure and back-end thinking working together.',
    tags: ['Full Stack', 'Website', 'Responsive UI'],
    accent: '#0f766e',
    mockup: 'website',
  },
  {
    name: 'fAInance AI Agent',
    type: 'AI finance assistant',
    role: 'AI product designer',
    description: 'An assistant concept for finance workflows that helps users understand, organize, and act on financial information.',
    outcome: 'Designed around quick summaries, guided decisions, and simple next steps instead of overwhelming users with raw numbers.',
    tags: ['AI Agent', 'Finance', 'Automation'],
    accent: '#7c3aed',
    mockup: 'agent',
    image: aiAgentProjectImage,
    imageAlt: 'fAInance AI agent project preview',
  },
  {
    name: 'Abducted',
    type: 'Game development',
    role: 'Game developer',
    description: 'An interactive game project focused on atmosphere, player decisions, and a memorable gameplay loop.',
    outcome: 'Built to practice scene flow, tension, feedback, and player interaction inside a more expressive digital experience.',
    tags: ['Game Dev', 'Interactive', 'Gameplay'],
    accent: '#e11d48',
    mockup: 'game',
    image: abductedProjectImage,
    imageAlt: 'Abducted game project preview',
  },
  {
    name: 'Smart Campus Attendance System',
    type: 'Kiosk-based fingerprint backup',
    role: 'System designer',
    description: 'A campus attendance system with kiosk flow and fingerprint backup for faster, more reliable student check-ins.',
    outcome: 'Focused on reducing manual attendance friction while keeping a backup path for identity verification.',
    tags: ['Attendance', 'Kiosk', 'Biometrics'],
    accent: '#0f3460',
    mockup: 'kiosk',
  },
];

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const techLogos = [
  { src: chatGptLogo, alt: 'ChatGPT', title: 'ChatGPT' },
  { src: claudeLogo, alt: 'Claude', title: 'Claude' },
  { src: githubLogo, alt: 'GitHub', title: 'GitHub' },
  { src: deepseekLogo, alt: 'DeepSeek', title: 'DeepSeek' },
  { src: vscodeLogo, alt: 'Visual Studio Code', title: 'Visual Studio Code' },
  { src: linkedinLogo, alt: 'LinkedIn', title: 'LinkedIn' },
  { src: extraLogo, alt: 'Tech Logo', title: 'Tech Logo' },
];

const disciplines = [
  {
    title: 'UX Design',
    text: 'UX design helps me make each screen clear and intuitive, so users can move through tasks without confusion or extra effort.',
    image: uxDesignImage,
    alt: 'UX design workspace illustration',
  },
  {
    title: 'Product Thinking',
    text: 'Product thinking keeps me focused on outcomes, making sure every feature solves a real user problem and supports business goals.',
    image: productThinkingImage,
    alt: 'Product thinking concept image',
  },
  {
    title: 'Front-end Development',
    text: 'Front-end development lets me turn ideas into polished interfaces that are responsive, accessible, and consistent across devices.',
    image: frontEndImage,
    alt: 'Front-end development screen image',
  },
  {
    title: 'AI Integration',
    text: 'AI integration helps me design smarter experiences that assist users at the right moment without adding complexity.',
    image: aiIntegrationImage,
    alt: 'AI integration concept image',
  },
  {
    title: 'User Research',
    text: 'User research grounds my design decisions in evidence, so I can validate what people actually need before building.',
    image: userResearchImage,
    alt: 'User research process image',
  },
  {
    title: 'Interface Design',
    text: 'Interface design is where it all comes together, translating UX, product strategy, and technical constraints into a visual system users trust.',
    image: interfaceDesignImage,
    alt: 'Interface design concept image',
  },
];

function AnimatedSectionHeading({ eyebrow, title, eyebrowDelay = 50, titleDelay = 18 }) {
  return (
    <div className="section-heading">
      <BlurText
        text={eyebrow}
        animateBy="letters"
        direction="top"
        delay={eyebrowDelay}
        stepDuration={0.28}
        className="eyebrow section-animated-label"
      />
      <SplitText
        tag="h2"
        text={title}
        className="section-animated-title"
        delay={titleDelay}
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
  );
}

function App() {
  const [activeHref, setActiveHref] = useState('#about');
  const projectSectionRef = useRef(null);
  const projectTrackRef = useRef(null);

  useEffect(() => {
    const syncHash = () => {
      setActiveHref(window.location.hash || '#about');
    };

    syncHash();
    window.addEventListener('hashchange', syncHash);
    return () => window.removeEventListener('hashchange', syncHash);
  }, []);

  useEffect(() => {
    const section = projectSectionRef.current;
    const track = projectTrackRef.current;
    if (!section || !track) return undefined;

    let rafId = 0;
    const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

    const updateProjectScroll = () => {
      rafId = 0;
      const shouldUseVerticalProjects = window.matchMedia('(max-width: 760px)').matches;

      if (shouldUseVerticalProjects) {
        track.style.transform = 'translate3d(0, 0, 0)';
        section.style.setProperty('--project-progress', '0');
        return;
      }

      const viewport = section.querySelector('.project-viewport');
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const scrollRange = Math.max(1, section.offsetHeight - window.innerHeight);
      const progress = clamp((window.scrollY - sectionTop) / scrollRange, 0, 1);
      const visibleWidth = viewport?.clientWidth || window.innerWidth;
      const maxTranslate = Math.max(0, track.scrollWidth - visibleWidth);

      track.style.transform = `translate3d(${-maxTranslate * progress}px, 0, 0)`;
      section.style.setProperty('--project-progress', progress.toFixed(3));
    };

    const requestUpdate = () => {
      if (!rafId) rafId = requestAnimationFrame(updateProjectScroll);
    };

    updateProjectScroll();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
    };
  }, []);

  return (
    <main className="page-shell">
      <div className="bg-effect" aria-hidden="true">
        <LineWaves
          speed={0.28}
          innerLineCount={28}
          outerLineCount={34}
          warpIntensity={0.72}
          rotation={-34}
          edgeFadeWidth={0.08}
          colorCycleSpeed={0.3}
          brightness={0.5}
          color1="#0A0A0A"
          color2="#1A1A2E"
          color3="#16213E"
          enableMouseInteraction={true}
          mouseInfluence={1.2}
        />
      </div>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="topbar glass-panel">
        <PillNav
          logo={siteLogo}
          logoAlt="Prince Christian T. Tampepe logo"
          items={navItems}
          activeHref={activeHref}
          className="custom-nav"
          ease="power2.easeOut"
          baseColor="#1A1A2E"
          pillColor="#F9F9F9"
          hoveredPillTextColor="#F9F9F9"
          pillTextColor="#1A1A2E"
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
            tag="h2"
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

          <div className="hero-actions">
            <a className="primary-button" href={resumeFile} target="_blank" rel="noreferrer" download>
              <span>Download Resume</span>
            </a>
            <a className="secondary-button" href="mailto:tadeochristianprince@gmail.com">
              <span>Contact Me</span>
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
              Focused on React, product interfaces, AI-assisted workflows, and practical systems
              that people can actually use.
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

      <section className="content-section glass-panel about-section" id="about">
        <div className="about-grid">
          <div className="about-lead">
            <AnimatedSectionHeading
              eyebrow="About Me"
              title="I turn ideas into interfaces that feel clear, fast, and useful."
              eyebrowDelay={60}
              titleDelay={22}
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
              I work at the intersection of front-end development, UX design, and product thinking.
              I build with JavaScript, TypeScript, React, HTML, and CSS, then connect ideas to
              practical back-end and database tools like Firebase, Supabase, and Spring Boot when a
              project needs more than a static interface.
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

      <section className="content-section glass-panel" id="education">
        <AnimatedSectionHeading eyebrow="Education" title="Academic background" />
        <div className="education-grid">
          <div className="education-card">
            <p className="education-level">College</p>
            <h3>Cebu Technological University - Barili Campus</h3>
            <p>
              Graduate of Bachelor of Information Technology, with a focus on modern web
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

      <section className="content-section glass-panel stack-showcase" id="disciplines">
        <AnimatedSectionHeading
          eyebrow="How I Work"
          title="Disciplines that shape my product and design approach"
        />
        <ScrollStack
          className="profile-scroll-stack"
          itemDistance={130}
          itemScale={0.004}
          itemStackDistance={34}
          stackPosition="14%"
          scaleEndPosition="8%"
          baseScale={0.98}
          rotationAmount={0.12}
          blurAmount={0.06}
          useWindowScroll={true}
        >
          {disciplines.map((discipline) => (
            <ScrollStackItem itemClassName="discipline-card" key={discipline.title}>
              <div className="discipline-copy">
                <h3>{discipline.title}</h3>
                <p>{discipline.text}</p>
              </div>
              <figure className="discipline-visual">
                <img src={discipline.image} alt={discipline.alt} />
              </figure>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </section>

      <section className="split-layout">
        <div className="content-section glass-panel" id="skills">
          <AnimatedSectionHeading eyebrow="Skills" title="Tools and strengths" />
          <div className="logo-loop-wrap">
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
          <AnimatedSectionHeading eyebrow="Reach Out" title="Open for opportunities" />
          <p>
            If you want a clean portfolio, a landing page, or a React interface with a glass look,
            you can reach me directly.
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

      <section className="horizontal-projects" id="projects" ref={projectSectionRef}>
        <div className="projects-sticky glass-panel">
          <AnimatedSectionHeading
            eyebrow="Selected Work"
            title="Projects that move from idea to product"
            eyebrowDelay={55}
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
                  <div className="project-copy">
                    <p className="project-count">0{index + 1}</p>
                    <p className="project-type">{project.type}</p>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <div className="project-detail-grid">
                      <div>
                        <span>Role</span>
                        <strong>{project.role}</strong>
                      </div>
                      <div>
                        <span>Outcome</span>
                        <strong>{project.outcome}</strong>
                      </div>
                    </div>
                    <div className="tag-row">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div
                    className={`project-mockup project-mockup-${project.mockup} ${
                      project.image ? 'project-mockup-image' : ''
                    }`.trim()}
                  >
                    {project.image ? (
                      <img src={project.image} alt={project.imageAlt} />
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
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="contact-banner glass-panel" id="contact">
        <div>
          <AnimatedSectionHeading
            eyebrow="Contact"
            title="Let us build something polished and memorable."
          />
        </div>
        <div className="contact-links">
          <a href="mailto:tadeochristianprince@gmail.com">tadeochristianprince@gmail.com</a>
          <a href="tel:+639319154737">09319154737</a>
          <span>Canlaon City, Negros Oriental</span>
        </div>
      </section>

      <footer className="footer-note">
        <p>Prince Christian T. Tampepe | BSIT Graduate | Front End Developer</p>
      </footer>
    </main>
  );
}

export default App;
