import ScrollFloat from "@/components/ui/ScrollFloat";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ShinyText from "@/components/ui/ShinyText";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const marqueeItems = [
    "Problem Solver",
    "Community",
    "Development",
    "Software Engineering",
    "Websites",
    "Strategy",
    "Products",
  ];

  return (
    <div className="flex min-h-screen items-center justify-center bg-white font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-7xl flex-col justify-center py-24 px-6 sm:px-16 lg:px-15 bg-white dark:bg-black">
        {/* Hero Section */}
        <div className="flex flex-col gap-6 sm:gap-8 w-full">
          {/* Greeting */}
          <div className="flex items-center gap-3 ">
            <Image
              src="/hand-23.svg"
              alt="Waving hand"
              width={30}
              height={30}
              className="w-7 h-6 sm:w-9 sm:h-9 animate-wave hand-green"
              priority
            />
            <p className="text-base sm:text-lg text-black dark:text-zinc-50">Hey! It's me Sandeep,</p>
          </div>

          {/* Main Heading */}
          <h1 className="font-Bungee text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] xl:text-[4.5rem] font-medium tracking-tight leading-[1.1] max-w-5xl">
            <span className="text-black dark:text-white">Crafting </span>
            <span className="text-[#7fef6d]">purpose driven<br />experiences</span>
            <span className="text-black dark:text-white"> that inspire<br />& engage.</span>
          </h1>

          {/* Description */}
          <div className="flex justify-end mt-4">
            <div className="flex items-center gap-4">
              <div className="h-px w-[65rem] bg-zinc-300 dark:bg-zinc-700"></div>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-xl text-right leading-relaxed">
                I work with brands globally to build pixel-perfect, engaging, and accessible digital experiences that drive results and achieve business goals.
              </p>
            </div>
          </div>

          {/* Footer Section with Social Links and Button */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-8 mt-12">
            {/* Social Links */}
              <div className="flex flex-wrap gap-6 hover:[&>a:not(:hover)]:text-zinc-400 hover:[&>a:not(:hover)]:dark:text-zinc-500">
              <Link 
                href="https://linkedin.com" 
                target="_blank"
                className="group flex items-center gap-2 text-sm text-black dark:text-white transition-colors hover:text-black hover:dark:text-white"
              >
                <span>LINKEDIN</span>
                <svg className="w-4 h-4 transform transition-transform group-hover:translate-x-1 stroke-current" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </Link>
              <Link 
                href="https://github.com" 
                target="_blank"
                className="group flex items-center gap-2 text-sm text-black dark:text-white transition-colors hover:text-black hover:dark:text-white"
              >
                <span>GITHUB</span>
                <svg className="w-4 h-4 transform transition-transform group-hover:translate-x-1 stroke-current" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </Link>
              <Link 
                href="https://instagram.com" 
                target="_blank"
                className="group flex items-center gap-2 text-sm text-black dark:text-white transition-colors hover:text-black hover:dark:text-white"
              >
                <span>INSTAGRAM</span>
                <svg className="w-4 h-4 transform transition-transform group-hover:translate-x-1 stroke-current" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </Link>
              <Link 
                href="mailto:your@email.com"
                className="group flex items-center gap-2 text-sm text-black dark:text-white transition-colors hover:text-black hover:dark:text-white"
              >
                <span>GMAIL</span>
                <svg className="w-4 h-4 transform transition-transform group-hover:translate-x-1 stroke-current" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </Link>
            </div>

            {/* Know me better button */}
            <Link href="/about">
              <button className="relative overflow-hidden px-8 py-3 rounded-full border border-black dark:border-zinc-700 text-sm font-medium group isolate">
                <span className="relative z-10 block text-black dark:text-white transition-transform duration-300 group-hover:-translate-y-full group-hover:opacity-0">
                  Know me better
                </span>
                <span className="absolute inset-0 z-10 flex items-center justify-center translate-y-full text-white dark:text-black transition-transform duration-300 group-hover:translate-y-0">
                  About Me
                </span>
                <span
                  className="pointer-events-none absolute -bottom-8 left-1/2 h-24 w-24 -translate-x-1/2 scale-0 opacity-0 rounded-full bg-black dark:bg-white origin-bottom transition-all duration-500 ease-out group-hover:scale-[3.2] group-hover:opacity-90"
                  aria-hidden="true"
                />
              </button>
            </Link>
          </div>
        </div>

        {/* Marquee strip at the end of the hero */}
        <div className="mt-18 w-screen max-w-none relative left-1/2 right-1/2 -translate-x-1/2 px-0">
          <div className="marquee-shell relative overflow-hidden rounded-xl border border-black/10 dark:border-white/10 py-6 sm:py-7">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 rounded-[5px] backdrop-blur-2xl" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10  rounded-[4px] backdrop-blur-2xl" />
            <div className="marquee-track">
              {[...marqueeItems, ...marqueeItems].map((item, idx) => (
                <span
                  key={`${item}-${idx}`}
                  className="mx-6 inline-flex items-center gap-3 text-3xl sm:text-4xl font-bold tracking-tight uppercase text-[#E0E0E0] dark:text-[#3D3D3D]"
                  style={{ fontFamily: 'var(--font-playfair-display)' }}
                >
                  {item}
                  <span className="text-4xl leading-none text-[#E0E0E0] dark:text-[#3D3D3D]">✦</span>
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-25 w-full flex flex-col items-center justify-center text-center">
          <ShinyText
            text="✨ About Me"
            speed={2}
            delay={0}
            color="#69d867ff"
            shineColor="#ffffff"
            spread={120}
            direction="left"
            yoyo={false}
            pauseOnHover={false}
          />
          <ScrollReveal
            baseOpacity={10}
            enableBlur={true}
            baseRotation={15}
            blurStrength={5}
          >
           I'm Sandeep Prajapati , skilled in web development and problem solving ,
            with experience creating responsive websites and solving technical challenges
            through structured thinking and hands-on practice.           
          </ScrollReveal>
        </div>

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
                  content: "Building scalable web applications with modern technologies like React, Next.js, Node.js, and more. Focus on clean code, performance, and best practices."
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
                  title: "UI/UX Design",
                  content: "Creating intuitive and visually appealing interfaces that enhance user experience. Expertise in Figma, prototyping, and design systems."
                },
                {
                  icon: (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M3 9H21" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9 21V9" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ),
                  title: "Branding",
                  content: "Developing cohesive brand identities that resonate with target audiences. From logos to complete visual systems that tell your story."
                }
              ].map((item, index) => (
                <details key={index} className="group rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100/50 dark:bg-zinc-900/50 overflow-hidden">
                  <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none">
                    <div className="flex items-center gap-4">
                      <span className="text-black dark:text-white">{item.icon}</span>
                      <span className="text-lg font-medium text-black dark:text-white">{item.title}</span>
                    </div>
                    <svg className="w-5 h-5 text-zinc-500 transition-transform duration-300 group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 9L12 15L18 9" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </summary>
                  <div className="px-6 pb-5 pt-0 text-zinc-600 dark:text-zinc-400">
                    {item.content}
                  </div>
                </details>
              ))}
            </div>

            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden h-[350px] lg:h-[400px] bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900">
              <Image
                src="/projects/workspace.png"
                alt="Workspace"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Tech Stack Marquee */}
          <div className="mt-16 w-screen max-w-none relative left-1/2 right-1/2 -translate-x-1/2 px-0">
            <div className="relative overflow-hidden py-4">
              <div className="pointer-events-none absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-white dark:from-black to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-white dark:from-black to-transparent" />
              <div className="tech-marquee-track flex animate-marquee-slow">
                {[
                  { name: "Next.js", icon: "⚡" },
                  { name: "MySQL", icon: "🐬" },
                  { name: "MongoDB", icon: "🍃" },
                  { name: "PostgreSQL", icon: "🐘" },
                  { name: "Cypress", icon: "🧪" },
                  { name: "Docker", icon: "🐳" },
                  { name: "Firebase", icon: "🔥" },
                  { name: "AWS", icon: "☁️" },
                  { name: "GSAP", icon: "🎭" },
                  { name: "Framer Motion", icon: "🎬" },
                  { name: "Next.js", icon: "⚡" },
                  { name: "MySQL", icon: "🐬" },
                  { name: "MongoDB", icon: "🍃" },
                  { name: "PostgreSQL", icon: "🐘" },
                  { name: "Cypress", icon: "🧪" },
                  { name: "Docker", icon: "🐳" },
                  { name: "Firebase", icon: "🔥" },
                  { name: "AWS", icon: "☁️" },
                  { name: "GSAP", icon: "🎭" },
                  { name: "Framer Motion", icon: "🎬" },
                ].map((tech, idx) => (
                  <span
                    key={`${tech.name}-${idx}`}
                    className="mx-4 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-100/50 dark:bg-zinc-900/50 text-sm text-zinc-700 dark:text-zinc-300 whitespace-nowrap"
                  >
                    <span>{tech.icon}</span>
                    <span>{tech.name}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Long sections to increase page length */}
        <section className="mt-20 w-full">
          <h2 className="text-2xl font-semibold text-black dark:text-zinc-50 mb-6">Experience</h2>
          <div className="space-y-6">
            {[
              { role: "Frontend Developer", company: "TechCo", period: "2023 — Present", desc: "Building accessible, performant interfaces with Next.js and Tailwind CSS." },
              { role: "UI Engineer", company: "DesignHub", period: "2021 — 2023", desc: "Shipped component libraries and design systems across products." },
              { role: "Web Developer", company: "Studio", period: "2019 — 2021", desc: "Delivered landing pages and marketing sites with a11y best practices." },
              { role: "Intern", company: "Startup", period: "2018 — 2019", desc: "Learned the ropes, contributed to features, and improved docs." },
            ].map((item, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 rounded-xl border border-black/10 dark:border-white/10 p-4">
                <div>
                  <p className="font-medium text-black dark:text-zinc-50">{item.role} · {item.company}</p>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300">{item.desc}</p>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{item.period}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20 w-full">
          <h2 className="text-2xl font-semibold text-black dark:text-zinc-50 mb-6">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {[
              "React","Next.js","TypeScript","JavaScript","Tailwind CSS","CSS","HTML","Vite","Redux","Zustand","Accessibility","Testing","Playwright","Vitest","Jest","Node.js","Git","CI/CD"
            ].map((s) => (
              <span key={s} className="inline-flex items-center justify-center rounded-full border border-black/10 dark:border-white/10 px-3 py-2 text-sm text-zinc-700 dark:text-zinc-300">
                {s}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-20 w-full">
          <h2 className="text-2xl font-semibold text-black dark:text-zinc-50 mb-6">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1,2,3,4].map((i) => (
              <blockquote key={i} className="rounded-xl border border-black/10 dark:border-white/10 p-5 text-zinc-700 dark:text-zinc-300">
                “Working with them was a pleasure — thoughtful, detail‑oriented, and fast. The new interface significantly improved conversions.”
                <footer className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">— Client {i}</footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section className="mt-20 w-full">
          <h2 className="text-2xl font-semibold text-black dark:text-zinc-50 mb-6">Latest Posts</h2>
          <div className="space-y-4">
            {[...Array(6)].map((_, i) => (
              <article key={i} className="rounded-xl border border-black/10 dark:border-white/10 p-4">
                <h3 className="font-semibold text-black dark:text-zinc-50">Post Title {i + 1}</h3>
                <p className="text-sm text-zinc-700 dark:text-zinc-300">Short summary of the blog post explaining a concept or a technique in frontend development.</p>
                <a href="#" className="mt-2 inline-block text-sm font-medium text-blue-600 dark:text-blue-400">Read more →</a>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-20 w-full">
          <div className="rounded-2xl border border-black/10 dark:border-white/10 p-6 sm:p-8 text-center sm:text-left">
            <h2 className="text-2xl font-semibold text-black dark:text-zinc-50">Let’s build something great</h2>
            <p className="mt-2 text-zinc-700 dark:text-zinc-300 max-w-2xl">Have a project or role in mind? I’m open to collaborations and opportunities. Reach out and we’ll make it happen.</p>
            <div className="mt-4 flex items-center justify-center sm:justify-start gap-4">
              <Link href="/contact" className="inline-flex">
                <span className="inline-flex h-11 items-center justify-center rounded-full bg-foreground px-6 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]">Contact Me</span>
              </Link>
              <Link href="/projects" className="inline-flex">
                <span className="inline-flex h-11 items-center justify-center rounded-full border border-black/10 dark:border-white/20 px-6 text-black dark:text-zinc-50 hover:bg-black/5 dark:hover:bg-white/10">Browse Projects</span>
              </Link>
            </div>
          </div>
        </section>

        <footer className="mt-20 w-full pb-24 text-center text-sm text-zinc-600 dark:text-zinc-400">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </footer>
      </main>
    </div>
  );
}
