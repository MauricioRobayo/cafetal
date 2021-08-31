const coffeeBagWeightKg = 70;

export function getYieldFactor(premiumGrams: number, sampleSize = 250): number {
  return (sampleSize * coffeeBagWeightKg) / premiumGrams;
}

export function getPremiumGramsBasedOnYieldFactor(
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
