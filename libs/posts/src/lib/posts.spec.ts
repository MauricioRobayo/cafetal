import { getAllPosts } from './posts';

describe('mdx', () => {
  it('should work', () => {
    expect(getAllPosts()).toEqual('mdx');
  });
});
