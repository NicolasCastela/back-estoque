import { Global, Module } from '@nestjs/common';
import { EstoqueService } from './estoque.service';
import { EstoqueController } from './estoque.controller';

@Global()
@Module({
  controllers: [EstoqueController],
  providers: [EstoqueService],
})
export class EstoqueModule {}
