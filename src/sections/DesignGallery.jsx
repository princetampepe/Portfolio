import { lazy, Suspense } from 'react';
import { designGalleryItems } from '../assets/portfolioAssets';
import AnimatedSectionHeading from '../components/shared/AnimatedSectionHeading';
import SectionLoader from '../components/shared/SectionLoader';
import { useHasEnteredViewport } from '../hooks/useHasEnteredViewport';

const CircularGallery = lazy(() => import('../components/CircularGallery'));

export default function DesignGallery({ mobilePerformanceMode }) {
  const [designsRef, showDesignGallery] = useHasEnteredViewport({ rootMargin: '360px 0px' });

  return (
    <section className="content-section glass-panel design-gallery-section" id="designs" ref={designsRef}>
      <div className="design-gallery-header">
        <AnimatedSectionHeading
          eyebrow="Design Moodboard"
          title="Interface inspiration with a product-minded edge"
          staticMode={mobilePerformanceMode}
        />
        <p>
          A curated gallery of visual studies, UI details, and digital product references that shape
          my sense of layout, polish, and interaction.
        </p>
      </div>
      <div className="design-gallery-frame">
        {showDesignGallery ? (
          <Suspense fallback={<SectionLoader label="Loading design gallery" />}>
            <CircularGallery
              items={designGalleryItems}
              bend={mobilePerformanceMode ? 1.25 : 3}
              textColor="#f9f9f9"
              borderRadius={0.07}
              scrollSpeed={mobilePerformanceMode ? 1.4 : 2.2}
              scrollEase={0.035}
              showLabels={false}
              autoScroll
              autoScrollSpeed={mobilePerformanceMode ? 0.01 : 0.018}
              pauseOnHover
            />
          </Suspense>
        ) : (
          <div className="gallery-preview-grid" aria-hidden="true">
            {designGalleryItems.slice(0, 6).map((item) => (
              <img src={item.image} alt="" loading="lazy" decoding="async" key={item.image} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
