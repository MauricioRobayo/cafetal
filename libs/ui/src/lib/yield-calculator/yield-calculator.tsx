// import YieldTable from '../yield-table/yield-table';
import {
  getSellPrice,
  getWeightBasedOnYieldFactor,
  getYieldFactor,
} from '@calculadora-cafetera/utils';
import { useState } from 'react';
import styled from 'styled-components';
import NumberInput from '../number-input/number-input';

/* eslint-disable-next-line */
export interface YieldCalculatorProps {}

const StyledYieldCalculator = styled.div``;
const Field = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2em 0;
  align-items: center;
`;
const Label = styled.label`
  font-size: 1.25rem;
`;
const StyledNumberInput = styled(NumberInput)`
  text-align: center;
  max-width: 320px;
  width: 100%;
  font-size: 1.75rem;
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

  const onRefPriceChange = (refPrice: number): void => {
    if (!yieldFactor) {
      setRefPrice(refPrice);
      return;
    }

    setRefPrice(refPrice);
    setSellPrice(getSellPrice(baseYieldFactor, yieldFactor, refPrice));
  };

  const onSampleSizeChange = (sampleSize: number): void => {
    setYieldFactor(getYieldFactor(Number(premiumGrams), sampleSize));
    setSampleSize(sampleSize);
  };

  const onPremiumGramsChange = (premiumGrams: number): void => {
    const yieldFactor = getYieldFactor(premiumGrams, sampleSize);

    setSellPrice(getSellPrice(baseYieldFactor, yieldFactor, refPrice));
    setYieldFactor(yieldFactor);
    setPremiumGrams(premiumGrams);
  };

  return (
    <StyledYieldCalculator>
      <Field>
        <Label htmlFor="ref-price">Precio de referencia</Label>
        <StyledNumberInput
          name="ref-price"
          onChange={onRefPriceChange}
          value={refPrice}
        />
      </Field>
      <Field>
        <Label htmlFor="sample-size">Tamaño de la muestra</Label>
        <StyledNumberInput
          name="sample-size"
          onChange={onSampleSizeChange}
          value={sampleSize}
        />
      </Field>
      <Field>
        <Label htmlFor="premium-grams">Café excelso</Label>
        <StyledNumberInput
          name="premium-grams"
          onChange={onPremiumGramsChange}
          value={premiumGrams}
          step={0.01}
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
