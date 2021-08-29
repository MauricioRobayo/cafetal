const coffeeBagWeightKg = 70;

export function getYieldFactor(weight: number, sampleSize = 250): number {
  return (sampleSize * coffeeBagWeightKg) / weight;
}

export function getWeightBasedOnYieldFactor(
  yieldFactor: number,
  sampleSize = 250
): number {
  return (sampleSize * coffeeBagWeightKg) / yieldFactor;
}

export function getSellPrice(
  baseYieldFactor: number,
  yieldFactor: number,
  refPrice: number
): number {
  return (baseYieldFactor / yieldFactor) * refPrice;
}

export function getDecrease(premiumGrams: number, sampleSize: number): number {
  return (sampleSize - premiumGrams) / sampleSize;
}
