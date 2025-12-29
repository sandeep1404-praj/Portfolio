import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Navbar from "@/components/AppLayout/Navbar";
import Footer from "@/components/AppLayout/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import LoadingBar from "@/components/LoadingBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SmoothScroll>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
          >
          <LoadingBar />
          <Navbar />
              <main className="page-content">
                {children}
              </main>
          <Footer />
          </ThemeProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
