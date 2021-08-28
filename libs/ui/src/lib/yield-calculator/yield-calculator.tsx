import styled from 'styled-components';
import { ChangeEvent } from 'react';
import { useState } from 'react';
import YieldFactor from '../yield-table/yield-table';
import {
  getYieldFactor,
  getWeightBasedOnYieldFactor,
} from '@calculadora-cafetera/utils';

/* eslint-disable-next-line */
export interface YieldCalculatorProps {}

const StyledYieldCalculator = styled.div``;

export function YieldCalculator(props: YieldCalculatorProps) {
  const maxWeight = 200;
  const minWeight = 174;
  const baseYieldFactor = 94;
  const baseWeight = getWeightBasedOnYieldFactor(baseYieldFactor);

  const [premiumGrams, setPremiumGrams] = useState(baseWeight.toFixed(2));
  const [yieldFactor, setYieldFactor] = useState<number | null>(
    baseYieldFactor
  );

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const gramsString = e.target.value;

    if (!/^\d*\.?\d{0,2}$/.test(gramsString)) {
      return;
    }

    const grams = Number(gramsString);

    if (Number.isNaN(grams)) {
      return;
    }

    if (grams > maxWeight || grams < minWeight) {
      setYieldFactor(null);
      setPremiumGrams(gramsString);
      return;
    }

    const yieldFactor = getYieldFactor(grams);

    setYieldFactor(yieldFactor);
    setPremiumGrams(gramsString);
  };

  return (
    <StyledYieldCalculator>
      <label htmlFor="grams">Peso cafe excelso</label>
      <input
        id="grams"
        onChange={onChange}
        value={premiumGrams}
        type="number"
        step="0.01"
      />
      <span>gramos.</span>
      <div>
        Factor de rendimiento:{' '}
        {typeof yieldFactor === 'number' ? yieldFactor.toFixed(2) : ''}
      </div>
      <YieldFactor
        min={89}
        max={99}
        base={baseYieldFactor}
        value={yieldFactor}
      />
    </StyledYieldCalculator>
  );
}

export default YieldCalculator;
