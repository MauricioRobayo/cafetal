// import YieldTable from '../yield-table/yield-table';
import {
  getSellPrice,
  getWeightBasedOnYieldFactor,
  getYieldFactor,
} from '@calculadora-cafetera/utils';
import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface YieldCalculatorProps {}

const StyledYieldCalculator = styled.div``;
const Field = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2em 0;
`;
const Label = styled.label`
  margin: 0 0 1em 0;
  font-size: 1.5rem;
`;

export function YieldCalculator(props: YieldCalculatorProps) {
  const baseYieldFactor = 94;
  const baseRefPrice = 1500000;
  const baseSampleSize = 250;
  const basePremiumGrams = getWeightBasedOnYieldFactor(baseYieldFactor);

  const [refPrice, setRefPrice] = useState(baseRefPrice);
  const [sampleSize, setSampleSize] = useState(baseSampleSize);
  const [premiumGrams, setPremiumGrams] = useState(basePremiumGrams);
  const [sellPrice, setSellPrice] = useState(baseRefPrice);
  const [yieldFactor, setYieldFactor] = useState(baseYieldFactor);

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

  const onPremiumGramsChange = (e: ChangeEvent<HTMLInputElement>) => {
    const premiumGrams = Number(e.target.value);

    const yieldFactor = getYieldFactor(premiumGrams, sampleSize);

    setSellPrice(getSellPrice(baseYieldFactor, yieldFactor, refPrice));
    setYieldFactor(yieldFactor);
    setPremiumGrams(premiumGrams);
  };

  return (
    <StyledYieldCalculator>
      <Field>
        <Label htmlFor="ref-price">Precio de referencia</Label>
        <input
          id="ref-price"
          onChange={onRefPriceChange}
          value={refPrice}
          type="number"
        />
      </Field>
      <Field>
        <Label htmlFor="sample-size">Tamaño de la muestra</Label>
        <input
          id="sample-size"
          onChange={onSampleSizeChange}
          value={sampleSize}
          type="number"
        />
      </Field>
      <Field>
        <Label htmlFor="premium-grams">Café excelso</Label>
        <input
          id="premium-grams"
          onChange={onPremiumGramsChange}
          value={premiumGrams}
          type="number"
          step="0.01"
        />
      </Field>
      <Field>
        <div>Factor de rendimiento</div>
        <div> {yieldFactor}</div>
      </Field>
      <Field>
        <div>Precio de compra</div>
        <div>{sellPrice}</div>
      </Field>
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
