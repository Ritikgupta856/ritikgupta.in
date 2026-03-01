import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, ArrowRight } from "lucide-react";
import { IconBrandX } from "@tabler/icons-react";

const socialLinks = [
  { href: "https://x.com/ritikgupta856", icon: IconBrandX, label: "X" },
  {
    href: "https://linkedin.com/in/ritikgupta856",
    icon: Linkedin,
    label: "LinkedIn",
  },
  { href: "https://github.com/Ritikgupta856", icon: Github, label: "GitHub" },
];

const Hero = () => {
  return (
    <section className="w-full font-sans tracking-tight">
      <div className="flex flex-col items-center justify-between gap-4 py-8 md:flex-row md:items-center md:gap-12 md:py-12">
        {/* Left: Text content */}
        <div className="flex w-full max-w-2xl flex-1 flex-col items-start text-left">
          {/* Heading */}
          <h1 className="mb-8 max-w-3xl text-3xl font-bold leading-tight text-zinc-900 md:text-5xl dark:text-white">
            Hello, I&apos;m a{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              software engineer.
            </span>
          </h1>

          {/* About */}
          <div className="mb-8 flex w-full flex-col space-y-3 pr-0 md:pr-4">
            <p className="max-w-2xl hyphens-auto text-justify text-sm leading-loose tracking-wide text-zinc-600 md:text-base dark:text-zinc-400">
              I&apos;m a full-stack software engineer passionate about building
              modern web applications from the ground up. I turn ideas into
              fast, scalable, and production-ready products — handling
              everything from frontend design to backend architecture and
              deployment. I enjoy solving complex problems, improving
              performance, and creating systems that are clean, reliable, and
              built to last.
            </p>
          </div>

          {/* Actions & Socials */}
          <div className="mt-6 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <Link
              href="mailto:hello@ritikgupta.in"
              className="flex hidden items-center gap-2 rounded-xl bg-zinc-900 px-6 py-3 font-semibold text-white shadow-lg transition-colors hover:bg-zinc-800 sm:flex dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
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
                  className="text-zinc-500 transition-all duration-200 hover:-translate-y-1 hover:text-blue-500 dark:text-zinc-400 dark:hover:text-blue-400"
                >
                  <Icon size={24} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Image */}
        <div className="relative mt-12 flex flex-shrink-0 flex-col items-center md:mt-0">
          <div className="relative z-10 h-72 w-72 overflow-hidden rounded-2xl border border-white/10 shadow-xl ring-1 ring-black/5 lg:h-96 lg:w-96">
            <Image
              alt="Ritik Gupta"
              fill
              className="object-cover"
              src="/images/avatar.jpg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
