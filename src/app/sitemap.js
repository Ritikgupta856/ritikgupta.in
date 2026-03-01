import { getAllBlogs } from "@/lib/mdx";

export default function sitemap() {
  const baseUrl = "https://ritikgupta.in";
  const blogs = getAllBlogs();

  const blogEntries = blogs.map((blog) => ({
    url: `${baseUrl}/blogs/${blog.slug}`,
    lastModified: new Date(blog.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    ...blogEntries,
  ];
}
