import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  name?: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;
}
