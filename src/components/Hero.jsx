import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, ArrowRight } from "lucide-react";
import { IconBrandX } from "@tabler/icons-react";


const socialLinks = [
  { href: "https://x.com/ritikgupta856", icon: IconBrandX, label: "X" },
  { href: "https://linkedin.com/in/ritikgupta856", icon: Linkedin, label: "LinkedIn" },
  { href: "https://github.com/Ritikgupta856", icon: Github, label: "GitHub" },
];

const Hero = () => {
  return (
    <section className="w-full font-sans tracking-tight">
      <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-4 md:gap-12 py-8 md:py-12">

        {/* Left: Text content */}
        <div className="flex-1 flex flex-col items-start text-left max-w-2xl w-full">
          {/* Heading */}
          <h1 className="font-bold text-zinc-900 dark:text-white text-3xl md:text-5xl leading-tight max-w-3xl mb-8">
            Hello, I&apos;m a{" "}
            <span className="dark:text-blue-400 text-blue-500">
              software engineer.
            </span>
          </h1>

          {/* About */}
          <div className="flex flex-col space-y-3 mb-8 w-full pr-0 md:pr-4">
            <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base max-w-2xl leading-loose tracking-wide text-justify hyphens-auto">
              I&apos;m a full-stack software engineer passionate about building modern web applications from the ground up.
              I turn ideas into fast, scalable, and production-ready products — handling everything from frontend design
              to backend architecture and deployment. I enjoy solving complex problems, improving performance, and
              creating systems that are clean, reliable, and built to last.

            </p>
          </div>

          {/* Actions & Socials */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-6">
            <Link
              href="mailto:hello@ritikgupta.in"
              className="flex items-center hidden sm:flex gap-2 px-6 py-3 bg-zinc-900 dark:bg-zinc-50 hover:bg-zinc-800 dark:hover:bg-zinc-200 text-white dark:text-zinc-900 rounded-xl font-semibold transition-colors shadow-lg"
            >
              Get in Touch
              <ArrowRight size={18} />
            </Link>

            {/* Social icons */}
            <div className="flex items-center gap-5 sm:pl-2">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-zinc-500 dark:text-zinc-400 hover:text-blue-500 dark:hover:text-blue-400 hover:-translate-y-1 transition-all duration-200"
                >
                  <Icon size={24} />
                </Link>
              ))}
            </div>
          </div>

        </div>

        {/* Right: Image */}
        <div className="flex flex-col items-center relative flex-shrink-0 mt-12 md:mt-0">
          <div className="w-72 h-72 lg:w-96 lg:h-96 rounded-2xl overflow-hidden relative shadow-xl z-10 border border-white/10 ring-1 ring-black/5">

            <Image alt="Ritik Gupta" fill className="object-cover" src="/images/avatar.jpg" priority />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;

