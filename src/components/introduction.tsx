"use client"
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

export const Introduction = () => {
  return (
    <div className="z-20 w-full bg-darkBg/60">
      <div className="z-20 grid items-center h-full p-6 py-20 md:grid-cols-2">
        <div className="flex justify-center">
          <Image
            src="/home-4.png"
            priority
            width="500"
            height="500"
            alt="profile picture"
            className="max-w-full h-auto"
          />
        </div>
        <div className="flex flex-col justify-center max-w-md mx-auto">
          <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">
            If you can think of it,
            <TypeAnimation
              sequence={[
                "you can program it",
                1000,
                "you can optimize it",
                1000,
                "you can implement it",
                1000,
                "you can develop it",
                1000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="block font-bold text-secondary"
            />
          </h1>
          <p className="mx-auto mb-2 text-xl md:mx-0  md:mb-8">
            I am a full-stack web developer with a passion for creating
            beautiful and intuitive user interfaces.
          </p>
          <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
          <Link href ="/projects" className="px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
          See projects
          </Link>
          <Link href ="/contact" className="px-3 py-2 transition-all text-secondary border-secondary border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-secondary">
          Contact me
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
