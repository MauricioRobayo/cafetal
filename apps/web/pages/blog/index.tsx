import { BlogPost, getAllPosts } from '@cafetal/posts';
import { GetStaticProps } from 'next';
import Link from 'next/link';

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts(['title', 'slug', 'excerpt']);

  return {
    props: { posts },
  };
};

interface BlogProps {
  posts: BlogPost[];
}
export default function Blog({ posts }: BlogProps) {
  return (
    <div>
      <h1>Blog</h1>
      <main>
        <ul>
          {posts.map((post) => (
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
