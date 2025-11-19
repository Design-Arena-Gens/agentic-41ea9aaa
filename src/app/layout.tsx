import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JBIT College | Official Website",
  description:
    "JBIT College ? Explore programs, admissions, campus life, placements and more.",
  applicationName: "JBIT College",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-white text-zinc-900 antialiased dark:bg-black dark:text-zinc-100`}
      >
        <div className="pointer-events-none fixed inset-0 -z-10 opacity-20 [mask-image:radial-gradient(ellipse_at_top,black,transparent_60%)]">
          <div className="absolute inset-x-0 top-[-10%] h-[40vh] bg-gradient-to-b from-indigo-400/40 to-transparent dark:from-indigo-500/30" />
        </div>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
