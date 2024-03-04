import { Injectable } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProdutosService {
  constructor(private prisma: PrismaService) {}
  create(createProdutoDto: CreateProdutoDto) {
    return this.prisma.produto.create({
      data: createProdutoDto,
      include: { estoque: true },
    });
  }

  findAll() {
    return this.prisma.produto.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      include: { estoque: true },
    });
  }

  findOne(cod_prod: number) {
    return this.prisma.produto.findUnique({
      where: { cod_prod },
      include: { estoque: true },
    });
  }

  update(id: number, updateProdutoDto: UpdateProdutoDto) {
    return this.prisma.produto.update({
      where: { id },
      data: updateProdutoDto,
    });
  }

  remove(id: number) {
    return this.prisma.produto.delete({
      where: {
        id,
      },
    });
  }
}
