

import { Geist, Geist_Mono, Carter_One, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Navbar from "@/components/AppLayout/Navbar";
import Footer from "@/components/AppLayout/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import LoadingBar from "@/components/LoadingBar";
import ScrollToTop from "@/components/ScrollToTop";

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

export const metadata = {
  title: "Portfolio",
  description: "My professional portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${carterOne.variable} ${playfairDisplay.variable} antialiased`}
      >
        <SmoothScroll>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
          >
            <ScrollToTop />
            <LoadingBar />
            <Navbar />
            <main className="page-content" data-barba="container">
              {children}
            </main>
            <div className="flex min-h-screen items-center justify-center bg-white font-sans dark:bg-black">
                <main className="flex min-h-screen w-full max-w-7xl flex-col justify-center py-24 px-6 sm:px-16 lg:px-15 bg-white dark:bg-black">            
                  <Footer />
                </main>
              </div>
            <div className="bottom-blur" aria-hidden="true" />
          </ThemeProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
