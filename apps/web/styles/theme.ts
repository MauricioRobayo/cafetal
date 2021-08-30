import Color from 'color';
import { DefaultTheme } from 'styled-components';

const brandHsl = {
  h: 349,
  s: 83,
  l: 35,
};
const brandColor = Color(brandHsl);

export const defaultTheme: DefaultTheme = {
  color: {
    brand: brandColor.hex(),
    text1: brandColor.lightness(10).hex(),
    text2: brandColor.saturationl(30).lightness(30).hex(),
    surface1: brandColor.saturationl(20).lightness(99).hex(),
    surface2: brandColor.saturationl(20).lightness(92).hex(),
    surface3: brandColor.saturationl(25).lightness(90).hex(),
    surface4: brandColor.saturationl(20).lightness(85).hex(),
    surfaceShadow: brandColor.saturationl(10).lighten(0.2).alpha(0.02).hex(),
  },
};
