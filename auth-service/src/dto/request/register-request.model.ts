import { IsEmail, IsEnum, IsString } from 'class-validator';
import { UserType } from '../../models/user-type.model';

export class RegisterRequest {
  @IsEmail()
  email: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  phoneNumber: string;

  @IsEnum(UserType)
  userType: UserType;

  @IsString()
  password: string;
}