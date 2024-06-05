import AnimatedText from "../components/AnimatedText";
import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useInView } from "framer-motion";
import Head from "next/head";
import Layout from "../components/Layout";
import Image from "next/image";
import profilePic from "../../public/images/profile/profile-1.png";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Education from "../components/Education";
import TransitionEffect from "../components/TransitionEffect";

const bioContent = [
  "Hi! My name is Tran Van Tuong - fourth year student at the Vietnam National University, Hanoi. I have a passion for learning and developing high-quality web applications. I am always eager to improve myself and aspire to pursue a career as a Software Engineer.",
  "I have a solid foundation in HTML, CSS, JavaScript, and have recently delved into frameworks such as React and Node.js. My coursework and projects have provided me with hands-on experience in developing and deploying web applications, reinforcing my desire to become a skilled Software Engineer.",
  "During my time at university, I have worked on several projects that have honed my skills and allowed me to apply theoretical knowledge in practical settings. One notable project was the development of a personal website that showcases my portfolio and the project.",
];
const bioNumber = [
  { number: 4, name: "Years Students" },
  { number: 21, name: "Years appear in life" },
  { number: 5, name: "Projects" },
];

const AnimationNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);
  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title> TranTuong | About</title>
        <meta name="description" content="any description"></meta>
      </Head>
      <TransitionEffect />
      <main className="flex -w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="About me" className="mb-16 sm:mb-8" />

          <div className="grid w-full grid-cols-8 gap-16 text-justify items-center justify-center sm:gap-8 ">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                Biography
              </h2>
              {bioContent.map((item, index) => {
                return (
                  <p
                    className="font-medium my-2 lg:text-sm md:text-base sm:text-sm"
                    key={index}
                  >
                    {item}
                  </p>
                );
              })}
            </div>

            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 flex xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-2xl bg-dark" />
              <Image
                src={profilePic}
                alt="trantuong"
                className="w-full h-auto rounded-2xl"
              />
            </div>

            <div className="col-span-2 flex flex-col justify-between h-full items-end xl:col-span-8 xl:flex-row xl:items-center  md:order-3">
              {bioNumber.map((item, index) => {
                return (
                  <div
                    className="justify-center flex flex-col items-end xl:items-center"
                    key={index}
                  >
                    <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                      <AnimationNumbers value={item.number} />+
                    </span>
                    <h2 className="text-xl font-medium capitalize text-dark/75 xl:text-center md:text-base sm:text-sm xs:text-xs">
                      {item.name}
                    </h2>
                  </div>
                );
              })}
            </div>
          </div>
          <Skills />
          <Education />
          <Experience />
        </Layout>
      </main>
    </>
  );
};

export default about;
