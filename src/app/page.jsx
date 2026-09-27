import BlogCard from "@/components/blog-cards";
import Experience from "@/components/experience";
import Heading from "@/components/heading";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import { getAllBlogs } from "@/lib/mdx";

export default function Home() {
  const blogs = getAllBlogs().slice(0, 3);

  return (
    <main className="mx-auto w-full max-w-2xl px-6 py-12 sm:py-16">
      <Hero />

      <div className="mt-16 flex flex-col gap-16 sm:mt-20 sm:gap-20">
        <Experience />
        <Projects />

        <section id="blogs" className="w-full scroll-mt-8">
          <Heading title="Blog" action={{ href: "/blogs", label: "All" }} />
          <div>
            {blogs.map((blog) => (
              <BlogCard key={blog.slug} blog={blog} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
