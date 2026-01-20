'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function LoadingBar() {
  const [progress, setProgress] = useState(0);
  const [isPageLoading, setIsPageLoading] = useState(false);
  const [transitionStage, setTransitionStage] = useState('idle'); // idle, covering, loading, revealing
  const [showContent, setShowContent] = useState(false);
  const [showName1, setShowName1] = useState(false);
  const [showName2, setShowName2] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [isFirstVisit, setIsFirstVisit] = useState(false);
  const [showFirstAnimation, setShowFirstAnimation] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const [barbaInitialized, setBarbaInitialized] = useState(false);

  // Helper to hide content immediately
  const hideContent = () => {
    if (typeof document === 'undefined') return;
    const pageContent = document.querySelector('.page-content');
    if (pageContent) {
      pageContent.classList.remove('page-loaded');
      pageContent.classList.add('page-loading');
    }
  };

  // Sync transition stage with body class to force hide content
  useEffect(() => {
    if (typeof document === 'undefined') return;
    if (transitionStage !== 'idle') {
      document.body.classList.add('is-transitioning');
    } else {
      document.body.classList.remove('is-transitioning');
    }
  }, [transitionStage]);

  // Handle manual navigation intercept to trigger "Cover" animation
  useEffect(() => {
    if (typeof document === 'undefined') return;
    const handleAnchorClick = (e) => {
      let target = e.target;
      while (target && target.tagName !== 'A') target = target.parentElement;

      if (target && target.tagName === 'A') {
        const href = target.getAttribute('href');
        if (!href || href.startsWith('http') || href.startsWith('#') || target.getAttribute('target') === '_blank' || href === pathname) return;

        e.preventDefault();
        e.stopPropagation(); // Stop Next.js Link from triggering immediately
        
        setTransitionStage('covering');
        setIsPageLoading(true);
        setProgress(0);
        
        // Hide content strictly as soon as cover animation starts
        hideContent();
        
        setTimeout(() => {
          router.push(href);
        }, 1200); 
      }
    };

    document.addEventListener('click', handleAnchorClick, { capture: true });
    return () => document.removeEventListener('click', handleAnchorClick, { capture: true });
  }, [pathname, router]);

  // Check first visit
  useEffect(() => {
    if (typeof document === 'undefined' || typeof sessionStorage === 'undefined') return;
    const hasVisited = sessionStorage.getItem('hasVisited');
    if (!hasVisited) {
      setIsFirstVisit(true);
      setShowFirstAnimation(true);
      sessionStorage.setItem('hasVisited', 'true');
      document.body.style.overflow = 'hidden';
      hideContent(); // Ensure hidden on first visit
    } else {
      setIsFirstVisit(false);
      const pageContent = document.querySelector('.page-content');
      if (pageContent && transitionStage === 'idle') {
        pageContent.classList.add('page-loaded');
        pageContent.classList.remove('page-loading');
      }
    }
  }, [transitionStage]);

  // Initialize Barba
  useEffect(() => {
    if (typeof document === 'undefined' || barbaInitialized) return;
    try {
      import('@barba/core').then((barbaModule) => {
        const barba = barbaModule.default;
        barba.init({
          transitions: [{
            name: 'page-transition',
            leave: () => {
              setTransitionStage('covering');
              setIsPageLoading(true);
              hideContent();
              return new Promise(r => setTimeout(r, 1200));
            }
          }]
        });
        setBarbaInitialized(true);
      }).catch(() => setBarbaInitialized(true));
    } catch (e) { setBarbaInitialized(true); }
  }, [barbaInitialized]);

  // Handle Loading and Reveal
  useEffect(() => {
    if (isFirstVisit && showFirstAnimation) {
      setTimeout(() => setShowName1(true), 300);
      setTimeout(() => setShowName2(true), 900);
      setTimeout(() => setShowPortfolio(true), 1500);
    }

    // Immediately hide content on page change to prevent flash
    if (transitionStage !== 'idle') {
      hideContent();
    }

    let hasCompleted = false;
    const progressInterval = setInterval(() => {
      if (hasCompleted) return;
      const resources = performance.getEntriesByType('resource');
      const loaded = resources.filter(r => r.duration > 0).length;
      setProgress(Math.min((loaded / Math.max(resources.length, 1)) * 100, 95));
    }, 100);

    const handleLoad = () => {
      if (hasCompleted) return;
      hasCompleted = true;
      clearInterval(progressInterval);
      setProgress(100);
      
      // Delay reveal until content is actually ready in DOM
      const waitTime = (isFirstVisit && showFirstAnimation) ? 5500 : 300;
      
      setTimeout(() => {
        setTransitionStage('revealing');
        
        // Reveal content exactly when wipe starts
        if (typeof document !== 'undefined') {
          const pageContent = document.querySelector('.page-content');
          if (pageContent) {
            pageContent.classList.remove('page-loading', 'first-visit-loading');
            pageContent.classList.add('page-loaded');
            if (isFirstVisit) document.body.style.overflow = '';
          }
        }

        setTimeout(() => {
          setTransitionStage('idle');
          setIsPageLoading(false);
          setShowContent(true);
          setShowFirstAnimation(false);
        }, 1500);
      }, waitTime);
    };

    if (typeof document !== 'undefined') {
      if (document.readyState === 'complete') {
        setTimeout(handleLoad, 100);
      } else {
        window.addEventListener('load', handleLoad);
      }
    }

    return () => {
      hasCompleted = true;
      clearInterval(progressInterval);
      window.removeEventListener('load', handleLoad);
    };
  }, [pathname, isFirstVisit, showFirstAnimation]);

  return (
    <>
      {(isFirstVisit && showFirstAnimation) && (
        <div className={`fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center transition-opacity duration-1000 ${showContent ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <div className="text-center flex flex-col items-center justify-center">
            <h1 className={`text-5xl md:text-7xl font-bold text-green-500 mb-4 transition-all duration-[1200ms] ${showName1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>Sandeep</h1>
            <h2 className={`text-4xl md:text-6xl font-bold text-white mb-6 transition-all duration-[1200ms] ${showName2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>Prajapati</h2>
            <p className={`text-green-500/70 text-base md:text-lg uppercase tracking-[0.3em] transition-all duration-[1000ms] ${showPortfolio ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>Portfolio</p>
          </div>
        </div>
      )}

      {!showFirstAnimation && (
        <div className={`fixed inset-0 z-[9999] transition-overlay ${transitionStage}`} />
      )}

      {isPageLoading && !showFirstAnimation && (
        <div className="fixed top-0 left-0 right-0 z-[10000] h-1 bg-gray-800/30 overflow-hidden">
          <div className="h-full bg-green-500 transition-all duration-300" style={{ width: `${progress}%` }} />
        </div>
      )}

      <style jsx global>{`
        .transition-overlay {
          position: fixed;
          inset: 0;
          z-index: 9999;
          pointer-events: none;
          background: #000; /* Use pure black for perfect coverage */
          backdrop-filter: blur(0px);
          clip-path: inset(0 0 0 100%);
          opacity: 0;
          visibility: hidden;
          will-change: clip-path, backdrop-filter, opacity;
        }

        /* Ensure the overlay is always opaque when covering or loading */
        .transition-overlay.covering, 
        .transition-overlay.loading,
        .transition-overlay.revealing {
          background: #5de638ff;
          opacity: 1;
          visibility: visible;
        }

        .transition-overlay.covering {
          animation: coverWipe 1.2s cubic-bezier(0.85, 0, 0.15, 1) forwards;
          pointer-events: all;
        }

        .transition-overlay.loading {
          clip-path: inset(0 0 0 0);
          backdrop-filter: blur(25px);
          pointer-events: all;
        }

        .transition-overlay.revealing {
          animation: revealWipe 1.6s cubic-bezier(0.85, 0, 0.15, 1) forwards;
        }

        .transition-overlay.idle {
          opacity: 0;
          visibility: hidden;
          clip-path: inset(0 0 0 100%);
          pointer-events: none;
        }

        @keyframes coverWipe {
          0% { clip-path: inset(0 0 0 100%); backdrop-filter: blur(0px); opacity: 0.5; }
          100% { clip-path: inset(0 0 0 0); backdrop-filter: blur(25px); opacity: 1; }
        }

        @keyframes revealWipe {
          0% { clip-path: inset(0 0 0 0); backdrop-filter: blur(25px); opacity: 1; }
          100% { clip-path: inset(0 0 0 100%); backdrop-filter: blur(10px); opacity: 0; }
        }

        .page-content {
          opacity: 0;
          transform: translateY(30px) scale(0.97);
          will-change: opacity, transform;
          transition: 
            opacity 1.8s cubic-bezier(0.85, 0, 0.15, 1), 
            transform 1.8s cubic-bezier(0.85, 0, 0.15, 1);
        }
        
        /* Persistent hide during transition across page loads */
        body.is-transitioning .page-content:not(.page-loaded) {
          opacity: 0 !important;
          visibility: hidden;
          transform: translateY(30px) scale(0.97) !important;
        }

        .page-content.page-loaded {
          opacity: 1 !important;
          visibility: visible !important;
          transform: translateY(0) scale(1) !important;
        }

        /* Initial load visibility */
        .page-content:not(.page-loading):not(.page-loaded) {
          opacity: 1;
          transform: none;
        }
      `}</style>
    </>
  );
}
