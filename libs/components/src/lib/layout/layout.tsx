import { ReactNode } from 'react';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface LayoutProps {
  children: ReactNode;
}

const StyledLayout = styled.div``;

export function Layout({ children }: LayoutProps) {
  return <StyledLayout>{children}</StyledLayout>;
}

export default Layout;
