import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-white font-medium text-lg sm:text-base px-4 sm:px-6 lg:px-8 py-8 z-10">
      <div className="mx-auto max-w-6xl w-full h-full flex items-center justify-evenly sm:flex-row flex-col">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <Link href="/contact" className="underline underline-offset-2">
          Contact Me
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
