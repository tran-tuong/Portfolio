import React, { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {
  FacebookIcon,
  GithubIcon,
  InsIcon,
  LinkedInIcon,
  TiktokIcon,
} from "./Icons";
import { motion } from "framer-motion";
import HireMe from "./HireMe";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
      ${router.asPath === href ? "w-full" : "w-0"}
      `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      href={href}
      className={`${className} relative group text-light my-2`}
      onClick={handleClick}
    >
      {title}

      <span
        className={`h-[1.5px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
      ${router.asPath === href ? "w-full" : "w-0"}
      `}
      >
        &nbsp;
      </span>
    </button>
  );
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full flex items-center justify-between px-32 py-8 font-medium z-10 relative lg:px-16 md:px-12 sm:px-8">
      <button
        className=" flex-col justify-center items-center hidden lg:flex"
        onClick={handleClick}
      >
        <span
          className={`bg-dark block h-0.5 transition-all duration-300 ease-out w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark block h-0.5 transition-all duration-300 ease-out w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark block h-0.5 transition-all duration-300 ease-out w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Projects" className="mx-4" />
          <CustomLink href="/awards" title="Awards" className="ml-4" />
        </nav>

        <nav className="flex items-center justify-center flex-wrap ">
          <motion.a
            href="https://www.facebook.com/trantuong2k3"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mr-3"
          >
            <FacebookIcon />
          </motion.a>
          {/* <motion.a
            href="https://www.instagram.com/tran._.tuong/"
            targenpt={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <InsIcon />
          </motion.a>
          <motion.a
            href="https://www.tiktok.com/@trantuongo_o"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <TiktokIcon />
          </motion.a> */}
          <motion.a
            href="https://github.com/tran-tuong"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/tr%E1%BA%A7n-t%C6%B0%E1%BB%9Fng-a7551a225/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 ml-3"
          >
            <LinkedInIcon />
          </motion.a>
        </nav>
      </div>
      {/* responsive */}
      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw]  z-30 flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/70 rounded-lg backdrop-blur-md py-32"
        >
          <nav className="flex flex-col items-center justify-center">
            <CustomMobileLink
              href="/"
              title="Home"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/about"
              title="About"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title="Projects"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/awards"
              title="Awards"
              className=""
              toggle={handleClick}
            />
          </nav>

          <nav className="flex items-center justify-center flex-wrap mt-6">
            <motion.a
              href="https://www.facebook.com/trantuong2k3"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mr-3 bg-blue-600 rounded-lg"
            >
              <FacebookIcon />
            </motion.a>
            {/* <motion.a
              href="https://www.instagram.com/tran._.tuong/"
              targenpt={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3"
            >
              <InsIcon />
            </motion.a>
            <motion.a
              href="https://www.tiktok.com/@trantuongo_o"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3"
            >
              <TiktokIcon />
            </motion.a> */}
            <motion.a
              href="https://github.com/tran-tuong"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 bg-light rounded-full"
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/tr%E1%BA%A7n-t%C6%B0%E1%BB%9Fng-a7551a225/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 ml-3"
            >
              <LinkedInIcon />
            </motion.a>
          </nav>
        </motion.div>
      ) : null}

      <div className="absolute left-[48%] top-3 translate-x-[48%] lg:left-[45%] lg:translate-x-[45%]">
        <Logo />
      </div>
      <div className="hidden lg:flex">
        <HireMe />
      </div>
    </header>
  );
};

export default NavBar;
