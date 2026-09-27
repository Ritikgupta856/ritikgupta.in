import Image from "next/image";
import Link from "next/link";
import SocialLinks from "./social-links";

const Hero = () => {
  return (
    <section className="w-full">
      <div className="relative size-28 overflow-hidden rounded-full ring-1 ring-border">
        <Image
          alt="Ritik Gupta"
          fill
          sizes="112px"
          className="object-cover"
          src="/images/avatar.jpg"
          priority
        />
      </div>

      <h1 className="mt-5 text-lg font-semibold tracking-tight text-foreground sm:text-2xl">
        Ritik Gupta
      </h1>
      <p className="mt-1.5 text-base text-muted-foreground">
        Software Engineer · Jaipur, India
      </p>

      <p className="mt-5 text-sm leading-relaxed text-foreground/80">
        I build full-stack web products with Next.js, TypeScript and Node.js. At
        BasicX I&apos;ve shipped a meal-planning platform used by 1,000+ people
        and an LLM-powered document pipeline that cut processing time by 70%.
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
