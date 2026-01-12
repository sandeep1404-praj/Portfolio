'use client';

import Image from "next/image";
import CountUp from "../ui/CountUp";
import ShinyText from "../ui/ShinyText";
import Link from "next/link";

export default function CommunitySection() {
  return (
    <section className="py-20 px-4 sm:px-8 bg-background font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Cards */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-200 dark:bg-zinc-900/50 border border-gray-300 dark:border-zinc-800 rounded-lg p-8 flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 rounded-full bg-gray-300 dark:bg-zinc-800 flex items-center justify-center mb-4">
                <Image src="/skillsIcons/leetcode.png" alt="LeetCode" width={48} height={48} className="w-full h-full object-contain rounded-full" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">LeetCode</h3>
              <Link 
              href={"https://leetcode.com/u/Sandeep-praj-14/"} 
              target="_blank"
              rel="noopener noreferrer">

                <CountUp to={525} separator="+" className="count-up-text font-bold" />+ Problem
              </Link>
              
              {/* <p className="text-sm text-muted-foreground">Get connected with a mentor that will help you pave your career path.</p> */}
            </div>
            
            <div className="bg-gray-200 dark:bg-zinc-900/50 border border-gray-300 dark:border-zinc-800 rounded-lg p-8 flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 rounded-full bg-gray-300 dark:bg-zinc-800 flex items-center justify-center mb-4">
                <Image src="/skillsIcons/gfg.jpeg" alt="gfg" width={48} height={48} className="w-full h-full object-contain rounded-full " />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">GeeksForGeeks</h3>
              <Link 
              href={"https://www.geeksforgeeks.org/profile/codings09pc"} 
              target="_blank"
              rel="noopener noreferrer">

                <CountUp to={350} separator="+" className="count-up-text font-bold" />+ Problem
              </Link>
              {/* <p className="text-sm text-muted-foreground">Get Internships and Job opportunities and gain experience while you learn.</p> */}
            </div>

            <div className="bg-gray-200 dark:bg-zinc-900/50 border border-gray-300 dark:border-zinc-800 rounded-lg p-8 flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 rounded-full bg-gray-300 dark:bg-zinc-800 flex items-center justify-center mb-4">
                <Image src="/skillsIcons/codechef.jpeg" alt="CodeChef" width={48} height={48} className="w-full h-full object-contain rounded-full" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">CodeChef</h3>
              <Link 
              href={"https://www.codechef.com/users/san_pr_14"} 
              target="_blank"
              rel="noopener noreferrer">

                <CountUp to={100} separator="+" className="count-up-text font-bold" />+ Problem
              </Link>
              {/* <p className="text-sm text-muted-foreground">Get Free resources related to Designing and Development from the community.</p> */}
            </div>

            <div className="bg-gray-200 dark:bg-zinc-900/50 border border-gray-300 dark:border-zinc-800 rounded-lg p-8 flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 rounded-full bg-gray-300 dark:bg-zinc-800 flex items-center justify-center mb-4">
                <Image src="/skillsIcons/githubIcon.png" alt="Git Hub" width={48} height={48} className="w-full h-full object-cover rounded-full" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Git Hub</h3>
              <Link 
              href={"https://leetcode.com/u/Sandeep-praj-14/"} 
              target="_blank"
              rel="noopener noreferrer">

                <CountUp to={220} separator="+" className="count-up-text font-bold" />+  contributions
              </Link>
            </div>
          </div>

          {/* Right - Community Section */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <ShinyText
                  text="✨ COMMUNITY WORK"
                  speed={2}
                  delay={0}
                  color="#69d867ff"
                  shineColor="#ffffff"
                  spread={120}
                  direction="left"
                  yoyo={false}
                  pauseOnHover={false}
              />
                {/* <span className="text-lime-500 text-sm font-semibold tracking-widest">✨ COMMUNITY WORK</span> */}
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight mb-6">
                Crafting Solution<br />one line of code at a<br/> time.
              </h2>
            </div>

            <p className="text-muted-foreground text-base leading-relaxed">
              I am Sandeep Prajapati, a Computer Engineering student with a strong foundation in full-stack development (MERN) , along with a growing focus on Data Structures and Algorithms. I am actively preparing for software engineering and MERN-based internship roles. With a clear interest in backend systems, APIs, and scalable web applications, I aim to grow into a Software Development Engineer (SDE).
            </p>

            {/* Stats */}
            

            {/* CTA Button */}
            <Link href="/about">
          <button className="relative overflow-hidden px-8 py-3 rounded-full border border-black dark:border-zinc-700 text-sm font-medium group isolate">
            <span className="relative z-10 block text-black dark:text-white transition-transform duration-300 group-hover:-translate-y-full group-hover:opacity-0">
              Know me better
            </span>
            <span className="absolute inset-0 z-10 flex items-center justify-center translate-y-full text-white dark:text-black transition-transform duration-300 group-hover:translate-y-0">
              Let's connect
            </span>
            <span
              className="pointer-events-none absolute -bottom-8 left-1/2 h-24 w-24 -translate-x-1/2 scale-0 opacity-0 rounded-full bg-black dark:bg-white origin-bottom transition-all duration-500 ease-out group-hover:scale-[3.2] group-hover:opacity-90"
              aria-hidden="true"
            />
          </button>
        </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
