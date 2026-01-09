"use client";

import ScrollFloat from "@/components/ui/ScrollFloat";
import ShinyText from "@/components/ui/ShinyText";
import Image from "next/image";
import { useState } from "react";
import { TechStackMarquee } from "../ui/TechStackMarquee";

export default function SpecialitySection() {
  const [openAccordion, setOpenAccordion] = useState(0);

  return (
    <section className="mt-20 w-full">
      <ShinyText
        text="✨ SPECIALITY"
        speed={2}
        delay={0}
        color="#69d867ff"
        shineColor="#ffffff"
        spread={120}
        direction="left"
        yoyo={false}
        pauseOnHover={false}
      />
      
      <ScrollFloat duration={1.6}>
        Areas of Expertise
      </ScrollFloat>

      
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Accordion */}
        <div className="space-y-4">
          {[
            {
              icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 18L22 12L16 6" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 6L2 12L8 18" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ),
              title: "Development",
              content: "Building scalable web applications with modern technologies like React, Next.js, Node.js, and more. Focus on clean code, performance, and best practices.",
              image: "/Area of Experians/workspace.png"
            },
            {
              icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 19L19 12L22 15L15 22L12 19Z" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M18 13L16.5 5.5L2 2L5.5 16.5L13 18L18 13Z" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 2L9.586 9.586" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="11" cy="11" r="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ),
              title: "Data Structures & Algorithms",
              content: "Practicing core data structures and algorithms with a focus on improving problem-solving skills and time–space complexity analysis.",
              image: "/Area of Experians/DSA.png"
            },
            {
              icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 9H21" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 21V9" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ),
              title: "System & Product Development",
              content: "Designed concepts for real-world applications such as mentorship platforms and tracking systems, focusing on user needs and scalability.",
              image: "/Area of Experians/System & Product Development.png"
            }
          ].map((item, index) => (
            <div 
              key={index} 
              className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100/50 dark:bg-zinc-900/50 overflow-hidden"
            >
              <button 
                onClick={() => setOpenAccordion(openAccordion === index ? -1 : index)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <span className={`transition-colors duration-300 ${openAccordion === index ? 'text-[#7fef6d]' : 'text-black dark:text-white'}`}>{item.icon}</span>
                  <span className={`text-lg font-medium transition-colors duration-300 ${openAccordion === index ? 'text-[#7fef6d]' : 'text-black dark:text-white'}`}>{item.title}</span>
                </div>
                <svg 
                  className={`w-5 h-5 text-zinc-500 transition-transform duration-300 ${openAccordion === index ? 'rotate-180' : ''}`} 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                >
                  <path d="M6 9L12 15L18 9" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div 
                className={`grid transition-all duration-500 ease-out ${openAccordion === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-5 text-zinc-600 dark:text-zinc-400 transform transition-all duration-500 delay-100">
                    {item.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image */}
        <div className="relative rounded-2xl overflow-hidden h-[350px] lg:h-[400px] bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900">
          {[
            "/Area of Experians/workspace.png",
            "/Area of Experians/DSA.png", 
            "/Area of Experians/System & Product Development.png"
          ].map((src, index) => (
            <Image
              key={src}
              src={src}
              alt="Expertise showcase"
              fill
              className={`object-cover transition-all duration-700 ease-out ${
                openAccordion === index 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-95'
              }`}
            />
          ))}
          {openAccordion === -1 && (
            <Image
              src="/projects/workspace.png"
              alt="Workspace"
              fill
              className="object-cover transition-all duration-700 ease-out"
            />
          )}
        </div>
      </div>

      {/* Tech Stack Marquee */}
      <TechStackMarquee />
    </section>
  );
}
