import Image from "next/image";
import Link from "next/link";
import SocialLinks from "./social-links";

const Hero = () => {
  return (
    <section className="animate-slide-in w-full delay-200">
      <div className="relative size-28 overflow-hidden rounded-full ring-1 ring-border">
        <Image
          alt="Ritik Gupta"
          fill
          sizes="112px"
          className="object-cover"
          src="/images/avatar.png"
          priority
        />
      </div>

      <h1 className="mt-5 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        Ritik Gupta
      </h1>
      <p className="mt-1.5 text-base text-muted-foreground">
        Software Engineer · Jaipur, India
      </p>

      <p className="mt-5 text-base leading-relaxed text-foreground/80">
        I build full-stack products end to end, exploring new technologies
        and turning ideas into reality through polished, thoughtfully crafted
        projects.
      </p>

      <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
        <SocialLinks />
        <Link
          href="https://linkedin.com/in/ritikgupta856"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[0.8125rem] text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
        >
          Get in touch →
        </Link>
      </div>
    </section>
  );
};

export default Hero;
