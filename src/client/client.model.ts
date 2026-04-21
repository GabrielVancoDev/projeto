import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Client extends Model {
  @Column
  nome_fantasia: string;

  @Column
  razao_social: string;

  @Column
  cnpj: string;

  @Column
  email: string;

  @Column
  telefone: string;
}
