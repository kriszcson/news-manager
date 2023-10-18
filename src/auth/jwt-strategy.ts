import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { jwtConstants } from './auth.constans';
import { UsersService } from 'src/users/users.service';

export type JwtPayload = {
  email: string;
  id: string;
  name: string;
  imageUrl: string;
};

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private readonly userService: UsersService) {
    const extractJwtFromCookie = (req) => {
      let token = null;
      if (req && req.headers) {
        token = req.headers['access_token'];
      }
      return token || ExtractJwt.fromAuthHeaderAsBearerToken()(req);
    };

    super({
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
      jwtFromRequest: extractJwtFromCookie,
    });
  }

  async validate(payload: JwtPayload) {
    const user = await this.userService.findByEmail(payload.email);
    if (!user) throw new UnauthorizedException();

    return user;
  }
}
