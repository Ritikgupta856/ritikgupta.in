"use client";
import Link from "next/link";
import { Github, ArrowUpRight } from "lucide-react";

import Image from "next/image";
import { stack } from "@/lib/data";

export default function ProjectCard({
  title,
  href,
  githubLink,
  tags,
  image,
  description,
}) {
  const getTechIcon = (techName) => {
    const searchName = techName.toLowerCase().trim();
    let matched = stack.find((s) => s.name.toLowerCase() === searchName);

    if (!matched) {
      matched = stack.find(
        (s) =>
          searchName.includes(s.name.toLowerCase()) ||
          s.name.toLowerCase().includes(searchName),
      );
    }
    return matched ? matched.icon : null;
  };
  return (
    <div className="group flex w-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
      {image && (
        <div className="relative h-48 w-full overflow-hidden border-b border-border/50 sm:h-56">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
      )}

      <div className="flex flex-1 flex-col p-5 pt-6 sm:p-6 sm:pt-7 md:p-8">
        <div className="mb-4 flex items-start justify-between gap-4">
          <h3 className="text-lg font-bold leading-snug tracking-tight text-foreground sm:text-xl">
            {title}
          </h3>
          <div className="-mt-1 flex flex-shrink-0 items-center gap-1.5">
            {githubLink && (
              <Link
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-muted p-1.5 text-muted-foreground transition-colors hover:bg-muted-foreground/20 hover:text-foreground sm:p-2"
                title="Source Code"
              >
                <Github size={16} />
              </Link>
            )}
            {href && (
              <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-primary/10 p-1.5 text-primary transition-colors hover:bg-primary/20 sm:p-2"
                title="Live Demo"
              >
                <ArrowUpRight size={16} />
              </Link>
            )}
          </div>
        </div>

        {description && (
          <p className="mb-2 line-clamp-3 text-[13px] leading-relaxed text-muted-foreground sm:text-[14px]">
            {description}
          </p>
        )}
      </div>

      {tags && tags.length > 0 && (
        <div className="border-t border-border bg-muted/10 px-5 py-4 sm:px-6 sm:py-5 md:px-8">
          <div className="flex flex-wrap gap-2 sm:gap-2.5">
            {tags.map((tag, idx) => {
              const icon = getTechIcon(tag);
              return (
                <div
                  key={idx}
                  className="flex items-center gap-1.5 rounded-lg border border-border bg-white px-2.5 py-1 shadow-sm sm:px-3 dark:bg-zinc-900"
                >
                  {icon && (
                    <img
                      src={icon}
                      alt={tag}
                      className="size-3 object-contain sm:size-3.5"
                    />
                  )}
                  <span className="text-[10px] font-semibold text-foreground/80 sm:text-xs">
                    {tag}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
