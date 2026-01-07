"use client";

import ScrollFloat from "@/components/ui/ScrollFloat";
import ShinyText from "@/components/ui/ShinyText";
import Image from "next/image";
import Link from "next/link";

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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 group/projects">
        {[
          {
            id: 1,
            title: "Aora",
            category: "Development",
            year: "2024",
            image: "/projects/arora.png",
            bgColor: "bg-[#FFF9E6] dark:bg-[#2a2a1a]",
            link: "/projects/aora"
          },
          {
            id: 2,
            title: "Code Screenshot",
            category: "Development & Design",
            year: "2024",
            image: "/projects/code-screenshot.png",
            bgColor: "bg-[#E8E0D8] dark:bg-[#2a2622]",
            link: "/projects/code-screenshot"
          },
          {
            id: 3,
            title: "iPhone 15 Pro",
            category: "Development & Design",
            year: "2024",
            image: "/projects/iphone-15-pro.png",
            bgColor: "bg-[#F5F5F5] dark:bg-[#1a1a1a]",
            link: "/projects/iphone-15-pro"
          },
          {
            id: 4,
            title: "Ochi Design",
            category: "Development & Design",
            year: "2024",
            image: "/projects/ochi-design.png",
            bgColor: "bg-[#D4F5E9] dark:bg-[#1a2a22]",
            link: "/projects/ochi-design"
          }
        ].map((project, index) => (
          <Link 
            href={project.link} 
            key={project.id} 
            className={`group/card cursor-pointer transition-all duration-500 ease-out group-hover/projects:opacity-40 group-hover/projects:blur-[2px] hover:!opacity-100 hover:!blur-none ${index % 2 === 1 ? 'md:mt-16' : ''}`}
          >
            <div className={`relative rounded-2xl ${project.bgColor} p-8 h-[320px] sm:h-[380px] flex items-center justify-center overflow-hidden transition-all duration-500 group-hover/card:scale-[1.02] group-hover/card:shadow-2xl group-hover/card:shadow-[#7fef6d]/20`}>
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain p-4 "
                />
              </div>
            </div>
            <div className="mt-4 flex items-start justify-between">
              <div>
                <h3 className="text-xl font-semibold text-black dark:text-zinc-50">{project.title}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">{project.category}</p>
              </div>
              <span className="text-sm text-zinc-600 dark:text-zinc-400">{project.year}</span>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <button className="relative overflow-hidden px-8 py-3 rounded-full border border-black dark:border-zinc-700 text-sm font-medium group isolate">
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
        </button>
      </div>
    </section>
  );
}
