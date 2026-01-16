'use client';

import ScrollFloat from "../ui/ScrollFloat";
import ShinyText from "../ui/ShinyText";

export default function AwardsSection() {
  const awards = [
    { title: "GFG 360", date: "FEB 2026" },
    { title: "GfG 160 – 160 Days of Problem Solving", date: "AUG 2025" },
    { title: "Network Support and Security", date: "DEC 2024" },
    { title: "Introduction to Cybersecurity", date: "DEC 2024" },
  ];

  return (
    <section className="py-20 px-4 sm:px-8 bg-background font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-20">
          {/* Left - Title */}
          <div className="flex items-start">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <ShinyText
                  text="🏆 Awards"
                  speed={2}
                  delay={0}
                  color="#69d867ff"
                  shineColor="#ffffff"
                  spread={120}
                  direction="left"
                  yoyo={false}
                  pauseOnHover={false}
              />
                {/* <span className="text-xs sm:text-sm font-semibold tracking-widest text-muted-foreground">AWARDS</span> */}
              </div>
              <ScrollFloat
                duration={1.6}
              >
                Certifiacates

              </ScrollFloat>
              {/* <h2 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight">
                Awards &<br />Recognition
              </h2> */}
            </div>
          </div>

          {/* Right - Awards List */}
          <div className="space-y-6 sm:space-y-8 flex flex-col justify-start">
            {awards.map((award, index) => (
              <div key={index} className="flex justify-between items-baseline border-b border-border pb-4 sm:pb-6">
                <h3 className="text-lg sm:text-xl font-medium text-foreground flex-1">
                  {award.title}
                </h3>
                <span className="text-sm sm:text-base text-muted-foreground font-medium whitespace-nowrap ml-4">
                  {award.date}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
