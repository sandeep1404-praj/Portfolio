'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function LoadingBar() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [showName1, setShowName1] = useState(false);
  const [showName2, setShowName2] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [isFirstVisit, setIsFirstVisit] = useState(null); // null means checking
  const pathname = usePathname();

  useEffect(() => {
    // Function to get cookie value
    const getCookie = (name) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
      return null;
    };

    // Function to set session cookie (removed when tab is closed)
    const setCookie = (name, value) => {
      document.cookie = `${name}=${value};path=/`;
    };

    // Check if this is the first visit from cookie
    const hasVisited = getCookie('hasVisited');
    setIsFirstVisit(!hasVisited);
    
    if (!hasVisited) {
      // Set session cookie (will be removed when tab is closed)
      setCookie('hasVisited', 'true');
    }
  }, []);

  useEffect(() => {
    // Wait until we know if it's first visit
    if (isFirstVisit === null) return;

    // Reset states on route change
    setIsLoading(true);
    setShowContent(false);
    setShowName1(false);
    setShowName2(false);
    setShowPortfolio(false);
    setProgress(0);
    
    // Staggered text animation (only on first visit)
    if (isFirstVisit) {
      setTimeout(() => setShowName1(true), 0);
      setTimeout(() => setShowName2(true), 800);
      setTimeout(() => setShowPortfolio(true), 1600);
    }

    // Track real page loading progress
    let resourcesLoaded = 0;
    let totalResources = 0;
    let hasCompleted = false;

    const updateProgress = () => {
      if (hasCompleted) return;
      
      // Get all resources from performance API
      const resources = performance.getEntriesByType('resource');
      totalResources = Math.max(resources.length, 1);
      
      // Count loaded resources
      resourcesLoaded = resources.filter(r => r.duration > 0).length;
      
      // Calculate real progress percentage
      const calculatedProgress = Math.min((resourcesLoaded / totalResources) * 100, 95);
      setProgress(calculatedProgress);
    };

    // Initial progress check
    updateProgress();

    // Monitor resource loading
    const progressInterval = setInterval(updateProgress, 100);

    // Track actual document loading state
    const handleLoad = () => {
      if (hasCompleted) return;
      hasCompleted = true;
      
      clearInterval(progressInterval);
      setProgress(100);
      
      // If first visit, wait for animations to complete (3.1s) + 2 seconds hold
      // If not first visit, just wait briefly
      const waitTime = isFirstVisit ? 5100 : 800;
      
      setTimeout(() => {
        setShowContent(true);
      }, waitTime);
      
      setTimeout(() => {
        setIsLoading(false);
      }, waitTime + 500);
    };

    // Safety timer - force completion
    const safetyTimer = setTimeout(() => {
      handleLoad();
    }, isFirstVisit ? 8000 : 5000);

    // Check if already loaded
    if (document.readyState === 'complete') {
      setTimeout(handleLoad, isFirstVisit ? 500 : 300);
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      hasCompleted = true;
      clearInterval(progressInterval);
      window.removeEventListener('load', handleLoad);
      clearTimeout(safetyTimer);
    };
  }, [pathname, isFirstVisit]);

  return (
    <>
      {/* Full screen loading overlay - show on first visit with animations, or on checking/subsequent visits with just loading */}
      {(isFirstVisit === null || isLoading) && (
        <div 
        className={`fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center transition-all duration-1000 ${
          showContent ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
        style={{
          clipPath: showContent ? 'circle(0% at 50% 50%)' : 'circle(150% at 50% 50%)'
        }}
      >
        {/* Animated text - centered - only show on first visit */}
        {isFirstVisit && (
          <div className="text-center flex flex-col items-center justify-center">
            <h1 
              className={`text-5xl md:text-7xl font-bold text-green-500 mb-4 transition-all duration-[1500ms] ${
                showName1 ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
              }`}
            >
              Sandeep
            </h1>
            <h2 
              className={`text-4xl md:text-6xl font-bold text-white mb-6 transition-all duration-[1500ms] ${
                showName2 ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
              }`}
            >
              Prajapati
            </h2>
            <p 
              className={`text-green-500/70 text-base md:text-lg uppercase tracking-[0.3em] transition-all duration-[1500ms] ${
                showPortfolio ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
              }`}
            >
              Portfolio
            </p>
          </div>
        )}

        {/* Loading indicator at bottom right */}
        <div className="fixed bottom-8 right-8 flex items-center gap-4">
          {/* Spinning gear */}
          <div className="relative w-16 h-16">
            <svg 
              className="absolute inset-0 w-16 h-16 text-green-500 animate-spin-slow" 
              viewBox="0 0 100 100"
            >
              <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="10 5" opacity="0.3"/>
              {/* Gear teeth */}
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

          {/* Progress percentage */}
          <div className="flex flex-col">
            <span className="text-green-500 text-4xl font-mono font-bold tabular-nums">
              {Math.round(progress)}%
            </span>
            <span className="text-green-500/70 text-xs font-mono uppercase tracking-wider">
              Loading
            </span>
          </div>
        </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }
        
        .animate-spin-reverse {
          animation: spin-reverse 3s linear infinite;
        }
        
        .page-content {
          animation: fadeInBlur 1s ease-out forwards;
          animation-delay: 0.3s;
          opacity: 0;
          filter: blur(10px);
          transform: translateX(-30px);
        }
        
        @keyframes fadeInBlur {
          0% {
            opacity: 0;
            filter: blur(10px);
            transform: translateX(-30px);
          }
          100% {
            opacity: 1;
            filter: blur(0);
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}
