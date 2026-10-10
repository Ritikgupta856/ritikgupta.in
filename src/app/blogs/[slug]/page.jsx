import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getBlogBySlug } from "@/lib/mdx";
import Link from "next/link";
import Image from "next/image";
import mdxComponents from "@/components/mdx-components";
import { Badge } from "@/components/ui/badge";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";

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
          url: `https://ritikgupta.in${blog.coverImage || "/images/avatar.png"}`,
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
        `https://ritikgupta.in${blog.coverImage || "/images/avatar.png"}`,
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
  ].filter(Boolean);

  return (
    <main className="animate-slide-in mx-auto w-full max-w-2xl px-3 py-12 delay-200 sm:py-16">
      <Link
        href="/blogs"
        className="font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
      >
        ← All posts
      </Link>

      <header className="mb-10 mt-8">
        <h1 className="text-xl font-semibold leading-snug tracking-tight text-foreground sm:text-2xl">
          {blog.title}
        </h1>

        <p className="mt-3 font-mono text-xs text-muted-foreground">
          {meta.join(" · ")}
        </p>
        {blog.tags?.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {blog.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="rounded-md px-2 font-normal text-foreground/70 hover:bg-secondary dark:text-muted-foreground"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}

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
              rehypePlugins: [
                rehypeSlug,
                [
                  rehypePrettyCode,
                  {
                    theme: { light: "vitesse-light", dark: "vitesse-dark" },
                    keepBackground: false,
                  },
                ],
              ],
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
