import { lazy, Suspense } from 'react';

const LineWaves = lazy(() => import('../components/LineWaves'));

export default function Background({ isDarkMode, mobilePerformanceMode }) {
  return (
    <>
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
    </>
  );
}
