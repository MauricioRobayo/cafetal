import { Storage } from '@google-cloud/storage';
import { getEnvVars } from '@cafetal/utils';

const [bucketName] = getEnvVars(['GCS_BUCKET_NAME']);

const storage = new Storage();
const bucket = storage.bucket(bucketName);

export async function toGCS(data: Buffer, destName: string): Promise<void> {
  const file = bucket.file(destName);

  const [fileExists] = await file.exists();

  if (fileExists) {
    console.log(`toGCP: file '${destName}' already exists, skipping upload.`);
    return;
  }

  // Disable resumable to avoid a difficult to debug error
  // https://stackoverflow.com/q/49547823/2002514
  await file.save(data, { resumable: false });
}
