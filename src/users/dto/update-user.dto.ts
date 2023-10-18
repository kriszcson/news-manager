import { PartialType } from '@nestjs/mapped-types';
import { User } from '../user';

export class UpdateUserDto extends PartialType(User) {}
