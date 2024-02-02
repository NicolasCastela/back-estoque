import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async singIn(email: string, password: string): Promise<{ token: string }> {
    const user = await this.usersService.findforLogin(email);
    if (user.password === password) {
      const payload = { email: user.email, sub: user.id };
      return {
        token: this.jwtService.sign(payload),
      };
    }
    throw new UnauthorizedException('Please check your login credentials');
  }
}
