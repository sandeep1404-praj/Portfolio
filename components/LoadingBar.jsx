'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import barba from 'barba';

export default function LoadingBar() {
  const [progress, setProgress] = useState(0);
  const [isPageLoading, setIsPageLoading] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showName1, setShowName1] = useState(false);
  const [showName2, setShowName2] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [isFirstVisit, setIsFirstVisit] = useState(false);
  const [showFirstAnimation, setShowFirstAnimation] = useState(false);
  const pathname = usePathname();
  const [barbaInitialized, setBarbaInitialized] = useState(false);

  // Check if this is the first visit (only runs once on mount)
  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisited');
    
    if (!hasVisited) {
      setIsFirstVisit(true);
      setShowFirstAnimation(true);
      sessionStorage.setItem('hasVisited', 'true');
      
      // Immediately hide page content on first visit
      document.body.style.overflow = 'hidden';
      const pageContent = document.querySelector('.page-content');
      if (pageContent) {
        pageContent.style.opacity = '0';
        pageContent.style.visibility = 'hidden';
      }
    } else {
      setIsFirstVisit(false);
      // Ensure content is visible for returning visitors
      const pageContent = document.querySelector('.page-content');
      if (pageContent) {
        pageContent.style.opacity = '1';
        pageContent.style.visibility = 'visible';
      }
    }
  }, []);

  // Initialize Barba.js
  useEffect(() => {
    if (barbaInitialized) return;

    try {
      // Configure Barba
      barba.init({
        prefetchIgnore: true,
        logEnabled: false,
        transitions: [
          {
            name: 'default-transition',
            leave: (data) => {
              return new Promise((resolve) => {
                setIsPageLoading(true);
                setProgress(0);

                const pageContent = document.querySelector('.page-content');
                if (pageContent) {
                  pageContent.classList.add('page-leaving');
                  setTimeout(() => {
                    pageContent.classList.remove('page-leaving');
                    resolve();
                  }, 600);
                } else {
                  resolve();
                }
              });
            },
            enter: (data) => {
              return new Promise((resolve) => {
                const pageContent = document.querySelector('.page-content');
                if (pageContent) {
                  pageContent.classList.add('page-entering');
                  setTimeout(() => {
                    pageContent.classList.remove('page-entering');
                    setShowContent(true);
                    setIsPageLoading(false);
                    resolve();
                  }, 600);
                } else {
                  setShowContent(true);
                  setIsPageLoading(false);
                  resolve();
                }
              });
            },
            once: (data) => {
              setShowContent(true);
              setIsPageLoading(false);
            }
          }
        ]
      });

      // Handle error
      barba.onError((error) => {
        console.error('Barba error:', error);
        window.location.href = window.location.href;
      });

      setBarbaInitialized(true);
    } catch (error) {
      console.warn('Barba.js initialization skipped:', error);
      setBarbaInitialized(true);
    }
  }, [barbaInitialized]);

  // Handle page loading and animations
  useEffect(() => {
    // Skip if Barba is not initialized yet
    if (!barbaInitialized && isFirstVisit && !showFirstAnimation) return;

    setIsPageLoading(true);
    setProgress(0);
    setShowContent(false);
    
    const pageContent = document.querySelector('.page-content');
    if (pageContent) {
      pageContent.classList.add('page-loading');
      pageContent.classList.remove('page-loaded');
      
      // Hide content initially on first visit
      if (isFirstVisit && showFirstAnimation) {
        pageContent.classList.add('first-visit-loading');
      }
    }
    
    if (isFirstVisit && showFirstAnimation) {
      setShowName1(false);
      setShowName2(false);
      setShowPortfolio(false);
      
      setTimeout(() => setShowName1(true), 300);
      setTimeout(() => setShowName2(true), 900);
      setTimeout(() => setShowPortfolio(true), 1500);
    }

    let resourcesLoaded = 0;
    let totalResources = 0;
    let hasCompleted = false;

    const updateProgress = () => {
      if (hasCompleted) return;
      
      const resources = performance.getEntriesByType('resource');
      totalResources = Math.max(resources.length, 1);
      resourcesLoaded = resources.filter(r => r.duration > 0).length;
      
      const calculatedProgress = Math.min((resourcesLoaded / totalResources) * 100, 95);
      setProgress(calculatedProgress);
    };

    updateProgress();
    const progressInterval = setInterval(updateProgress, 100);

    const handleLoad = () => {
      if (hasCompleted) return;
      hasCompleted = true;
      
      clearInterval(progressInterval);
      setProgress(100);
      
      const waitTime = (isFirstVisit && showFirstAnimation) ? 5100 : 500;
      
      setTimeout(() => {
        setShowContent(true);
        setIsPageLoading(false);
        if (showFirstAnimation) {
          setShowFirstAnimation(false);
        }
        
        const pageContent = document.querySelector('.page-content');
        if (pageContent) {
          pageContent.classList.remove('page-loading');
          pageContent.classList.remove('first-visit-loading');
          pageContent.classList.add('page-loaded');
          
          // Make content visible with a smooth transition after first animation
          if (isFirstVisit) {
            // Restore scrolling
            document.body.style.overflow = '';
            
            // Add smooth transition before making visible
            pageContent.style.transition = 'opacity 0.8s ease-out, visibility 0.8s ease-out';
            
            setTimeout(() => {
              pageContent.style.opacity = '1';
              pageContent.style.visibility = 'visible';
            }, 100);
          }
        }
      }, waitTime);
    };

    const safetyTimer = setTimeout(() => {
      handleLoad();
    }, (isFirstVisit && showFirstAnimation) ? 8000 : 3000);

    if (document.readyState === 'complete') {
      setTimeout(handleLoad, (isFirstVisit && showFirstAnimation) ? 500 : 200);
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      hasCompleted = true;
      clearInterval(progressInterval);
      window.removeEventListener('load', handleLoad);
      clearTimeout(safetyTimer);
    };
  }, [pathname, isFirstVisit, showFirstAnimation, barbaInitialized]);

  return (
    <>
      {/* Full screen loading overlay */}
      {(isFirstVisit && showFirstAnimation) && (
        <div 
          className={`fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center transition-all duration-1000 ${
            showContent ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
          style={{
            clipPath: showContent ? 'circle(0% at 50% 50%)' : 'circle(150% at 50% 50%)'
          }}
        >
          <div className="text-center flex flex-col items-center justify-center">
            <h1 
              className={`text-5xl md:text-7xl font-bold text-green-500 mb-4 transition-all duration-[1200ms] ease-out ${
                showName1 ? 'translate-x-0 translate-y-0 opacity-100 blur-0' : '-translate-x-32 translate-y-8 opacity-0 blur-sm'
              }`}
              style={{
                textShadow: showName1 ? '0 0 30px rgba(34, 197, 94, 0.5)' : 'none'
              }}
            >
              Sandeep
            </h1>
            <h2 
              className={`text-4xl md:text-6xl font-bold text-white mb-6 transition-all duration-[1200ms] ease-out ${
                showName2 ? 'translate-x-0 translate-y-0 opacity-100 blur-0' : 'translate-x-32 translate-y-8 opacity-0 blur-sm'
              }`}
              style={{
                textShadow: showName2 ? '0 0 20px rgba(255, 255, 255, 0.3)' : 'none'
              }}
            >
              Prajapati
            </h2>
            <p 
              className={`text-green-500/70 text-base md:text-lg uppercase tracking-[0.3em] transition-all duration-[1000ms] ease-out ${
                showPortfolio ? 'scale-100 translate-y-0 opacity-100 blur-0' : 'scale-75 translate-y-8 opacity-0 blur-sm'
              }`}
            >
              Portfolio
            </p>
          </div>

          <div className="fixed bottom-8 right-8 flex items-center gap-4">
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 rounded-full bg-green-500/20 animate-pulse-slow blur-md"></div>
              <svg 
                className="absolute inset-0 w-16 h-16 text-green-500 animate-spin-smooth" 
                viewBox="0 0 100 100"
              >
                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="10 5" opacity="0.3"/>
                {[...Array(8)].map((_, i) => (
                  <rect 
                    key={i}
                    x="47" 
                    y="2" 
                    width="6" 
                    height="12" 
                    fill="currentColor"
                    transform={`rotate(${i * 45} 50 50)`}
                    rx="2"
                  />
                ))}
                <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="3"/>
              </svg>
            </div>

            <div className="flex flex-col">
              <span className="text-green-500 text-4xl font-mono font-bold tabular-nums drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]">
                {Math.round(progress)}%
              </span>
              <span className="text-green-500/70 text-xs font-mono uppercase tracking-wider animate-pulse-subtle">
                Loading
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced page navigation loading bar */}
      {isPageLoading && !showFirstAnimation && (
        <div className="fixed top-0 left-0 right-0 z-[100] h-1 bg-gray-800/30 backdrop-blur-sm overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-green-400 via-green-500 to-emerald-400 transition-all duration-300 ease-out relative shadow-[0_0_10px_rgba(34,197,94,0.5)]"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-green-400/80 to-transparent blur-sm" />
          </div>

          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute top-1/2 -translate-y-1/2 w-1 h-1 bg-green-300 rounded-full animate-particle opacity-60 blur-[0.5px]"
              style={{
                left: `${progress}%`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: `${1 + i * 0.3}s`
              }}
            />
          ))}
        </div>
      )}

      {/* Enhanced page navigation loading bar */}
      {isPageLoading && !showFirstAnimation && (
        <div className="fixed top-0 left-0 right-0 z-[100] h-1 bg-gray-800/30 backdrop-blur-sm overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-green-400 via-green-500 to-emerald-400 transition-all duration-300 ease-out relative shadow-[0_0_10px_rgba(34,197,94,0.5)]"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-green-400/80 to-transparent blur-sm" />
          </div>

          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute top-1/2 -translate-y-1/2 w-1 h-1 bg-green-300 rounded-full animate-particle opacity-60 blur-[0.5px]"
              style={{
                left: `${progress}%`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: `${1 + i * 0.3}s`
              }}
            />
          ))}
        </div>
      )}

      <style jsx global>{`
        @keyframes spin-smooth {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }
        
        @keyframes pulse-subtle {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        
        @keyframes particle {
          0% {
            transform: translate(0, -50%) scale(1);
            opacity: 0.8;
          }
          50% {
            transform: translate(-30px, -70%) scale(1.5);
            opacity: 1;
          }
          100% {
            transform: translate(-60px, -100%) scale(0.5);
            opacity: 0;
          }
        }
        
        .animate-spin-smooth {
          animation: spin-smooth 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
        
        .animate-pulse-subtle {
          animation: pulse-subtle 2s ease-in-out infinite;
        }
        
        .animate-shimmer {
          animation: shimmer 1.5s ease-in-out infinite;
        }
        
        .animate-particle {
          animation: particle 1.5s ease-out infinite;
        }
        
        /* Enhanced page transition - smooth wipe with depth (theme-aware) */
        .page-content {
          position: relative;
          isolation: isolate;
          will-change: opacity, visibility;
        }
        
        /* Hide content initially on first visit */
        .page-content.first-visit-loading {
          opacity: 0 !important;
          visibility: hidden !important;
        }
        
        /* Page leaving animation */
        .page-content.page-leaving {
          animation: fadeOutPage 0.6s cubic-bezier(0.4, 0, 1, 1) forwards;
        }
        
        /* Page entering animation */
        .page-content.page-entering {
          animation: fadeInPage 0.6s cubic-bezier(0, 0, 0.2, 1) forwards;
        }
        
        .page-content::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: hsl(var(--background));
          backdrop-filter: blur(20px);
          z-index: 10;
          pointer-events: none;
          transition: none;
          will-change: transform, backdrop-filter;
        }
        
        .page-content.page-loading::before {
          background: hsl(var(--background));
          backdrop-filter: blur(20px);
          transform: translateX(0%) scale(1);
        }
        
        .page-content.page-loaded::before {
          animation: revealWipe 1s cubic-bezier(0.65, 0, 0.35, 1) forwards;
        }
        
        @keyframes fadeOutPage {
          0% {
            opacity: 1;
            filter: blur(0px);
          }
          100% {
            opacity: 0.4;
            filter: blur(5px);
          }
        }
        
        @keyframes fadeInPage {
          0% {
            opacity: 0.4;
            filter: blur(5px);
          }
          100% {
            opacity: 1;
            filter: blur(0px);
          }
        }
        
        @keyframes revealWipe {
          0% {
            transform: translateX(0%) scaleX(1);
            background: hsl(var(--background));
            backdrop-filter: blur(20px);
            opacity: 1;
          }
          15% {
            backdrop-filter: blur(18px);
          }
          40% {
            backdrop-filter: blur(12px);
          }
          70% {
            backdrop-filter: blur(5px);
          }
          85% {
            backdrop-filter: blur(2px);
            opacity: 0.8;
          }
          100% {
            transform: translateX(102%) scaleX(1.05);
            backdrop-filter: blur(0px);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}