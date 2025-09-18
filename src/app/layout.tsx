import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Providers from "@/components/providers";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export const metadata: Metadata = {
  title: {
    default: "Tyler Varzeas | Software Engineer & Full-Stack Developer",
    template: "%s | Tyler Varzeas",
  },
  description:
    "Software engineer and full-stack developer with expertise in modern web technologies, scalable applications, and high-performance solutions. Experienced in React, Next.js, TypeScript, and backend systems.",
  keywords: [
    "Tyler Varzeas",
    "Software Engineer",
    "Full-Stack Developer",
    "Frontend Engineer",
    "Backend Engineer",
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Web Developer",
    "Application Developer",
    "System Design",
  ],
  authors: [{ name: "Tyler Varzeas", url: "https://tylervarzeas.com" }],
  creator: "Tyler Varzeas",
  openGraph: {
    title: "Tyler Varzeas | Software Engineer & Full-Stack Developer",
    description:
      "Software engineer and full-stack developer specializing in scalable, high-performance applications using React, Next.js, TypeScript, and modern backend technologies.",
    url: "https://tylervarzeas.com",
    siteName: "Tyler Varzeas Portfolio",
    images: [
      {
        url: "https://tylervarzeas.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tyler Varzeas Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tyler Varzeas | Software Engineer & Full-Stack Developer",
    description:
      "Software engineer and full-stack developer with expertise in React, Next.js, TypeScript, and scalable backend systems.",
    images: ["https://tylervarzeas.com/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} font-medium antialiased flex flex-col min-h-screen`}
        suppressHydrationWarning
      >
        <Header />

        <main
          id="main-content"
          className="mx-auto w-full max-w-6xl flex-1 px-4 sm:px-6 lg:px-8 py-8"
        >
          <Providers>{children}</Providers>
        </main>

        <Footer />
      </body>
    </html>
  );
}
