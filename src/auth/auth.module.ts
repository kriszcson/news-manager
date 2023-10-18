import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './auth.constans';
import { GoogleAuthController } from './google/google.auth.controller';
import { GoogleAuthService } from './google/google.auth.service';
import { PassportModule } from '@nestjs/passport';
import { GoogleStrategy } from './google/google.strategy';
import { ConfigModule } from '@nestjs/config';
import { JwtStrategy } from './jwt-strategy';
import { AuthService } from './auth.service';
import { UsersService } from 'src/users/users.service';
import { userProviders } from 'src/database/user.provider';
import { databaseProviders } from 'src/database/database.provider';

@Module({
  imports: [
    PassportModule,
    ConfigModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [
    AuthService,
    GoogleAuthService,
    GoogleStrategy,
    JwtStrategy,
    UsersService,
    ...userProviders,
    ...databaseProviders,
  ],
  controllers: [GoogleAuthController],
  exports: [],
})
export class AuthModule {}
