import { getAllPosts } from '../../lib/api';
import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ]);

  return {
    props: { allPosts },
  };
};

export default function Blog({ allPosts }: any) {
  console.log(allPosts);

  return <div>Blog</div>;
}
