import AnimatedText from "@/components/AnimatedText";
import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useInView } from "framer-motion";
import Head from "next/head";
import Layout from "@/components/Layout";
import Image from "next/image";
import profilePic from "../../public/images/profile/developer-pic-2.jpg";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";

const bioContent = [
  "Hi, I'm CodeBucks, a web developer and UI/UX designer with apassion for creating beautiful, functional, and user-centered digital experiences. With 4 years of experience in the field. I am always looking for new and innovative ways to bring my clients' visions to life.",
  "I believe that design is about more than just making things look pretty – it's about solving problems and creating intuitive, enjoyable experiences for users.",
  "Whether I'm working on a website, mobile app, or other digital product, I bring my commitment to design excellence and user-centered thinking to every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.",
];
const bioNumber = [
  { number: 50, name: "Satisfied Employee" },
  { number: 40, name: "Hours per day" },
  { number: 20, name: "Years of experince" },
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
        <title> TranTuong | About Page</title>
        <meta name="description" content="any description"></meta>
      </Head>
      <main className="flex -w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="Passion Fuels Purpose!" className="mb-16" />

          <div className="grid w-full grid-cols-8 gap-16 text-justify items-center justify-center">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                Biography
              </h2>
              {bioContent.map((item, index) => {
                return (
                  <p className="font-medium my-2" key={index}>
                    {item}
                  </p>
                );
              })}
            </div>

            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 flex">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-2xl bg-dark" />
              <Image
                src={profilePic}
                alt="trantuong"
                className="w-full h-auto rounded-2xl"
              />
            </div>

            <div className="col-span-2 flex flex-col justify-between h-full items-end">
              {bioNumber.map((item, index) => {
                return (
                  <div
                    className="justify-center flex flex-col items-end"
                    key={index}
                  >
                    <span className="inline-block text-7xl font-bold">
                      <AnimationNumbers value={item.number} />+
                    </span>
                    <h2 className="text-xl font-medium capitalize text-dark/75">
                      {item.name}
                    </h2>
                  </div>
                );
              })}
            </div>
          </div>
          <Skills />
          <Experience />
        </Layout>
      </main>
    </>
  );
};

export default about;
