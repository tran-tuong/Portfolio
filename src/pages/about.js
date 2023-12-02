import AnimatedText from "@/components/AnimatedText";
import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";

const about = () => {
  return (
    <>
      <Head>
        <title> TranTuong | About Page</title>
        <meta name="description" content="any description"></meta>
      </Head>
      <main className="flex -w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="Passion Fuels Purpose!" />
        </Layout>

        <div className="grid w-full grid-cols-8 gap-16">
          <div className="col-span-3 flex flex-col items-start justify-start">
            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
              Biography
            </h2>
            <p className="font-medium"></p>
          </div>
        </div>
      </main>
    </>
  );
};

export default about;
