import { getAllPosts, getPostBySlug } from '../../lib/api';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

type Params = {
  params: {
    slug: string;
  };
};

export default function Post({ post }: any) {
  return (
    <div>
      {' '}
      <MDXRemote {...post.content} />
    </div>
  );
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
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
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
