import {
  BadRequestException,
  HttpCode,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async singIn(
    email: string,
    password: string,
  ): Promise<{ token: string; email: string; name: string }> {
    const user = await this.usersService.findforLogin(email);
    const passwordHashed = await bcrypt.compare(password, user.password);
    if (passwordHashed) {
      const payload = { email: user.email, sub: user.id, name: user.name };
      return {
        token: this.jwtService.sign(payload),
        email: user.email,
        name: user.name,
      };
    }
    throw new UnauthorizedException('Cheque suas credenciais', {
      cause: new Error('Senha ou email incorretos'),
      description: 'Cheque suas credenciais',
    });
  }
}
