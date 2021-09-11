import fs from 'fs/promises';
import matter from 'gray-matter';
import { MDXRemoteSerializeResult } from 'next-mdx-remote/dist/types';
import { serialize } from 'next-mdx-remote/serialize';
import { join } from 'path';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

export interface BlogPost {
  title: string;
  date: string;
  content: MDXRemoteSerializeResult<Record<string, unknown>>;
  slug?: string;
  excerpt?: string;
  image?: string;
}

const postsPath = process.env.postsPath;

if (!postsPath) {
  throw new Error('Could not load `postsPath` environment variable');
}

const postsDirectory = join(process.cwd(), postsPath);

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
    content: await serialize(content, {
      mdxOptions: {
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
      },
    }),
    title: data.title,
    date: data.date,
  };

  for (const field of fields) {
    if (field === 'slug') {
      post.slug = slug;
    }

    if (data[field]) {
      post[field] = data[field];
    }
  }

  return post;
}

export async function getAllPosts(fields: (keyof BlogPost)[] = []) {
  const slugs = await getPostSlugs();

  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const post = await getPostBySlug(slug, fields);

      return {
        ...post,
        slug,
      };
    })
  );

  return posts.sort(sortByDateDesc);
}

export function sortByDateDesc(a: BlogPost, b: BlogPost) {
  return a.date > b.date ? -1 : 1;
}
