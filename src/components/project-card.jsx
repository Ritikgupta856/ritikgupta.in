import Image from "next/image";
import { Github, Globe } from "lucide-react";

export default function ProjectCard({
  title,
  href,
  githubLink,
  image,
  description,
  hideUntilExpanded = false,
}) {
  const primaryHref = href ?? githubLink;

  return (
    <article
      className={`${hideUntilExpanded ? "hidden group-data-[expanded=true]/more:flex" : "flex"} group/card flex-col transition-opacity duration-300 group-hover/list:opacity-40 group-hover/list:hover:opacity-100`}
    >
      {image && (
        <a
          href={primaryHref}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={-1}
          aria-hidden="true"
          className="block rounded-xl border border-border bg-muted/40 p-1"
        >
          <div className="relative aspect-video overflow-hidden rounded-[0.5rem] border border-border/70 bg-background">
            <Image
              src={image}
              alt=""
              fill
              sizes="(min-width: 640px) 308px, 100vw"
              className="object-cover object-top transition-transform duration-500 ease-out motion-safe:group-hover/card:scale-[1.03]"
            />
          </div>
        </a>
      )}

      <div className="mt-4 flex items-center justify-between gap-3">
        <h3 className="min-w-0 truncate text-lg font-medium tracking-tight text-foreground">
          <a
            href={primaryHref}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-transparent underline-offset-4 transition-colors hover:decoration-current focus-visible:outline-hidden focus-visible:decoration-current"
          >
            {title}
          </a>
        </h3>

        <div className="flex shrink-0 items-center gap-3">
          {href && (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} website`}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Globe className="size-[1.1rem]" />
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} source code on GitHub`}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="size-[1.1rem]" />
            </a>
          )}
        </div>
      </div>

      {description && (
        <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </article>
  );
}
