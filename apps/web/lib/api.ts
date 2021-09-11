import fs from 'fs';
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

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'content') {
      items[field] = content;
    }

    if (field === 'slug') {
      items[field] = data[field];
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();

  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .sort(sortByDateDesc);
  return posts;
}

export function sortByDateDesc(a: Items, b: Items) {
  return a.date > b.date ? -1 : 1;
}
