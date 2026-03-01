
import BlogCard from "@/components/blog-cards";
import Chatbot from "@/components/chat-bot";
import Experience from "@/components/experience";
import Heading from "@/components/heading";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Stack from "@/components/stack";
import { blogs } from "@/lib/data";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 md:py-20 lg:px-8">
        <Hero />

        <div className="mt-16 flex flex-col space-y-20 md:mt-24 md:space-y-32">
          <Experience />
          <Projects />

          <section id="blogs" className="w-full scroll-mt-24 font-sans">
            <Heading
              title="Latest Blogs"
              subtitle="Sharing my thoughts, tutorials and insights on software development."
            />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {blogs.map((blog, index) => (
                <BlogCard key={index} blog={blog} />
              ))}
            </div>
          </section>

          <Stack />
        </div>
      </div>
      <Chatbot />
    </main>
  );
}
