import { useRef } from 'react';
import { navItems } from './data/portfolioData';
import { useActiveSection } from './hooks/useActiveSection';
import { useHorizontalProjectScroll } from './hooks/useHorizontalProjectScroll';
import { useMobilePerformanceMode } from './hooks/useMobilePerformanceMode';
import { useMobileReveal } from './hooks/useMobileReveal';
import { useTheme } from './hooks/useTheme';
import About from './sections/About';
import Background from './sections/Background';
import ContactFooter from './sections/ContactFooter';
import DesignGallery from './sections/DesignGallery';
import Disciplines from './sections/Disciplines';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Header from './sections/Header';
import Hero from './sections/Hero';
import Highlights from './sections/Highlights';
import Projects from './sections/Projects';
import SkillsContact from './sections/SkillsContact';

function App() {
  const projectSectionRef = useRef(null);
  const projectTrackRef = useRef(null);
  const activeHref = useActiveSection(navItems);
  const mobilePerformanceMode = useMobilePerformanceMode();
  const { isDarkMode, toggleTheme } = useTheme();

  useHorizontalProjectScroll(projectSectionRef, projectTrackRef);
  useMobileReveal();

  return (
    <main className="page-shell">
      <Background isDarkMode={isDarkMode} mobilePerformanceMode={mobilePerformanceMode} />
      <Header
        activeHref={activeHref}
        isDarkMode={isDarkMode}
        mobilePerformanceMode={mobilePerformanceMode}
        navItems={navItems}
        onToggleTheme={toggleTheme}
      />
      <Hero mobilePerformanceMode={mobilePerformanceMode} />
      <Highlights />
      <About mobilePerformanceMode={mobilePerformanceMode} />
      <Education mobilePerformanceMode={mobilePerformanceMode} />
      <Experience mobilePerformanceMode={mobilePerformanceMode} />
      <Disciplines mobilePerformanceMode={mobilePerformanceMode} />
      <DesignGallery mobilePerformanceMode={mobilePerformanceMode} />
      <SkillsContact mobilePerformanceMode={mobilePerformanceMode} />
      <Projects
        mobilePerformanceMode={mobilePerformanceMode}
        projectSectionRef={projectSectionRef}
        projectTrackRef={projectTrackRef}
      />
      <ContactFooter mobilePerformanceMode={mobilePerformanceMode} />
    </main>
  );
}

export default App;
