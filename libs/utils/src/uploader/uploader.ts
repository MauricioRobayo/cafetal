import { toGCS } from "./uploaders";

export type Uploader = (fileName: string, destName: string) => Promise<void>;

export async function uploadFile(
  data: Buffer,
  destName: string
): Promise<void> {
  await toGCS(data, destName);
}
