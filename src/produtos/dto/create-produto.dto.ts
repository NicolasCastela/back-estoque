import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class CreateProdutoDto {
  @IsString()
  nome: string;

  @IsNumber()
  @IsNotEmpty()
  valor: number;

  @IsString()
  marca: string;

  @IsString()
  categoria: string;

  @IsNumber()
  @IsNotEmpty()
  cod_prod: number;

  @IsString()
  autor: string;
}
