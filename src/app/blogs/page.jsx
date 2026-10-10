import BlogCard from "@/components/blog-cards";
import { getAllBlogs } from "@/lib/mdx";

export const metadata = {
  title: "Blogs",
  description:
    "Explore a collection of technical guides, deep dives, and insights on modern web development, React, and software engineering by Ritik Gupta.",
};

export default function Page() {
  const blogs = getAllBlogs();

  return (
    <main className="animate-slide-in mx-auto w-full max-w-2xl px-3 py-12 delay-200 sm:py-16">
      <h1 className="text-2xl font-bold tracking-tight text-foreground">
        Blog
      </h1>

      <div className="mt-5 flex flex-col gap-8">
        {blogs.map((blog) => (
          <BlogCard key={blog.slug} blog={blog} />
        ))}
      </div>
    </main>
  );
}
