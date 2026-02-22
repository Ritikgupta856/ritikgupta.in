import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Chatbot from "@/components/ChatBot";
import Experience from "@/components/Experience";
import Stack from "@/components/Stack";
import BlogCard from "@/components/BlogCards";
import Heading from "@/components/Heading";
import { blogs } from "@/lib/data";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <Hero />

        <div className="flex flex-col space-y-20 md:space-y-32 mt-16 md:mt-24">
          <Experience />
          <Projects />

          <section id="blogs" className="w-full font-sans scroll-mt-24">
            <Heading
              title="Latest Blogs"
              subtitle="Sharing my thoughts, tutorials and insights on software development."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
