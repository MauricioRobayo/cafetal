import fs from 'fs/promises';
import { join } from 'path';
import matter from 'gray-matter';

export interface BlogPost {
  title: string;
  date: string;
  content: string;
  excerpt?: string;
  image?: string;
}

const articlesPath = process.env.articlesPath;

if (!articlesPath) {
  throw new Error('Could not load `articlesPath` environment variable');
}

const postsDirectory = join(process.cwd(), articlesPath);

export async function getPostSlugs() {
  const fileNames = await fs.readdir(postsDirectory);
  return fileNames.map((fileName) => fileName.replace(/\.mdx$/, ''));
}

export async function getPostBySlug(
  slug: string,
  fields: (keyof BlogPost)[] = []
): Promise<BlogPost> {
  const fullPath = join(postsDirectory, `${slug}.mdx`);
  const fileContents = await fs.readFile(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const post: BlogPost = {
    content,
    title: data.title,
    date: data.date,
  };

  for (const field of fields) {
    if (data[field]) {
      post[field] = data[field];
    }
  }

  return post;
}

export async function getAllPosts(fields: (keyof BlogPost)[] = []) {
  const slugs = await getPostSlugs();

  const posts = await Promise.all(
    slugs.map((slug) => getPostBySlug(slug, fields))
  );

  return posts.sort(sortByDateDesc);
}

export function sortByDateDesc(a: BlogPost, b: BlogPost) {
  return a.date > b.date ? -1 : 1;
}
