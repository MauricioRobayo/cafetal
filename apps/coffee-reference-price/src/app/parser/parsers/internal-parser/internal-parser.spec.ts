import { internalParser } from '.';
import { exampleContent } from '../../example-content';
import { InternalRefPrice } from '@cafetal/models';

it('should return internal reference price', () => {
  const parsed = internalParser(exampleContent);
  const expected: InternalRefPrice = {
    premium: 1735000,
    lowQuality: 7000,
    lowQualityPerPoint: 850,
    baseYieldFactor: 94,
  };

  expect(parsed).toEqual(expected);
});
