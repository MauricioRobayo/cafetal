import { FileDownloader } from './app/downloader';
import { parser } from './app/parser';
import { uploadFile } from './app/uploader';
import { RefPriceRepository } from '@calculadora-cafetera/repositories';

const repo = new RefPriceRepository();

async function processRefPrice(): Promise<void> {
  try {
    const latestRefPrice = await repo.getLatest();
    const fd = new FileDownloader(latestRefPrice?.etag);
    const downloadResult = await fd.downloadFileWithExponentialBackOff();
    const { retries, elapseTimeMs, status } = downloadResult;

    console.log('getRefPrice: downloadResult', {
      elapseTimeMs,
      retries,
      status,
    });

    if (FileDownloader.isSuccessfulExponentialBackOffResult(downloadResult)) {
      const { data, etag, lastModified } = downloadResult;
      let fileName = '';

      try {
        const { pdfInfo, content, refPrice } = await parser(data);
        fileName = `${refPrice.date.slice(0, 10)}.pdf`;

        await repo.save({
          content,
          createdAt: Date.now(),
          etag,
          fileName,
          lastModified,
          pdfInfo,
          refPrice,
        });
      } catch (err) {
        console.log('getRefPrice: parsing pdf file failed', err);
      }

      await uploadFile(data, fileName);

      console.log('getRefPrice: Process completed', {
        etag,
        fileName,
        lastModified,
      });

      process.exit();
    }
  } catch (err) {
    console.log('getRefPrice: failed', err);
  }

  process.exit(1);
}

processRefPrice();
