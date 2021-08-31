import { createAction, ActionType } from 'typesafe-actions';

export const setRefPrice = createAction('SET_REF_PRICE')<number>();
export const setSamplePrice = createAction('SET_SAMPLE_SIZE')<number>();
export const setPremiumGrams = createAction('SET_PREMIUM_GRAMS')<number>();

const actions = {
  setRefPrice,
  setSamplePrice,
  setPremiumGrams,
};

export type Action = ActionType<typeof actions>;
