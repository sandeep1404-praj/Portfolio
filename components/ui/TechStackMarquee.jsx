
"use client";

import Image from "next/image";

const technologies = [
  // Programming Languages
  {
    name: "C",
    icon: "https://cdn.simpleicons.org/c",
  },
  {
    name: "C++",
    icon: "https://cdn.simpleicons.org/cplusplus",
  },
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  },
  {
    name: "Python",
    icon: "https://cdn.simpleicons.org/python",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.simpleicons.org/javascript",
  },
  {
    name: "HTML5",
    icon: "https://cdn.simpleicons.org/html5",
  },
  {
    name: "CSS",
    icon: "https://cdn.simpleicons.org/css",
  },

  // Full Stack Development
  {
    name: "React",
    icon: "https://cdn.simpleicons.org/react",
  },
  {
    name: "Next.js",
    icon: "https://cdn.simpleicons.org/nextdotjs",
  },
  {
    name: "Node.js",
    icon: "https://cdn.simpleicons.org/nodedotjs",
  },
  {
    name: "Express.js",
    icon: "https://cdn.simpleicons.org/express",
  },
  {
    name: "Django",
    icon: "https://cdn.simpleicons.org/django",
  },
  {
    name: "Socket.IO",
    icon: "https://cdn.simpleicons.org/socketdotio",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.simpleicons.org/tailwindcss",
  },
  {
    name: "Vite",
    icon: "https://cdn.simpleicons.org/vite",
  },

  // Databases
  {
    name: "MongoDB",
    icon: "https://cdn.simpleicons.org/mongodb",
  },
  {
    name: "MySQL",
    icon: "https://cdn.simpleicons.org/mysql",
  },
  {
    name: "SQLite",
    icon: "https://cdn.simpleicons.org/sqlite",
  },

  // Data Science & Visualization
  {
    name: "NumPy",
    icon: "https://cdn.simpleicons.org/numpy",
  },
  {
    name: "Pandas",
    icon: "https://cdn.simpleicons.org/pandas",
  },
  {
    name: "Matplotlib",
    icon: "https://raw.githubusercontent.com/valohai/ml-logos/master/matplotlib.svg",
  },
  {
    name: "Seaborn",
    icon: "https://raw.githubusercontent.com/mwaskom/seaborn/master/doc/_static/logo-mark-lightbg.svg",
  },
  {
    name: "Scikit-learn",
    icon: "https://cdn.simpleicons.org/scikitlearn",
  },
  {
    name: "Jupyter Notebook",
    icon: "https://cdn.simpleicons.org/jupyter",
  },

  // Machine Learning & AI
  {
    name: "PyTorch",
    icon: "https://cdn.simpleicons.org/pytorch",
  },
  {
    name: "FastAPI",
    icon: "https://cdn.simpleicons.org/fastapi",
  },

  // Generative AI
  {
    name: "LangChain",
    icon: "https://cdn.simpleicons.org/langchain",
  },
  {
    name: "Google Gemini",
    icon: "https://cdn.simpleicons.org/googlegemini",
  },

  // Authentication
  {
    name: "JWT",
    icon: "https://cdn.simpleicons.org/jsonwebtokens",
  },

  // DevOps & Deployment
  {
    name: "Git",
    icon: "https://cdn.simpleicons.org/git",
  },
  {
    name: "GitHub",
    icon: "https://cdn.simpleicons.org/github",
  },
  {
    name: "Docker",
    icon: "https://cdn.simpleicons.org/docker",
  },
  {
    name: "Nginx",
    icon: "https://cdn.simpleicons.org/nginx",
  },
  {
    name: "GitHub Actions",
    icon: "https://cdn.simpleicons.org/githubactions",
  },

  // Developer Tools & Platforms
  {
    name: "Postman",
    icon: "https://cdn.simpleicons.org/postman",
  },
  {
    name: "Netlify",
    icon: "https://cdn.simpleicons.org/netlify",
  },
  {
    name: "Vercel",
    icon: "https://cdn.simpleicons.org/vercel",
  },
];

export const TechStackMarquee = () => {
  return (
    <div className="mt-16 w-screen max-w-none relative left-1/2 right-1/2 -translate-x-1/2 px-0">
      <div className="relative overflow-hidden py-4">

        {/* Left Gradient */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-white dark:from-black to-transparent" />

        {/* Right Gradient */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-white dark:from-black to-transparent" />

        {/* Infinite Marquee */}
        <div
          className="tech-marquee-track"
          aria-label="Technical skills and technologies"
        >
          {[0, 1].map((loopIdx) =>
            technologies.map((tech, idx) => (
              <span
                key={`${tech.name}-${loopIdx}-${idx}`}
                className="mx-4 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-100/50 dark:bg-zinc-900/50 text-sm text-zinc-700 dark:text-zinc-300 whitespace-nowrap"
              >
                {/* External Technology Logo */}
                <span className="w-6 h-6 shrink-0 flex items-center justify-center rounded-full bg-white p-1">
                  <Image
                    src={tech.icon}
                    alt={`${tech.name} logo`}
                    width={20}
                    height={20}
                    unoptimized
                    className="w-5 h-5 object-contain"
                  />
                </span>

                <span>{tech.name}</span>
              </span>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
