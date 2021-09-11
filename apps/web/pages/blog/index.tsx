import { getAllPosts } from '../../lib/api';
import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = await getAllPosts(['title', 'date', 'image', 'excerpt']);

  return {
    props: { allPosts },
  };
};

export default function Blog({ allPosts }: any) {
  return <div>Blog</div>;
}
