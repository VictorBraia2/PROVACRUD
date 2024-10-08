import { IsString, IsNumber, IsOptional, IsPositive, IsInt, Min, Max, Length } from 'class-validator';

export class CreateImovelDto {
  @IsString()
  @Length(5, 100)
  titulo: string; 

  @IsString()
  @Length(10, 500)
  descricao: string; 

  @IsNumber()
  @IsPositive()
  preco: number; 

  @IsString()
  endereco: string; 

  @IsNumber()
  @IsPositive()
  area: number; 

  @IsInt()
  @Min(1)
  @Max(20)
  quartos: number; 
  @IsInt()
  @Min(1)
  @Max(10)
  banheiros: number; 

  @IsInt()
  @Min(0)
  vagasGaragem: number; 

  @IsString()
  tipo: string;

  @IsOptional()
  @IsInt()
  @Min(1900)
  @Max(new Date().getFullYear())
  anoConstrucao?: number; 

  @IsOptional()
  @IsString()
  condominio?: string; 

  @IsOptional()
  @IsString()
  cep?: string;
}