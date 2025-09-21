"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { GitHubIcon, LinkedInIcon } from "./icons";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "motion/react";

const Header = () => {
  const headerRef = useRef<HTMLElement | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className={`w-full fixed top-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white text-black shadow-md" : "bg-transparent text-white"
      }`}
    >
      <div className="mx-auto max-w-6xl w-full px-4 sm:px-6 lg:px-8 py-6 font-medium flex items-center justify-between gap-4">
        {/* Hamburger */}
        <Hamburger handleClick={handleClick} isOpen={isOpen} />

        <nav className="hidden md:flex md:items-center md:justify-center md:gap-4">
          <CustomLink href={"/"} title="Home" isScrolled={isScrolled} />
          <CustomLink href={"/about"} title="About" isScrolled={isScrolled} />
          <CustomLink href={"/experience"} title="Experience" isScrolled={isScrolled} />
          <CustomLink href={"/education"} title="Education" isScrolled={isScrolled} />
        </nav>

        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            href="https://github.com/yungtyyler"
            target="_blank"
            whileHover={{ y: -2 }}
            className={`w-6 mx-3 transition-colors duration-300 ${
              isScrolled ? "text-black hover:text-gray-700" : "text-white hover:text-gray-300"
            }`}
            whileTap={{ scale: 0.9 }}
          >
            <GitHubIcon />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/tyler-varzeas/"
            target="_blank"
            whileHover={{ y: -2 }}
            className={`w-6 mx-3 transition-colors duration-300 ${
              isScrolled ? "text-black hover:text-gray-700" : "text-white hover:text-gray-300"
            }`}
            whileTap={{ scale: 0.9 }}
          >
            <LinkedInIcon />
          </motion.a>
        </nav>
      </div>
      {isOpen && <MobileMenu handleClick={handleClick} />}
    </header>
  );
};

type HamburgerProps = {
  handleClick: () => void;
  isOpen: boolean;
};

const Hamburger = ({ handleClick, isOpen }: HamburgerProps) => {
  return (
    <button
      onClick={handleClick}
      className="flex-col justify-center items-center flex md:hidden cursor-pointer"
    >
      <span
        className={`bg-white transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${
          isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
        }`}
      ></span>
      <span
        className={`bg-white transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      ></span>
      <span
        className={`bg-white transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${
          isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
        }`}
      ></span>
    </button>
  );
};

type MobileMenuProps = {
  handleClick: () => void;
};

const MobileMenu = ({ handleClick }: MobileMenuProps) => {
  return (
    <motion.div
      className="md:hidden min-w-[70vw] z-30 flex flex-col justify-between items-center fixed top-1/2 left-1/2 bg-white/80 text-black rounded-lg backdrop-blur-md py-32"
      initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
      animate={{ scale: 1, opacity: 1 }}
    >
      <nav className="flex items-center flex-col justify-center mt-2">
        <CustomMobileLink href="/" title="Home" toggle={handleClick} />
        <CustomMobileLink href="/about" title="About" toggle={handleClick} />
        <CustomMobileLink href="/projects" title="Projects" toggle={handleClick} />
        <CustomMobileLink href="/education" title="Education" toggle={handleClick} />
      </nav>

      <nav className="flex items-center justify-center flex-wrap">
        <motion.a
          href="https://github.com/yungtyyler"
          target={"_blank"}
          whileHover={{ y: -2 }}
          className="w-6 mx-3 sm:ml-1 bg-white rounded-full"
          whileTap={{ scale: 0.9 }}
        >
          <GitHubIcon />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/tyler-varzeas/"
          target={"_blank"}
          whileHover={{ y: -2 }}
          className="w-6 mx-3 sm:mx-1"
          whileTap={{ scale: 0.9 }}
        >
          <LinkedInIcon />
        </motion.a>

        {/* <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`w-6 h-6 ease m-1 ml-3 flex items-center justify-center sm:mr-1 rounded-full p-1 border border-solid border-light dark:border-dark ${
                mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
              }`}
            >
              {mode === "dark" ? (
                <SunIcon className={"fill-dark"} />
              ) : (
                <MoonIcon className={"fill-dark"} />
              )}
            </button> */}
      </nav>
    </motion.div>
  );
};

type LinkProps = {
  href: string;
  title: string;
  isScrolled: boolean;
  className?: string;
};

const CustomLink = ({ href, title, isScrolled, className = "" }: LinkProps) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`${className} relative group transition-colors duration-300 ${
        isScrolled ? "text-black" : "text-white"
      }`}
    >
      {title}

      <span
        className={`h-[1px] inline-block absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          isScrolled ? "bg-black" : "bg-white"
        } ${pathname === href ? "w-full" : "w-0"}`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

type CustomMobileLinkProps = {
  href: string;
  title: string;
  toggle: () => void;
  className?: string;
};

const CustomMobileLink = ({ href, title, toggle, className = "" }: CustomMobileLinkProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      onClick={handleClick}
      className={`${className} cursor-pointer relative group text-black my-2`}
    >
      {title}

      <span
        className={`h-[1px] inline-block bg-black absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          pathname === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </button>
  );
};

export default Header;
