import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";
import Head from "next/head";
import Layout from "@/components/Layout";
import React from "react";
import Link from "next/link";
import { GithubIcon } from "@/components/Icons";
import { motion } from "framer-motion";
import project1 from "../../public/images/projects/agency-website-cover-image.jpg";
import TransitionEffect from "@/components/TransitionEffect";

const ProjectData = [
  {
    type: "Project 1",
    link: "/",
    github: "/",
    summary:
      "A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts.  It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency.",
    title: "Crypto Screener Application",
    img: project1,
  },
  {
    type: "Project 1",
    link: "/",
    github: "/",
    summary:
      "A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts.  It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency.",
    title: "Crypto Screener Application",
    img: project1,
  },
  {
    type: "Project 1",
    link: "/",
    github: "/",
    summary:
      "A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts.  It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency.",
    title: "Crypto Screener Application",
    img: project1,
  },
  {
    type: "Project 1",
    link: "/",
    github: "/",
    summary:
      "A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts.  It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency.",
    title: "Crypto Screener Application",
    img: project1,
  },
];

const FramerImage = motion(Image);
const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative
    lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      <div class="absolute  top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark dark:bg-light  sm:-right-2 xs:h-[102%]  xs:rounded-[1.5rem] xs:w-full" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={"article"}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold sm:text-2xl">
            {title}
          </h2>
        </Link>

        <p className="my-2 font-medium text-dark text-justify sm:text-sm">
          {summary}
        </p>
        <div href={link} className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold hover:bg-light hover:text-dark border 
            border-solid border-dark sm:px-4 sm:text-base"
          >
            {" "}
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, summary, link, github, img }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-between rounded-3xl border border-solid 
    border-dark bg-light shadow-2xl p-6 relative xs:p-4  my-4
    first:mt-0 border-r-8 border-b-8"
    >
      {/* <div class="absolute  top-0 -right-3.5 -z-10 h-[103%] w-[102.3%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light  sm:-right-2 xs:h-[102%]  xs:rounded-[1.5rem] xs:w-full" /> */}

      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={"article"}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between ">
        <span className="text-primary font-medium text-xl lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold xl:text-2xl lg:text-xl md:text-xl sm:text-lg">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark text-justify sm:text-sm">
          {summary}
        </p>
        <div
          href={link}
          className="w-full mt-2 flex items-center justify-between"
        >
          <Link
            href={link}
            target="_blank"
            className="rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold hover:bg-light hover:text-dark border 
            border-solid border-dark sm:px-4 md:text-base sm:text-sm"
          >
            {" "}
            Visit Project
          </Link>
          <Link href={github} target="_blank" className="w-10 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title> TranTuong | Projects</title>
        <meta name="description" content="any description"></meta>
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                type="Featured Project"
                link="/"
                github="/"
                title="Crypto Screener Application"
                img={project1}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts.  It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
              />
            </div>

            {ProjectData.map((item, index) => {
              return (
                <div className="col-span-6 md:col-span-12" key={index}>
                  <Project
                    title={item.title}
                    type={item.type}
                    link={item.link}
                    github={item.github}
                    summary={item.summary}
                    img={item.img}
                  />
                </div>
              );
            })}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
