import Link from "next/link";
import { Calendar } from "lucide-react";

const BlogCard = ({ blog }) => {
  return (
    <Link
      href={`/blogs/${blog.slug}`}
      className="group flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
    >
      <div className="min-w-0">
        <h3 className="text-lg font-semibold leading-tight text-foreground">
          {blog.title}
        </h3>
        {blog.description && (
          <p className="mt-1.5 text-sm text-muted-foreground">
            {blog.description}
          </p>
        )}
        {blog.date && (
          <p className="mt-2.5 flex items-center gap-1.5 text-xs text-muted-foreground">
            <Calendar className="size-3.5" />
            {new Date(blog.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        )}
      </div>
      <span className="flex shrink-0 items-center gap-1 text-sm text-muted-foreground transition-colors group-hover:text-foreground">
        Read more
        <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5">
          →
        </span>
      </span>
    </Link>
  );
};

export default BlogCard;
