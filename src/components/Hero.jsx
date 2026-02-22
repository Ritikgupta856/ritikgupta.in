import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";

const socialLinks = [
  { href: "https://github.com/Ritikgupta856", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com/in/ritikgupta856", icon: Linkedin, label: "LinkedIn" },
  { href: "https://x.com/ritikgupta856", icon: Twitter, label: "X" },
];

const Hero = () => {
  return (
    <section className="w-full font-sans tracking-tight">
      {/* Desktop: side by side | Mobile: heading → about → image → socials */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-12 py-4 md:py-8">

        {/* Left: Text content */}
        <div className="flex-1 flex flex-col items-start text-left max-w-2xl w-full space-y-5">
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-foreground w-full text-left">
            Hi, I&apos;m <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-600">Ritik Gupta.</span>
          </h1>

          {/* About */}
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed text-justify w-full">
            A passionate full-stack software engineer specializing in building scalable, modern web applications. I love turning complex problems into intuitive, beautiful designs. Currently focused on delivering highly responsive user interfaces and robust backend systems. Let&apos;s build something great together.
          </p>

          {/* Image — mobile only, sits between about and social icons */}
          <div className="flex md:hidden justify-center w-full py-4">
            <div className="w-60 h-60 sm:w-64 sm:h-64 rounded-2xl overflow-hidden relative shadow-xl shadow-black/10 border border-edge">
              <Image alt="Ritik Gupta" fill className="object-cover" src="/avatar.jpg" priority />
            </div>
          </div>

          {/* Social icons */}
          <div className="flex items-center justify-center md:justify-start gap-3 pt-1 w-full">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="size-11 flex items-center justify-center rounded-xl bg-muted border border-border text-muted-foreground hover:text-foreground hover:border-foreground/20 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <Icon size={20} />
              </Link>
            ))}
          </div>
        </div>

        {/* Right: Image — desktop only */}
        <div className="hidden md:flex relative flex-shrink-0">
          <div className="w-72 h-72 lg:w-80 lg:h-80 rounded-3xl overflow-hidden relative shadow-xl shadow-black/10 border border-edge">
            <Image alt="Ritik Gupta" fill className="object-cover" src="/avatar.jpg" priority />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
