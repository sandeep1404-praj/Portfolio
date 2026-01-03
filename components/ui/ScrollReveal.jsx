'use client'; 

import { useEffect, useRef, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = '',
  textClassName = '',
  rotationEnd = 'bottom bottom',
  wordAnimationEnd = 'bottom center'
}) => {
  const containerRef = useRef(null);

  const splitText = useMemo(() => {
    const text = typeof children === 'string' ? children : '';
    return text.split(/(\s+)/).map((word, index) => {
      if (word.match(/^\s+$/)) return word;
      return (
        <span className="inline-block word" key={index}>
          {word}
        </span>
      );
    });
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller = scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window;

    const wordElements = el.querySelectorAll('.word');

    // Word-by-word reveal with stagger synchronized to scroll
    gsap.fromTo(
      wordElements,
      { 
        opacity: baseOpacity,
        filter: enableBlur ? `blur(${blurStrength}px)` : 'blur(0px)',
        willChange: 'opacity, filter'
      },
      {
        ease: 'none',
        opacity: 1,
        filter: 'blur(0px)',
        stagger: 0.1,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: 'top center',
          end: wordAnimationEnd,
          scrub: 1.2,
          markers: false
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [scrollContainerRef, enableBlur, baseRotation, baseOpacity, blurStrength]);

  return (
    <h2 ref={containerRef} className={`my-5 ${containerClassName}`}>
      <p className={`text-[clamp(1rem,3vw,2rem)] leading-[1.8] ${textClassName}`}>{splitText}</p>
    </h2>
  );
};

export default ScrollReveal;
