import { Controller, Get, Query, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GoogleAuthService } from './google.auth.service';
import { AuthService } from '../auth.service';

@Controller('google')
export class GoogleAuthController {
  constructor(
    private readonly googleAuthService: GoogleAuthService,
    private readonly authService: AuthService,
  ) {}

  @Get()
  @UseGuards(AuthGuard('google'))
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  async googleAuth(@Req() req) {}

  @Get('redirect')
  @UseGuards(AuthGuard('google'))
  async googleAuthRedirect(@Req() request) {
    return this.authService.signIn(request.user);
  }

  @Get('profile')
  @UseGuards(AuthGuard('jwt'))
  test(@Query('email') query) {
    return this.authService.findUserByEmail(query);
  }
}
