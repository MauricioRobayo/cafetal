import {
  BlogPost,
  getPostBySlug,
  getPostSlugs,
} from '@calculadora-cafetera/posts';
import { PostLayout } from '@calculadora-cafetera/components';
import { GetStaticPropsContext, GetStaticPropsResult } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { ReactElement } from 'react';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

interface PostProps {
  post: Omit<BlogPost, 'content'> & {
    content: MDXRemoteSerializeResult<Record<string, unknown>>;
  };
}

export default function Post({ post }: PostProps) {
  return (
    <article>
      <h1>{post.title}</h1>
      <MDXRemote {...post.content} />
    </article>
  );
}

export async function getStaticProps({
  params,
}: GetStaticPropsContext<{ slug: string }>): Promise<
  GetStaticPropsResult<PostProps>
> {
  if (!params) {
    return {
      notFound: true,
    };
  }

  const post = await getPostBySlug(params.slug, [
    'title',
    'date',
    'content',
    'image',
  ]);
  const content = await serialize(post.content || '', {
    mdxOptions: {
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    },
  });

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const slugs = await getPostSlugs();

  return {
    paths: slugs.map((slug) => {
      return {
        params: {
          slug,
        },
      };
    }),
    fallback: false,
  };
}

Post.getLayout = function Layout(page: ReactElement) {
  return <PostLayout>{page}</PostLayout>;
};
