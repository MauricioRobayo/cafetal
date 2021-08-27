const coffeeBagWeightKg = 70;
const CPS = 250;

export function getYieldFactor(weight: number): number {
  return (CPS * coffeeBagWeightKg) / weight;
}

export function getWeightBasedOnYieldFactor(yieldFactor: number): number {
  return (CPS * coffeeBagWeightKg) / yieldFactor;
}
