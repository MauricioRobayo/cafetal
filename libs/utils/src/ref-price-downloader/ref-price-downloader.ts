import axios from "axios";

const fileUrl =
  "https://federaciondecafeteros.org/app/uploads/2019/10/precio_cafe-1.pdf";

interface DownloadResult {
  data: Buffer;
  etag: string;
  lastModified: string;
}

interface ExponentialBackOffResult {
  elapseTimeMs: number;
  maxExecutionExceeded: boolean;
  maxExecutionTime: number;
  retries: number;
  status: "success" | "failed";
}

type SuccessfulExponentialBackOffResult = DownloadResult &
  ExponentialBackOffResult;

export class FileDownloader {
  constructor(private etag?: string) {}

  async downloadFile(): Promise<DownloadResult | null> {
    const headers: { [k: string]: string } = {};

    if (this.etag) {
      headers["If-None-Match"] = this.etag;
    }

    try {
      const {
        data,
        headers: { etag, "last-modified": lastModified },
      } = await axios.get<ArrayBuffer>(fileUrl, {
        responseType: "arraybuffer",
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

  async downloadFileWithExponentialBackOff(
    maxExecutionTime = 8 * 60 * 60 * 1000
  ): Promise<SuccessfulExponentialBackOffResult | ExponentialBackOffResult> {
    let delayMs = 0;
    let retries = 0;
    const startTime = Date.now();

    // eslint-disable-next-line no-constant-condition
    while (true) {
      const downloadResult = await this.downloadFile();
      const elapseTimeMs = Date.now() - startTime;

      if (downloadResult) {
        return {
          ...downloadResult,
          elapseTimeMs,
          maxExecutionExceeded: false,
          maxExecutionTime,
          retries,
          status: "success",
        };
      }

      if (elapseTimeMs >= maxExecutionTime) {
        return {
          elapseTimeMs,
          maxExecutionExceeded: true,
          maxExecutionTime,
          retries,
          status: "failed",
        };
      }

      retries = retries + 1;

      const randomDeltaMs = randBetween(60 * 1000, 4 * 60 * 1000);
      delayMs = (delayMs + randomDeltaMs) * 2;

      console.log("downloadFileWithExponentialBackOff", {
        delayMs,
        elapseTimeMs,
        retries,
      });

      await new Promise((resolve) => setTimeout(resolve, delayMs));
    }
  }

  static isSuccessfulExponentialBackOffResult(
    result: SuccessfulExponentialBackOffResult | ExponentialBackOffResult
  ): result is SuccessfulExponentialBackOffResult {
    return result.status === "success";
  }
}

function randBetween(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min) + min);
}
