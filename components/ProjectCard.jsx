"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link2 } from "lucide-react";

export default function ProjectCard({
  title,
  href,
  githubLink,
  tags,
  highlights,
}) {
  return (
    <Card className="group w-full h-full rounded-none transition-all duration-300 hover:border-violet-500/30 dark:hover:border-violet-400/30 bg-zinc-50/50 dark:bg-zinc-900/50">
      <CardHeader className="pb-4">
        <CardTitle className="text-md md-text-lg font-bold text-foreground mb-1">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        {highlights.length > 0 && (
          <ul className="space-y-3">
            {highlights.map((point, i) => (
              <li
                key={i}
                className="flex gap-3 text-xs text-muted-foreground leading-relaxed"
              >
                <span className="text-violet-500 dark:text-violet-400 mt-1 flex-shrink-0">
                  •
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        )}

        {tags && tags.length > 0 && (
          <div>
            <p className="text-xs font-semibold text-foreground mb-3 uppercase tracking-wider">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, idx) => (
                <Badge
                  key={idx}
                  variant="secondary"
                  className="text-xs font-normal bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        )}

        <div className="flex items-center gap-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-violet-600 dark:text-violet-400 hover:underline font-medium"
          >
            <Link2 className="h-4 w-4" />
            Live
          </Link>

          <Link
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-violet-600 dark:text-violet-400 hover:underline font-medium"
          >
            <Link2 className="h-4 w-4" />
            Github
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
