import { CitiesRefPrice } from '@calculadora-cafetera/models';
import { createExtendedParser } from '../create-parser';

const accentInsensitive = (str: string): string =>
  str
    .normalize('NFD')
    .replace(/([aeiou])(\p{Diacritic})/gu, '[$1$1$2]')
    .normalize();
const cities = [
  'Armenia',
  'Bogotá',
  'Bucaramanga',
  'Buga',
  'Chinchiná',
  'Cúcuta',
  'Ibagué',
  'Manizales',
  'Medellín',
  'Neiva',
  'Pamplona',
  'Pasto',
  'Pereira',
  'Popayán',
  'Santa Marta',
  'Valledupar',
].map(accentInsensitive);
const regExp = new RegExp(
  `(${cities.join('|')}) (\\d{0,3}[,.]?\\d{3}[,.]\\d{3})`,
  'gi'
);

export const citiesParser = createExtendedParser<CitiesRefPrice>(regExp);
