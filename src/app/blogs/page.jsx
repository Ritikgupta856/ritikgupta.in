import BlogCard from "@/components/blog-cards";
import Heading from "@/components/heading";
import { getAllBlogs } from "@/lib/mdx";

export const metadata = {
  title: "Blogs",
  description:
    "Explore a collection of technical guides, deep dives, and insights on modern web development, React, and software engineering by Ritik Gupta.",
};

export default function Page() {
  const blogs = getAllBlogs();

  return (
    <main className="mx-auto w-full max-w-2xl px-6 py-12 sm:py-16">
      <Heading title="Blog" />

      <div>
        {blogs.map((blog) => (
          <BlogCard key={blog.slug} blog={blog} />
        ))}
      </div>
    </main>
  );
}
