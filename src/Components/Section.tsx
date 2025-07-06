import Image from "next/image";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function Section() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (sectionRef.current) {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=100%",
        pin: true,
        pinSpacing: false,
        scrub: true,
      });
    }
  }, []);
  return (
    <div ref={sectionRef} className="w-full h-screen bg-white relative">
      <Image
        src="/image-1.jpg"
        className="object-cover object-center"
        alt="image one"
        fill
      />
    </div>
  );
}

export default Section;
