import { Injectable } from '@nestjs/common';

@Injectable()
export class GoogleAuthService {
  async googleLogin(req) {
    if (!req.user) {
      return {
        message: 'Unauthorized',
        user: null,
      };
    }
    return {
      message: 'User information from google',
      user: req.user,
    };
  }
}
