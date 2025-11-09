"use client";
import { Github, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full py-4">
      <section id="hero" className="w-full max-w-4xl">
        <div className="flex items-center justify-between gap-8 w-full">
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              Hi, I'm{" "}
              <span className="text-violet-600 dark:text-violet-400">Ritik Gupta</span>
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400 text-medium md:text-xl mt-3 font-medium">
              Full-Stack Software Engineer
            </p>
          </div>

          <div className="flex-shrink-0">
            <a
              href="https://www.linkedin.com/in/ritikgupta856"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-full overflow-hidden border-2 border-zinc-200 dark:border-zinc-700 hover:border-violet-500 dark:hover:border-violet-400 transition-all duration-300"
            >
              <img
                alt="Ritik Gupta"
                width={140}
                height={140}
                className="object-cover bg-gray-100 dark:bg-zinc-800 rounded-full"
                src="/avatar.jpg"
                decoding="async"
              />
            </a>
          </div>
        </div>


        <div className="mt-6">
          <p className="text-zinc-600 dark:text-zinc-400 text-base leading-relaxed">
            I'm a full-stack developer focused on building fast, reliable, and
            scalable web applications. I work with modern frameworks and tools
            to create clean, efficient, and user-friendly solutions. I enjoy
            solving real problems through code and turning ideas into smooth
            digital experiences that perform well and look great.
          </p>
        </div>

  
      </section>
    </div>
  );
};

export default Hero;