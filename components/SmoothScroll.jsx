'use client';

import { useEffect } from 'react';
import gsap from 'gsap';

export default function SmoothScroll({ children }) {
  useEffect(() => {
    // Dynamic import to avoid SSR issues
    import('lenis').then((Lenis) => {
      const lenis = new Lenis.default({
        duration: 1.6,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true,
        smoothTouch: false,
        wheelMultiplier: 0.8,
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      let isScrolling = false;
      let scrollTimeout;

      let leftQuickTo, rightQuickTo, containerQuickTo;

      // Function to update navbar based on scroll position
      const updateNavbar = () => {
        const currentScroll = window.scrollY;
        const scrollRange = 210; // Increased from 80 to 300px for slower, smoother shrinking
        let progress = Math.min(currentScroll / scrollRange, 1);
        
        // Calculate animation values
        const maxShift = 10;
        const shift = progress * maxShift;
        
        const minWidth = 50;
        const maxWidth = 100;
        const newWidth = maxWidth - (progress * (maxWidth - minWidth));
        
        const maxMargin = 25;
        const sideMargin = progress * maxMargin;
        
        const topMargin = progress * 12;
        const shadowIntensity = progress;
        
        // Animate left element toward center
        if (leftQuickTo) {
          leftQuickTo(shift);
        }
        
        // Animate right element toward center
        if (rightQuickTo) {
          rightQuickTo(-shift);
        }
        
        // Animate container shrinking with smooth quickTo
        if (containerQuickTo) {
          containerQuickTo.update({
            width: newWidth,
            marginLeft: sideMargin,
            marginRight: sideMargin,
            marginTop: topMargin,
            boxShadow: `0 4px 12px rgba(0, 0, 0, ${0.1 * shadowIntensity})`
          });
        }
      };

      // Initialize GSAP quickTo animations
      const navLeft = document.querySelector('.nav-left');
      const navRight = document.querySelector('.nav-right');
      const navContainer = document.querySelector('.navbar-container');
      
      // Left element animation
      if (navLeft) {
        gsap.set(navLeft, { x: 0 });
        leftQuickTo = gsap.quickTo(navLeft, 'x', {
          duration: 3,
          ease: 'power1.out'
        });
      }
      
      // Right element animation
      if (navRight) {
        gsap.set(navRight, { x: 0 });
        rightQuickTo = gsap.quickTo(navRight, 'x', {
          duration: 3,
          ease: 'power1.out'
        });
      }
      
      // Container animation (width, margins, shadow)
      if (navContainer) {
        gsap.set(navContainer, {
          width: '100vw',
          marginLeft: '0vw',
          marginRight: '0vw',
          marginTop: '0px'
        });
        
        // Create quickTo for container animation
        containerQuickTo = {
          current: { width: 100, marginLeft: 0, marginRight: 0, marginTop: 0, boxShadow: 0 },
          update: function(values) {
            if (navContainer) {
              navContainer.style.width = `${values.width}vw`;
              navContainer.style.marginLeft = `${values.marginLeft}vw`;
              navContainer.style.marginRight = `${values.marginRight}vw`;
              navContainer.style.marginTop = `${values.marginTop}px`;
              navContainer.style.boxShadow = values.boxShadow;
            }
          }
        };
      }

      // Apply initial navbar state on page load (preserve position on refresh)
      updateNavbar();

      // Navbar scroll animation with progressive changes
      const handleScroll = () => {
        isScrolling = true;
        clearTimeout(scrollTimeout);
        updateNavbar();
      };

      window.addEventListener('scroll', handleScroll);

      // Stop animations when scrolling stops
      const stopScrolling = () => {
        scrollTimeout = setTimeout(() => {
          isScrolling = false;
        }, 150);
      };

      window.addEventListener('scroll', stopScrolling);

      return () => {
        lenis.destroy();
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('scroll', stopScrolling);
        clearTimeout(scrollTimeout);
      };
    });
  }, []);

  return <>{children}</>;
}
