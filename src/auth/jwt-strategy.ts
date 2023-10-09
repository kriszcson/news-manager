import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { jwtConstants } from './auth.constans';

export type JwtPayload = {
  sub: string;
  email: string;
};

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private readonly configService: ConfigService) {
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
    //TODO: Implement
    /*     const user = await this.userRepository.findOne({ id: payload.sub });

    if (!user) throw new UnauthorizedException('Please log in to continue');
 */
    return {
      id: payload.sub,
      email: payload.email,
    };
  }
}
