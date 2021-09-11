import { getPostBySlug, getPostSlugs } from '../../lib/api';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { GetStaticPropsContext, GetStaticPropsResult } from 'next';

interface PostProps {
  post: {
    content: MDXRemoteSerializeResult<Record<string, unknown>>;
  };
}

export function Post({ post }: PostProps) {
  return (
    <div>
      {' '}
      <MDXRemote {...post.content} />
    </div>
  );
}

export async function getStaticProps({
  params,
}: GetStaticPropsContext): Promise<GetStaticPropsResult<PostProps>> {
  if (!params?.slug || typeof params.slug !== 'string') {
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
