import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg">
      <Layout className="py-8 flex items-center justify-between">
        <span>Rights</span>
        <Link href="/">Tran Tuong</Link>
        <Link href="/">Say hehe</Link>
      </Layout>
    </footer>
  );
};

export default Footer;
