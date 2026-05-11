import BlurText from './components/BlurText';
import LineWaves from './components/LineWaves';
import LogoLoop from './components/LogoLoop';
import PillNav from './components/PillNav';
import ScrollStack, { ScrollStackItem } from './components/ScrollStack';
import SplitText from './components/SplitText';
import { useEffect, useState } from 'react';

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
    title: 'BSIT Graduate',
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
            text="Modern glass UI built for a clean, bright first impression."
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
            text="I am Prince Christian T. Tampepe from Canlaon City, Negros Oriental. I build modern front-end experiences with React, thoughtful spacing, and a polished visual style that feels professional and easy to explore. I enjoy turning ideas into clear, user-friendly interfaces that balance visual appeal with usability, performance, and accessibility. My goal is to create digital products that not only look clean and modern, but also help people complete tasks smoothly and confidently across different devices."
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
        <AnimatedSectionHeading
          eyebrow="About Me"
          title="A simple, professional portfolio with a soft glass finish."
          eyebrowDelay={60}
          titleDelay={22}
        />
        <p>
          I&apos;m a UX designer and aspiring product manager exploring the intersection of design,
          technology, and artificial intelligence. Through my studies at Uxcel (uxcel.com), I&apos;m
          building a foundation in user-centered design principles and product strategy, with a
          particular focus on how AI can enhance user experiences without adding complexity. I
          believe the best interfaces are invisible, they anticipate needs, remove friction, and
          feel effortless. Based in Manila, I&apos;m passionate about creating digital products that
          are both thoughtfully designed and technically sound, bridging the gap between what users
          need and what technology can deliver.
        </p>
      </section>

      <section className="content-section glass-panel" id="education">
        <AnimatedSectionHeading eyebrow="Education" title="Bachelor of Information Technology" />
        <div className="education-card">
          <h3>Cebu Technological University</h3>
          <p>
            Graduate of Bachelor of Information Technology from Cebu Technological University,
            with a focus on modern web development, interface design, and practical software skills.
          </p>
        </div>
      </section>

      <section className="content-section glass-panel stack-showcase" id="disciplines">
        <AnimatedSectionHeading
          eyebrow="How I Work"
          title="Disciplines that shape my product and design approach"
        />
        <ScrollStack
          className="profile-scroll-stack"
          itemDistance={80}
          itemScale={0.035}
          itemStackDistance={24}
          stackPosition="22%"
          scaleEndPosition="8%"
          baseScale={0.88}
          rotationAmount={0.4}
          blurAmount={0.35}
          useWindowScroll={true}
        >
          <ScrollStackItem itemClassName="discipline-card">
            <h3>UX Design</h3>
            <p>
              UX design helps me make each screen clear and intuitive, so users can move through
              tasks without confusion or extra effort.
            </p>
          </ScrollStackItem>
          <ScrollStackItem itemClassName="discipline-card">
            <h3>Product Thinking</h3>
            <p>
              Product thinking keeps me focused on outcomes, making sure every feature solves a
              real user problem and supports business goals.
            </p>
          </ScrollStackItem>
          <ScrollStackItem itemClassName="discipline-card">
            <h3>Front-end Development</h3>
            <p>
              Front-end development lets me turn ideas into polished interfaces that are
              responsive, accessible, and consistent across devices.
            </p>
          </ScrollStackItem>
          <ScrollStackItem itemClassName="discipline-card">
            <h3>AI Integration</h3>
            <p>
              AI integration helps me design smarter experiences that assist users at the right
              moment without adding complexity.
            </p>
          </ScrollStackItem>
          <ScrollStackItem itemClassName="discipline-card">
            <h3>User Research</h3>
            <p>
              User research grounds my design decisions in evidence, so I can validate what people
              actually need before building.
            </p>
          </ScrollStackItem>
          <ScrollStackItem itemClassName="discipline-card">
            <h3>Interface Design</h3>
            <p>
              Interface design is where it all comes together, translating UX, product strategy,
              and technical constraints into a visual system users trust.
            </p>
          </ScrollStackItem>
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
        </div>

        <div className="content-section glass-panel contact-mini">
          <AnimatedSectionHeading eyebrow="Reach Out" title="Open for opportunities" />
          <p>
            If you want a clean portfolio, a landing page, or a React interface with a glass look,
            you can reach me directly.
          </p>
          <a className="primary-button compact" href="mailto:tadeochristianprince@gmail.com">
            <span>Email Prince</span>
          </a>
        </div>
      </section>

      <section className="content-section glass-panel" id="projects">
        <AnimatedSectionHeading
          eyebrow="Selected Work"
          title="Portfolio-ready project slots"
          eyebrowDelay={55}
        />
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
        <p>Prince Christian T. Tampepe | BSIT Student | Front End Developer</p>
      </footer>
    </main>
  );
}

export default App;
