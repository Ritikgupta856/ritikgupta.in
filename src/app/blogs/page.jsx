import BlogCards from "@/components/BlogCards";
import { Separator } from "@/components/ui/separator";
import { getAllBlogs } from "@/lib/mdx";
import React from "react";

export const metadata = {
  title: "Blogs | Ritik Gupta",
  description: "Personal portfolio website showcasing my skills and projects.",
};

export default function Page() {
  const blogs = getAllBlogs();

  return (
    <div className="max-w-3xl min-h-screen mx-auto flex flex-col gap-8 md:gap-12 px-4 mt-10">
      <div className="text-center mt-10">
        <h1 className="text-4xl font-bold">Blogs</h1>
        <Separator className="mt-10" />
      </div>

      <div>
        <h2>Latest Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-8">
          {blogs.map((blog) => (
          <BlogCards key={blog.slug} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
}
