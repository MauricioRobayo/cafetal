import { getSellPrice, getYieldFactor } from '@calculadora-cafetera/utils';
import { getType } from 'typesafe-actions';
import {
  setPremiumGrams,
  setRefPrice,
  setSamplePrice,
  Action,
} from './actions';
import { BASE_YIELD_FACTOR } from './constants';

interface State {
  refPrice: number;
  sampleSize: number;
  premiumGrams: number;
  sellPrice: number;
  yieldFactor: number;
}

export default function reducer(draft: State, action: Action): void {
  switch (action.type) {
    case getType(setRefPrice):
      draft.refPrice = action.payload;
      draft.sellPrice = getSellPrice(
        BASE_YIELD_FACTOR,
        draft.yieldFactor,
        action.payload
      );
      break;
    case getType(setSamplePrice): {
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
    case getType(setPremiumGrams): {
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
  }
}
