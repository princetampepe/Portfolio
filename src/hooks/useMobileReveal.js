import { useEffect } from 'react';

export function useMobileReveal() {
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
}
