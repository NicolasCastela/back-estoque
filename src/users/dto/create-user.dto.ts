import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  name?: string;

  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;
}
