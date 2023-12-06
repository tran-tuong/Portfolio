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

const FramerImage = motion(Image);
const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative">
      <div class="absolute  top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark dark:bg-light  xs:-right-2 xs:h-[102%] xs:w-[100%] xs:rounded-[1.5rem] " />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={"article"}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>

        <p className="my-2 font-medium text-dark">{summary}</p>
        <div href={link} className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold hover:bg-light hover:text-dark border border-solid border-dark"
          >
            {" "}
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, link, github, img }) => {
  return (
    <article className="w-full flex flex-col items-center justify-between rounded-2xl border border-solid border-dark bg-light shadow-2xl p-6 relative">
      <div class="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2.5rem] rounded-br-3xl bg-dark dark:bg-light  xs:-right-2 xs:h-[102%] xs:w-[100%] xs:rounded-[1.5rem] " />
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
      <div className="w-full flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
        </Link>
        <div
          href={link}
          className="w-full mt-2 flex items-center justify-between"
        >
          <Link
            href={link}
            target="_blank"
            className="text-medium font-medium hover:underline"
          >
            {" "}
            Visit Project
          </Link>
          <Link href={github} target="_blank" className="w-10">
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

            <div className="col-span-6">
              <Project
                type="Project 1"
                link="/"
                github="/"
                title="Crypto Screener Application"
                img={project1}
              />
            </div>
            <div className="col-span-6">
              <Project
                type="Project 2"
                link="/"
                github="/"
                title="Crypto Screener Application"
                img={project1}
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                type="Project 4"
                link="/"
                github="/"
                title="Crypto Screener Application"
                img={project1}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts.  It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
              />
            </div>

            <div className="col-span-6">
              <Project
                type="Project 5"
                link="/"
                github="/"
                title="Crypto Screener Application"
                img={project1}
              />
            </div>
            <div className="col-span-6">
              <Project
                type="Project 6"
                link="/"
                github="/"
                title="Crypto Screener Application"
                img={project1}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
