import { getSellPrice, getYieldFactor } from '@calculadora-cafetera/utils';
import { BASE_YIELD_FACTOR } from './constants';

interface State {
  refPrice: number;
  sampleSize: number;
  premiumGrams: number;
  sellPrice: number;
  yieldFactor: number;
}

export const SET_REF_PRICE = 'SET_REF_PRICE';
export const SET_SAMPLE_SIZE = 'SET_SAMPLE_SIZE';
export const SET_PREMIUM_GRAMS = 'SET_PREMIUM_GRAMS';

interface Action {
  type:
    | 'SET_REF_PRICE'
    | 'SET_SAMPLE_SIZE'
    | 'SET_PREMIUM_GRAMS'
    | 'SET_SELL_PRICE'
    | 'SET_YIELD_FACTOR';
  payload: number;
}

export default function reducer(state: State, action: Action): State {
  switch (action.type) {
    case SET_REF_PRICE:
      return {
        ...state,
        refPrice: action.payload,
        sellPrice: getSellPrice(
          BASE_YIELD_FACTOR,
          state.yieldFactor,
          action.payload
        ),
      };
    case SET_SAMPLE_SIZE: {
      const yieldFactor = getYieldFactor(state.premiumGrams, action.payload);
      return {
        ...state,
        yieldFactor: yieldFactor,
        sellPrice: getSellPrice(BASE_YIELD_FACTOR, yieldFactor, state.refPrice),
        sampleSize: action.payload,
      };
    }
    case SET_PREMIUM_GRAMS: {
      const yieldFactor = getYieldFactor(action.payload, state.sampleSize);
      return {
        ...state,
        sellPrice: getSellPrice(BASE_YIELD_FACTOR, yieldFactor, state.refPrice),
        yieldFactor,
        premiumGrams: action.payload,
      };
    }
    default:
      return state;
  }
}
