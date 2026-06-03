import { useEffect, useRef, useState } from 'react';

export function useHasEnteredViewport(options = {}) {
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
