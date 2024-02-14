import AnimatedText from "../components/AnimatedText";
import Layout from "../components/Layout";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import React, { useRef } from "react";
import award1 from "../../public/images/awards/create modal component in react using react portals.png";
import { motion, useMotionValue } from "framer-motion";
import TransitionEffect from "../components/TransitionEffect";

const FramerImage = motion(Image);
const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }
  function handleMouseLeave() {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        ref={imgRef}
        src={img}
        alt={title}
        className="z-10 w-96 h-auto hidden absolute rounded-lg lg:!hidden"
      />
    </Link>
  );
};

const Awards = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      className="relative w-full flex justify-between items-center p-4 py-6 my-4 rounded-xl
    first:mt-0 border border-solid border-dark border-r-4 border-b-4 sm:flex-col"
    >
      <MovingImg title={title} link={link} img={img} />
      <span className="text-primary font-semibold sm:self-start">{date}</span>
    </motion.li>
  );
};

const FeaturedAward = ({ img, title, time, summary, link }) => {
  return (
    <li className="col-span-1 w-full p-5 bg-light border boder-solid border-dark rounded-2xl relative">
      <div class="absolute top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2.5rem] rounded-br-3xl bg-dark dark:bg-light  xs:-right-2 xs:h-[102%] xs:w-[100%] xs:rounded-[1.5rem] " />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={"article"}
          className="w-full h-auto rounded-2xl"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        />
      </Link>

      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-4 hover:underline lg:text-lg">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-primary font-semibold">{time}</span>
    </li>
  );
};

const awards = () => {
  return (
    <>
      <Head>
        <title> TranTuong | Awards</title>
        <meta name="description" content="any description"></meta>
      </Head>
      <TransitionEffect />
      <main className="w-ful mb-16 flex flex-col items-center justify-center overflow-hidden">
        <Layout className="pt-16">
          <AnimatedText
            text={"Words Can Change The World! "}
            className="mb-20"
          ></AnimatedText>
          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-16">
            <FeaturedAward
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              summary="Learn how to build a custom pagination component in ReactJS from scratch.
            Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              time="9 min read"
              img={award1}
              link="/"
            />
            <FeaturedAward
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              summary="Learn how to build a custom pagination component in ReactJS from scratch.
            Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              time="9 min read"
              img={award1}
              link="/"
            />
          </ul>

          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            All Certificate
          </h2>
          <ul>
            <Awards
              img={award1}
              link="/"
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              date="December 12, 2023"
            />
            <Awards
              img={award1}
              link="/"
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              date="December 12, 2023"
            />
            <Awards
              img={award1}
              link="/"
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              date="December 12, 2023"
            />
            <Awards
              img={award1}
              link="/"
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              date="December 12, 2023"
            />
            <Awards
              img={award1}
              link="/"
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              date="December 12, 2023"
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default awards;
