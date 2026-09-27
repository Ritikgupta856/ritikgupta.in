import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import { getTechIcon } from "@/lib/data";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function ProjectCard({
  title,
  category,
  href,
  githubLink,
  tags,
  image,
  description,
  hideUntilExpanded = false,
}) {
  return (
    <article
      className={`${hideUntilExpanded ? "hidden group-data-[expanded=true]/more:flex" : "flex"} group relative flex-col overflow-hidden rounded-xl border border-border bg-background transition-colors duration-300 hover:border-foreground/20`}
    >
      {image && (
        <div className="relative aspect-16/10 overflow-hidden border-b border-border bg-muted/40">
          <div
            aria-hidden="true"
            className="bg-dots absolute inset-0 mask-[radial-gradient(ellipse_at_top,black_20%,transparent_75%)]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 hidden h-3/4 bg-[radial-gradient(ellipse_at_top,hsl(var(--foreground)/0.09),transparent_70%)] opacity-60 transition-opacity duration-500 group-hover:opacity-100 dark:block"
          />

          <div className="absolute inset-x-6 -bottom-4 top-8 overflow-hidden rounded-t-lg border border-border bg-background shadow-2xl shadow-black/10 transition-transform duration-500 ease-out motion-safe:group-hover:-translate-y-2">
            <Image
              src={image}
              alt={`${title} screenshot`}
              fill
              sizes="(min-width: 768px) 280px, 100vw"
              className="object-cover object-top"
            />
          </div>
        </div>
      )}

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            {category && (
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                {category}
              </p>
            )}
            <h3 className="mt-1.5 flex items-center gap-1 text-base font-semibold tracking-tight text-foreground">
              {href ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="after:absolute after:inset-0 after:rounded-xl focus-visible:outline-hidden focus-visible:after:ring-2 focus-visible:after:ring-ring"
                >
                  {title}
                </a>
              ) : (
                title
              )}
              {href && (
                <ArrowUpRight className="size-4 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
              )}
            </h3>
          </div>

          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} source code on GitHub`}
              className="relative z-10 -mr-1.5 -mt-1 rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <Github className="size-4" />
            </a>
          )}
        </div>

        {description && (
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}

        {tags?.length > 0 && (
          <TooltipProvider delayDuration={100}>
            <ul className="mt-auto flex flex-wrap gap-1.5 pt-4">
              {tags.map((tag) => {
                const icon = getTechIcon(tag);
                if (!icon) {
                  return (
                    <li
                      key={tag}
                      className="flex h-7 items-center rounded-md border border-border bg-muted px-2 text-xs text-foreground/70 dark:text-muted-foreground"
                    >
                      {tag}
                    </li>
                  );
                }
                return (
                  <Tooltip key={tag}>
                    <TooltipTrigger asChild>
                      <li className="relative z-10 flex size-7 cursor-default items-center justify-center rounded-md border border-border bg-muted transition-colors hover:border-foreground/30">
                        <Image
                          src={icon.icon}
                          alt={tag}
                          width={14}
                          height={14}
                          className="size-3.5 object-contain dark:invert"
                        />
                      </li>
                    </TooltipTrigger>
                    <TooltipContent
                      side="top"
                      className="bg-foreground text-background"
                    >
                      <p className="text-[11px] font-semibold">{tag}</p>
                    </TooltipContent>
                  </Tooltip>
                );
              })}
            </ul>
          </TooltipProvider>
        )}
      </div>
    </article>
  );
}
