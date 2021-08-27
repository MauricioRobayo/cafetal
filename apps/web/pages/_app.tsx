import { AppProps } from 'next/app';
import { Normalize } from 'styled-normalize';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../styles/theme';
import GlobalStyle from '../styles/global';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Normalize />
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default CustomApp;
