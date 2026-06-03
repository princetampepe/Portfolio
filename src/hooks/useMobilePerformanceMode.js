import { useEffect, useState } from 'react';

export function useMobilePerformanceMode() {
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
