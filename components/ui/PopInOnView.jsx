'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function PopInOnView({
  children,
  className = '',
  start = 'top 80%',
  duration = 0.9,
  ease = 'power2.out',
  yFrom = 12,
  scaleFrom = 0.96,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const anim = gsap.fromTo(
      el,
      {
        opacity: 0,
        y: yFrom,
        scale: scaleFrom,
        willChange: 'opacity, transform',
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration,
        ease,
        overwrite: 'auto',
        scrollTrigger: {
          trigger: el,
          start,
          toggleActions: 'play none none none',
          markers: false,
        },
      }
    );

    return () => {
      anim?.kill();
      ScrollTrigger.getAll().forEach((t) => t?.kill());
    };
  }, [start, duration, ease, yFrom, scaleFrom]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
