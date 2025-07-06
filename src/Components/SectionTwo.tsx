import Image from "next/image";
import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function SectionTwo() {
  const SectionTwoRef = useRef<HTMLDivElement | null>(null);
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (SectionTwoRef.current) {
      ScrollTrigger.create({
        trigger: SectionTwoRef.current,
        start: "top top",
        end: "+=100%",
        pin: true,
        pinSpacing: false,
        scrub: true,
      });
    }
  }, []);
  return (
    <div ref={SectionTwoRef} className="w-full h-screen bg-white relative">
      <Image
        src="/image-2.jpg"
        className="object-cover object-center"
        alt="image one"
        fill
      />
    </div>
  );
}

export default SectionTwo;
