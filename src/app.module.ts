import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { Prisma\]Module } from './prisma/]/prisma/].module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [UsersModule, Prisma, PrismaModule\]Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
