import styled from 'styled-components';
import { ChangeEvent } from 'react';
import { useState } from 'react';
// import YieldTable from '../yield-table/yield-table';
import {
  getYieldFactor,
  getWeightBasedOnYieldFactor,
  getSellPrice,
} from '@calculadora-cafetera/utils';

/* eslint-disable-next-line */
export interface YieldCalculatorProps {}

const StyledYieldCalculator = styled.div``;

export function YieldCalculator(props: YieldCalculatorProps) {
  const baseYieldFactor = 94;
  const baseRefPrice = 1500000;
  const baseWeight = getWeightBasedOnYieldFactor(baseYieldFactor);

  const [refPrice, setRefPrice] = useState<number>(baseRefPrice);
  const [sampleSize, setSampleSize] = useState(250);
  const [premiumGrams, setPremiumGrams] = useState(baseWeight);
  const [sellPrice, setSellPrice] = useState<number>(baseRefPrice);
  const [yieldFactor, setYieldFactor] = useState<number>(baseYieldFactor);

  const onRefPriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    const refPrice = Number(e.target.value);

    if (!yieldFactor) {
      setRefPrice(refPrice);
      return;
    }

    setRefPrice(refPrice);
    setSellPrice(getSellPrice(baseYieldFactor, yieldFactor, refPrice));
  };

  const onSampleSizeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const sampleSize = Number(e.target.value);

    setYieldFactor(getYieldFactor(Number(premiumGrams), sampleSize));
    setSampleSize(sampleSize);
  };

  const onGramsChange = (e: ChangeEvent<HTMLInputElement>) => {
    const grams = Number(e.target.value);

    setSellPrice(getSellPrice(baseYieldFactor, yieldFactor, refPrice));
    setYieldFactor(getYieldFactor(grams, sampleSize));
    setPremiumGrams(grams);
  };

  return (
    <StyledYieldCalculator>
      <div>
        <label htmlFor="refPrice">Precio de referencia</label>
        <input
          id="refPrice"
          onChange={onRefPriceChange}
          value={refPrice}
          type="number"
        />
      </div>
      <div>
        <label htmlFor="sampleSize">Tamaño de la muestra en gramos</label>
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
        <label htmlFor="grams">Gramos de cafe excelso resultante</label>
        <input
          id="grams"
          onChange={onGramsChange}
          value={premiumGrams}
          type="number"
          step="0.01"
        />
        <span>gramos.</span>
      </div>
      <div>Factor de rendimiento: {yieldFactor}</div>
      <div>Precio de compra: {sellPrice}</div>
      {/* <YieldTable
        min={89}
        max={99}
        baseYieldFactor={baseYieldFactor}
        yieldFactor={yieldFactor}
        sampleSize={sampleSize}
        refPrice={refPrice}
      /> */}
    </StyledYieldCalculator>
  );
}

export default YieldCalculator;
