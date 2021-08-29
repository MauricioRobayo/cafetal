import Color from 'color';
import { DefaultTheme } from 'styled-components';

const brandColor = Color({
  h: 349,
  s: 83,
  l: 35,
});

export const defaultTheme: DefaultTheme = {
  color: {
    brand: brandColor.string(),
    text1: brandColor.lightness(10).string(),
    text2: brandColor.saturationl(30).lightness(30).string(),
    surface1: brandColor.saturationl(25).lightness(90).string(),
    surface2: brandColor.saturationl(20).lightness(99).string(),
    surface3: brandColor.saturationl(20).lightness(92).string(),
    surface4: brandColor.saturationl(20).lightness(85).string(),
  },
};
