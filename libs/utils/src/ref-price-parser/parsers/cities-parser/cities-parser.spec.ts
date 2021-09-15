import { citiesParser } from '..';
import { exampleContent } from '../../example-content';
import { CitiesRefPrice } from '../../../models/ref-price-model';

const expected: CitiesRefPrice = {
  armenia: 1_735_500,
  bogota: 1_734_250,
  bucaramanga: 1_733_875,
  buga: 1_736_250,
  chinchina: 1_735_375,
  cucuta: 1_733_375,
  ibague: 1_734_625,
  manizales: 1_735_375,
  medellin: 1_734_625,
  neiva: 1_733_750,
  pamplona: 1_733_500,
  pasto: 1_733_500,
  pereira: 1_735_375,
  popayan: 1_735_625,
  santaMarta: 1_737_125,
  valledupar: 1_734_750,
};

it('should get reference price for each city', () => {
  const citiesRefPrice = citiesParser(exampleContent);

  expect(citiesRefPrice).toEqual(expected);
});

it('should get reference price for each city if accent is missing', () => {
  const exampleContentWithoutAccents = exampleContent
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '');
  const citiesRefPrice = citiesParser(exampleContentWithoutAccents);

  expect(citiesRefPrice).toEqual(expected);
});

it('should throw an error if no content is found', () => {
  expect(() => citiesParser('')).toThrowError();
});
