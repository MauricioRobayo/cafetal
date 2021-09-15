import { CupDiscount } from '../../../models/ref-price-model';
import { exampleContent } from '../../example-content';
import { cupDiscountParser } from '.';

it('should return cup discount', () => {
  const parsed = cupDiscountParser(exampleContent);
  const expected: CupDiscount = {
    typeIQ1: [88_000, 88_000, 88_000, 88_000, 88_000, 88_000, 88_000, 88_000],
    typeIIQ2: [20_000, 20_000, 20_000, 20_000, 60_000, 60_000, 60_000, 60_000],
    typeIIIQ3: [20_000, 20_000, 20_000, 20_000, 20_000, 20_000, 20_000, 20_000],
  };

  expect(parsed).toEqual(expected);
});
