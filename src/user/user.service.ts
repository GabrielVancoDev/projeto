import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  create(data: any) {
    return this.userModel.create(data);
  }

  findAll() {
    return this.userModel.findAll();
  }

  findOne(id: number) {
    return this.userModel.findByPk(id);
  }

  async findByEmail(email: string) {
    return this.userModel.findOne({
      where: { email },
      attributes: ['id', 'email', 'password'],
    });
  }
  update(id: number, data: any) {
    return this.userModel.update(data, { where: { id } });
  }

  remove(id: number) {
    return this.userModel.destroy({ where: { id } });
  }
}
