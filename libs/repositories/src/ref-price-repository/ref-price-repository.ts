import { Collection, InsertOneResult, MongoClient } from 'mongodb';
import { RefPriceStorage } from '@cafetal/models';
import { getEnvVars } from '@cafetal/utils';

const [MONGODB_URI, MONGODB_DB_NAME, MONGODB_COLLECTION] = getEnvVars([
  'MONGODB_URI',
  'MONGODB_DB_NAME',
  'MONGODB_COLLECTION',
]);
const client = new MongoClient(MONGODB_URI);

export class RefPriceRepository {
  private client: Promise<MongoClient>;
  constructor() {
    this.client = client.connect();
  }

  async getLatest(): Promise<RefPriceStorage | null> {
    const collection = await this.getCollection();

    const refPriceArray = await collection
      .find()
      .sort({ 'refPrice.date': -1 })
      .limit(1)
      .toArray();

    if (refPriceArray.length === 0) {
      return null;
    }

    return refPriceArray[0];
  }

  async save(
    refPrice: RefPriceStorage
  ): Promise<InsertOneResult<RefPriceStorage>> {
    const collection = await this.getCollection();

    return collection.insertOne(refPrice);
  }

  protected async getCollection(): Promise<Collection<RefPriceStorage>> {
    const client = await this.client;
    const db = client.db(MONGODB_DB_NAME);
    return db.collection<RefPriceStorage>(MONGODB_COLLECTION);
  }
}
