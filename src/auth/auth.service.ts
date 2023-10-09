import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserDTO } from 'src/user/user.dto';

@Injectable()
export class AuthService {
  users = [
    {
      id: '1',
      email: 'abelkrisztian7@gmail.com',
      firstName: 'Krisztián',
      lastName: 'Ábel',
    },
  ];

  constructor(private jwtService: JwtService) {}

  generateJwt(payload) {
    return this.jwtService.sign(payload);
  }

  async signIn(user: UserDTO) {
    if (!user) {
      throw new BadRequestException('Unauthenticated');
    }

    const userExists = await this.findUserByEmail(user.email);

    if (!userExists) {
      return this.registerUser(user);
    }

    return this.generateJwt({
      sub: userExists.id,
      email: userExists.email,
    });
  }

  async registerUser(user: UserDTO) {
    //TODO: implement
  }

  async findUserByEmail(email: string) {
    /*   const user = await this.userService.findOne({ email})  */
    const user = this.users.find((user) => user.email === email);
    if (!user) {
      return null;
    }

    return user;
  }
}
