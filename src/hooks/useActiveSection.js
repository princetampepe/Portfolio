import { useEffect, useState } from 'react';

export function useActiveSection(navItems) {
  const [activeHref, setActiveHref] = useState('#about');

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
    syncHash();
    window.addEventListener('hashchange', syncHash);

    return () => {
      observer.disconnect();
      window.removeEventListener('hashchange', syncHash);
    };
  }, [navItems]);

  return activeHref;
}
