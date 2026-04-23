import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async register(data: any) {
    const hash = await bcrypt.hash(data.password, 10);

    const user = await this.userService.create({
      ...data,
      password: hash,
    });

    return user;
  }

  async login(data: any) {
    const user = await this.userService.findByEmail(data.email);

    if (!user) {
      throw new UnauthorizedException('Usuário não encontrado');
    }

    if (!user.password) {
      throw new UnauthorizedException('Usuário sem senha cadastrada');
    }

    const isMatch = await bcrypt.compare(data.password, user.password);

    if (!isMatch) {
      throw new UnauthorizedException('Senha inválida');
    }

    return {
      access_token: this.jwtService.sign({ sub: user.id }),
    };
  }
}
