"use client";

import Image from "next/image";

export const TechStackMarquee = () => {
    return(<>
    <div className="mt-16 w-screen max-w-none relative left-1/2 right-1/2 -translate-x-1/2 px-0">
        <div className="relative overflow-hidden py-4">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-white dark:from-black to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-white dark:from-black to-transparent" />
          <div className="tech-marquee-track">
            {[...Array(2)].map((_, loopIdx) => (
              [
                { name: "Next.js", icon: "/skillsIcons/nextJsIcon.png" },
                { name: "React", icon: "/skillsIcons/reactIcon.jpeg" },
                { name: "Node.js", icon: "/skillsIcons/nodeJsIcon.jpeg" },
                { name: "Express.js", icon: "/skillsIcons/expressJsIcon.png" },
                { name: "MongoDB", icon: "/skillsIcons/mongoDBIcon.png" },
                { name: "Python", icon: "/skillsIcons/pythonIcon.jpeg" },
                { name: "C++", icon: "/skillsIcons/cppIcon.png" },
                { name: "Java", icon: "/skillsIcons/javaIcon].jpeg" },
                { name: "HTML", icon: "/skillsIcons/htmlIcon.png" },
                { name: "CSS", icon: "/skillsIcons/cssIcon.jpeg" },
                { name: "JavaScript", icon: "/skillsIcons/javascriptIcon.png" },
                { name: "Git", icon: "/skillsIcons/gitIcon.png" },
                { name: "GitHub", icon: "/skillsIcons/githubIcon.png" },
              ].map((tech, idx) => (
                <span
                  key={`${tech.name}-${loopIdx}-${idx}`}
                  className="mx-4 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-100/50 dark:bg-zinc-900/50 text-sm text-zinc-700 dark:text-zinc-300 whitespace-nowrap"
                >
                  <Image 
                    src={tech.icon} 
                    alt={tech.name} 
                    width={20} 
                    height={20} 
                    className="w-5 h-5 object-contain rounded-full mix-blend-multiply dark:mix-blend-screen dark:invert" 
                  />
                  <span>{tech.name}</span>
                </span>
              ))
            ))}
          </div>
        </div>
      </div>
    </>)
}