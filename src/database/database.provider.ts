import * as mongoose from 'mongoose';
import { connectionString } from './database.config';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(connectionString),
  },
];
