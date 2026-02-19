

import { Geist, Geist_Mono, Carter_One, Playfair_Display, Oswald, Faustina } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Navbar from "@/components/AppLayout/Navigation/Navbar";
import Footer from "@/components/AppLayout/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import LoadingBar from "@/components/LoadingBar";
import ScrollToTop from "@/components/ScrollToTop";
import FullScreenNav from "@/components/AppLayout/Navigation/FullscreenNav";
import NavContext from "@/context/NavContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const carterOne = Carter_One({
  variable: "--font-carter-one",
  subsets: ["latin"],
  weight: "400",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: "400",
});
const faustina = Faustina({
  variable: "--font-faustina",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Sandeep Prajapati - Software Engineer",
    template: "%s | Sandeep Prajapati",
  },
  description: "Official portfolio of Sandeep Prajapati, a Software Engineer specializing in crafting efficient solutions, high-performance web applications, and problem-solving.",
  keywords: [
    "Sandeep Prajapati", 
    "Sandeep Portfolio", 
    "Software Engineer Portfolio", 
    "Top Developer Portfolio", 
    "Full Stack Developer", 
    "Next.js Portfolio", 
    "React Developer India",
    "Best Software Engineering Portfolios"
  ],
  authors: [{ name: "Sandeep Prajapati" }],
  creator: "Sandeep Prajapati",
  icons: {
    icon: "/My Photo/headerImg.png",
    apple: "/My Photo/headerImg.png",
  },
  openGraph: {
    title: "Sandeep Prajapati - Software Engineer",
    description: "Official portfolio of Sandeep Prajapati. Professional software engineering and creative development.",
    url: "https://sandeep-prajapati-portfolio.netlify.app/",
    siteName: "Sandeep Prajapati Portfolio",
    images: [
      {
        url: "/My Photo/headerImg.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${carterOne.variable} ${playfairDisplay.variable} ${oswald.variable} ${faustina.variable} antialiased overflow-x-hidden`}
      >
        <NavContext>
        <SmoothScroll>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
          >
            <ScrollToTop />
            <Navbar />
            <FullScreenNav />
            <LoadingBar />
            <main className="page-content" data-barba="container">
              {children}
            </main>
            <Footer />
            <div className="bottom-blur" aria-hidden="true" />
          </ThemeProvider>
        </SmoothScroll>
        </NavContext>
      </body>
    </html>
  );
}
