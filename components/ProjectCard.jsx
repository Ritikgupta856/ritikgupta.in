"use client";
import Link from "next/link";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";

export default function ProjectCard({
  title,
  href,
  githubLink,
  tags,
  highlights,
}) {
  return (
    <div className="group w-full flex flex-col rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 overflow-hidden">

      {/* Card Header */}
      <div className="p-5 sm:p-6 md:p-8 flex-1">
        <div className="flex justify-between items-start mb-5 gap-4">
          <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground tracking-tight leading-snug pr-2">
            {title}
          </h3>
          <div className="flex items-center gap-1.5 flex-shrink-0">
            {githubLink && (
              <Link
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 sm:p-2 bg-muted hover:bg-muted-foreground/20 text-muted-foreground hover:text-foreground rounded-lg transition-colors"
                title="Source Code"
              >
                <Github size={15} />
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
                <ArrowUpRight size={15} />
              </Link>
            )}
          </div>
        </div>

        {highlights && highlights.length > 0 && (
          <ul className="space-y-2.5">
            {highlights.map((point, i) => (
              <li key={i} className="flex gap-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                <span className="text-primary mt-0.5 font-bold flex-shrink-0 text-xs">▹</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Tags Footer */}
      {tags && tags.length > 0 && (
        <div className="px-5 sm:px-6 md:px-8 py-4 sm:py-5 border-t border-border bg-muted/20">
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2 sm:px-2.5 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium bg-muted text-muted-foreground border border-border rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

