import { getWeightBasedOnYieldFactor } from '@calculadora-cafetera/utils';
import color from 'color';
import styled from 'styled-components';

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

const Wrapper = styled.div``;

const Row = styled.div<{
  backgroundColor: string;
  highlighted: boolean;
}>`
  margin: 0.25em;
  border-radius: 4px;
  display: flex;
  align-items: end;
  font-size: 0.85rem;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border: 1px solid black;
  color: black;
  font-weight: ${({ highlighted }) => (highlighted ? 'bold' : 'normal')};
`;

const Cell = styled.div`
  padding: 0.15em 0.5em;
`;

export function YieldFactor({ min, max, base }: YieldFactorProps) {
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
          console.log({ point, base, hue: hsl.h, boolean: base === point });
          const backgroundColor = color(hsl);

          const weight = getWeightBasedOnYieldFactor(point);

          return (
            <Row
              key={point}
              backgroundColor={backgroundColor.hex()}
              highlighted={point === base}
            >
              <Cell>{point}</Cell>
              <Cell>{weight.toFixed(2)}</Cell>
            </Row>
          );
        })}
      </Wrapper>
    </StyledYieldFactor>
  );
}

export default YieldFactor;
