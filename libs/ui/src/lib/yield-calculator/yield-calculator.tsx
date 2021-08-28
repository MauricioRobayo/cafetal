import styled from 'styled-components';
import { ChangeEvent } from 'react';
import { useState } from 'react';
import YieldFactor from '../yield-table/yield-table';
import {
  getYieldFactor,
  getWeightBasedOnYieldFactor,
  getSellPrice,
} from '@calculadora-cafetera/utils';

/* eslint-disable-next-line */
export interface YieldCalculatorProps {}

const StyledYieldCalculator = styled.div``;

export function YieldCalculator(props: YieldCalculatorProps) {
  const maxWeight = 200;
  const minWeight = 174;
  const maxSampleSize = 500;
  const minSampleSize = 100;
  const baseYieldFactor = 94;
  const baseRefPrice = 1500000;
  const baseWeight = getWeightBasedOnYieldFactor(baseYieldFactor);

  const [refPrice, setRefPrice] = useState<number>(baseRefPrice);
  const [sampleSize, setSampleSize] = useState(250);
  // TODO: this should be number and should include all decimal places
  const [premiumGrams, setPremiumGrams] = useState(baseWeight.toFixed(2));
  const [sellPrice, setSellPrice] = useState<number | null>(null);
  const [yieldFactor, setYieldFactor] = useState<number | null>(
    baseYieldFactor
  );

  const onRefPriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    const refPrice = Number(e.target.value);

    if (!yieldFactor) {
      setRefPrice(refPrice);
      return;
    }

    setRefPrice(refPrice);

    const sellPrice = getSellPrice(baseYieldFactor, yieldFactor, refPrice);
    setSellPrice(sellPrice);
  };

  const onSampleSizeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const sampleSize = Number(e.target.value);

    if (sampleSize > maxSampleSize || sampleSize < minSampleSize) {
      setYieldFactor(null);
      setSampleSize(sampleSize);
      return;
    }

    const yieldFactor = getYieldFactor(Number(premiumGrams), sampleSize);

    setYieldFactor(yieldFactor);
    setSampleSize(sampleSize);
  };

  const onGramsChange = (e: ChangeEvent<HTMLInputElement>) => {
    const gramsString = e.target.value;

    if (!/^\d*\.?\d{0,2}$/.test(gramsString)) {
      return;
    }

    const grams = Number(gramsString);

    if (grams > maxWeight || grams < minWeight) {
      setYieldFactor(null);
      setPremiumGrams(gramsString);
      return;
    }

    const yieldFactor = getYieldFactor(grams, sampleSize);
    const sellPrice = getSellPrice(baseYieldFactor, yieldFactor, refPrice);

    setSellPrice(sellPrice);
    setYieldFactor(yieldFactor);
    setPremiumGrams(gramsString);
  };

  return (
    <StyledYieldCalculator>
      <div>
        <label htmlFor="refPrice">Precio base</label>
        <input
          id="refPrice"
          onChange={onRefPriceChange}
          value={refPrice}
          type="number"
        />
      </div>
      <div>
        <label htmlFor="sampleSize">Tamaño de la muestra</label>
        <input
          id="sampleSize"
          onChange={onSampleSizeChange}
          value={sampleSize}
          type="number"
          max="250"
          min="100"
        />
      </div>
      <div>
        <label htmlFor="grams">Peso cafe excelso</label>
        <input
          id="grams"
          onChange={onGramsChange}
          value={premiumGrams}
          type="number"
          step="0.01"
        />
        <span>gramos.</span>
      </div>
      <div>
        Factor de rendimiento:{' '}
        {typeof yieldFactor === 'number' ? yieldFactor.toFixed(2) : ''}
      </div>
      <div>Precio de compra: {sellPrice?.toFixed()}</div>
      <YieldFactor
        min={89}
        max={99}
        base={baseYieldFactor}
        value={yieldFactor}
        sampleSize={sampleSize}
        refPrice={refPrice}
      />
    </StyledYieldCalculator>
  );
}

export default YieldCalculator;
