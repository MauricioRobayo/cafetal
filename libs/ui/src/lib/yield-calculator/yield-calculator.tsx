// import YieldTable from '../yield-table/yield-table';
import { getPremiumGramsBasedOnYieldFactor } from '@calculadora-cafetera/utils';
import { useReducer } from 'react';
import styled from 'styled-components';
import NumberInput from '../number-input/number-input';
import { formatCurrency, formatUnit } from '@calculadora-cafetera/formatter';
import reducer from './reducer';
import { SET_PREMIUM_GRAMS, SET_REF_PRICE, SET_SAMPLE_SIZE } from './actions';
import {
  BASE_REF_PRICE,
  BASE_YIELD_FACTOR,
  BASE_SAMPLE_SIZE,
} from './constants';
import { useImmerReducer } from 'use-immer';

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
  const basePremiumGrams = getPremiumGramsBasedOnYieldFactor(BASE_YIELD_FACTOR);

  const [state, dispatch] = useImmerReducer(reducer, {
    refPrice: BASE_REF_PRICE,
    sampleSize: BASE_SAMPLE_SIZE,
    premiumGrams: basePremiumGrams,
    sellPrice: BASE_REF_PRICE,
    yieldFactor: BASE_YIELD_FACTOR,
  });

  return (
    <StyledYieldCalculator>
      <Field>
        <Label htmlFor="ref-price">Precio de referencia</Label>
        <StyledNumberInput
          formatter={formatCurrency}
          max={99_999_999}
          min={0}
          name="ref-price"
          onChange={(value) =>
            dispatch({ type: SET_REF_PRICE, payload: value })
          }
          value={state.refPrice}
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
          onChange={(value) =>
            dispatch({ type: SET_SAMPLE_SIZE, payload: value })
          }
          value={state.sampleSize}
        />
      </Field>
      <Field>
        <Label htmlFor="premium-grams">Café excelso</Label>
        <StyledNumberInput
          acceptDecimals
          name="premium-grams"
          onChange={(value) =>
            dispatch({ type: SET_PREMIUM_GRAMS, payload: value })
          }
          value={Math.round(state.premiumGrams * 100) / 100}
          formatter={formatUnit}
          max={1000}
          min={0}
        />
      </Field>
      <Field>
        <div>Factor de rendimiento</div>
        <div>{state.yieldFactor.toFixed(2)}</div>
      </Field>
      <Field>
        <div>Precio de compra</div>
        <div>{formatCurrency(state.sellPrice)}</div>
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
