import { dateParser } from './date-parser';

const expectedDate = '2021-09-02T00:00:00.000-05:00';
const cases = [
  'Septiembre 02 / 2021',
  'Septiembre 02/2021',
  'Septiembre 2/2021',
  'septiembre 2/2021',
];

it.each(cases)(
  'should return the correct date for %s at beginning of text',
  (date) => {
    const testContent = `${date}La Federación Nacional de Cafeteros de Colombia ofrece`;
    const parsed = dateParser(testContent);

    expect(parsed).toBe(new Date(expectedDate).toISOString());
  }
);

it.each(cases)('should return the correct date for %s inside text', (date) => {
  const testContent = `Bogotá, ${date} (Prensa - FNC)`;
  const parsed = dateParser(testContent);

  expect(parsed).toBe(new Date(expectedDate).toISOString());
});

it('Should throw an error if no match', () => {
  const testContent = '';

  expect(() => dateParser(testContent)).toThrowError(
    `dateParser: Could not parse date from '${testContent}'`
  );
});

it('Should throw an error if cannot parse date', () => {
  const testContent = 'Noviembre 45 / 9999';

  expect(() => dateParser(testContent)).toThrowError(
    "dateParser: Invalid time value '9999-11-45'"
  );
});
