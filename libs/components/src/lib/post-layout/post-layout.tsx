import { ReactNode } from 'react';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface PostsLayoutProps {
  children: ReactNode;
}

const StyledPostsLayout = styled.div``;

export function PostLayout({ children }: PostsLayoutProps) {
  return <StyledPostsLayout>{children}</StyledPostsLayout>;
}

export default PostLayout;
