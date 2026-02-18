import ContactSection from "@/components/Contact/ContactSection";
import FaqSection from "@/components/Contact/FaqSection";

export const metadata = {
  title: "Contact",
  description: "Get in touch with Sandeep Prajapati for software development inquiries, collaborations, or professional opportunities.",
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <ContactSection />
      <FaqSection />
    </div>
  );
}
