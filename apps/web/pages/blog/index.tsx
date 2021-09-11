import { BlogPost, getAllPosts } from '@calculadora-cafetera/posts';
import { GetStaticProps } from 'next';
import Link from 'next/link';

export const getStaticProps: GetStaticProps = async () => {
  const articles = await getAllPosts(['title', 'slug', 'excerpt']);

  return {
    props: { articles },
  };
};

interface BlogProps {
  articles: BlogPost[];
}
export default function Blog({ articles }: BlogProps) {
  console.log({ articles });

  return (
    <div>
      <h1>Blog</h1>
      <main>
        <ul>
          {articles.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`}>
                <a>{post.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
