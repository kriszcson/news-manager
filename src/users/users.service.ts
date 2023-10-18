import { Inject, Injectable, UseGuards } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose';
import { AuthGuard } from '@nestjs/passport';
import { User } from './user';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_MODEL')
    private userModel: Model<User>,
  ) {}

  create(createUserDto: User) {
    return this.userModel.create(createUserDto);
  }

  findAll() {
    return this.userModel.find();
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.userModel.findOne({ email });
    return user;
  }

  async findOne(_id: string) {
    return this.userModel.findById(_id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userModel.findByIdAndUpdate(id, updateUserDto);
  }

  remove(id: string) {
    return this.userModel.findByIdAndDelete(id);
  }

  @UseGuards(AuthGuard('jwt'))
  async getProfile(user: User) {
    return user;
  }
}
