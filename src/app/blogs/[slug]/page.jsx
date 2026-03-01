import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getBlogBySlug } from "@/lib/mdx";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Image from "next/image";
import mdxComponents from "@/components/mdx-components";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return { title: "Blog not found" };
  }

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      type: "article",
      publishedTime: blog.date,
      authors: ["Ritik Gupta"],
      images: [
        {
          url: blog.coverImage || "/images/avatar.jpg",
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      images: [blog.coverImage || "/images/avatar.jpg"],
    },
  };
}

export default async function BlogPage(props) {
  const params = await props.params;
  const blog = getBlogBySlug(params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-16">
        <Link
          href="/#blogs"
          className="group mb-8 inline-flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground sm:text-sm"
        >
          <ArrowLeft
            size={14}
            className="transition-transform group-hover:-translate-x-0.5"
          />
          Back to blogs
        </Link>

        <header className="mb-8 sm:mb-12">
          <h1 className="mb-4 text-2xl font-extrabold leading-tight tracking-tight text-foreground sm:text-3xl md:text-4xl">
            {blog.title}
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground sm:gap-4 sm:text-sm">
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
              <span className="text-muted-foreground">
                by{" "}
                <span className="font-medium text-foreground">
                  {blog.author}
                </span>
              </span>
            )}
          </div>

          {blog.tags && blog.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-muted px-2.5 py-1 text-[10px] font-medium text-muted-foreground sm:text-xs"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {blog.coverImage && (
            <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-muted shadow-sm sm:mt-12">
              <Image
                src={blog.coverImage}
                alt={blog.title}
                width={1200}
                height={400}
                priority
                className="h-auto w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          )}
        </header>

        <div className="prose">
         <MDXRemote
  source={blog.content}
  components={mdxComponents}
  options={{
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug
      ],
    },
  }}
/>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <Link
            href="/#blogs"
            className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft
              size={14}
              className="transition-transform group-hover:-translate-x-0.5"
            />
            Back to all blogs
          </Link>
        </div>
      </div>
    </main>
  );
}
