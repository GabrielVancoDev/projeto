import { IsOptional, IsEmail } from 'class-validator';

export class UpdateClientDto {
  @IsOptional()
  nome_fantasia?: string;

  @IsOptional()
  razao_social?: string;

  @IsOptional()
  cnpj?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  telefone?: string;
}
