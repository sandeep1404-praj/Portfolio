"use client";

import ContactSection from "@/components/Contact/ContactSection";
import FaqSection from "@/components/Contact/FaqSection";

export default function Contact() {
  return (
    <div className="min-h-screen bg-black">
      <ContactSection />
      <FaqSection />
    </div>
  );
}
