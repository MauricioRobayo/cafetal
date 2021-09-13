import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  html {
    font-size: 16px;
  }
  body {
    color: ${({ theme }) => theme.colors.text1};
    font-family: ${({ theme }) => theme.font.text1};
    line-height: normal;

  }
`;

export default GlobalStyle;
