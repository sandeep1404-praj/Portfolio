import Image from "next/image";
import Link from "next/link";

export default function Project() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-5xl flex-col items-center sm:items-start justify-center py-24 px-6 sm:px-12 bg-white dark:bg-black">
        <div className="flex flex-col-reverse sm:flex-row items-center sm:items-start gap-8 w-full">
          <div className="flex-1 space-y-6 text-center sm:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-black dark:text-zinc-50">
              Hi, I'm Your projects
            </h1>
            <p className="text-lg text-zinc-700 dark:text-zinc-300 max-w-2xl">
              Frontend developer crafting clean, accessible interfaces with Next.js, React, and Tailwind CSS. I love building fast, delightful user experiences.
            </p>
            <div className="flex items-center justify-center sm:justify-start gap-4">
              <Link href="/projects" className="inline-flex">
                <span className="inline-flex h-11 items-center justify-center rounded-full bg-foreground px-6 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]">View Projects</span>
              </Link>
              <Link href="/about" className="inline-flex">
                <span className="inline-flex h-11 items-center justify-center rounded-full border border-black/10 dark:border-white/20 px-6 text-black dark:text-zinc-50 hover:bg-black/5 dark:hover:bg-white/10">About Me</span>
              </Link>
            </div>
          </div>
          <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden ring-1 ring-black/10 dark:ring-white/10">
            <Image src="/next.svg" alt="Avatar" width={160} height={160} className="dark:invert" />
          </div>
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
