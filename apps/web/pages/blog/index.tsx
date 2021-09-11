import { BlogPost, getAllPosts } from '../../lib/api';
import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = await getAllPosts(['title', 'excerpt']);

  return {
    props: { allPosts },
  };
};

export default function Blog({ allPosts }: { allPosts: BlogPost[] }) {
  console.log({ allPosts });

  return <div>Blog</div>;
}
