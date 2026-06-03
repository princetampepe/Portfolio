import BlurText from '../BlurText';
import SplitText from '../SplitText';

export default function AnimatedSectionHeading({
  eyebrow,
  title,
  eyebrowDelay = 50,
  titleDelay = 18,
  staticMode = false,
}) {
  if (staticMode) {
    return (
      <div className="section-heading">
        <p className="eyebrow section-animated-label">{eyebrow}</p>
        <h2 className="section-animated-title">{title}</h2>
      </div>
    );
  }

  return (
    <div className="section-heading">
      <BlurText
        text={eyebrow}
        animateBy="letters"
        direction="top"
        delay={eyebrowDelay}
        stepDuration={0.28}
        className="eyebrow section-animated-label"
      />
      <SplitText
        tag="h2"
        text={title}
        className="section-animated-title"
        delay={titleDelay}
        duration={0.58}
        ease="power3.out"
        splitType="words"
        from={{ opacity: 0, y: 24, filter: 'blur(4px)' }}
        to={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        threshold={0.12}
        rootMargin="-100px"
        textAlign="left"
      />
    </div>
  );
}
