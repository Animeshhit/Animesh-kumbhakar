import Image from "next/image";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function SectionThree() {
  const SectionThreeRef = useRef<HTMLDivElement | null>(null);
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (SectionThreeRef.current) {
      ScrollTrigger.create({
        trigger: SectionThreeRef.current,
        start: "top top",
        end: "+=100%",
        pin: true,
        pinSpacing: false,
        scrub: true,
      });
    }
  }, []);
  return (
    <div ref={SectionThreeRef} className="w-full h-screen bg-white relative">
      <Image
        src="/image-3.jpg"
        className="object-cover object-center"
        alt="image one"
        fill
      />
    </div>
  );
}

export default SectionThree;
