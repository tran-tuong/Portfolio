import "../styles/globals.css";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [showNavbarAndFooter, setShowNavbarAndFooter] = useState(true);

  useEffect(() => {
    setShowNavbarAndFooter(router.asPath !== "/minievil");
  }, [router.asPath]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={`${montserrat.className} bg-light w-full min-h-screen`}>
        {showNavbarAndFooter && <NavBar />}
        <Component key={router.asPath} {...pageProps} />
        {showNavbarAndFooter && <Footer />}
      </main>
    </>
  );
}
