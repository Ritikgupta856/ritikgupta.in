"use client";
import Link from "next/link";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";

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
      matched = stack.find((s) => searchName.includes(s.name.toLowerCase()) || s.name.toLowerCase().includes(searchName));
    }
    return matched ? matched.icon : null;
  };
  return (
    <div className="group w-full flex flex-col rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 overflow-hidden">

      {/* Top Image Box */}
      {image && (
        <div className="w-full h-48 sm:h-56 overflow-hidden relative border-b border-border/50">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </div>
      )}

      {/* Card Header & Content */}
      <div className="p-5 sm:p-6 md:p-8 flex-1 flex flex-col pt-6 sm:pt-7">
        <div className="flex justify-between items-start mb-4 gap-4">
          <h3 className="text-lg sm:text-xl font-bold text-foreground tracking-tight leading-snug">
            {title}
          </h3>
          <div className="flex items-center gap-1.5 flex-shrink-0 -mt-1">
            {githubLink && (
              <Link
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 sm:p-2 bg-muted hover:bg-muted-foreground/20 text-muted-foreground hover:text-foreground rounded-lg transition-colors"
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
                className="p-1.5 sm:p-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors"
                title="Live Demo"
              >
                <ArrowUpRight size={16} />
              </Link>
            )}
          </div>
        </div>

        {description && (
          <p className="text-[13px] sm:text-[14px] text-muted-foreground leading-relaxed line-clamp-3 mb-2">
            {description}
          </p>
        )}
      </div>

      {/* Tags Footer */}
      {tags && tags.length > 0 && (
        <div className="px-5 sm:px-6 md:px-8 py-4 sm:py-5 border-t border-border bg-muted/10">
          <div className="flex flex-wrap gap-2 sm:gap-2.5">
            {tags.map((tag, idx) => {
              const icon = getTechIcon(tag);
              return (
                <div
                  key={idx}
                  className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 bg-white dark:bg-zinc-900 border border-border rounded-lg shadow-sm"
                >
                  {icon && (
                    <img src={icon} alt={tag} className="size-3 sm:size-3.5 object-contain" />
                  )}
                  <span className="text-[10px] sm:text-xs font-semibold text-foreground/80">
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

