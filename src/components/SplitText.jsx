import { useEffect, useMemo, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './SplitText.css';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const splitTextValue = (text, splitType) => {
  if (splitType === 'words') {
    return text.split(/(\s+)/).filter(Boolean);
  }

  if (splitType === 'lines') {
    return text.split('\n').filter(Boolean);
  }

  return Array.from(text);
};

const SplitText = ({
  tag = 'p',
  text = '',
  className = '',
  delay = 50,
  duration = 1.25,
  ease = 'power3.out',
  splitType = 'chars',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'center',
  onLetterAnimationComplete,
}) => {
  const ref = useRef(null);
  const animationCompletedRef = useRef(false);
  const onCompleteRef = useRef(onLetterAnimationComplete);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const segments = useMemo(() => splitTextValue(text, splitType), [text, splitType]);

  useEffect(() => {
    onCompleteRef.current = onLetterAnimationComplete;
  }, [onLetterAnimationComplete]);

  useEffect(() => {
    if (typeof document === 'undefined' || !document.fonts) {
      setFontsLoaded(true);
      return;
    }

    if (document.fonts.status === 'loaded') {
      setFontsLoaded(true);
    } else {
      document.fonts.ready.then(() => setFontsLoaded(true));
    }
  }, []);

  useGSAP(
    () => {
      if (!ref.current || !text || !fontsLoaded || animationCompletedRef.current) return;

      const el = ref.current;
      const targets = el.querySelectorAll('[data-split-segment]');

      if (!targets.length) return;

      const startPct = (1 - threshold) * 100;
      const marginMatch = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(rootMargin);
      const marginValue = marginMatch ? parseFloat(marginMatch[1]) : 0;
      const marginUnit = marginMatch ? marginMatch[2] || 'px' : 'px';
      const sign =
        marginValue === 0
          ? ''
          : marginValue < 0
            ? `-=${Math.abs(marginValue)}${marginUnit}`
            : `+=${marginValue}${marginUnit}`;
      const start = `top ${startPct}%${sign}`;

      const tween = gsap.fromTo(
        targets,
        { ...from },
        {
          ...to,
          duration,
          ease,
          stagger: delay / 1000,
          scrollTrigger: {
            trigger: el,
            start,
            once: true,
            fastScrollEnd: true,
            anticipatePin: 0.4,
          },
          onComplete: () => {
            animationCompletedRef.current = true;
            onCompleteRef.current?.();
          },
          willChange: 'transform, opacity',
          force3D: true,
        },
      );

      return () => {
        tween?.scrollTrigger?.kill();
        tween?.kill();
      };
    },
    {
      dependencies: [
        text,
        delay,
        duration,
        ease,
        splitType,
        JSON.stringify(from),
        JSON.stringify(to),
        threshold,
        rootMargin,
        fontsLoaded,
      ],
      scope: ref,
    },
  );

  const Tag = tag || 'p';
  const containerClassName = `split-text split-text--${splitType} ${className}`.trim();

  return (
    <Tag ref={ref} className={containerClassName} style={{ textAlign }}>
      {segments.map((segment, index) => {
        const isWhitespace = splitType === 'chars' && segment === ' ';
        const isWordBoundary = splitType === 'words' && /^\s+$/.test(segment);

        return (
          <span
            key={`${segment}-${index}`}
            data-split-segment
            className={`split-segment ${splitType === 'lines' ? 'split-segment--line' : ''}`.trim()}
            style={
              splitType === 'lines'
                ? { display: 'block' }
                : {
                    display: 'inline-block',
                    whiteSpace: isWhitespace || isWordBoundary ? 'pre' : 'normal',
                  }
            }
          >
            {segment}
            {splitType === 'words' && index < segments.length - 1 && !/^\s+$/.test(segments[index + 1] || '') ? '\u00A0' : ''}
          </span>
        );
      })}
    </Tag>
  );
};

export default SplitText;