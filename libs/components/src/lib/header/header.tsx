import styled from 'styled-components';
import Link from 'next/link';

/* eslint-disable-next-line */
export interface HeaderProps {}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-self: stretch;
  background-color: ${({ theme }) => theme.colors.brand};
`;
const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  max-width: ${({ theme }) => theme.maxWidth};
  width: 100%;
  margin: 0;
  padding: 1rem;
  a {
    color: ${({ theme }) => theme.colors.surface1};
    text-decoration: none;
  }
`;
const Logo = styled.h4`
  font-family: ${({ theme }) => theme.font.brand};
  font-size: 1.5rem;
  margin: 0;
  padding: 0;
`;
const Nav = styled.nav`
  font-weight: bold;
`;
const NavItem = styled.div``;

export function Header(props: HeaderProps) {
  return (
    <Wrapper>
      <StyledHeader>
        <Logo>
          <Link href="/">
            <a>CAFETAL</a>
          </Link>
        </Logo>
        <Nav>
          <NavItem>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </NavItem>
        </Nav>
      </StyledHeader>
    </Wrapper>
  );
}

export default Header;
