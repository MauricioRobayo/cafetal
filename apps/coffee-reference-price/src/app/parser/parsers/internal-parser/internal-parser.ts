import {
  premiumRefPriceParser,
  lowQualityRefPriceParser,
  lowQualityRefPricePerPointParser,
  baseYieldFactorParser,
} from '../base-parsers';
import { InternalRefPrice } from '@calculadora-cafetera/models';

export function internalParser(content: string): InternalRefPrice {
  return {
    premium: premiumRefPriceParser(content),
    lowQuality: lowQualityRefPriceParser(content),
    lowQualityPerPoint: lowQualityRefPricePerPointParser(content),
    baseYieldFactor: baseYieldFactorParser(content),
  };
}
