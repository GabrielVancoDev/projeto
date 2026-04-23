import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { UserModule } from './user/user.module';
import { ClientModule } from './client/client.module';
import { AuthModule } from './auth/auth.module';

import { User } from './user/user.model';
import { Client } from './client/client.model';

// Configuração do banco de dados
@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nestdb',
      models: [User, Client],
      autoLoadModels: true,
      synchronize: true,
    }),
// Modulos são para separar as rotas de cada modulo
    UserModule,
    ClientModule,
    AuthModule, // Utilize apenas este AuthModule para evitar conflitos
  ],
  controllers: [AppController], 
  providers: [AppService], 
})
export class AppModule {}
