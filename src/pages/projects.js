import AnimatedText from "../components/AnimatedText";
import Image from "next/image";
import Head from "next/head";
import Layout from "../components/Layout";
import React from "react";
import Link from "next/link";
import { GithubIcon } from "../components/Icons";
import { motion } from "framer-motion";
import portfolioImg from "../../public/images/projects/portfolio.png";
import istechImg from "../../public/images/projects/istechWeb.png";
import stuImg from "../../public/images/projects/StuMS.png";
import guesImg from "../../public/images/projects/GuessMyNum.png";
import pigImg from "../../public/images/projects/PigGame.png";
import blogImg from "../../public/images/projects/PersonalBlog.png";
import TransitionEffect from "../components/TransitionEffect";

const ProjectData = [
  {
    type: "Personal Project",
    link: "https://trantuong.id.vn",
    github: "https://github.com/tran-tuong/Portfolio",
    title: "Personal Portfolio",
    img: portfolioImg,
    summary:
      "Create portfolio App using React, Tailwind CSS. Implemented responsive design principles to ensure accessibility and visual appeal across various devices. Showcased personal projects, skills, and accomplishments. Deployed the website and conducted thorough testing for optimal performance and usability.",
  },
  {
    type: "Group Project",
    link: "https://web-istech.vercel.app/",
    github: "https://github.com/tran-tuong/web-istech",
    summary:
      "A Istech Web Application using React, Tailwind CSS, React Router.  Collaborated with a team of three to develop a web application for the ISTECH Club. Utilized Vercel for seamless deployment and continuous integration. Contributed significantly to front-end design, ensuring cohesive and aesthetically pleasing user experience.",
    title: "Istech Website",
    img: istechImg,
  },
  {
    type: "Personal Project",
    link: "https://tran-tuong.github.io/GuestMyNum/",
    github: "https://github.com/tran-tuong/GuestMyNum",
    summary:
      "Create Guess My Num game using HTML, CSS and Javascript. Deployment with Github Page.",
    title: "Guess My Num",
    img: guesImg,
  },
  {
    type: "Personal Project",
    link: "https://tran-tuong.github.io/PigGame/",
    github: "https://github.com/tran-tuong/PigGame",
    summary:
      "Create Pig Game using HTML, CSS and Javascript. Deployment with Github Page.",
    title: "Pig Game",
    img: pigImg,
  },
  {
    type: "Group Project",
    link: "https://github.com/tran-tuong/Student-Management-Systems",
    github: "https://github.com/tran-tuong/Student-Management-Systems",
    summary:
      "Collaborated with a team of three using C# ASP .NET MVC to develop a web application for managing student and course information. Main contributions included developing algorithms for CRUD operations, implementing authentication features for secure login and logout, and designing the user interface for user-friendly experience.",
    title: "StuMS",
    img: stuImg,
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
        <div
          href={link}
          className="w-full mt-2 flex items-center justify-between flex-row-reverse"
        >
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className=" rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold hover:bg-light hover:text-dark border 
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
          <AnimatedText text="My project" className="mb-16" />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                type="Personal Project"
                link="https://personal-blog-r183.onrender.com "
                github="https://github.com/tran-tuong/mern-blog"
                title="Personal Blog"
                img={blogImg}
                summary="Create a Blog Application using NodeJS, ReactJS, MoogoseDB, Express, Firebase, and TailwindCSS. Allowed users to view, comment on, and like posts published by the admin. Implemented Google Authentication for secure and easy user login. Enabled admins to add, delete, and edit posts, users, and comments."
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
