/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import memojiComputer from "@/assets/images/memoji-computer.png";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import SparkleIcon from "@/assets/icons/sparkle.svg";

export const HeroSection = () => {
  return (
    <section id="home" className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}>
        </div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        <HeroOrbit rotation={-72} size={920}>
          <StarIcon className="size-32 text-violet-300" />
        </HeroOrbit>
        <HeroOrbit rotation={-72} size={800}>
          <StarIcon className="size-28 text-violet-300" />
        </HeroOrbit>
        <HeroOrbit rotation={20} size={550}>
          <StarIcon className="size-12 text-violet-300" />
        </HeroOrbit>
        <HeroOrbit rotation={98} size={590}>
          <StarIcon className="size-8 text-violet-300" />
        </HeroOrbit>
        <HeroOrbit rotation={-15} size={430}>
          <SparkleIcon className="size-8 text-violet-300/30" />
        </HeroOrbit>
        <HeroOrbit rotation={80} size={440}>
          <SparkleIcon className="size-5 text-violet-300/30" />
        </HeroOrbit>
        <HeroOrbit rotation={180} size={530}>
          <SparkleIcon className="size-10 text-violet-300/30" />
        </HeroOrbit>
        <HeroOrbit rotation={145} size={710}>
          <SparkleIcon className="size-14 text-violet-300/30" />
        </HeroOrbit>
      </div>
      <div className="container relative z-50">
        <div className="flex flex-col items-center">
          <Image src={memojiComputer} className="size-28" alt="a Person using a computer" />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-full">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 size-2.5 rounded-full inset-0 animate-ping">
              </div>
            </div>
            <div className="text-sm font-medium">Avaiable for new projects</div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wider">Building Exceptional Software</h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            Senior Full Stack Developer with 5+ years building scalable applications from legacy mainframe systems to modern cloud solutions. Specialized in banking & fintech with proven expertise leading technical teams and modernizing mission-critical systems serving millions of users daily.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <a href="#projects">
            <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl cursor-pointer">
              <span className="font-semibold">Explore my Work</span>
              <ArrowDown className="size-4 animate-bounce" />
            </button>
          </a>
          <a href="mailto:gabriel.oiveira@df.estudante.senai.br">
            <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl cursor-pointer">
              <span className="wave">👋</span>
              <span className="font-semibold">Let's Connect</span>
            </button>
          </a>
          <a href="https://www.linkedin.com/in/gabriel-mesquita-oliveira-4910372a1/" target="_blank" rel="noopener noreferrer">
            <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl cursor-pointer">
              <span>💼</span>
              <span className="font-semibold">LinkedIn</span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};
