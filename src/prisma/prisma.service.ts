import {
  Injectable,
  OnModuleInit,
  OnModuleDestroy,
  INestApplication,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  async onModuleInit() {
    await this.$connect();
  }

  onModuleDestroy() {
    this.$disconnect();
  }

  enableShutDownHooks(app: INestApplication) {
    // Implemente qualquer lógica de shutdown adicional aqui
    process.on('SIGTERM', async () => {
      await this.onModuleDestroy();
      await app.close();
      process.exit(0);
    });
  }
}
