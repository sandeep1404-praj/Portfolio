'use client';
//not doing right now but this is the navbar component which will be used in the layout.js file to be rendered on all pages. It will have the links to the different pages and also the mode toggle button. It will also have a hamburger menu for mobile view which will open a full screen navigation menu with links to the different pages and also the mode toggle button.
import Link from "next/link";
import { ModeToggle } from "../ModeToggle";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import gsap from "gsap";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const linksRef = useRef([]);

  useEffect(() => {
    if (isMenuOpen) {
      // Menu slide in from left to center
      gsap.fromTo(menuRef.current, 
        { xPercent: -100, opacity: 0 },
        { xPercent: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      );
      
      // Stagger links animation
      gsap.fromTo(linksRef.current,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.4, stagger: 0.1, delay: 0.2, ease: "back.out(1.7)" }
      );
    }
  }, [isMenuOpen]);
  
  const isActive = (path) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  const closeMenu = () => {
    gsap.to(menuRef.current, {
      xPercent: -100,
      opacity: 0,
      duration: 0.4,
      ease: "power3.in",
      onComplete: () => setIsMenuOpen(false)
    });
  };

  return (
    <>
      <nav 
        className="navbar-container bg-white/80 dark:bg-black/80 backdrop-blur-md text-slate-900 dark:text-white sticky top-2 z-50 transition-all duration-300 border-b border-slate-200/50 dark:border-slate-800/50 shadow-sm rounded-4xl"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="nav-left">
              <Link href="/" className="text-2xl font-bold hover:text-blue-500 dark:hover:text-blue-400 transition" onClick={closeMenu}>
                SP
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <ModeToggle />
              
              {/* Mobile menu button */}
              <button
                onClick={() => isMenuOpen ? closeMenu() : setIsMenuOpen(true)}
                className="md:hidden p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all active:scale-95"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Desktop floating center navigation - RESTORED PREVIOUS LAPTOP VIEW */}
        <ul className="hidden md:flex fixed top-2 left-1/2 -translate-x-1/2 space-x-6 items-center z-[60] bg-white/90 dark:bg-black/90 backdrop-blur-md px-8 py-3 rounded-full border border-slate-200 dark:border-slate-700 shadow-md pointer-events-auto">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link href={link.path} className={`flex items-center gap-2 hover:text-blue-500 dark:hover:text-blue-400 transition text-sm ${isActive(link.path) ? 'text-blue-500 dark:text-blue-400' : 'text-slate-900 dark:text-white'}`}>
                {isActive(link.path) && <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>}
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div 
            ref={menuRef}
            className="md:hidden fixed inset-0 z-[100] bg-white dark:bg-black flex flex-col items-center justify-center"
          >
            <button 
              onClick={closeMenu}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 dark:bg-slate-800"
            >
              <X size={32} />
            </button>

            <ul className="flex flex-col space-y-8 text-center">
              {navLinks.map((link, idx) => (
                <li 
                  key={link.path}
                  ref={el => linksRef.current[idx] = el}
                >
                  <Link 
                    href={link.path} 
                    className={`text-5xl font-bold uppercase tracking-tighter ${
                      isActive(link.path) ? 'text-[#7fef6d]' : 'text-slate-900 dark:text-white'
                    }`}
                    onClick={closeMenu}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="absolute bottom-12 flex gap-8">
              <Link href="https://github.com" className="text-zinc-500 text-sm font-bold uppercase">Github</Link>
              <Link href="https://linkedin.com" className="text-zinc-500 text-sm font-bold uppercase">Linkedin</Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
