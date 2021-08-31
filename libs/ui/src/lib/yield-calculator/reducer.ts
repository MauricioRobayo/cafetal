import { getSellPrice, getYieldFactor } from '@calculadora-cafetera/utils';
import { SET_PREMIUM_GRAMS, SET_REF_PRICE, SET_SAMPLE_SIZE } from './actions';
import { BASE_YIELD_FACTOR } from './constants';

interface State {
  refPrice: number;
  sampleSize: number;
  premiumGrams: number;
  sellPrice: number;
  yieldFactor: number;
}

interface Action {
  type:
    | 'SET_REF_PRICE'
    | 'SET_SAMPLE_SIZE'
    | 'SET_PREMIUM_GRAMS'
    | 'SET_SELL_PRICE'
    | 'SET_YIELD_FACTOR';
  payload: number;
}

export default function reducer(draft: State, action: Action): void {
  switch (action.type) {
    case SET_REF_PRICE:
      draft.refPrice = action.payload;
      draft.sellPrice = getSellPrice(
        BASE_YIELD_FACTOR,
        draft.yieldFactor,
        action.payload
      );
      break;
    case SET_SAMPLE_SIZE: {
      const yieldFactor = getYieldFactor(draft.premiumGrams, action.payload);
      draft.yieldFactor = yieldFactor;
      draft.sellPrice = getSellPrice(
        BASE_YIELD_FACTOR,
        yieldFactor,
        draft.refPrice
      );
      draft.sampleSize = action.payload;
      break;
    }
    case SET_PREMIUM_GRAMS: {
      const yieldFactor = getYieldFactor(action.payload, draft.sampleSize);
      draft.sellPrice = getSellPrice(
        BASE_YIELD_FACTOR,
        yieldFactor,
        draft.refPrice
      );
      draft.yieldFactor = yieldFactor;
      draft.premiumGrams = action.payload;
      break;
    }
    default:
      throw new Error();
  }
}
