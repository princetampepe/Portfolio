import BlurText from './components/BlurText';
import PillNav from './components/PillNav';
import SplitText from './components/SplitText';
import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { FiArrowRight, FiDownload, FiMail, FiMoon, FiSun } from 'react-icons/fi';

const CircularGallery = lazy(() => import('./components/CircularGallery'));
const LineWaves = lazy(() => import('./components/LineWaves'));
const LogoLoop = lazy(() => import('./components/LogoLoop'));
const ScrollStack = lazy(() => import('./components/ScrollStack'));

const profileImage = new URL('../my pic/Tampepe_ID.jpg', import.meta.url).href;
const darkProfileImage = new URL('../optimized/sunglasses-display.jpg', import.meta.url).href;
const resumeFile = new URL('../resume/PRINCE CHRISTIAN T. TAMPEPE.pdf', import.meta.url).href;
const siteLogo = new URL('../optimized/logo-display.jpg', import.meta.url).href;
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
const aiAgentProjectImage = new URL('../optimized/ai-agent-display.jpg', import.meta.url).href;
const abductedProjectImage = new URL('../projects pics/abducted.jpeg', import.meta.url).href;
const designImageModules = import.meta.glob('../pic for designs/*.{jpg,jpeg,png,webp}', {
  eager: true,
  query: '?url',
  import: 'default',
});

const designGalleryItems = Object.entries(designImageModules)
  .sort(([pathA], [pathB]) => pathA.localeCompare(pathB))
  .map(([path, image]) => {
    const fileName = path.split('/').pop()?.replace(/\.[^.]+$/, '') || 'Design Study';
    const text = fileName
      .replace(/[-_]+/g, ' ')
      .replace(/\s+/g, ' ')
      .replace(/\b(ai|ui|ux)\b/gi, (match) => match.toUpperCase())
      .trim();

    return {
      image,
      text: text.length > 34 ? `${text.slice(0, 31).trim()}...` : text,
    };
  });

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
    impact: 'Responsive business presentation with practical full-stack planning.',
    focus: 'UI structure, content hierarchy, and scalable website sections.',
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
    impact: 'Turns dense financial information into guided, readable actions.',
    focus: 'AI workflow mapping, assistant UX, and decision-support screens.',
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
    impact: 'Interactive gameplay prototype with atmosphere and feedback loops.',
    focus: 'Scene flow, player interaction, and expressive digital experience design.',
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
    impact: 'Reduces attendance friction through kiosk-first check-in planning.',
    focus: 'Kiosk UX, backup identity verification, and campus workflow design.',
    tags: ['Attendance', 'Kiosk', 'Biometrics'],
    accent: '#0f3460',
    mockup: 'kiosk',
  },
];

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Designs', href: '#designs' },
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

function useMobilePerformanceMode() {
  const [isPerformanceMode, setIsPerformanceMode] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(max-width: 760px), (prefers-reduced-motion: reduce)');
    const syncMode = () => setIsPerformanceMode(query.matches);

    syncMode();
    query.addEventListener('change', syncMode);

    return () => query.removeEventListener('change', syncMode);
  }, []);

  return isPerformanceMode;
}

function useHasEnteredViewport(options = {}) {
  const ref = useRef(null);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    if (hasEntered) return undefined;
    const element = ref.current;
    if (!element) return undefined;

    if (!('IntersectionObserver' in window)) {
      setHasEntered(true);
      return undefined;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      setHasEntered(true);
      observer.disconnect();
    }, options);

    observer.observe(element);
    return () => observer.disconnect();
  }, [hasEntered, options.rootMargin, options.threshold]);

  return [ref, hasEntered];
}

function StackCard({ children, itemClassName = '' }) {
  return <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>;
}

function SectionLoader({ label = 'Loading section' }) {
  return (
    <div className="section-loader" role="status" aria-label={label}>
      <span />
    </div>
  );
}

function AnimatedSectionHeading({ eyebrow, title, eyebrowDelay = 50, titleDelay = 18, staticMode = false }) {
  if (staticMode) {
    return (
      <div className="section-heading">
        <p className="eyebrow section-animated-label">{eyebrow}</p>
        <h2 className="section-animated-title">{title}</h2>
      </div>
    );
  }

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

function getInitialTheme() {
  if (typeof window === 'undefined') return 'light';

  try {
    const savedTheme = window.localStorage.getItem('portfolio-theme');
    if (savedTheme === 'dark' || savedTheme === 'light') return savedTheme;
  } catch {
    return 'light';
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function App() {
  const [activeHref, setActiveHref] = useState('#about');
  const [theme, setTheme] = useState(getInitialTheme);
  const projectSectionRef = useRef(null);
  const projectTrackRef = useRef(null);
  const [disciplinesRef, showDisciplines] = useHasEnteredViewport({ rootMargin: '360px 0px' });
  const [designsRef, showDesignGallery] = useHasEnteredViewport({ rootMargin: '360px 0px' });
  const [skillsRef, showLogoLoop] = useHasEnteredViewport({ rootMargin: '260px 0px' });
  const mobilePerformanceMode = useMobilePerformanceMode();
  const isDarkMode = theme === 'dark';

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    try {
      window.localStorage.setItem('portfolio-theme', theme);
    } catch {
      // Theme still works for this session when storage is unavailable.
    }
  }, [theme]);

  useEffect(() => {
    const syncHash = () => setActiveHref(window.location.hash || '#about');

    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target?.id) {
          setActiveHref(`#${visibleEntry.target.id}`);
        }
      },
      {
        rootMargin: '-32% 0px -58% 0px',
        threshold: [0.15, 0.4, 0.65],
      },
    );

    sections.forEach((section) => observer.observe(section));

    const handleHashChange = () => {
      syncHash();
    };

    syncHash();
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      observer.disconnect();
      window.removeEventListener('hashchange', handleHashChange);
    };
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

  useEffect(() => {
    const mobileQuery = window.matchMedia('(max-width: 760px)');
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const revealSelectors = [
      '.hero-copy',
      '.hero-visual',
      '.info-card',
      '.about-section',
      '.education-card',
      '.experience-card',
      '.discipline-card',
      '.design-gallery-section',
      '#skills',
      '.contact-mini',
      '.project-card',
      '.contact-banner',
    ].join(', ');

    let observer;
    let revealElements = [];

    const cleanup = () => {
      observer?.disconnect();
      observer = undefined;
      revealElements.forEach((element) => {
        element.classList.remove('mobile-reveal', 'is-visible');
      });
      revealElements = [];
    };

    const setup = () => {
      cleanup();
      if (!mobileQuery.matches || reducedMotionQuery.matches) return;

      revealElements = Array.from(document.querySelectorAll(revealSelectors));
      revealElements.forEach((element) => element.classList.add('mobile-reveal'));

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
      );

      revealElements.forEach((element) => observer.observe(element));
    };

    setup();
    mobileQuery.addEventListener('change', setup);
    reducedMotionQuery.addEventListener('change', setup);

    return () => {
      mobileQuery.removeEventListener('change', setup);
      reducedMotionQuery.removeEventListener('change', setup);
      cleanup();
    };
  }, []);

  return (
    <main className="page-shell">
      <div className="bg-effect" aria-hidden="true">
        {mobilePerformanceMode ? (
          <div className="mobile-static-bg" />
        ) : (
          <Suspense fallback={<div className="mobile-static-bg" />}>
            <LineWaves
              speed={0.28}
              innerLineCount={28}
              outerLineCount={34}
              warpIntensity={0.72}
              rotation={-34}
              edgeFadeWidth={0.08}
              colorCycleSpeed={0.3}
              brightness={0.5}
              color1={isDarkMode ? '#0B1020' : '#0A0A0A'}
              color2={isDarkMode ? '#14213D' : '#1A1A2E'}
              color3={isDarkMode ? '#E94560' : '#16213E'}
              enableMouseInteraction={true}
              mouseInfluence={1.2}
            />
          </Suspense>
        )}
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
          pillColor={isDarkMode ? '#101827' : '#F9F9F9'}
          hoveredPillTextColor="#F9F9F9"
          pillTextColor={isDarkMode ? '#F9F9F9' : '#1A1A2E'}
          initialLoadAnimation={!mobilePerformanceMode}
          particleCount={15}
          particleDistances={[90, 10]}
          particleR={100}
          initialActiveIndex={0}
          animationTime={600}
          timeVariance={300}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        />
        <button
          className="theme-toggle"
          type="button"
          aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          aria-pressed={isDarkMode}
          onClick={() => setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))}
        >
          {isDarkMode ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
        </button>
      </header>

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
            <img
              className="profile-image profile-image--dark"
              src={darkProfileImage}
              alt=""
              aria-hidden="true"
            />
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
              Gained practical exposure to professional workflows, technology operations, and
              workplace collaboration inside a data-focused company environment.
            </p>
          </div>
          <div className="experience-location">
            <span>Location</span>
            <strong>
              i2 Building, Ground Floor, Jose Del Mar Street, Cebu IT Park, Asiatown, Salinas
              Drive, Apas Lahug, Cebu City, 6000 Cebu, Philippines
            </strong>
          </div>
        </article>
      </section>

      <section className="content-section glass-panel stack-showcase" id="disciplines" ref={disciplinesRef}>
        <AnimatedSectionHeading
          eyebrow="How I Work"
          title="Disciplines that shape my product and design approach"
          staticMode={mobilePerformanceMode}
        />
        {showDisciplines ? (
          <Suspense fallback={<SectionLoader label="Loading work disciplines" />}>
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
                <StackCard itemClassName="discipline-card" key={discipline.title}>
                  <div className="discipline-copy">
                    <h3>{discipline.title}</h3>
                    <p>{discipline.text}</p>
                  </div>
                  <figure className="discipline-visual">
                    <img src={discipline.image} alt={discipline.alt} loading="lazy" decoding="async" />
                  </figure>
                </StackCard>
              ))}
            </ScrollStack>
          </Suspense>
        ) : (
          <div className="profile-scroll-stack profile-scroll-stack--placeholder">
            {disciplines.slice(0, 2).map((discipline) => (
              <StackCard itemClassName="discipline-card" key={discipline.title}>
                <div className="discipline-copy">
                  <h3>{discipline.title}</h3>
                  <p>{discipline.text}</p>
                </div>
                <figure className="discipline-visual">
                  <img src={discipline.image} alt={discipline.alt} loading="lazy" decoding="async" />
                </figure>
              </StackCard>
            ))}
          </div>
        )}
      </section>

      <section className="content-section glass-panel design-gallery-section" id="designs" ref={designsRef}>
        <div className="design-gallery-header">
          <AnimatedSectionHeading
            eyebrow="Design Moodboard"
            title="Interface inspiration with a product-minded edge"
            staticMode={mobilePerformanceMode}
          />
          <p>
            A curated gallery of visual studies, UI details, and digital product references that
            shape my sense of layout, polish, and interaction.
          </p>
        </div>
        <div className="design-gallery-frame">
          {showDesignGallery ? (
            <Suspense fallback={<SectionLoader label="Loading design gallery" />}>
              <CircularGallery
                items={designGalleryItems}
                bend={mobilePerformanceMode ? 1.25 : 3}
                textColor="#f9f9f9"
                borderRadius={0.07}
                scrollSpeed={mobilePerformanceMode ? 1.4 : 2.2}
                scrollEase={0.035}
                showLabels={false}
                autoScroll
                autoScrollSpeed={mobilePerformanceMode ? 0.01 : 0.018}
                pauseOnHover
              />
            </Suspense>
          ) : (
            <div className="gallery-preview-grid" aria-hidden="true">
              {designGalleryItems.slice(0, 6).map((item) => (
                <img src={item.image} alt="" loading="lazy" decoding="async" key={item.image} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="split-layout">
        <div className="content-section glass-panel" id="skills" ref={skillsRef}>
          <AnimatedSectionHeading
            eyebrow="Skills"
            title="Tools and strengths"
            staticMode={mobilePerformanceMode}
          />
          <div className="logo-loop-wrap">
            {mobilePerformanceMode ? (
              <div className="mobile-logo-grid" aria-label="Technology logos">
                {techLogos.slice(0, 6).map((logo) => (
                  <span key={logo.title}>
                    <img src={logo.src} alt={logo.alt} loading="lazy" decoding="async" />
                  </span>
                ))}
              </div>
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
              <div className="mobile-logo-grid logo-preview-grid" aria-label="Technology logos">
                {techLogos.slice(0, 6).map((logo) => (
                  <span key={logo.title}>
                    <img src={logo.src} alt={logo.alt} loading="lazy" decoding="async" />
                  </span>
                ))}
              </div>
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
                      <div>
                        <span>Impact</span>
                        <strong>{project.impact}</strong>
                      </div>
                      <div>
                        <span>Focus</span>
                        <strong>{project.focus}</strong>
                      </div>
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
            staticMode={mobilePerformanceMode}
          />
        </div>
          <div className="contact-links">
            <a href="mailto:tadeochristianprince@gmail.com">tadeochristianprince@gmail.com</a>
            <a href="tel:+639319154737">09319154737</a>
            <a href={resumeFile} target="_blank" rel="noreferrer">Resume PDF</a>
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
