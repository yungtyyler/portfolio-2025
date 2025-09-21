"use client";

import { ExpandIcon } from "@/components/icons";
import VideoBackground from "@/components/videoBackground";
import Link from "next/link";

export const Home = () => {
  return (
    <div className="relative w-full min-h-screen text-white">
      {/* Background video */}
      <VideoBackground />
      {/* Dark overlay */}
      <div className="fixed inset-0 bg-black/80 z-[5] top-0 left-0 w-full h-full" />

      {/* Main content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
        <div className="flex items-center justify-center gap-4 flex-col max-w-6xl w-full h-screen">
          <h1 className="text-[2.5em] font-bold leading-10 uppercase drop-shadow-lg">
            Designing and Developing for the Modern Web.
          </h1>
          <p className="my-4 font-medium md:text-lg text-sm text-gray-200 drop-shadow-md">
            Specializing in React and Next.js with additional experience in C# .NET and Ruby on
            Rails. Focused on building high-performance, user-centric applications that combine
            clean design with reliable architecture.
          </p>
          <div className="flex gap-4 items-center flex-wrap">
            <Link
              href={`/resume.pdf`}
              target="_blank"
              className="flex items-center justify-center px-4 py-2 gap-2 rounded-lg bg-white w-fit text-black hover:bg-black border border-white hover:border-white hover:text-white drop-shadow-md"
            >
              Resume <ExpandIcon />
            </Link>
            <Link
              href={`mailto:tyler.varzeas@gmail.com`}
              target="_blank"
              className="ml-4 text-lg font-medium capitalize underline md:text-base drop-shadow-md"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Example Scroll Sections */}
        <section
          id="projects"
          className="min-h-screen flex items-center justify-center bg-gray-900/70 w-full mt-16"
        >
          <h2 className="text-3xl drop-shadow-lg">Projects Section</h2>
        </section>
        <section
          id="about"
          className="min-h-screen flex items-center justify-center bg-gray-800/70 w-full"
        >
          <h2 className="text-3xl drop-shadow-lg">About Section</h2>
        </section>
        <section
          id="contact"
          className="min-h-screen flex items-center justify-center bg-gray-700/70 w-full"
        >
          <h2 className="text-3xl drop-shadow-lg">Contact Section</h2>
        </section>
      </main>
    </div>
  );
};

export default Home;
