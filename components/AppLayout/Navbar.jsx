'use client';

import Link from "next/link";
import { ModeToggle } from "../ModeToggle";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  
  const isActive = (path) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  return (
    <>
      <nav 
        className="navbar-container bg-white/80 dark:bg-black backdrop-blur-md text-slate-900 dark:text-white sticky top-1 z-50 transition-all duration-300 border border-slate-200/50 dark:border-slate-800/50 shadow-sm"
        style={{ 
          width: '100vw',
          marginLeft: '0vw',
          marginRight: '0vw',
          borderRadius: '24px',
          marginTop: '0px'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <div className="nav-left">
              <Link href="/" className="text-2xl font-bold hover:text-blue-500 dark:hover:text-blue-400 transition">
                SP
              </Link>
            </div>

            <div className="nav-right ml-auto">
              <ModeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Fixed center navigation - completely independent from navbar */}
      <ul className="fixed top-4 left-1/2 -translate-x-1/2 flex space-x-6 items-center z-[60] bg-white/90 dark:bg-black/90 backdrop-blur-md px-8 py-3 rounded-full border border-slate-200 dark:border-slate-700 shadow-md pointer-events-auto">
        <li>
          <Link href="/" className={`flex items-center gap-2 hover:text-blue-500 dark:hover:text-blue-400 transition text-sm ${isActive('/') ? 'text-blue-500 dark:text-blue-400' : 'text-slate-900 dark:text-white'}`}>
            {isActive('/') && <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>}
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className={`flex items-center gap-2 hover:text-blue-500 dark:hover:text-blue-400 transition text-sm ${isActive('/about') ? 'text-blue-500 dark:text-blue-400' : 'text-slate-900 dark:text-white'}`}>
            {isActive('/about') && <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>}
            About
          </Link>
        </li>
        <li>
          <Link href="/projects" className={`flex items-center gap-2 hover:text-blue-500 dark:hover:text-blue-400 transition text-sm ${isActive('/projects') ? 'text-blue-500 dark:text-blue-400' : 'text-slate-900 dark:text-white'}`}>
            {isActive('/projects') && <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>}
            Projects
          </Link>
        </li>
        <li>
          <Link href="/contact" className={`flex items-center gap-2 hover:text-blue-500 dark:hover:text-blue-400 transition text-sm ${isActive('/contact') ? 'text-blue-500 dark:text-blue-400' : 'text-slate-900 dark:text-white'}`}>
            {isActive('/contact') && <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>}
            Contact
          </Link>
        </li>
      </ul>
    </>
  );
}
