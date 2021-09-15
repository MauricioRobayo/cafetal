import { ReactNode } from 'react';
import styled from 'styled-components';
import Header from '../header/header';

/* eslint-disable-next-line */
export interface LayoutProps {
  children: ReactNode;
}

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Main = styled.main`
  max-width: ${({ theme }) => theme.maxWidth};
`;

export function Layout({ children }: LayoutProps) {
  return (
    <StyledLayout>
      <Header />
      <Main>{children}</Main>
    </StyledLayout>
  );
}

export default Layout;
