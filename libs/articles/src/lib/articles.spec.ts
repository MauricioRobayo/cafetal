import { getAllPosts } from './articles';

describe('mdx', () => {
  it('should work', () => {
    expect(getAllPosts()).toEqual('mdx');
  });
});
