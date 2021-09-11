import { getAllPosts } from './posts';

describe('posts', () => {
  it('should work', () => {
    expect(getAllPosts()).toEqual('mdx');
  });
});
