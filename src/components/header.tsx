"use client";

import Link from "next/link";
import React, { useState } from "react";
import { GitHubIcon, LinkedInIcon } from "./icons";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "motion/react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="mx-auto max-w-6xl w-full px-4 sm:px-6 lg:px-8 py-8 font-medium flex items-center justify-between relative z-10">
      {/* Hamburger */}
      <Hamburger handleClick={handleClick} isOpen={isOpen} />

      <div className="w-full flex items-center justify-between gap-4">
        <nav>
          <CustomLink href={"/"} title="Home" className="mr-4" />
          <CustomLink href={"/about"} title="About" className="mx-4" />
          <CustomLink href={"/experience"} title="Experience" className="mx-4" />
          <CustomLink href={"/education"} title="Education" className="ml-4" />
        </nav>
        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            href="https://github.com/yungtyyler"
            target={"_blank"}
            whileHover={{ y: -2 }}
            className="w-6 mx-3"
            whileTap={{ scale: 0.9 }}
          >
            <GitHubIcon />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/tyler-varzeas/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            className="w-6 mx-3"
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
    <button onClick={handleClick} className="flex-col justify-center items-center hidden lg:flex">
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
      className="min-w-[70vw] z-30 flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 text-black rounded-lg backdrop-blur-md py-32"
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
  className?: string;
};

const CustomLink = ({ href, title, className = "" }: LinkProps) => {
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span
        className={`h-[1px] inline-block bg-white absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          usePathname() === href ? "w-full" : "w-0"
        }`}
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
