import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      danger: string;
      main: string;
      mainComplement: string;
      mainDark: string;
      mainLight: string;
      secondary: string;
      secondaryDark: string;
      secondaryLight: string;
      secondaryLighter: string;
      success: string;
      warning: string;
      warningLighter: string;
    };
    maxWidth: string;
    maxWidthNarrow: string;
    maxWidthWider: string;
  }
}
