import { getDocument } from 'pdfjs-dist/legacy/build/pdf.js';
import { RefPriceStorage } from '@cafetal/models';
import {
  citiesParser,
  cupDiscountParser,
  dateParser,
  externalParser,
  internalParser,
} from './parsers';
import { PDFDocumentProxy } from 'pdfjs-dist/types/display/api';
import { Metadata } from 'pdfjs-dist/types/display/metadata';

export async function parser(
  data: Buffer
): Promise<Pick<RefPriceStorage, 'content' | 'pdfInfo' | 'refPrice'>> {
  const pdfDocumentProxy = await getPdfDocumentProxy(data);
  const pdfInfo = await getMetadata(pdfDocumentProxy);
  const content = await getContent(pdfDocumentProxy);
  return {
    content,
    pdfInfo,
    refPrice: {
      cities: citiesParser(content),
      cupDiscount: cupDiscountParser(content),
      date: dateParser(content),
      external: externalParser(content),
      internal: internalParser(content),
    },
  };
}

export async function getContent(
  pdfDocumentProxy: PDFDocumentProxy
): Promise<string> {
  const pageNumbers = Array.from({ length: 2 }, (_, i) => i + 1);
  const contentsPromises = pageNumbers.map(async (pageNumber) => {
    const page = await pdfDocumentProxy.getPage(pageNumber);
    const content = await page.getTextContent();
    return content.items
      .map((item) => ('str' in item ? item.str : ''))
      .join('');
  });

  const contents = await Promise.all(contentsPromises);
  return contents.join('').replace(/\s+/g, ' ');
}

export function getMetadata(
  pdfDocumentProxy: PDFDocumentProxy
): Promise<{ info: unknown; metadata: Metadata }> {
  return pdfDocumentProxy.getMetadata();
}

export async function getPdfDocumentProxy(
  data: Buffer
): Promise<PDFDocumentProxy> {
  const pdf = getDocument(data);
  return pdf.promise;
}
