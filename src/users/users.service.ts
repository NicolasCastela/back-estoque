import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  async create(createUserDto: CreateUserDto) {
    const saltOrRounds = 10;
    const passhash = await bcrypt.hash(createUserDto.password, saltOrRounds);
    console.log('senha gerada dps do bcrypt', passhash);
    console.log('senha do usuario', createUserDto.password);
    return this.prisma.user.create({
      data: {
        ...createUserDto,
        password: passhash,
      },
    });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id },
      data: {
        ...updateUserDto,
      },
    });
  }

  remove(id: number) {
    return this.prisma.user.delete({
      where: { id },
    });
  }
  findforLogin(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }
}
