import BlogCards from "@/components/BlogCards";
import Heading from "@/components/Heading";
import { getAllBlogs } from "@/lib/mdx";
import React from "react";

export const metadata = {
  title: "Blogs | Ritik Gupta",
  description: "Recent blog posts about software engineering and web development.",
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
