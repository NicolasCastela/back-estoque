import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { EstoqueService } from './estoque.service';
import { CreateEstoqueDto } from './dto/create-estoque.dto';
import { UpdateEstoqueDto } from './dto/update-estoque.dto';

@Controller('estoque')
export class EstoqueController {
  constructor(private readonly estoqueService: EstoqueService) {}

  @Post()
  create(@Body() createEstoqueDto: CreateEstoqueDto) {
    return this.estoqueService.create(createEstoqueDto);
  }

  @Get()
  findAll() {
    return this.estoqueService.findAll();
  }

  @Get('findOne/:id')
  findOne(@Param('id', new ParseIntPipe()) id: number) {
    return this.estoqueService.findOne(id);
  }

  @Get(':id')
  getWithIncludeEstoque(@Param('id', new ParseIntPipe()) id: number) {
    return this.estoqueService.getWithIncludeEstoque(id);
  }

  @Patch(':id/:value')
  update(
    @Param('id', new ParseIntPipe()) id: number,
    @Param('value', new ParseIntPipe()) value: number,
    @Body() updateEstoqueDto: UpdateEstoqueDto,
  ) {
    return this.estoqueService.update(id, updateEstoqueDto, value);
  }
}
