import { Collection, MongoClient } from 'mongodb';

let client: MongoClient;

export const connectDB = async (url: string): Promise<void> => {
  client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();
  const databasesList = await client.db().admin().listDatabases();
  console.log(databasesList);
};

export const disconnectDB = async (): Promise<void> => {
  await client.close();
};

export const getCollection = <T>(name: string): Collection<T> => {
  return client.db().collection<T>(name);
};
