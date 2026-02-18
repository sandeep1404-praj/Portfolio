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
        lerp: 0.08, // Subtle lerp for premium smoothness
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1.0,
        touchMultiplier: 1.5,
        infinite: false,
      });

      // Sync ScrollTrigger with Lenis
      lenis.on('scroll', ScrollTrigger.update);

      // Expose lenis globally for ScrollToTop component
      window.lenis = lenis;

      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });

      gsap.ticker.lagSmoothing(0);

      // Clean up on unmount
      return () => {
        lenis.destroy();
        window.lenis = null;
        gsap.ticker.remove(lenis.raf);
      };
    });
  }, []);

  return <>{children}</>;
}
