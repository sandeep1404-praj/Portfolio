"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/projects";
import { ArrowLeft, ArrowRight, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectDetail() {
  const { slug } = useParams();
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[projectIndex];

  if (!project) {
    return (
      <div className="flex h-screen items-center justify-center bg-white dark:bg-black text-black dark:text-white">
        <h1 className="text-2xl font-bold">Project not found</h1>
        <Link href="/projects" className="ml-4 text-blue-600 dark:text-blue-400 underline underline-offset-4">
          Back to Projects
        </Link>
      </div>
    );
  }

  const prevProject = projects[(projectIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-zinc-100 font-sans pb-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-16 pt-32">
        {/* Top Navigation */}
        <div className="flex items-center justify-between mb-12">
          <Link href="/projects" className="flex items-center gap-2 text-zinc-500 hover:text-black dark:hover:text-white transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Projects</span>
          </Link>
          <div className="bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/50 px-4 py-1.5 rounded-md text-sm font-medium text-zinc-500 dark:text-zinc-400">
            {project.year}
          </div>
        </div>

        {/* Header Image (Conditional) */}
        {project.headerImage && (
          <div className="relative w-full aspect-[21/9] rounded-3xl overflow-hidden mb-16 border border-zinc-200 dark:border-zinc-800">
            <Image 
              src={project.headerImage} 
              alt={`${project.title} header`} 
              fill 
              className="object-cover"
            />
          </div>
        )}

        {/* Title and Action */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-black dark:text-white">
            {project.title}
          </h1>
          {project.externalLink && (
             <a 
              href={project.externalLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full border border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 font-medium flex items-center gap-2"
            >
              Check it out
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
          {/* Default button if no link provided but we want the UI as in the image */}
          {!project.externalLink && (
             <button className="px-8 py-3 rounded-full border border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 font-medium whitespace-nowrap">
              Check it out
            </button>
          )}
        </div>

        {/* Project Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-7">
            <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
              {project.description}
            </p>
            
            {/* Tags/Technologies Pills */}
            <div className="flex flex-wrap gap-3 mt-10">
              {project.tags?.map((tag) => (
                <span key={tag} className="px-4 py-2 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm font-medium text-zinc-600 dark:text-zinc-400">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-8 md:pl-10">
            {project.roles && (
              <div className="flex gap-4">
                <span className="text-zinc-500 font-medium min-w-[80px]">Roles:</span>
                <span className="text-zinc-900 dark:text-zinc-200">{project.roles.join(" & ")}</span>
              </div>
            )}
            {project.client && (
              <div className="flex gap-4">
                <span className="text-zinc-500 font-medium min-w-[80px]">Client:</span>
                <span className="text-zinc-900 dark:text-zinc-200">{project.client}</span>
              </div>
            )}
          </div>
        </div>

        {/* Project Media (Images/Video) */}
        <div className="space-y-12 mb-32">
          {project.video && (
             <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 flex items-center justify-center">
                {/* Fallback pattern or video player logic here */}
                <p className="text-zinc-500 italic">Video: {project.video}</p>
             </div>
          )}
          
          {project.images?.map((img, idx) => (
            <div key={idx} className="relative w-full rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800">
              <Image 
                src={img} 
                alt={`${project.title} screenshot ${idx + 1}`} 
                width={1920} 
                height={1080}
                className="w-full object-cover"
              />
            </div>
          ))}

          {/* If no extra images array, but has a main image, show it if requested (the image after title) */}
          {!project.images && project.image && (
             <div className="relative w-full rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  width={1920} 
                  height={1080}
                  className="w-full object-cover bg-zinc-50 dark:bg-zinc-900"
                />
             </div>
          )}
        </div>

        {/* Detailed Sections (Conditional) */}
        <div className="space-y-32">
          {/* Features */}
          {project.features && (
            <div>
              <h2 className="text-3xl font-bold mb-10 pb-4 border-b border-zinc-200 dark:border-zinc-800 text-black dark:text-white">Features</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex gap-4 text-zinc-600 dark:text-zinc-400">
                    <span className="text-[#69d867] mt-1.5 flex-shrink-0">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies */}
          {project.technologies && (
            <div>
              <h2 className="text-3xl font-bold mb-10 pb-4 border-b border-zinc-200 dark:border-zinc-800 text-black dark:text-white">Technologies used</h2>
              <ul className="space-y-8">
                {project.technologies.map((tech, i) => (
                  <li key={i} className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 group">
                    <span className="text-[#69d867] hidden md:block opacity-0 group-hover:opacity-100 transition-opacity">•</span>
                    <span className="font-bold underline text-zinc-900 dark:text-white decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4">{tech.name}</span>
                    <span className="text-zinc-400 dark:text-zinc-500 hidden md:block">-</span>
                    <span className="text-zinc-600 dark:text-zinc-400">{tech.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Build Steps */}
          {project.buildSteps && (
            <div>
              <h2 className="text-3xl font-bold mb-10 pb-4 border-b border-zinc-200 dark:border-zinc-800 text-black dark:text-white">Build steps</h2>
              <div className="space-y-12">
                {project.buildSteps.map((step, i) => (
                  <div key={i} className="space-y-4">
                    <div className="flex gap-3 text-xl font-medium text-zinc-800 dark:text-zinc-300">
                      <span className="text-zinc-400 dark:text-zinc-500">{i + 1}.</span>
                      <span>{step.step}</span>
                    </div>
                    {step.command && (
                      <div className="relative group/code">
                        <div className="bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 p-6 rounded-xl font-mono text-sm sm:text-base text-zinc-600 dark:text-zinc-400 overflow-x-auto">
                           <div className="flex items-center justify-between">
                              <code>{step.command}</code>
                              <button 
                                onClick={() => {
                                  if (typeof navigator !== 'undefined' && navigator.clipboard) {
                                    navigator.clipboard.writeText(step.command);
                                  }
                                }}
                                className="opacity-0 group-hover/code:opacity-100 transition-opacity p-2 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-md"
                              >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                              </button>
                           </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer Navigation */}
        <div className="mt-40 pt-20 border-t border-zinc-100 dark:border-zinc-900 flex justify-between items-center">
            <Link 
              href={`/projects/${prevProject.slug}`}
              className="group flex flex-col items-start gap-4 p-6 rounded-2xl hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-all border border-transparent hover:border-zinc-200 dark:hover:border-zinc-800 min-w-[150px]"
            >
              <div className="flex items-center gap-2 text-zinc-500 group-hover:text-black dark:group-hover:text-zinc-100">
                <ChevronLeft className="w-4 h-4" />
                <span className="text-xs uppercase tracking-widest font-semibold">Prev</span>
              </div>
              <span className="text-lg font-bold text-zinc-700 dark:text-zinc-300 group-hover:text-black dark:group-hover:text-white transition-colors">{prevProject.title}</span>
            </Link>

            <div className="flex items-center gap-2">
               <div className="w-3 h-3 rounded-full bg-[#69d867] animate-pulse"></div>
               <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">Available for work</span>
            </div>

            <Link 
              href={`/projects/${nextProject.slug}`}
              className="group flex flex-col items-end gap-4 p-6 rounded-2xl hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-all border border-transparent hover:border-zinc-200 dark:hover:border-zinc-800 min-w-[150px] text-right"
            >
              <div className="flex items-center gap-2 text-zinc-500 group-hover:text-black dark:group-hover:text-zinc-100">
                <span className="text-xs uppercase tracking-widest font-semibold">Next</span>
                <ChevronRight className="w-4 h-4" />
              </div>
              <span className="text-lg font-bold text-zinc-700 dark:text-zinc-300 group-hover:text-black dark:group-hover:text-white transition-colors">{nextProject.title}</span>
            </Link>
        </div>
      </div>
    </div>
  );
}
