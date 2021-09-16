import axios from 'axios';

const fileUrl =
  'https://federaciondecafeteros.org/app/uploads/2019/10/precio_cafe-1.pdf';

interface DownloadResult {
  data: Buffer;
  etag: string;
  lastModified: string;
}

interface ExponentialBackOffResult {
  elapseTimeMs: number;
  maxExecutionExceeded: boolean;
  retries: number;
  status: 'success' | 'failed';
}

type SuccessfulExponentialBackOffResult = DownloadResult &
  ExponentialBackOffResult;

async function fetchFile(etag?: string): Promise<DownloadResult | null> {
  const headers: { [k: string]: string } = {};

  if (etag) {
    headers['If-None-Match'] = etag;
  }

  try {
    const {
      data,
      headers: { etag, 'last-modified': lastModified },
    } = await axios.get<ArrayBuffer>(fileUrl, {
      responseType: 'arraybuffer',
      headers,
    });

    return {
      data: Buffer.from(data),
      etag,
      lastModified,
    };
  } catch (err) {
    if (axios.isAxiosError(err) && err.response?.status === 304) {
      return null;
    }

    throw new Error(`downloadFile: get request failed ${err}`);
  }
}

interface DownloadFileWithExponentialBackOffOptons {
  etag?: string;
  maxExecutionTimeMs: number;
  minRndDeltaMs: number;
  maxRndDeltaMs: number;
  delayFactor: number;
  fetcher?: typeof fetchFile;
}
export async function downloadFileWithExponentialBackOff({
  etag,
  maxExecutionTimeMs,
  minRndDeltaMs,
  maxRndDeltaMs,
  delayFactor,
  fetcher = fetchFile,
}: DownloadFileWithExponentialBackOffOptons): Promise<
  SuccessfulExponentialBackOffResult | ExponentialBackOffResult
> {
  let delayMs = 0;
  let retries = 0;
  const startTime = Date.now();

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const downloadResult = await fetcher(etag);
    const elapseTimeMs = Date.now() - startTime;

    if (downloadResult) {
      return {
        ...downloadResult,
        elapseTimeMs,
        maxExecutionExceeded: false,
        retries,
        status: 'success',
      };
    }

    if (elapseTimeMs >= maxExecutionTimeMs) {
      return {
        elapseTimeMs,
        maxExecutionExceeded: true,
        retries,
        status: 'failed',
      };
    }

    retries = retries + 1;

    const randomDeltaMs = randBetween(minRndDeltaMs, maxRndDeltaMs);
    delayMs = (delayMs + randomDeltaMs) * delayFactor;

    console.log('downloadFileWithExponentialBackOff', {
      delayMs,
      elapseTimeMs,
      retries,
    });

    await new Promise((resolve) => setTimeout(resolve, delayMs));
  }
}

export function isSuccessfulExponentialBackOffResult(
  result: SuccessfulExponentialBackOffResult | ExponentialBackOffResult
): result is SuccessfulExponentialBackOffResult {
  return result.status === 'success';
}

function randBetween(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min) + min);
}
