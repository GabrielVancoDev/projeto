import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateClientDto {
  @IsNotEmpty()
  nome_fantasia: string;

  @IsNotEmpty()
  razao_social: string;

  @IsNotEmpty()
  cnpj: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  telefone: string;
}
