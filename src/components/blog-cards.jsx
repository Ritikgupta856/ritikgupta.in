"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const BlogCard = ({ blog }) => {
  return (
    <Link
      href={`/blogs/${blog.slug}`}
      className="group block flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
    >
      {blog.coverImage && (
        <div className="relative h-52 w-full shrink-0 overflow-hidden border-b border-border sm:h-60">
          <Image
            src={blog.coverImage}
            alt={blog.title}
            fill
            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
        </div>
      )}

      <div className="flex flex-grow flex-col gap-2.5 p-4 sm:p-5">
        <div className="flex items-center gap-2 text-[10px] font-medium text-muted-foreground sm:text-xs">
          {blog.date && (
            <span>
              {new Date(blog.date).toLocaleDateString(undefined, {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </span>
          )}
          {blog.readingTime && (
            <>
              <span className="text-border">·</span>
              <span>{blog.readingTime}</span>
            </>
          )}
        </div>

        <h3 className="line-clamp-2 text-sm font-bold leading-snug text-foreground transition-colors group-hover:text-primary sm:text-base md:text-lg">
          {blog.title}
        </h3>

        <p className="line-clamp-2 flex-grow text-xs leading-relaxed text-muted-foreground sm:text-sm">
          {blog.summary || blog.description}
        </p>

        <div className="mt-1 flex items-center justify-between gap-2">
          <div className="flex flex-wrap gap-1.5">
            {blog.tags?.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground sm:text-xs"
              >
                #{tag}
              </span>
            ))}
          </div>
          <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white sm:size-8">
            <ArrowUpRight size={14} />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
