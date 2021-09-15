type Cities =
  | "armenia"
  | "bogota"
  | "bucaramanga"
  | "buga"
  | "chinchina"
  | "cucuta"
  | "ibague"
  | "manizales"
  | "medellin"
  | "neiva"
  | "pamplona"
  | "pasto"
  | "pereira"
  | "popayan"
  | "santaMarta"
  | "valledupar";
export type ExternalRefPrice = Record<
  "nyCFirst" | "nyCSecond" | "nyCThird",
  number
>;
export type InternalRefPrice = Record<
  "lowQuality" | "lowQualityPerPoint" | "premium" | "baseYieldFactor",
  number
>;
export type CitiesRefPrice = Record<Cities, number>;
export type CupDiscount = Record<
  "typeIQ1" | "typeIIQ2" | "typeIIIQ3",
  number[]
>;
export interface RefPrice {
  cities: CitiesRefPrice;
  cupDiscount: CupDiscount;
  date: string;
  external: ExternalRefPrice;
  internal: InternalRefPrice;
}
export interface RefPriceStorage {
  content: string;
  createdAt: number;
  etag: string;
  fileName: string;
  lastModified: string;
  pdfInfo: unknown;
  refPrice: RefPrice;
}
