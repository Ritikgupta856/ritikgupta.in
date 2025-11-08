"use client";
import { Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="block relative lg:flex flex-col mt-5">
      <section id="hero" className="w-full">
        <div className="w-full space-y-8">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-10">
            <div className="flex flex-col flex-1 text-center md:text-left space-y-3">
              <h1 className="text-3xl sm:text-4xl xl:text-5xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                Hi, I'm{" "}
                <span className="text-violet-600 dark:text-violet-400">
                  Ritik Gupta
                </span>
              </h1>
              <p className="text-zinc-600 dark:text-zinc-300 text-base sm:text-lg max-w-[600px] mx-auto md:mx-0">
                A <span className="font-medium">Full-Stack Developer</span> &
                passionate <span className="font-medium">Tech Enthusiast</span>.
              </p>
            </div>

            <div className="relative flex-shrink-0">
              <Link
                href="https://www.linkedin.com/in/ritikgupta856"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl overflow-hidden shadow-lg ring-1 ring-zinc-200 dark:ring-zinc-700 hover:scale-105 transition-transform duration-300"
              >
                <Image
                  alt="Ritik Gupta"
                  width={140}
                  height={140}
                  className="object-cover bg-gray-100 dark:bg-zinc-800 rounded-2xl"
                  src="/avatar.jpg"
                  decoding="async"
                />
              </Link>
            </div>
          </div>

          <div className="w-full">
              <p className="text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed tracking-wide text-justify">
                I’m a full-stack developer focused on building fast, reliable,
                and scalable web applications. I work with modern frameworks and
                tools to create clean, efficient, and user-friendly solutions. I
                enjoy solving real problems through code and turning ideas into
                smooth digital experiences that perform well and look great. I’m
                driven by curiosity, attention to detail, and a constant urge to
                refine both design and functionality to deliver meaningful,
                high-quality products.
              </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
