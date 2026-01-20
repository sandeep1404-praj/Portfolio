'use client';

import { TechStackMarquee } from "@/components/ui/TechStackMarquee";
import ExperienceSection from "@/components/About/ExperienceSection";
import AboutHero from "@/components/About/AboutHero";
import AwardsSection from "@/components/About/AwardsSection";
import CommunitySection from "@/components/About/CommunitySection";

export default function About() {
  return (<>
    <AboutHero />
    <TechStackMarquee />
    {/* <ExperienceSection /> */}
    <AwardsSection />
    <CommunitySection />
  </>);
}
