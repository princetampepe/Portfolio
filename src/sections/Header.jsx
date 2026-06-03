import { FiMoon, FiSun } from 'react-icons/fi';
import PillNav from '../components/PillNav';
import { siteLogo } from '../assets/portfolioAssets';

export default function Header({ activeHref, isDarkMode, mobilePerformanceMode, navItems, onToggleTheme }) {
  return (
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
        onClick={onToggleTheme}
      >
        {isDarkMode ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
      </button>
    </header>
  );
}
