'use client';

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CircularText from "@/components/ui/CircularText";

export default function AboutHero() {
  return (
    <div className="flex min-h-[calc(100vh-64px)] items-center justify-center bg-background font-sans">
      <main className="w-full max-w-7xl items-center justify-center px-4 sm:px-8 lg:px-12">
        <div className="grid w-full grid-cols-1 items-center gap-12 py-12 md:py-24 sm:grid-cols-2">
          {/* Portrait */}
          <div className="order-2 sm:order-1 mx-auto relative w-[260px] h-[340px] sm:w-[320px] sm:h-[440px] lg:w-[380px] lg:h-[520px] overflow-visible">
            <div className="relative w-full h-full rounded-t-none rounded-b-[38%] overflow-hidden shadow-2xl">
              <Image
                src="/My Photo/sandeep.png"
                alt="Portrait"
                width={800}
                height={1000}
                className="size-full object-cover"
                priority
              />
              {/* Radial gradient vignette */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
            </div>
            <div className="absolute -bottom-6 -right-6 sm:-bottom-10 sm:-right-10 w-28 h-28 sm:w-36 sm:h-36 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center shadow-xl p-1 sm:p-2">
              <CircularText
                text=" LETS TALK • LETS TALK • LETS TALK •"
                onHover="speedUp"
                spinDuration={20}
                className="text-[10px] sm:text-xs text-black dark:text-white"
              />
              <Link href={"/contact"}>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border border-black dark:border-white flex items-center justify-center bg-white dark:bg-gray-900 cursor-pointer">
                  <svg className="w-4 h-4 sm:w-6 sm:h-6 text-black dark:text-white -rotate-45 hover:rotate-0 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              </Link>
            </div>
          </div>

          {/* Copy */}
          <div className="order-1 sm:order-2 space-y-6 text-center sm:text-left">
            <h1 className="text-4xl leading-tight sm:text-5xl lg:text-7xl font-bold tracking-tight text-foreground">
              A <span className="text-emerald-500 dark:text-[#b5ff6D]">creative developer</span>
              <br />& digital Programmer
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto sm:mx-0">
              I collaborate with brands globally to design impactful, mission-focused websites that drive results and achieve business goals.
            </p>
            <div className="flex items-center justify-center sm:justify-start pt-4">
              <Link
                href="https://drive.google.com/file/d/1Fm9NeGMwW0FNdo6ecwbvLoJgU03lpY9i/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                passHref
              >
                <Button variant="outline" size="lg" className="rounded-full px-8 h-12">
                  My Resume
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
