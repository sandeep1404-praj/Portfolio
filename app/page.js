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
            <div className="flex flex-wrap gap-6">
              <Link 
                href="https://linkedin.com" 
                target="_blank"
                className="flex items-center gap-2 text-sm hover:text-[#7fef6d] transition-colors group"
              >
                <span className="text-black dark:text-white">LINKEDIN</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform stroke-black dark:stroke-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </Link>
              <Link 
                href="https://github.com" 
                target="_blank"
                className="flex items-center gap-2 text-sm hover:text-[#7fef6d] transition-colors group"
              >
                <span className="text-black dark:text-white">GITHUB</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform stroke-black dark:stroke-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </Link>
              <Link 
                href="https://instagram.com" 
                target="_blank"
                className="flex items-center gap-2 text-sm hover:text-[#7fef6d] transition-colors group"
              >
                <span className="text-black dark:text-white">INSTAGRAM</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform stroke-black dark:stroke-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </Link>
              <Link 
                href="mailto:your@email.com"
                className="flex items-center gap-2 text-sm hover:text-[#7fef6d] transition-colors group"
              >
                <span className="text-black dark:text-white">GMAIL</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform stroke-black dark:stroke-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </Link>
            </div>

            {/* Know me better button */}
            <Link href="/about">
              <button className="text-black dark:text-white px-8 py-3 rounded-full border border-black dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors text-sm font-medium">
                Know me better
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
            text="✨ About Me ✨"
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
          <h2 className="text-2xl font-semibold text-black dark:text-zinc-50 mb-6">Featured Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[1,2,3,4].map((id) => (
              <div key={id} className="rounded-xl border border-black/10 dark:border-white/10 p-5">
                <h3 className="font-semibold text-black dark:text-zinc-50">Project {id}</h3>
                <p className="text-sm text-zinc-700 dark:text-zinc-300">Brief description of what this project does and the tech used.</p>
                <div className="mt-4 flex gap-3">
                  <a className="text-sm font-medium text-blue-600 dark:text-blue-400" href="#">Demo</a>
                  <a className="text-sm font-medium text-zinc-700 dark:text-zinc-300" href="#">Code</a>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/projects" className="text-sm font-medium text-blue-600 dark:text-blue-400">See all projects →</Link>
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
