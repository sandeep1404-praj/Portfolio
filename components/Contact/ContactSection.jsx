"use client";

import Image from "next/image";
import { Linkedin, Github, Instagram, Mail, Twitter, Loader2 } from "lucide-react";
import ShinyText from "@/components/ui/ShinyText";
import { useState } from "react";
import { sendEmail } from "@/app/actions";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const result = await sendEmail(formData);
      if (result.success) {
        setStatus({ type: "success", message: "Message sent successfully!" });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({ type: "error", message: result.error || "Failed to send message." });
      }
    } catch (error) {
      setStatus({ type: "error", message: "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full bg-background text-foreground py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24">
        
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
          
          <form className="space-y-8 max-w-2xl" onSubmit={handleSubmit}>
            <div className="space-y-3">
              <label htmlFor="name" className="text-sm font-medium text-muted-foreground font-sans uppercase tracking-wider">Full Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-background border border-border rounded-xl p-4 text-foreground focus:outline-none focus:border-[#7fef6d] transition-colors"
                placeholder="John Doe"
              />
            </div>
            
            <div className="space-y-3">
              <label htmlFor="email" className="text-sm font-medium text-muted-foreground font-sans uppercase tracking-wider">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-background border border-border rounded-xl p-4 text-foreground focus:outline-none focus:border-[#7fef6d] transition-colors"
                placeholder="john@example.com"
              />
            </div>
            
            <div className="space-y-3">
              <label htmlFor="message" className="text-sm font-medium text-muted-foreground font-sans uppercase tracking-wider">Message</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full bg-background border border-border rounded-xl p-4 text-foreground focus:outline-none focus:border-[#7fef6d] transition-colors resize-none"
                placeholder="How can I help you?"
              />
            </div>
            
            <div className="flex flex-col gap-4">
              <button 
                type="submit" 
                disabled={loading}
                className="relative overflow-hidden px-10 py-4 rounded-full border border-border text-sm font-medium group isolate w-fit disabled:opacity-50"
              >
                <span className="relative z-10 flex items-center gap-2 text-foreground transition-transform duration-300 group-hover:-translate-y-full group-hover:opacity-0 uppercase tracking-widest">
                  {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
                  {loading ? "Sending..." : "Submit"}
                </span>
                <span className="absolute inset-0 z-10 flex items-center justify-center translate-y-full text-background transition-transform duration-300 group-hover:translate-y-0 uppercase tracking-widest">
                  {loading ? "Sending..." : "Submit"}
                </span>
                <span
                  className="pointer-events-none absolute -bottom-8 left-1/2 h-24 w-24 -translate-x-1/2 scale-0 opacity-0 rounded-full bg-foreground origin-bottom transition-all duration-500 ease-out group-hover:scale-[6.2] group-hover:opacity-100"
                  aria-hidden="true"
                />
              </button>

              {status.message && (
                <p className={`text-sm font-medium ${status.type === "success" ? "text-green-500" : "text-red-500"}`}>
                  {status.message}
                </p>
              )}
            </div>
          </form>
        </div>

        {/* Right Side: Profile Card */}
        <div className="lg:w-[450px]">
          <div className="bg-card rounded-[40px] p-10 border border-border/60 sticky top-32">
            <div className="inline-flex items-center gap-2 bg-muted border border-border rounded-full px-5 py-2 mb-10">
              <div className="w-2.5 h-2.5 rounded-full bg-[#AEFF00] shadow-[0_0_10px_rgba(174,255,0,0.5)]" />
              <span className="text-[10px] font-bold text-muted-foreground tracking-widest uppercase">Available for work</span>
            </div>
            
            <div className="mb-8 w-28 h-28 relative rounded-full border border-border p-2">
              <div className="w-full h-full relative rounded-full overflow-hidden">
                <Image
                  src="/My Photo/sandeep.png"
                  alt="Profile"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-10 font-normal">
              My inbox is always open. Whether you have a project or just want to say Hi. I would love to hear from you. Feel free to contact me and I'll get back to you.
            </p>
            
            <div className="flex items-center gap-6 group/socials">
              <a href="https://www.linkedin.com/in/sandeep-prajapati-a01997224/" className="text-muted-foreground hover:!text-foreground group-hover/socials:text-muted transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/sandeep1404-praj" className="text-muted-foreground hover:!text-foreground group-hover/socials:text-muted transition-all duration-300">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/official_sandeep.pr/" className="text-muted-foreground hover:!text-foreground group-hover/socials:text-muted transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="mailto:sandeep.prajapati0535@gmail.com" className="text-muted-foreground hover:!text-foreground group-hover/socials:text-muted transition-all duration-300">
                <Mail className="w-5 h-5" />
              </a>
              <a href="https://leetcode.com/u/Sandeep-praj-14/" target="_blank" className="text-muted-foreground hover:!text-foreground group-hover/socials:text-muted transition-all duration-300">
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
