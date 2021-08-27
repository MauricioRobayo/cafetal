import styled from 'styled-components';
import { getYieldFactor } from '@calculadoracafetera/utils';

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

const Point = styled.div<{ hue: number }>`
  padding: 0.15em 0.5em;
  font-size: 0.85rem;
  background-color: hsl(${({ hue }) => hue}, 100%, 50%);
`;

export function YieldFactor(props: YieldFactorProps) {
  const { min, max, base } = props;
  const range = max - min + 1;
  const greenHue = 120;
  const yellowHue = 60;
  const redHue = 0;
  const greenRange = max - base;
  const redRange = base - min;
  const redStep = 60 / redRange;
  const greenStep = 60 / greenRange;

  console.log({ greenStep, redStep });

  const points = Array.from({ length: range }, (_, i) => min + i).reverse();
  let hue = greenHue;

  return (
    <StyledYieldFactor>
      <Wrapper>
        {points.map((point) => {
          if (point > base + 1) {
            hue = hue - greenStep;
          } else {
            hue = hue - redStep;
          }
          console.log({ point, base, hue });

          return (
            <Point key={point} hue={hue}>
              {point}
            </Point>
          );
        })}
      </Wrapper>
    </StyledYieldFactor>
  );
}

export default YieldFactor;
