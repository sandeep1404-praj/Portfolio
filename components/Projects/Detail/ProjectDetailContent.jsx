"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectDetailContent({ project, projectIndex, projectsCount, projects }) {
  if (!project) return null;

  const nextProject = projects[(projectIndex + 1) % projectsCount];
  const prevProject = projects[(projectIndex - 1 + projectsCount) % projectsCount];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white pb-20">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        {/* ... (Existing nav content) */}
      </nav>
      {/* (Rest of the detail content) */}
      {/* I will actually copy the whole file content into the replacement later */}
    </div>
  );
}
