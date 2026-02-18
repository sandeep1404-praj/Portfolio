'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }) {
  useEffect(() => {
    // Dynamic import to avoid SSR issues
    import('lenis').then((Lenis) => {
      const lenis = new Lenis.default({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true,
        smoothTouch: false,
        wheelMultiplier: 1.0,
      });

      // Sync ScrollTrigger with Lenis
      lenis.on('scroll', ScrollTrigger.update);

      // Expose lenis globally for ScrollToTop component
      window.lenis = lenis;

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      // Clean up on unmount
      return () => {
        lenis.destroy();
        window.lenis = null;
      };
    });
  }, []);

  return <>{children}</>;
}
