import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { userProviders } from 'src/database/user.provider';
import { databaseProviders } from 'src/database/database.provider';

@Module({
  controllers: [UsersController],
  providers: [UsersService, ...userProviders, ...databaseProviders],
})
export class UsersModule {}
