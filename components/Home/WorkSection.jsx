"use client";

import ScrollFloat from "@/components/ui/ScrollFloat";
import ShinyText from "@/components/ui/ShinyText";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";

export default function WorkSection() {
  return (
    <section className="mt-16 w-full">
      <ShinyText
        text="✨ MY WORK "
        speed={2}
        delay={0}
        color="#69d867ff"
        shineColor="#ffffff"
        spread={120}
        direction="left"
        yoyo={false}
        pauseOnHover={false}
      />

      <ScrollFloat
        duration={1.6}
      >
        Selected Projects
      </ScrollFloat>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-2xl mb-6">
        Here's a curated selection showcasing my expertise and the achieved results.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16 group/projects">
          {projects.slice(0, 4).map((project, index) => (
            <Link 
              href={project.link} 
              key={project.id} 
              className={`group/card cursor-pointer transition-all duration-500 ease-out group-hover/projects:opacity-40 group-hover/projects:blur-[2px] hover:!opacity-100 hover:!blur-none ${index % 2 === 1 ? 'md:mt-24' : ''}`}
            >
              <div className={`relative rounded-3xl ${project.bgColor} p-6 sm:p-8 h-[300px] sm:h-[480px] flex items-center justify-center overflow-hidden transition-all duration-500 group-hover/card:scale-[1.02] group-hover/card:shadow-2xl group-hover/card:shadow-[#7fef6d]/20`}>
                <div className="relative w-full max-w-[520px] aspect-[19/11] rounded-xl sm:rounded-2xl border-[6px] sm:border-[10px] border-zinc-400 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain rounded-2xl group-hover/card:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="mt-8 flex items-start justify-between px-2">
                <div>
                  <h3 className="text-1xl md:text-2xl font-bold text-black dark:text-zinc-50">{project.title}</h3>
                  <p className="text-base font-medium text-zinc-500 dark:text-zinc-400 mt-2 uppercase tracking-widest">{project.category}</p>
                </div>
                <span className="text-xl font-medium text-zinc-400 dark:text-zinc-500 tabular-nums">{project.year}</span>
              </div>
            </Link>
          ))}
        </div>
      <div className="mt-10 flex justify-center">
        <Link
          href="/projects"
          className="relative overflow-hidden px-8 py-3 rounded-full border border-black dark:border-zinc-700 text-sm font-medium group isolate"
        >
          <span className="relative z-10 block text-black dark:text-white transition-transform duration-300 group-hover:-translate-y-full group-hover:opacity-0">
            View all projects
          </span>
          <span className="absolute inset-0 z-10 flex items-center justify-center translate-y-full text-white dark:text-black transition-transform duration-300 group-hover:translate-y-0">
            View all projects
          </span>
          <span
            className="pointer-events-none absolute -bottom-8 left-1/2 h-24 w-24 -translate-x-1/2 scale-0 opacity-0 rounded-full bg-black dark:bg-white origin-bottom transition-all duration-500 ease-out group-hover:scale-[3.2] group-hover:opacity-90"
            aria-hidden="true"
          />
        </Link>
      </div>
    </section>
  );
}
