import Head from "next/head";
import React, { ReactElement } from "react";
import TransitionEffect from "../components/TransitionEffect";
import Countdown from "../components/Countdown";

const minievil = (): ReactElement => {
  return (
    <>
      <Head>
        <title>To my 😈</title>
        <meta name="description" content="Hehe" />
      </Head>
      <TransitionEffect/>
      <main className="flex flex-col items-center justify-center min-h-[100vh]">
        <h1 className="text-dark text-2xl md:text-base text-center tracking-widest pt-0 pb-8 ">
          WE FALL IN LOVE ABOUT
        </h1>
        <div className="">
          <Countdown />
        </div>
      </main>
    </>
  );
};

export default minievil;
