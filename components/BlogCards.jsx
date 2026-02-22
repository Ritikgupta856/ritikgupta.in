"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const BlogCard = ({ blog }) => {
  return (
    <Link
      href={`/blogs/${blog.slug}`}
      className="group rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 flex flex-col overflow-hidden block"
    >
      {/* Blog Image */}
      {blog.coverImage && (
        <div className="relative w-full h-52 sm:h-60 overflow-hidden border-b border-border shrink-0">
          <Image
            src={blog.coverImage}
            alt={blog.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
          />
        </div>
      )}

      <div className="p-4 sm:p-5 flex flex-col gap-2.5 flex-grow">
        {/* Meta row */}
        <div className="flex items-center gap-2 text-[10px] sm:text-xs text-muted-foreground font-medium">
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

        {/* Title */}
        <h3 className="text-sm sm:text-base md:text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-snug line-clamp-2">
          {blog.title}
        </h3>

        {/* Summary */}
        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed line-clamp-2 flex-grow">
          {blog.summary || blog.description}
        </p>

        {/* Footer: tags + read arrow */}
        <div className="flex items-center justify-between mt-1 gap-2">
          <div className="flex flex-wrap gap-1.5">
            {blog.tags?.map((tag) => (
              <span
                key={tag}
                className="text-[10px] sm:text-xs font-medium bg-muted text-muted-foreground border border-border px-2 py-0.5 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
          <span className="shrink-0 size-7 sm:size-8 flex items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
            <ArrowUpRight size={14} />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;

