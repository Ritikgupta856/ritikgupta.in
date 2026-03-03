import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const HeroActions = ({ className = "" }) => (
  <div
    className={`flex flex-col items-center gap-6 sm:flex-row sm:items-center md:mt-8 ${className}`}
  >

    <Link
      href="https://linkedin.com/in/ritikgupta856"
      target="_blank"
      rel="noopener noreferrer"
      className="group hidden w-full items-center justify-center gap-2 rounded-2xl bg-zinc-900 px-8 text-[15px] font-bold text-white shadow-2xl transition-all active:scale-95 sm:w-auto md:flex md:py-3 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
    >
      Let's Connect
      <ArrowRight
        size={18}
        className="transition-transform group-hover:translate-x-1"
      />
    </Link>
  </div>
);

const Hero = () => {
  return (
    <section className="w-full font-sans tracking-tight">
      <div className="flex flex-col items-center justify-between gap-10 py-8 md:flex-row md:items-center md:gap-12 md:py-12">
        <div className="flex w-full max-w-2xl flex-1 flex-col items-start text-left">
          <h1 className="mb-6 max-w-3xl text-3xl font-bold leading-tight text-zinc-900 md:mb-8 md:text-5xl dark:text-white">
            Hello, I&apos;m a{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-cyan-400">
              software engineer.
            </span>
          </h1>

          <div className="flex w-full flex-col space-y-3 pr-0 md:pr-4">
            <p className="max-w-2xl hyphens-auto text-justify text-[15px] leading-loose tracking-wide text-zinc-600 md:text-base dark:text-zinc-400/90">
              I&apos;m a full-stack software engineer passionate about building
              modern web applications from the ground up. I turn ideas into
              fast, scalable, and production-ready products — handling
              everything from frontend design to backend architecture and
              deployment. I enjoy solving complex problems, improving
              performance, and creating systems that are clean, reliable, and
              built to last.
            </p>
          </div>

          <HeroActions className="hidden md:flex" />
        </div>

        <div className="relative mt-4 w-full flex-shrink-0 md:mt-0 md:w-auto">
          <div className="relative z-10 mx-auto aspect-square w-full max-w-[400px] overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl ring-1 ring-black/5 md:h-72 md:w-72 lg:h-96 lg:w-96">
            <Image
              alt="Ritik Gupta"
              fill
              className="object-cover"
              src="/images/avatar.jpg"
              priority
            />
          </div>
        </div>

        <HeroActions className="flex w-full md:hidden" />
      </div>
    </section>
  );
};

export default Hero;
