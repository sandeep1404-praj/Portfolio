import HeroSection from "@/components/Home/HeroSection";
import MarqueeStrip from "@/components/Home/MarqueeStrip";
import AboutSection from "@/components/Home/AboutSection";
import WorkSection from "@/components/Home/WorkSection";
import SpecialitySection from "@/components/Home/SpecialitySection";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-7xl flex-col justify-center py-16 md:py-24 px-4 sm:px-8 lg:px-12 bg-white dark:bg-black">
        <HeroSection />
        <MarqueeStrip />
        <AboutSection />
        <WorkSection />
        <SpecialitySection />
        
      </main>
    </div>
  );
}
