import Link from "next/link";

const BlogCard = ({ blog }) => {
  return (
    <Link
      href={`/blogs/${blog.slug}`}
      className="group flex items-start justify-between gap-4 border-b border-border py-3.5"
    >
      <div className="min-w-0">
        <h3 className="text-[0.9375rem] text-foreground transition-colors group-hover:text-muted-foreground">
          {blog.title}
        </h3>
        <p className="mt-1 font-mono text-xs text-muted-foreground">
          {blog.date &&
            new Date(blog.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          {blog.readingTime && ` · ${blog.readingTime}`}
        </p>
      </div>
      <span
        aria-hidden="true"
        className="text-sm text-muted-foreground transition-colors group-hover:text-foreground"
      >
        →
      </span>
    </Link>
  );
};

export default BlogCard;
