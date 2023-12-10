import React from "react";
import Layout from "./Layout";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FacebookIcon,
  GithubIcon,
  InsIcon,
  LinkedInIcon,
  TiktokIcon,
} from "./Icons";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg lg:text-base md:text-sm sm:text-xs">
      <Layout className="py-8 flex items-center justify-between xl:py-8 lg:py-6 md:flex-col ">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center md:p-2">
          Build With <span className="text-primary text-2xl px-1">&#9825;</span>
          by&nbsp;
          <Link
            href="/"
            target="_blank"
            className="underline underline-offset-3 hover:decoration-2 hover:text-primary"
          >
            TranTuong
          </Link>
        </div>

        <Link
          href="https://www.facebook.com/trantuong2k3"
          target="_blank"
          className="hover:text-primary hover:underline md:hidden"
        >
          Inbox me
        </Link>
        <nav className="mt-2 items-center justify-center flex-wrap hidden md:flex">
          <motion.a
            href="https://www.facebook.com/trantuong2k3"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mr-3 bg-blue-600 rounded-xl"
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
      </Layout>
    </footer>
  );
};

export default Footer;
