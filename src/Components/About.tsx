import { inter } from "@/font/font";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

function About() {
  const textRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const letters = textRef?.current?.querySelectorAll(
      "span"
    ) as NodeListOf<Element>;

    if (letters) {
      gsap.fromTo(
        letters,
        { opacity: 0.2 },
        {
          opacity: 1,
          stagger: 0.02,
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 90%",
            end: "bottom 70%",
            scrub: true,
          },
        }
      );
    }
  }, []);

  const text = `I'm a passionate full stack web developer skilled in Next.js, React,
    Node.js, and MongoDB, dedicated to building robust, scalable
    applications with seamless user experiences. I enjoy working across the
    stack—from crafting responsive, intuitive frontends to developing
    secure, efficient backends and managing databases. Always eager to learn
    and improve, I strive to turn complex problems into clean, maintainable
    solutions that delight users and drive real impact.`;

  return (
    <div
      data-scroll
      data-scroll-speed=".4"
      className="w-full h-screen flex z-[200] bg-white items-center justify-center"
    >
      <p
        ref={textRef}
        className={`${inter.className} mx-auto max-w-[70vw] leading-relaxed font-semibold text-[2vw]`}
      >
        {text.split("").map((char, i) => (
          <span key={i}>{char}</span>
        ))}
      </p>
    </div>
  );
}

export default About;
