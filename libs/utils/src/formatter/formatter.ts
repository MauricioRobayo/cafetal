const unitFormatter = new Intl.NumberFormat('es-US', {
  style: 'unit',
  unit: 'gram',
  unitDisplay: 'long',
  minimumFractionDigits: 2,
});

const currencyFormatter = new Intl.NumberFormat('es-US', {
  style: 'currency',
  currencyDisplay: 'narrowSymbol',
  currency: 'COP',
  maximumFractionDigits: 0,
  minimumFractionDigits: 0,
});

export const formatCurrency = currencyFormatter.format;
export const formatUnit = unitFormatter.format;
