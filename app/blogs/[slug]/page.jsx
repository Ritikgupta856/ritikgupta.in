import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getBlogBySlug } from "@/lib/mdx";

export default function Blogblog({ params }) {
  const blog = getBlogBySlug(params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
        <p className="text-gray-600">
          {blog.date} • {blog.author}
        </p>
      </header>
      <div className="prose prose-lg max-w-none">
        <MDXRemote source={blog.content} />
      </div>
    </article>
  );
}
