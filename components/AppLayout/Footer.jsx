"use client";
import PopInOnView from "@/components/ui/PopInOnView";
import Link from "next/link";
import { usePathname } from "next/navigation";
import FooterIcons from "./FooterIcons";

export default function Footer() {
  const pathname = usePathname();
  if (pathname === '/contact') return  null;

  return (
    <div className="flex min-h-screen items-center justify-center bg-white font-sans dark:bg-black">
      <div className="flex min-h-screen w-full max-w-7xl flex-col justify-center py-24 px-6 sm:px-16 lg:px-15 bg-white dark:bg-black">
        <section className="mt-20 w-full">
        <div className="rounded-3xl bg-[#E3E3E3] dark:bg-[#111116]  p-12 sm:p-16 lg:p-20 flex flex-col items-center justify-center text-center min-h-[400px]">
          {/* Available for work badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 dark:bg-[#2a2a2a] border border-zinc-400 dark:border-zinc-700 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#7fef6d] animate-pulse"></span>
            <span className="text-sm text-zinc-700 dark:text-zinc-300">Available for work</span>
          </div>
          
          {/* Main heading with slow pop-in on enter */}
          <PopInOnView>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black dark:text-white leading-tight mb-10">
              Let's create your<br />next big idea.
            </h2>
          </PopInOnView>
          
          {/* Contact button */}
          <Link href="/contact">
            <button className="relative overflow-hidden px-8 py-3 rounded-full border border-black dark:border-zinc-700 text-sm font-medium group isolate">
              <span className="relative z-10 block text-black dark:text-white transition-transform duration-300 group-hover:-translate-y-full group-hover:opacity-0">
                Contact Me
              </span>
              <span className="absolute inset-0 z-10 flex items-center justify-center translate-y-full text-white dark:text-black transition-transform duration-300 group-hover:translate-y-0">
                Contact Me
              </span>
              <span
                className="pointer-events-none absolute -bottom-8 left-1/2 h-24 w-24 -translate-x-1/2 scale-0 opacity-0 rounded-full bg-black dark:bg-white origin-bottom transition-all duration-500 ease-out group-hover:scale-[3.2] group-hover:opacity-90"
                aria-hidden="true"
              />
            </button>
          </Link>
        </div>
    </section>
    <FooterIcons />
  </div>
</div>

  );
}
