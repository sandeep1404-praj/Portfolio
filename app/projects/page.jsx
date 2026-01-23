"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ShinyText from "@/components/ui/ShinyText";
import ScrollFloat from "@/components/ui/ScrollFloat";
import { projects } from "@/lib/projects";
import { Sparkles } from "lucide-react";

const categories = ["All", ...new Set(projects.map(p => p.category))];

export default function Project() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projects.filter(project => 
    filter === "All" ? true : project.category === filter
  );

  return (
    <div className="flex min-h-screen items-center justify-center bg-white font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-7xl flex-col py-24 px-6 sm:px-16 bg-white dark:bg-black">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6 group">
              <Sparkles className="w-5 h-5 text-[#69d867] group-hover:rotate-12 transition-transform duration-300" />
              <ShinyText
                text="MY WORK"
                speed={2}
                delay={0}
                color="#69d867ff"
                shineColor="#ffffff"
                spread={120}
                direction="left"
                yoyo={false}
                pauseOnHover={false}
              />
            </div>
            <div className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
              <ScrollFloat animationDuration={1.6}>
                Creating unique Project
              </ScrollFloat>
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="flex bg-zinc-100 dark:bg-zinc-900/50 p-1.5 rounded-full border border-zinc-200 dark:border-zinc-800">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === cat
                    ? "bg-black text-white dark:bg-white dark:text-black shadow-lg shadow-black/10 dark:shadow-white/5"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16 group/projects">
          {filteredProjects.map((project, index) => (
            <Link 
              href={project.link} 
              key={project.id} 
              className={`group/card cursor-pointer transition-all duration-500 ease-out group-hover/projects:opacity-40 group-hover/projects:blur-[2px] hover:!opacity-100 hover:!blur-none ${index % 2 === 1 ? 'md:mt-24' : ''}`}
            >
              <div className={`relative rounded-3xl ${project.bgColor} p-8 h-[380px] sm:h-[480px] flex items-center justify-center overflow-hidden transition-all duration-500 group-hover/card:scale-[1.02] group-hover/card:shadow-2xl group-hover/card:shadow-[#7fef6d]/20`}>
                <div className="relative w-full h-full flex items-center justify-center ">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain p-2 group-hover/card:scale-105 transition-transform duration-700 "
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
      </main>
    </div>
  );
}
