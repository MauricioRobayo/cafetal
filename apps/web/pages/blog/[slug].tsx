import { getAllPosts, getPostBySlug } from '../../lib/api';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import TestComponent from '../../components/TestComponent';

type Params = {
  params: {
    slug: string;
  };
};

export default function Post({ post }: any) {
  console.log({ 'post.content': post.content });

  return (
    <div>
      {' '}
      <MDXRemote {...post.content} components={{ TestComponent }} />
    </div>
  );
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ]);
  const content = await serialize(post.content || '');

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
