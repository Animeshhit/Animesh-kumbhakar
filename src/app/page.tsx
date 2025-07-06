"use client";

import { useEffect } from "react";
import Hero from "@/Components/Hero";
import About from "@/Components/About";
import Section from "@/Components/Section";
import SectionTwo from "@/Components/SectionTwo";
import SectionThree from "@/Components/SectionThree";

function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      new LocomotiveScroll();
    })();
  }, []);
  return (
    <>
      <main>
        <Hero />
        <About />
        <Section />
        <SectionTwo />
        <SectionThree />
      </main>
    </>
  );
}

export default Home;
