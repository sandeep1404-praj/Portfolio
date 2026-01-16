'use client';

import { useState } from "react";
import Image from "next/image";
import ShinyText from "../ui/ShinyText";
import { experiences } from "@/lib/experiences";
import ScrollFloat from "../ui/ScrollFloat";

export default function ExperienceSection() {
  const [showAll, setShowAll] = useState(false);
  const [expandedId, setExpandedId] = useState(null);
  const displayedExperiences = showAll ? experiences : experiences.slice(0, 4);

  return (
    <section className="min-h-screen flex items-center justify-center bg-background px-4 py-20">
      <div className="w-full max-w-7xl">
        {/* Header */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Left Column */}
          <div className="space-y-6 md:sticky md:top-20 md:h-fit">
            <div className="flex items-center gap-2">
              <ShinyText
                text="✨ Work History"
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
            <ScrollFloat
              duration={1.6}
            >
              Experience

            </ScrollFloat>
            {/* <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground">
            </h2> */}
            <p className="text-lg text-muted-foreground leading-relaxed">
              I have worked with some of the most innovative industry leaders to help build their top-notch products.
            </p>
          </div>

          {/* Right Column - Experience List */}
          <div className="space-y-6">
            {displayedExperiences.map((exp) => (
              <div key={exp.id}>
                <div
                  onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
                  className="flex gap-4 pb-6 border-b border-border last:border-b-0 hover:opacity-80 transition-opacity cursor-pointer"
                >
                  {/* Icon/Avatar */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-full overflow-hidden flex items-center justify-center">
                    <Image
                      src={exp.icon}
                      alt={exp.company}
                      width={48}
                      height={48}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-[#F6F7FF] text-lg">{exp.title}</h3>
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-sm text-gray-900 dark:text-[#A9A9BD] hover:underline transition-all"
                    >
                      {exp.handle}
                    </a>
                  </div>

                  {/* Date - Right Aligned */}
                  <div className="flex-shrink-0 text-right text-sm font-medium text-muted-foreground">
                    {exp.period}
                  </div>
                </div>

                {/* Description - Expands on click */}
                {expandedId === exp.id && (
                  <div className="pb-6 pl-16 animate-in fade-in duration-300">
                    <p className="text-sm text-muted-foreground leading-relaxed text-[#A9A9BD]">{exp.Discription}</p>
                  </div>
                )}
              </div>
            ))}

            {/* Show More Button */}
            {!showAll && experiences.length > 4 && (
              <div className="pt-6 flex justify-center">
                <button
                  onClick={() => setShowAll(true)}
                  className="relative text-foreground font-medium group"
                >
                  Show More
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-[#b5ff6D] group-hover:w-full transition-all duration-300 ease-out"></span>
                </button>
              </div>
            )}

            {showAll && experiences.length > 4 && (
              <div className="pt-6 flex justify-center">
                <button
                  onClick={() => setShowAll(false)}
                  className="relative text-foreground font-medium group"
                >
                  Show Less
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-[#b5ff6D] group-hover:w-full transition-all duration-300 ease-out"></span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
