import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name?: string;

  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;
}
