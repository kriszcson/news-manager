import { Module } from '@nestjs/common';
import { databaseProviders } from './database.provider';
import { MongooseModule } from '@nestjs/mongoose';
import { DATABASE_NAME, connectionString } from './database.config';
@Module({
  imports: [
    MongooseModule.forRoot(connectionString, {
      dbName: DATABASE_NAME,
    }),
  ],
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
