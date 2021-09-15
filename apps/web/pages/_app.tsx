import { AppProps } from 'next/app';
import { Normalize } from 'styled-normalize';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../styles/theme';
import GlobalStyle from '../styles/global';
import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import { Layout } from '@calculadora-cafetera/components';
import { GoogleAnalytics, usePagesViews } from 'nextjs-google-analytics';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function CustomApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);

  usePagesViews();

  return (
    <>
      <GoogleAnalytics />
      <ThemeProvider theme={defaultTheme}>
        <Normalize />
        <GlobalStyle />
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </>
  );
}

export default CustomApp;
