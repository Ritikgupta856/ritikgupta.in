import Link from "next/link";
import BlogCard from "@/components/blog-cards";
import Experience from "@/components/experience";
import Heading from "@/components/heading";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Stack from "@/components/stack";
import { getAllBlogs } from "@/lib/mdx";

export default function Home() {
  const blogs = getAllBlogs().slice(0, 3);

  return (
    <main className="mx-auto w-full max-w-2xl px-3 py-12 sm:py-16">
      <Hero />

      <div className="mt-12 flex flex-col gap-12 sm:mt-20 sm:gap-20">
        <Experience />
        <Projects />
        <Stack />

        <section id="blogs" className="animate-slide-in w-full scroll-mt-8 delay-600">
          <Heading title="Blog" />
          <div className="flex flex-col gap-8">
            {blogs.map((blog) => (
              <BlogCard key={blog.slug} blog={blog} />
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Link
              href="/blogs"
              className="rounded-lg border border-border px-4 py-2 text-sm text-foreground transition-colors hover:bg-muted"
            >
              Show all blogs
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
