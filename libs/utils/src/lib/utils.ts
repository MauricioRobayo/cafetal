export function getYieldFactor(weight: number): number {
  const coffeeBagWeightKg = 70;
  const CPS = 250;

  return (CPS * coffeeBagWeightKg) / weight;
}
