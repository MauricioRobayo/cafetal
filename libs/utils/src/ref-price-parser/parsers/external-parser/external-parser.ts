import { ExternalRefPrice } from '@calculadora-cafetera/models';
import { createExtendedParser } from '../create-parser';

const positionsMap: { [k: string]: string } = {
  primera: 'nyCFirst',
  segunda: 'nyCSecond',
  tercera: 'nyCThird',
};

const positions = Object.keys(positionsMap);

function keyMapper(key: string) {
  return positionsMap[key] || key;
}

const regExp = new RegExp(
  `Cierre (${positions.join('|')}) posici[oó]n.*?(\\d{1,3}\\.\\d{2})`,
  'gi'
);

export const externalParser = createExtendedParser<ExternalRefPrice>(regExp, {
  keyMapper,
});
