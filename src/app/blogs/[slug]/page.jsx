import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getBlogBySlug } from "@/lib/mdx";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Image from "next/image";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug); // only if async

  if (!blog) {
    return { title: "Blog not found" };
  }

  return {
    title: blog.title,
    description: blog.description,
  };
}

export default async function BlogPage(props) {
  const params = await props.params;
  const blog = getBlogBySlug(params.slug);

  if (!blog) {
    notFound();
  }


  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16">

        {/* Back button */}
        <Link
          href="/#blogs"
          className="inline-flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
          Back to blogs
        </Link>

        {/* Blog header */}
        <header className="mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground leading-tight tracking-tight mb-4">
            {blog.title}
          </h1>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
            {blog.date && (
              <span className="flex items-center gap-1.5">
                <Calendar size={13} />
                {new Date(blog.date).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            )}
            {blog.readingTime && (
              <span className="flex items-center gap-1.5">
                <Clock size={13} />
                {blog.readingTime}
              </span>
            )}
            {blog.author && (
              <span className="text-muted-foreground">by <span className="text-foreground font-medium">{blog.author}</span></span>
            )}
          </div>

          {blog.tags && blog.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {blog.tags.map((tag) => (
                <span key={tag} className="text-[10px] sm:text-xs font-medium bg-muted text-muted-foreground border border-border px-2.5 py-1 rounded-full">
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {blog.coverImage && (
            <div className="mt-6 sm:mt-8 border-t border-border">
              <Image
                src={blog.coverImage}
                alt={blog.title}
                width={1200}
                height={675}
                priority
                className="w-full h-auto"
              />
            </div>
          )}

          <div className="mt-6 sm:mt-8 border-t border-border" />
        </header>

        {/* Blog Content */}
        <div className="prose">
          <MDXRemote source={blog.content} />
        </div>

        {/* Footer nav */}
        <div className="mt-12 pt-8 border-t border-border">
          <Link
            href="/#blogs"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
            Back to all blogs
          </Link>
        </div>
      </div>
    </main>
  );
}
