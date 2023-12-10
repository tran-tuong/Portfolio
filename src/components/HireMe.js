import React from "react";
import { CircularText } from "./Icons";
import Link from "next/link";

const HireMe = () => {
  return (
    <div
      className="fixed left-8 bottom-8 flex items-center justify-center 
    overflow-hidden lg:right-4 lg:left-auto lg:-top-3 lg:bottom-auto lg:absolute z-10"
    >
      <div className="w-36 h-auto flex items-center justify-center relative lg:w-28">
        <CircularText className={"fill-dark animate-spin-slow"} />
      </div>

      <Link
        href={"mailto:tranvantuong2k3@gmail.com"}
        className="flex items-center justify-center absolute left-1/2 top-1/2 
      -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark
      w-16 h-16 text-center text-sm rounded-full font-semibold hover:bg-light hover:text-dark
      lg:w-12 lg:h-12 lg:text-[10px]"
      >
        Hire Me
      </Link>
    </div>
  );
};

export default HireMe;
