"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="flex flex-col gap-6 sm:gap-8 w-full">
      {/* Greeting */}
      <div className="flex items-center gap-3 ">
        <Image
          src="/hand-23.svg"
          alt="Waving hand"
          width={30}
          height={30}
          className="w-7 h-6 sm:w-9 sm:h-9 animate-wave hand-green"
          priority
        />
        <p className="text-base sm:text-lg text-black dark:text-zinc-50">Hey! It's me Sandeep,</p>
      </div>

      {/* Main Heading */}
      <h1 className="font-Bungee text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] xl:text-[4.5rem] font-medium tracking-tight leading-[1.1] max-w-5xl">
        <span className="text-black dark:text-white">Crafting </span>
        <span className="text-[#7fef6d]">purpose driven<br />experiences</span>
        <span className="text-black dark:text-white"> that inspire<br />& engage.</span>
      </h1>

      {/* Description */}
      <div className="flex justify-end mt-4">
        <div className="flex items-center gap-4">
          <div className="h-px w-[65rem] bg-zinc-300 dark:bg-zinc-700"></div>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-xl text-right leading-relaxed">
            I work with brands globally to build pixel-perfect, engaging, and accessible digital experiences that drive results and achieve business goals.
          </p>
        </div>
      </div>

      {/* Footer Section with Social Links and Button */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-8 mt-12">
        {/* Social Links */}
        <div className="flex flex-wrap gap-6 hover:[&>a:not(:hover)]:text-zinc-400 hover:[&>a:not(:hover)]:dark:text-zinc-500">
          <Link 
            href="https://linkedin.com" 
            target="_blank"
            className="group flex items-center gap-2 text-sm text-black dark:text-white transition-colors hover:text-black hover:dark:text-white"
          >
            <span>LINKEDIN</span>
            <svg className="w-4 h-4 transform transition-transform group-hover:translate-x-1 stroke-current" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </Link>
          <Link 
            href="https://github.com" 
            target="_blank"
            className="group flex items-center gap-2 text-sm text-black dark:text-white transition-colors hover:text-black hover:dark:text-white"
          >
            <span>GITHUB</span>
            <svg className="w-4 h-4 transform transition-transform group-hover:translate-x-1 stroke-current" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </Link>
          <Link 
            href="https://instagram.com" 
            target="_blank"
            className="group flex items-center gap-2 text-sm text-black dark:text-white transition-colors hover:text-black hover:dark:text-white"
          >
            <span>INSTAGRAM</span>
            <svg className="w-4 h-4 transform transition-transform group-hover:translate-x-1 stroke-current" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </Link>
          <Link 
            href="mailto:your@email.com"
            className="group flex items-center gap-2 text-sm text-black dark:text-white transition-colors hover:text-black hover:dark:text-white"
          >
            <span>GMAIL</span>
            <svg className="w-4 h-4 transform transition-transform group-hover:translate-x-1 stroke-current" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </Link>
        </div>

        {/* Know me better button */}
        <Link href="/about">
          <button className="relative overflow-hidden px-8 py-3 rounded-full border border-black dark:border-zinc-700 text-sm font-medium group isolate">
            <span className="relative z-10 block text-black dark:text-white transition-transform duration-300 group-hover:-translate-y-full group-hover:opacity-0">
              Know me better
            </span>
            <span className="absolute inset-0 z-10 flex items-center justify-center translate-y-full text-white dark:text-black transition-transform duration-300 group-hover:translate-y-0">
              About Me
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
