import { useEffect } from 'react';

export function useHorizontalProjectScroll(sectionRef, trackRef) {
  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
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
  }, [sectionRef, trackRef]);
}
