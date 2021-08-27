import { getYieldFactor } from '@calculadora-cafetera/utils';
import { Contrast } from '@smockle/contrast';
import color from 'color';
import styled from 'styled-components';
import { defaultTheme } from '../../styles/theme';

export interface YieldFactorProps {
  min: number;
  max: number;
  base: number;
}

const StyledYieldFactor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  border: 1px solid red;
`;

const Row = styled.div<{ backgroundColor: string; color: string }>`
  display: flex;
  font-size: 0.85rem;
  color: ${({ color }) => color};
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

const Cell = styled.div`
  padding: 0.15em 0.5em;
  text-align: center;
`;

export function YieldFactor(props: YieldFactorProps) {
  const { min, max, base } = props;
  const range = max - min + 1;
  const greenHue = 120;
  const yellowHue = 60;
  const redHue = 0;
  const greenRange = max - base;
  const redRange = base - min;
  const redStep = (greenHue - yellowHue) / redRange;
  const greenStep = (yellowHue - redHue) / greenRange;
  const contrastThreshold = 4.5;

  console.log({ greenStep, redStep });

  const points = Array.from({ length: range }, (_, i) => min + i).reverse();
  const hsl = { h: greenHue, s: 100, l: 50 };

  return (
    <StyledYieldFactor>
      <Wrapper>
        {points.map((point) => {
          if (point > base + 1) {
            hsl.h = hsl.h - greenStep;
          } else {
            hsl.h = hsl.h - redStep;
          }
          const backgroundColor = color(hsl);
          const contrast = new Contrast(
            defaultTheme.colors.secondaryDark,
            backgroundColor.hex()
          );

          const fontColor =
            contrast.value < contrastThreshold
              ? defaultTheme.colors.mainLight
              : defaultTheme.colors.secondaryDark;
          return (
            <Row
              key={point}
              color={fontColor}
              backgroundColor={backgroundColor.hex()}
            >
              <Cell>{point}</Cell>
              <Cell>{getYieldFactor(point).toFixed(2)}</Cell>
            </Row>
          );
        })}
      </Wrapper>
    </StyledYieldFactor>
  );
}

export default YieldFactor;
