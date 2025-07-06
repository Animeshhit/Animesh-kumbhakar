import { babesNeueFont, inter } from "@/font/font";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

const Hero = () => {
  const ImageRef = useRef<HTMLDivElement | null>(null);
  useLayoutEffect(() => {
    if (ImageRef.current) {
      gsap.from(ImageRef.current, {
        opacity: 0.5,
        translateY: -20,
        duration: 0.5,
      });
    }
  });
  return (
    <>
      <div
        data-scroll
        data-scroll-speed="-0.3"
        className="flex relative items-start w-screen h-[100vh]"
      >
        <div className="absolute w-full bottom-0 left-1/2 z-1 -translate-x-1/2">
          <div className="max-w-[20vw] absolute bottom-[100%] left-[2%]">
            <h2
              className={`${inter.className} uppercase leading-none font-bold text-[1.5vw]`}
            >
              Full Stack Developer
            </h2>
            <p
              className={`${inter.className} mt-[1vh] text-[0.9vw] text-[rgba(0,0,0,0.6)]`}
            >
              I’m a full stack web developer skilled in Next.js, React, Node.js,
              and MongoDB, passionate about building scalable apps and seamless
              user experiences.
            </p>
          </div>
          <h1
            className={`${babesNeueFont.className} text-center text-[11vw] leading-none`}
          >
            Animesh kumbhakar
          </h1>
        </div>
        <div className="left_container h-screen w-1/2 flex items-start justify-start py-[1%] px-[2%]">
          <p className={`${babesNeueFont.className} uppercase text-[3vw]`}>
            A K
          </p>
        </div>
        <div
          ref={ImageRef}
          className="right_container h-screen w-1/2 hidden xl:block relative"
        >
          <nav className={`${inter.className} absolute z-1 py-[2%] px-[5%]`}>
            <ul>
              {[
                { text: "Home", href: "/" },
                { text: "About", href: "/#about" },
                { text: "Work", href: "/#work" },
                { text: "Contact", href: "/#contact" },
              ].map((link, index) => (
                <li
                  key={index}
                  className="font-semibold leading-[2.9vw] text-[2vw]"
                >
                  <Link href={link.href}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="relative  w-full h-full">
            <Image
              src="/profile.jpg"
              className="object-cover object-bottom"
              alt="Profile Photo"
              fill
              priority
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
