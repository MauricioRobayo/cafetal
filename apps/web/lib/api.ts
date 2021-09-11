import fs from 'fs/promises';
import { join } from 'path';
import matter from 'gray-matter';

const articlesPath = process.env.articlesPath;

if (!articlesPath) {
  throw new Error('Could not load `articlesPath` environment variable');
}

const postsDirectory = join(process.cwd(), articlesPath);

type Items = {
  [key: string]: string;
};

export async function getPostSlugs() {
  return await fs.readdir(postsDirectory);
}

export async function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.mdx`);
  const fileContents = await fs.readFile(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'content') {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export async function getAllPosts(fields: string[] = []) {
  const slugs = await getPostSlugs();

  const posts = await Promise.all(
    slugs.map((slug) => getPostBySlug(slug, fields))
  );

  return posts.sort(sortByDateDesc);
}

export function sortByDateDesc(a: Items, b: Items) {
  return a.date > b.date ? -1 : 1;
}
