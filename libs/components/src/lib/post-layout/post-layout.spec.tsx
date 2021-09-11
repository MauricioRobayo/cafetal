import { render } from '@testing-library/react';

import PostLayout from './post-layout';

describe('PostsLayout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PostLayout>Hello, World!</PostLayout>);
    expect(baseElement).toBeTruthy();
  });
});
