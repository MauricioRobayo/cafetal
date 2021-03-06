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
  retries: number;
  status: 'success' | 'maxRetries exceeded' | 'maxExecutionTime exceeded';
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
  delayFactor?: number;
  etag?: string;
  fetcher?: typeof fetchFile;
  maxExecutionTimeMs?: number;
  maxRetries?: number;
  maxRndDeltaMs: number;
  minRndDeltaMs: number;
  sleep?: (ms: number) => Promise<void>;
}
export async function downloadFileWithExponentialBackOff({
  delayFactor = 2,
  etag,
  fetcher = fetchFile,
  maxExecutionTimeMs,
  maxRetries = 25,
  maxRndDeltaMs,
  minRndDeltaMs,
  sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms)),
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

    if (maxExecutionTimeMs && elapseTimeMs >= maxExecutionTimeMs) {
      return {
        elapseTimeMs,
        retries: retries - 1,
        status: 'maxExecutionTime exceeded',
      };
    }

    if (retries > maxRetries) {
      return {
        elapseTimeMs,
        retries: retries - 1,
        status: 'maxRetries exceeded',
      };
    }

    console.log('downloadFileWithExponentialBackOff', {
      delayMs,
      elapseTimeMs,
      retries,
    });

    if (downloadResult) {
      return {
        ...downloadResult,
        elapseTimeMs,
        retries,
        status: 'success',
      };
    }

    retries = retries + 1;
    const randomDeltaMs = randBetween(minRndDeltaMs, maxRndDeltaMs);
    delayMs = Math.round((delayMs + randomDeltaMs) * delayFactor);
    await sleep(delayMs);
  }
}

export function isSuccessfulExponentialBackOffResult(
  result: SuccessfulExponentialBackOffResult | ExponentialBackOffResult
): result is SuccessfulExponentialBackOffResult {
  return result.status === 'success';
}

function randBetween(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
