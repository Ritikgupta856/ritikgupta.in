import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getBlogBySlug } from "@/lib/mdx";
import Link from "next/link";
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
          url: `https://ritikgupta.in${blog.coverImage || "/images/avatar.jpg"}`,
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
      images: [
        `https://ritikgupta.in${blog.coverImage || "/images/avatar.jpg"}`,
      ],
    },
  };
}

export default async function BlogPage(props) {
  const params = await props.params;
  const blog = getBlogBySlug(params.slug);

  if (!blog) {
    notFound();
  }

  const meta = [
    blog.date &&
      new Date(blog.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    blog.readingTime,
    ...blog.tags.map((tag) => `#${tag.toLowerCase()}`),
  ].filter(Boolean);

  return (
    <main className="mx-auto w-full max-w-2xl px-6 py-12 sm:py-16">
      <Link
        href="/blogs"
        className="font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
      >
        ← All posts
      </Link>

      <header className="mb-10 mt-8">
        <h1 className="text-2xl font-semibold leading-tight tracking-tight text-foreground sm:text-3xl">
          {blog.title}
        </h1>

        <p className="mt-3 font-mono text-xs text-muted-foreground">
          {meta.join(" · ")}
        </p>

        {blog.coverImage && (
          <div className="mt-8 overflow-hidden rounded-lg border border-border">
            <Image
              src={blog.coverImage}
              alt={blog.title}
              width={1200}
              height={400}
              priority
              className="h-auto w-full object-cover"
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
              rehypePlugins: [rehypeSlug],
            },
          }}
        />
      </div>

      <div className="mt-12 border-t border-border pt-6">
        <Link
          href="/blogs"
          className="font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
        >
          ← All posts
        </Link>
      </div>
    </main>
  );
}
