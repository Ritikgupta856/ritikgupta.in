import BlogCards from "@/components/blog-cards";
import Heading from "@/components/heading";
import { getAllBlogs } from "@/lib/mdx";
import React from "react";

export const metadata = {
  title: "Blogs",
  description:
    "Explore a collection of technical guides, deep dives, and insights on modern web development, React, and software engineering by Ritik Gupta.",
};

export default function Page() {
  const blogs = getAllBlogs();

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 md:py-20 lg:px-8">
        <Heading
          title="Blogs"
          subtitle="A collection of my thoughts, technical guides, and experiences in the world of software development."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {blogs.map((blog) => (
            <BlogCards key={blog.slug} blog={blog} />
          ))}
        </div>
      </div>
    </main>
  );
}
