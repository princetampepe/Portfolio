import { lazy, Suspense } from 'react';
import AnimatedSectionHeading from '../components/shared/AnimatedSectionHeading';
import SectionLoader from '../components/shared/SectionLoader';
import StackCard from '../components/shared/StackCard';
import { disciplines } from '../data/portfolioData';
import { useHasEnteredViewport } from '../hooks/useHasEnteredViewport';

const ScrollStack = lazy(() => import('../components/ScrollStack'));

export default function Disciplines({ mobilePerformanceMode }) {
  const [disciplinesRef, showDisciplines] = useHasEnteredViewport({ rootMargin: '360px 0px' });

  return (
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
  );
}
