// import YieldTable from '../yield-table/yield-table';
import { formatCurrency, formatUnit } from '@calculadora-cafetera/formatter';
import { getPremiumGramsBasedOnYieldFactor } from '@calculadora-cafetera/utils';
import styled from 'styled-components';
import { useImmerReducer } from 'use-immer';
import NumberInput from '../number-input/number-input';
import { setPremiumGrams, setRefPrice, setSamplePrice } from './actions';
import {
  BASE_REF_PRICE,
  BASE_SAMPLE_SIZE,
  BASE_YIELD_FACTOR,
} from './constants';
import reducer from './reducer';

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
const ResultTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: normal;
  margin: 0.5em;
`;
const Result = styled.div`
  font-size: 1.75rem;
  font-weight: bold;
`;

export function YieldCalculator(props: YieldCalculatorProps) {
  const basePremiumGrams = getPremiumGramsBasedOnYieldFactor(BASE_YIELD_FACTOR);
  const [state, dispatch] = useImmerReducer(reducer, {
    refPrice: BASE_REF_PRICE,
    sampleSize: BASE_SAMPLE_SIZE,
    premiumGrams: basePremiumGrams,
    sellPrice: BASE_REF_PRICE,
    yieldFactor: BASE_YIELD_FACTOR,
  });
  const { sampleSize, refPrice, sellPrice, premiumGrams, yieldFactor } = state;

  return (
    <StyledYieldCalculator>
      <Field>
        <Label htmlFor="ref-price">Precio de referencia</Label>
        <StyledNumberInput
          formatter={formatCurrency}
          max={99_999_999}
          min={0}
          name="ref-price"
          onChange={(value) => dispatch(setRefPrice(value))}
          value={refPrice}
        />
      </Field>
      <Field>
        <Label htmlFor="sample-size">Tamaño de la muestra</Label>
        <StyledNumberInput
          acceptDecimals
          formatter={formatUnit}
          max={1000}
          min={0}
          name="sample-size"
          onChange={(value) => dispatch(setSamplePrice(value))}
          value={sampleSize}
        />
      </Field>
      <Field>
        <Label htmlFor="premium-grams">Café excelso</Label>
        <StyledNumberInput
          acceptDecimals
          name="premium-grams"
          onChange={(value) => dispatch(setPremiumGrams(value))}
          value={Math.round(premiumGrams * 100) / 100}
          formatter={formatUnit}
          max={sampleSize}
          min={0}
        />
      </Field>
      <Field>
        <ResultTitle>Factor de rendimiento</ResultTitle>
        <Result>{yieldFactor.toFixed(2)}</Result>
      </Field>
      <Field>
        <ResultTitle>Precio de compra</ResultTitle>
        <Result>{formatCurrency(sellPrice)}</Result>
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
