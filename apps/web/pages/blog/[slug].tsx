import {
  BlogPost,
  getPostBySlug,
  getPostSlugs,
} from '@calculadora-cafetera/posts';
import { GetStaticPropsContext, GetStaticPropsResult } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { ReactElement } from 'react';
import Head from 'next/head';

interface PostProps {
  post: BlogPost;
}

export default function Post({ post }: PostProps) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.11.0/dist/katex.min.css"
          integrity="sha384-BdGj8xC2eZkQaxoQ8nSLefg4AV4/AwB3Fj+8SUSo7pnKP6Eoy18liIKTPn9oBYNG"
          crossOrigin="anonymous"
        />
      </Head>
      <article>
        <h1>{post.title}</h1>
        <MDXRemote {...post.content} />
      </article>
    </>
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

  return {
    props: {
      post,
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
