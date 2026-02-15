"use client";

import { useState } from "react";
import { Sparkle, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import ShinyText from "@/components/ui/ShinyText";
import FooterIcons from "../AppLayout/FooterIcons";

const faqs = [
  {
    id: "01",
    question: "What makes you a strong candidate for engineering roles?",
    answer: "I combine solid fundamentals in algorithms and data structures with practical project experience, allowing me to build efficient and scalable solutions."
  },
  {
    id: "02",
    question: "How do you demonstrate your technical skills?",
    answer: "Through active problem-solving on LeetCode, CodeChef, and Codeforces, along with real-world academic and personal projects."
  },
  {
    id: "03",
    question: "Why should recruiters consider your profile?",
    answer: "I have proven analytical ability, consistent coding practice, and hands-on implementation experience, making me prepared for technical interviews and engineering tasks."
  },
  {
    id: "04",
    question: "Why should clients hire you for freelance projects?",
    answer: "I focus on clean, optimized, and reliable solutions, ensuring projects are delivered efficiently, correctly, and on time."
  }
];

export default function FaqSection() {
  const [openId, setOpenId] = useState(null);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full bg-background text-foreground py-20 px-2 sm:px-8 md:px-20 lg:px-28 xl:px-46 border-t border-border/60">
      <div className="max-w-16xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left Side: Header */}
        <div className="lg:w-1/3">
          
          <ShinyText
                text="✨ FAQS"
                speed={2}
                delay={0}
                color="#69d867ff"
                shineColor="#ffffff"
                spread={120}
                direction="left"
                yoyo={false}
                pauseOnHover={false}
            />

          <h2 className="text-4xl mt-5 md:text-5xl font-semibold leading-tight">
            Have <br/> Questions?
          </h2>
        </div>

        {/* Right Side: Accordion */}
        <div className="flex-1 space-y-4">
          {faqs.map((faq) => (
            <div 
              key={faq.id}
              className="bg-card rounded-[24px] border border-border/60 overflow-hidden transition-all duration-300 hover:border-border"
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full flex items-center justify-between p-6 sm:p-8 text-left focus:outline-none group"
              >
                <div className="flex items-center gap-4 sm:gap-6">
                  <span className="text-muted-foreground font-medium text-lg sm:text-xl font-clash">{faq.id}.</span>
                  <span className="text-foreground text-lg sm:text-xl font-medium font-clash transition-colors">
                    {faq.question}
                  </span>
                </div>
                <ChevronDown 
                  className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${openId === faq.id ? "rotate-180 text-foreground" : ""}`} 
                />
              </button>
              
              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0 ml-[44px] sm:ml-[68px]">
                      <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-2xl font-light">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        
      </div>
      <FooterIcons />
    </section>
  );
}
