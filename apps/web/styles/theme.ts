import Color from 'color';
import { DefaultTheme } from 'styled-components';

const brandHsl = {
  h: 349,
  s: 83,
  l: 43,
};
const brandColor = Color(brandHsl);

export const defaultTheme: DefaultTheme = {
  maxWidth: '768px',
  font: {
    brand: "'Milonga', cursive",
    text1: "'Lora', serif",
    text2: "'Open Sans', sans-serif",
  },
  colors: {
    brand: brandColor.string(),
    text1: brandColor.lightness(10).string(),
    text2: brandColor.saturationl(30).lightness(30).string(),
    surface1: brandColor.saturationl(20).lightness(99).string(),
    surface2: brandColor.saturationl(20).lightness(92).string(),
    surface3: brandColor.saturationl(25).lightness(90).string(),
    surface4: brandColor.saturationl(20).lightness(85).string(),
    surfaceShadow: brandColor.saturationl(10).lighten(0.2).alpha(0.02).string(),
  },
};
