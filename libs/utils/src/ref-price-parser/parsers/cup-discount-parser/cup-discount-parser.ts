import { CupDiscount } from '../../../models/ref-price-model';
import { createExtendedParser } from '../create-parser';

const regExp = /tipo (i q1|ii q2|iii q3) ([\d. ]+) /gi;

function keyMapper(key: string) {
  return (
    {
      'I Q1': 'typeIQ1',
      'II Q2': 'typeIIQ2',
      'III Q3': 'typeIIIQ3',
    }[key] || key
  );
}

function valueParser(value: string) {
  return value.split(' ').map((value) => Number(value.replace(/\./g, '')));
}

export const cupDiscountParser = createExtendedParser<CupDiscount>(regExp, {
  keyMapper,
  valueParser,
});
