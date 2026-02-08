"use client";
import React from "react";
import Link from "next/link";
import { Card } from "@/components/ui/card";

const BlogCard = ({ blog }) => {
  return (
    <Card className="p-6 hover:shadow-xl transition-all duration-300 border cursor-pointer group">
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold group-hover:text-blue-600 transition-colors">
          {blog.title}
        </h2>

        {blog.date && (
          <p className="text-xs text-gray-400">
            {new Date(blog.date).toLocaleDateString()}
          </p>
        )}

        <p className="text-gray-600 leading-relaxed text-sm line-clamp-3">
          {blog.summary}
        </p>

        {blog.tags && blog.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-gray-100 px-2 py-1 rounded-md text-gray-500"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        <Link
          href={`/blogs/${blog.slug}`}
          className="text-blue-500 text-sm font-medium hover:underline self-start"
        >
          Read More →
        </Link>
      </div>
    </Card>
  );
};

export default BlogCard;
