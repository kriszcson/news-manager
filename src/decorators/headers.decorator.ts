import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { JwtPayload } from 'src/auth/jwt-strategy';
import { User } from 'src/users/user';
export class Headers {
  user: User;

  constructor(user: User) {
    this.user = user;
  }
}

export const HeadersDecorator = createParamDecorator(
  (data, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const token = request.headers['access_token'];

    const base64Payload = token.split('.')[1];
    const payloadBuffer = Buffer.from(base64Payload, 'base64');
    const updatedJwtPayload: JwtPayload = JSON.parse(payloadBuffer.toString());
    return new Headers({ ...updatedJwtPayload });
  },
);
