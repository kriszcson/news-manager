import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GoogleStrategy } from '../auth/google/google.strategy';

@Injectable()
export class LocalAuthGuard extends AuthGuard('google') {
  constructor(private readonly localStrategy: GoogleStrategy) {
    super();
  }
}
