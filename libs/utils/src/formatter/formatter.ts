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

const longDateFormatterCO = new Intl.DateTimeFormat('es-CO', {
  day: 'numeric',
  month: 'long',
  weekday: 'long',
  year: 'numeric',
});

const shortDateFormatterCO = new Intl.DateTimeFormat('es-CO', {
  day: 'numeric',
  month: 'numeric',
  year: 'numeric',
});

export const formatCurrency = currencyFormatter.format;
export const formatUnit = unitFormatter.format;
export const formatLongDateCO = longDateFormatterCO.format;
export const formatShortDateCO = shortDateFormatterCO.format;
