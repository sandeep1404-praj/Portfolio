"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center md:items-start gap-6 sm:gap-8 w-full text-center md:text-left">
      {/* Greeting */}
      <div className="flex items-center gap-3 ">
        <Image
          src="/hand-23.svg"
          alt="Waving hand"
          width={30}
          height={30}
          className="w-6 h-6 animate-wave hand-green"
          priority
        />
        <p className="font-Oswald tracking-wider text-base sm:text-xl text-black dark:text-zinc-50">HEY! IT'S ME SANDEEP,</p>
      </div>

      {/* Main Heading */}
      <h1 className="font-Bungee text-[2.2rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] xl:text-[4.5rem] font-medium tracking-tight leading-[1.1] max-w-5xl">
        <span className="text-black dark:text-white">Crafting </span>
        <span className="text-[#7fef6d]">efficient solutions </span>
        <span className="text-black dark:text-white">that solve real problems & deliver impact.</span>
      </h1>

      {/* Description */}
      <div className="flex justify-center md:justify-end mt-4 w-full">
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="hidden md:block h-px flex-1 md:min-w-[400px] lg:min-w-[600px] bg-zinc-300 dark:bg-zinc-700"></div>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-xl text-center md:text-right leading-relaxed">
            I build efficient, scalable, and clean software solutions by combining strong problem-solving skills with practical engineering experience.  
          </p>
        </div>
      </div>

      {/* Footer Section with Social Links and Button */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-10 mt-12 w-full">
        {/* Social Links */}
        <div className="flex flex-wrap justify-center md:justify-start gap-6 hover:[&>a:not(:hover)]:text-zinc-400 hover:[&>a:not(:hover)]:dark:text-zinc-500">
          {[
            { name: "LINKEDIN", url: "https://www.linkedin.com/in/sandeep-prajapati-a01997224/" },
            { name: "GITHUB", url: "https://github.com/sandeep1404-praj" },
            { name: "INSTAGRAM", url: "https://www.instagram.com/official_sandeep.pr/" },
            { name: "GMAIL", url: "mailto:sandeep.prajapati0535@gmail.com" }
          ].map((link) => (
            <Link 
              key={link.name}
              href={link.url} 
              target="_blank"
              className="group flex items-center gap-2 text-sm text-black dark:text-white transition-colors hover:text-black hover:dark:text-white"
            >
              <span>{link.name}</span>
              <svg className="w-4 h-4 transform transition-transform group-hover:translate-x-1 stroke-current" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </Link>
          ))}
        </div>

        {/* Know me better button */}
        <Link href="/contact">
          <button className="relative overflow-hidden px-8 py-3 rounded-full border border-black dark:border-zinc-700 text-sm font-medium group isolate">
            <span className="relative z-10 block text-black dark:text-white transition-transform duration-300 group-hover:-translate-y-full group-hover:opacity-0">
              Know me better
            </span>
            <span className="absolute inset-0 z-10 flex items-center justify-center translate-y-full text-white dark:text-black transition-transform duration-300 group-hover:translate-y-0 uppercase">
              Contact Me
            </span>
            <span
              className="pointer-events-none absolute -bottom-8 left-1/2 h-24 w-24 -translate-x-1/2 scale-0 opacity-0 rounded-full bg-black dark:bg-white origin-bottom transition-all duration-500 ease-out group-hover:scale-[3.2] group-hover:opacity-90"
              aria-hidden="true"
            />
          </button>
        </Link>
      </div>
    </div>
  );
}
