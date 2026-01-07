"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import ShinyText from "@/components/ui/ShinyText";

export default function AboutSection() {
  return (
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
  );
}
