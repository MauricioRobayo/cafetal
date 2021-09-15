import {
  lowQualityRefPriceParser,
  premiumRefPriceParser,
  lowQualityRefPricePerPointParser,
  baseYieldFactorParser,
} from ".";

function toTupleWithFormattedValue(value: number) {
  return [value.toLocaleString(), value];
}
const placeholder = "{{placeholder}}";
const genericRefPriceParsers = [
  {
    name: "premium",
    parser: premiumRefPriceParser,
    cases: [12_345_678, 1_234_567, 123_456].map(toTupleWithFormattedValue),
    testContent:
      "PRECIO INTERNO DE REFERENCIA" +
      `Precio total por carga de 125 Kg de pergamino seco ${placeholder} COP` +
      "Precio total de pasilla contenida en el pergamino 7,000 COP",
  },
  {
    name: "lowQuality",
    parser: lowQualityRefPriceParser,
    cases: [123_456, 12_345, 1_234, 123].map(toTupleWithFormattedValue),
    testContent:
      "Precio total por carga de 125 Kg de pergamino seco 1,735,000 COP" +
      `Precio total de pasilla contenida en el pergamino ${placeholder} COP ` +
      "Tabla de preciosPERGAMINO $ALMACAFE Carga (1) (2) Kilo Arroba",
  },
  {
    name: "lowQualityPerPoint",
    parser: lowQualityRefPricePerPointParser,
    cases: [12_234, 1_234, 123].map(toTupleWithFormattedValue),
    testContent:
      "PRECIO DE REFERENCIA PASILLA DE FINCA" +
      `Precio por punto producido ${placeholder}` +
      "COP 51.000 42.500 34.000 25.500 60504030",
  },
  {
    name: "yieldFactor",
    parser: baseYieldFactorParser,
    cases: [["94.00", 94]],
    testContent:
      "VALLEDUPAR 1,734,750 13,878 173,475" +
      "PRECIO DE REFERENCIA PASILLA DE FINCA" +
      "Precio por punto producido 850 " +
      "COP 51.000 42.500 34.000 25.500 60504030" +
      "Precio por ArrobaPuntos1. " +
      `Para café pergamino con factor de rendimiento ${placeholder}` +
      "2. Las cooperativas de caficultores cubrirán, " +
      "con cargo al precio, todos los costos relacionados " +
      "con el servicio de acopio de café al productor." +
      "Federación Nacional de Cafeteros de Colombia - " +
      "Oficina de prensaCalle 73 No. 8-13 Torre B Piso 12 - " +
      "Teléfono: 3136600 ext. 1790-1752 Directo:2352262" +
      "Bogotá - Colombiawww.federaciondecafeteros.org",
  },
];

describe.each(genericRefPriceParsers)(
  "$name",
  ({ parser, cases, testContent }) => {
    it.each(cases)("should parse %s as %s", (refPrice, parsedRefPrice) => {
      const parsed = parser(testContent.replace(placeholder, String(refPrice)));

      expect(parsed).toEqual(parsedRefPrice);
    });

    it("should throw if can not parse refPrice", () => {
      expect(() => parser("")).toThrowError();
    });
  }
);
