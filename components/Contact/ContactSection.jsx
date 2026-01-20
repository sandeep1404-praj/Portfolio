"use client";

import Image from "next/image";
import { Linkedin, Github, Instagram, Mail, Twitter } from "lucide-react";
import ShinyText from "@/components/ui/ShinyText";

export default function ContactSection() {
  return (
    <section className="w-full bg-black text-white py-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left Side: Header and Form */}
        <div className="flex-1">
          <ShinyText
            text="✨ CONNECT WITH ME"
            speed={2}
            delay={0}
            color="#69d867ff"
            shineColor="#ffffff"
            spread={120}
            direction="left"
            yoyo={false}
            pauseOnHover={false}
          />
          
          <h1 className="text-5xl font-clash md:text-4xl lg:text-5xl font-bold mt-4 mb-16 leading-tight">
            Let's start a project together
          </h1>
          
          <form className="space-y-8 max-w-2xl" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-3">
              <label htmlFor="name" className="text-sm font-medium text-zinc-300 font-sans uppercase tracking-wider">Full Name</label>
              <input
                type="text"
                id="name"
                className="w-full bg-black border border-zinc-800 rounded-xl p-4 text-white focus:outline-none focus:border-[#7fef6d] transition-colors"
                placeholder=""
              />
            </div>
            
            <div className="space-y-3">
              <label htmlFor="email" className="text-sm font-medium text-zinc-300 font-sans uppercase tracking-wider">Email</label>
              <input
                type="email"
                id="email"
                className="w-full bg-black border border-zinc-800 rounded-xl p-4 text-white focus:outline-none focus:border-[#7fef6d] transition-colors"
                placeholder=""
              />
            </div>
            
            <div className="space-y-3">
              <label htmlFor="message" className="text-sm font-medium text-zinc-300 font-sans uppercase tracking-wider">Message</label>
              <textarea
                id="message"
                rows={6}
                className="w-full bg-black border border-zinc-800 rounded-xl p-4 text-white focus:outline-none focus:border-[#7fef6d] transition-colors resize-none"
                placeholder=""
              />
            </div>
            
            <button type="submit" className="relative overflow-hidden px-10 py-4 rounded-full border border-zinc-700 text-sm font-medium group isolate w-fit">
              <span className="relative z-10 block text-white transition-transform duration-300 group-hover:-translate-y-full group-hover:opacity-0 uppercase tracking-widest">
                Submit
              </span>
              <span className="absolute inset-0 z-10 flex items-center justify-center translate-y-full text-black transition-transform duration-300 group-hover:translate-y-0 uppercase tracking-widest">
                Submit
              </span>
              <span
                className="pointer-events-none absolute -bottom-8 left-1/2 h-24 w-24 -translate-x-1/2 scale-0 opacity-0 rounded-full bg-white origin-bottom transition-all duration-500 ease-out group-hover:scale-[6.2] group-hover:opacity-100"
                aria-hidden="true"
              />
            </button>
          </form>
        </div>

        {/* Right Side: Profile Card */}
        <div className="lg:w-[450px]">
          <div className="bg-[#0D0D0F] rounded-[40px] p-10 border border-zinc-800/50 sticky top-32">
            <div className="inline-flex items-center gap-2 bg-[#161618] border border-zinc-800 rounded-full px-5 py-2 mb-10">
              <div className="w-2.5 h-2.5 rounded-full bg-[#AEFF00] shadow-[0_0_10px_rgba(174,255,0,0.5)]" />
              <span className="text-[10px] font-bold text-zinc-300 tracking-widest uppercase">Available for work</span>
            </div>
            
            <div className="mb-8 w-28 h-28 relative rounded-full border border-zinc-800 p-2">
              <div className="w-full h-full relative rounded-full overflow-hidden">
                <Image
                  src="/My Photo/sandeep.png"
                  alt="Profile"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            <p className="text-zinc-400 text-lg leading-relaxed mb-10 font-normal">
              My inbox is always open. Whether you have a project or just want to say Hi. I would love to hear from you. Feel free to contact me and I'll get back to you.
            </p>
            
            <div className="flex items-center gap-6 group/socials">
              <a href="https://www.linkedin.com/in/sandeep-prajapati-a01997224/" className="text-zinc-500 hover:!text-white group-hover/socials:text-zinc-700 transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/sandeep1404-praj" className="text-zinc-500 hover:!text-white group-hover/socials:text-zinc-700 transition-all duration-300">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/official_sandeep.pr/" className="text-zinc-500 hover:!text-white group-hover/socials:text-zinc-700 transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="mailto@contactwebsandeep@gmail.com" className="text-zinc-500 hover:!text-white group-hover/socials:text-zinc-700 transition-all duration-300">
                <Mail className="w-5 h-5" />
              </a>
              <a href="https://leetcode.com/u/Sandeep-praj-14/" target="_blank" className="text-zinc-500 hover:!text-white group-hover/footer-socials:text-zinc-700 transition-all duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16.102 17.93l-2.697 2.607c-.466.462-1.211.462-1.677 0L7.143 16.03a1.189 1.189 0 0 1 0-1.676l2.697-2.607c.466-.462 1.211-.462 1.677 0l4.585 4.508a1.189 1.189 0 0 1 0 1.675zm5.993-5.651l-2.983 2.848c-.466.462-1.211.462-1.677 0L12.85 10.619a1.189 1.189 0 0 1 0-1.676l2.983-2.848c.466-.462 1.211-.462 1.677 0l4.585 4.508a1.189 1.189 0 0 1 0 1.676zm-5.025-9.118l-2.15-2.09c-.466-.462-1.211-.462-1.677 0L3.067 10.864c-.466.462-.466 1.211 0 1.676l2.15 2.09a1.189 1.189 0 0 0 1.677 0L17.07 4.838a1.189 1.189 0 0 0 0-1.676zM3.575 14.648l-2.15 2.09c-.466.462-.466 1.211 0 1.676l2.15 2.09c.466.462 1.211.462 1.677 0l2.15-2.09c.466-.462.466-1.211 0-1.676l-2.15-2.09a1.189 1.189 0 0 0-1.677 0z"/>
                    </svg>
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
