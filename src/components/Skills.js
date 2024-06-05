import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer absolute py-3 px-6
      lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:text-dark xs:font-bold"
      whileHover={{ scale: 1.1 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center lg:text-7xl md:text-6xl md:mt-32 md:mb-16 sm:text-5xl xs:text-4xl">
        Skills
      </h2>
      <div
        className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight
      lg:h-[80vh] lg:bg-circularLightLg md:bg-circularLightMd sm:bg-circularLightSm sm:h-[60vh] xs:h-[50vh] "
      >
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer lg:p-6 md:p-4 xs:text-xs xs:p-2"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="C#" x="-20vw" y="2vw" />
        <Skill name="TailwindCSS" x="-5vw" y="-10vw" />
        <Skill name="Javascript" x="20vw" y="6vw" />
        <Skill name="ReactJS" x="0vw" y="12vw" />
        <Skill name="NextJS" x="-20vw" y="-15vw" />
        <Skill name="C" x="15vw" y="-12vw" />
        <Skill name="Database" x="32vw" y="-15vw" />
        <Skill name="Algorithm" x="0vw" y="-20vw" />
        <Skill name="Github" x="-25vw" y="18vw" />
        <Skill name="Linux" x="18vw" y="18vw" />
      </div>
    </>
  );
};

export default Skills;
