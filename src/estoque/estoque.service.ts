import { Injectable } from '@nestjs/common';
import { CreateEstoqueDto } from './dto/create-estoque.dto';
import { UpdateEstoqueDto } from './dto/update-estoque.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProdutoDto } from 'src/produtos/dto/create-produto.dto';

@Injectable()
export class EstoqueService {
  constructor(private prisma: PrismaService) {}
  create(createEstoqueDto: CreateEstoqueDto) {
    return this.prisma.estoque.create({
      data: createEstoqueDto,
    });
  }

  findAll() {
    return this.prisma.estoque.findMany();
  }

  findOne(id: number) {
    return this.prisma.estoque.findUnique({
      where: { id },
    });
  }
  async update(id: number, updateEstoqueDto: UpdateEstoqueDto, value: number) {
    const buscaFirst = await this.prisma.estoque.findUnique({
      where: { id },
    });
    const quantidade =
      typeof buscaFirst.quantidade === 'string'
        ? parseInt(buscaFirst.quantidade)
        : buscaFirst.quantidade;

    const updatedEstoque = await this.prisma.estoque.update({
      where: { id },
      data: {
        quantidade: buscaFirst.quantidade - value,
      },
    });
    console.log(updatedEstoque);
    return updatedEstoque;
  }

  async getWithIncludeEstoque(cod_prod: number) {
    const produtoComEstoque = await this.prisma.produto.findUnique({
      where: { cod_prod },
      include: {
        estoque: true,
      },
    });
    if (!produtoComEstoque) {
      throw new Error('Produto não encontrado');
    }
    return produtoComEstoque;
  }
}
