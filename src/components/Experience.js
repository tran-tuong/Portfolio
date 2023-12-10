import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const dataExperience = [
  {
    position: "Software Engineer",
    company: "Google",
    companyLink: "https://www.facebook.com/",
    time: "2022-Present",
    address: "Mountain View, CA",
    work: "Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization.",
  },
  {
    position: "Software Engineer",
    company: "Google",
    companyLink: "https://www.facebook.com/",
    time: "2022-Present",
    address: "Mountain View, CA",
    work: "Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization.",
  },
  {
    position: "Software Engineer",
    company: "Google",
    companyLink: "https://www.facebook.com/",
    time: "2022-Present",
    address: "Mountain View, CA",
    work: "Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization.",
  },
];

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-sm">
          {position}&nbsp;{" "}
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 xs:text-xs">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-xs">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <>
      <div className="my-64">
        <h2 className="font-bold text-8xl mb-32 w-full text-center lg:text-7xl md:text-6xl md:mt-32 md:mb-16 sm:text-5xl xs:text-4xl">
          Experience
        </h2>
        <div
          ref={ref}
          className="w-[75%] mx-auto relative lg:w-[90%] md:w-full"
        >
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top md:w-[2px] md:left-[30px] xs:left-[19px]"
          />
          <ul className="w-full flex flex-col items-start justify-between ml-4 text-justify xs:ml-2">
            {dataExperience.map((item, index) => {
              return (
                <Details
                  key={index}
                  position={item.position}
                  company={item.company}
                  companyLink={item.companyLink}
                  time={item.time}
                  address={item.address}
                  work={item.work}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Experience;
