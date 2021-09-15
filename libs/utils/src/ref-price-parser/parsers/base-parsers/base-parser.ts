import { createBaseParser } from '../create-parser';

export const premiumRefPriceParser = createBaseParser(
  /Precio total por carga.*?(\d{0,3},?\d{3},\d{3})/
);

export const lowQualityRefPriceParser = createBaseParser(
  /Precio total de pasilla.*?(\d{0,3},?\d{0,3},?\d{3})/
);

export const lowQualityRefPricePerPointParser = createBaseParser(
  /Precio por punto producido.*?(\d{0,3},?\d{3})/
);

export const baseYieldFactorParser = createBaseParser(
  /Para café pergamino con factor de rendimiento (\d{2}.\d{2}(?!\.))/
);
