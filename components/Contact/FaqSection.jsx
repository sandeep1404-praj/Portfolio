"use client";

import { useState } from "react";
import { Sparkle, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import ShinyText from "@/components/ui/ShinyText";
import FooterIcons from "../AppLayout/FooterIcons";

const faqs = [
  {
    id: "01",
    question: "What is your current role?",
    answer: "I am currently working as a Frontend Developer, specializing in building responsive and interactive web applications using React, Next.js, and Tailwind CSS."
  },
  {
    id: "02",
    question: "How much does it cost for a high performing website?",
    answer: "The cost depends on the complexity, features, and timeline of the project. I offer competitive pricing and can provide a detailed quote after discussing your specific requirements."
  },
  {
    id: "03",
    question: "How long will the work take from start to finish?",
    answer: "Project timelines vary significantly based on scope. A simple landing page might take 1-2 weeks, while a complex web application could take 4-8 weeks or more."
  },
  {
    id: "04",
    question: "Are you available to join as full time?",
    answer: "I am currently open to both freelance projects and full-time opportunities. Feel free to reach out to discuss how I can contribute to your team."
  }
];

export default function FaqSection() {
  const [openId, setOpenId] = useState(null);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full bg-black text-white py-20 px-2 sm:px-8 md:px-20 lg:px-28 xl:px-46 border-t border-zinc-900">
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
              className="bg-[#0D0D0F] rounded-[24px] border border-zinc-800/50 overflow-hidden transition-all duration-300 hover:border-zinc-700"
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full flex items-center justify-between p-6 sm:p-8 text-left focus:outline-none group"
              >
                <div className="flex items-center gap-4 sm:gap-6">
                  <span className="text-[#5D5D61] font-medium text-lg sm:text-xl font-clash">{faq.id}.</span>
                  <span className="text-white text-lg sm:text-xl font-medium font-clash  transition-colors">
                    {faq.question}
                  </span>
                </div>
                <ChevronDown 
                  className={`w-5 h-5 text-zinc-500 transition-transform duration-300 ${openId === faq.id ? "rotate-180 text-white" : ""}`} 
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
                      <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-2xl font-light">
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
