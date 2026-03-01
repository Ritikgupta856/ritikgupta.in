import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { blogs } from "./data";

const postsDirectory = path.join(process.cwd(), 'src/data/blogs')

export function getAllBlogs() {
  return [...blogs].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getBlogBySlug(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`)
  
  if (!fs.existsSync(fullPath)) {
    return undefined
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    slug,
    title: data.title,
    date: data.date,
    description: data.description,
    author: data.author,
    readingTime: data.readingTime,
    tags: data.tags || [],
    coverImage: data.coverImage,
    content,
  }
}