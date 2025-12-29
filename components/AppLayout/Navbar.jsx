import Link from "next/link";
import { ModeToggle } from "../ModeToggle";

export default function Navbar() {
  return (
    <nav className="bg-white/80 dark:bg-black backdrop-blur-md text-slate-900 dark:text-white sticky top-1 z-50 transition-colors duration-300 border-b border-slate-200/50 dark:border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold hover:text-blue-500 dark:hover:text-blue-400 transition">
            SP
          </Link>
          <ul className="flex space-x-8">
            <li>
              <Link href="/" className="hover:text-blue-500 dark:hover:text-blue-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-500 dark:hover:text-blue-400 transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-blue-500 dark:hover:text-blue-400 transition">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-500 dark:hover:text-blue-400 transition">
                Contact
              </Link>
            </li>
          </ul>

          <div className="text-2xl font-bold">
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
