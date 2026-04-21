import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ClientModule } from './client/client.module';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { User } from './user/user.model';
import { Client } from './client/client.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql', // ou 'mysql' | 'sqlite' | 'mariadb' | 'mssql'
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nestdb',
      models: [User, Client], // ← liste todos os models aqui
      // autoSync: true, // cria as tabelas automaticamente (só dev)
      autoLoadModels: true,
      synchronize: true,
    }),
    UserModule,
    ClientModule,
  ],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService],
})
export class AppModule {}
