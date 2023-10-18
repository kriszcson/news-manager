import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserDTO } from 'src/user/user.dto';
import { GoogleUser } from './google/google.user';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UsersService,
  ) {}

  generateJwt(payload) {
    return this.jwtService.sign(payload);
  }

  async signIn(user: GoogleUser) {
    if (!user) {
      throw new BadRequestException('Unauthenticated');
    }

    const userExists = await this.userService.findByEmail(user.email);
    if (userExists) {
      const payload = {
        email: userExists.email,
        name: userExists.name,
        imageUrl: user.picture,
      };
      return this.jwtService.sign(payload);
    }

    const newUser = await this.userService.create({
      name: user.lastName + ' ' + user.firstName,
      email: user.email,
      imageUrl: user.picture,
    });
    const payload = {
      name: newUser.name,
      email: newUser.email,
      imageUrl: newUser.imageUrl,
    };
    return this.jwtService.sign(payload);
  }
}
