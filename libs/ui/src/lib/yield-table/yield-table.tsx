import { getWeightBasedOnYieldFactor } from '@calculadora-cafetera/utils';
import color from 'color';
import styled, { css } from 'styled-components';

export interface YieldFactorProps {
  min: number;
  max: number;
  base: number;
  sampleSize: number;
  value: number | null;
}

const StyledYieldFactor = styled.div`
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  position: relative;
  font-size: 0.85rem;
  color: black;
`;

const Cell = styled.div<{
  highlighted: boolean;
  backgroundColor: string;
}>`
  display: flex;
  gap: 1em;
  justify-content: center;
  font-weight: ${({ highlighted }) => (highlighted ? 'bold' : 'normal')};
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: 0.15em 0.5em;
`;

const Indicator = styled.div<{ offset: number; position: 'left' | 'right' }>`
  position: absolute;
  font-weight: bold;
  font-size: 1rem;
  ${({ position }) =>
    position === 'left'
      ? css`
          left: -0.75rem;
        `
      : css`
          right: -0.75rem;
        `}
  line-height: 0;
  top: ${({ offset }) => `${offset}%`};
  font-weight: bold;
`;

export function YieldFactor({
  min,
  max,
  base,
  sampleSize,
  value,
}: YieldFactorProps) {
  const range = max - min + 1;
  const greenHue = 120;
  const yellowHue = 60;
  const redHue = 0;
  const greenRange = max - base;
  const redRange = base - min;
  const redStep = (greenHue - yellowHue) / redRange;
  const greenStep = (yellowHue - redHue) / greenRange;
  const points = Array.from({ length: range }, (_, i) => min + i);
  const hsl = { h: greenHue + greenStep, s: 100, l: 75 };

  return (
    <StyledYieldFactor>
      <Wrapper>
        {points.map((point) => {
          if (point > base) {
            hsl.h = hsl.h - greenStep;
          } else {
            hsl.h = hsl.h - redStep;
          }
          const backgroundColor = color(hsl);

          const weight = getWeightBasedOnYieldFactor(point, sampleSize);

          const offset =
            value && point === Math.trunc(value) ? (value - point) * 100 : null;

          return (
            <Row key={point}>
              {offset !== null ? (
                <Indicator offset={offset + 50} position="left">
                  {'>'}
                </Indicator>
              ) : null}
              <Cell
                highlighted={point === base}
                backgroundColor={backgroundColor.hex()}
              >
                <div>{point}</div>
                <div>{weight.toFixed(2)}</div>
              </Cell>
              {offset !== null ? (
                <Indicator offset={offset + 50} position="right">
                  {'<'}
                </Indicator>
              ) : null}
            </Row>
          );
        })}
      </Wrapper>
    </StyledYieldFactor>
  );
}

export default YieldFactor;
